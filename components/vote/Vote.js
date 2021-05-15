import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Collapse, Grid, Typography} from "@material-ui/core";

import VoteModal from "./VoteModal";
import VoteTower from "./VoteTower";
import VoteSubmit from "./VoteSubmit";
import VoteOptional from "./VoteOptional";
import VoteAbilities from "./VoteAbilities";
import siteColors from "../../lib/utils/siteColors";
import {parseForm, sendVote} from "../../lib/utils/utils";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const VoteForm = styled.form`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VoteSection = styled(Grid)`
  width: 100%;
`;

const VoteContainer = styled.div`
  background-color: ${props => props["data-dm"] ? siteColors.vote.card.dark : siteColors.vote.card.light};
  border-radius: 20px;
`;

const PaddedVoteContainer = styled(VoteContainer)`
  padding: 3em 2em;
`;

const Description = styled(Typography)`
  text-align: center;
  margin-bottom: 50px;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;


export default function Vote({towers, tower}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const [collapsePaths, setCollapsePaths] = useState(false);
    const handleCollapsePaths = (_) => setCollapsePaths(!collapsePaths);

    const [formInfo, setFormInfo] = useState({});
    const [progress, setProgress] = useState({
        isLoading: false,
        isSuccess: false,
        isError: false,
        modalStatus: false,
    })

    const checkSubmit = async (e) => {
        e.preventDefault()
        setFormInfo(parseForm(e.target));
        setProgress(prg => ({...prg, modalStatus: true}));
    }

    const handleModalSubmit = async () => {
        setProgress(prg => ({...prg, modalStatus: false}))

        let ignore = {"ignore": false};
        const controller = new AbortController();
        await sendVote(formInfo, controller, ignore, setProgress)
        return () => {
            controller.abort();
            ignore.ignore = true;
        };
    }

    const handleModalClose = () => setProgress(prg => ({...prg, modalStatus: false}));

    useEffect(() => {
        if (progress.isSuccess) {
            setTimeout(() => {
                setProgress(prg => ({...prg, isSuccess: false}));
            }, 5000)
        }
    }, [progress.isSuccess])

    return (
        <>
            <Description variant="h3" data-dm={darkMode}>
                With your monkey knowledge
            </Description>
            <VoteForm onSubmit={checkSubmit}>
                <Grid container
                      spacing={mobile ? 2 : 4}
                      direction="column"
                      justify="center"
                >
                    <VoteSection item>
                        <PaddedVoteContainer data-dm={darkMode}>
                            <VoteTower towers={towers} tower={tower} />
                        </PaddedVoteContainer>
                    </VoteSection>

                    <VoteSection item>
                        <PaddedVoteContainer data-dm={darkMode}>
                            <VoteOptional title="Vote on Ability Paths" collapse={collapsePaths} handleCollapse={handleCollapsePaths} />
                            <Collapse in={collapsePaths}>
                                <VoteAbilities />
                            </Collapse>
                        </PaddedVoteContainer>
                    </VoteSection>

                    <VoteSection item>
                        <VoteContainer data-dm={darkMode}>
                            <VoteSubmit progress={progress}/>
                        </VoteContainer>
                    </VoteSection>
                </Grid>
            </VoteForm>
            <VoteModal
                form={formInfo}
                modalStatus={progress.modalStatus}
                handleClose={handleModalClose}
                handleSubmit={handleModalSubmit}
            />
        </>
    );
}
