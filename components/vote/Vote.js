import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Collapse, Grid} from "@material-ui/core";

import VoteModal from "./VoteModal";
import VoteTower from "./VoteTower";
import VoteSubmit from "./VoteSubmit";
import VoteOptional from "./VoteOptional";
import VoteAbilities from "./VoteAbilities";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {parseForm, sendVote} from "../../lib/utils/utils";

const VoteForm = styled.form`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VoteContainer = styled.div`
  background-color: ${props => props["data-dm"] ? siteColors.vote.card.dark : siteColors.vote.card.light};
  border-radius: 20px;
`;

const PaddedVoteContainer = styled(VoteContainer)`
  padding: 3em 2em;
`;

export default function Vote({towers, tower}) {
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
        setProgress(prg => ({...prg, modalStatus: true}));
        setFormInfo(parseForm(e.target));
    }

    const handleModalSubmit = async () => {
        setProgress(prg => ({...prg, modalStatus: false}))

        let ignore = false;
        const controller = new AbortController();
        await sendVote(formInfo, controller, ignore, setProgress)
        return () => {
            controller.abort();
            ignore = true;
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
            <VoteForm onSubmit={checkSubmit}>
                <Grid container
                      spacing={4}
                      direction="column"
                      justify="center"
                >
                    <Grid item>
                        <PaddedVoteContainer data-dm={darkMode}>
                            <VoteTower towers={towers} tower={tower} />
                        </PaddedVoteContainer>
                    </Grid>

                    <Grid item>
                        <PaddedVoteContainer data-dm={darkMode}>
                            <VoteOptional title="Want to vote on Ability Paths?" collapse={collapsePaths} handleCollapse={handleCollapsePaths} />
                            <Collapse in={collapsePaths}>
                                <VoteAbilities />
                            </Collapse>
                        </PaddedVoteContainer>
                    </Grid>

                    <Grid item>
                        <VoteContainer data-dm={darkMode}>
                            <VoteSubmit progress={progress}/>
                        </VoteContainer>
                    </Grid>
                </Grid>
            </VoteForm>
            <VoteModal
                modalStatus={progress.modalStatus}
                handleClose={handleModalClose}
                handleSubmit={handleModalSubmit}
            />
        </>
    );
}
