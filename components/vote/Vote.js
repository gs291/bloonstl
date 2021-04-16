import styled from "@emotion/styled";
import {useEffect, useState} from "react";
import {Button, Collapse, Grid, Modal} from "@material-ui/core";

import VoteTower from "./VoteTower";
import VoteSubmit from "./VoteSubmit";
import VoteOptional from "./VoteOptional";
import VoteAbilities from "./VoteAbilities";
import {parseForm, sendVote} from "../../lib/utils/utils";
import VoteModal from "./VoteModal";

const VoteForm = styled.form`
  width: 100%;
  height: 100%;
  margin-top: 2em;
  margin-bottom: 2em;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VoteContainer = styled.div`
  background-color: #444;
  border-radius: 20px;
  padding: 3em 2em;
`;

const VoteButtonContainer = styled.div`
  background-color: #444;
  border-radius: 20px;
`;

export default function Vote({towers, tower}) {
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
                      spacing={6}
                      direction="column"
                      justify="center"
                >
                    <Grid item>
                        <VoteContainer>
                            <VoteTower towers={towers} tower={tower} />
                        </VoteContainer>
                    </Grid>

                    <Grid item>
                        <VoteContainer>
                            <VoteOptional title="Want to vote on Ability Paths?" collapse={collapsePaths} handleCollapse={handleCollapsePaths} />
                            <Collapse in={collapsePaths}>
                                <VoteAbilities />
                            </Collapse>
                        </VoteContainer>
                    </Grid>

                    <Grid item>
                        <VoteButtonContainer>
                            <VoteSubmit progress={progress}/>
                        </VoteButtonContainer>
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
