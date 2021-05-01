import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Button, Fade, Modal, Typography} from "@material-ui/core";

import ProsCons from "../tower/ProsCons";
import RankTitle from "../tower/RankTitle";
import FixedDivider from "../divider/FixedDivider";
import siteColors from "../../lib/utils/siteColors";
import {parseTowerLink} from "../../lib/utils/utils";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const Check = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  border-radius: 20px;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  background-color:  ${props => props["data-dm"] ? siteColors.page.dark : siteColors.page.light};

  min-height: 200px;
  max-height: 90vh;
  padding: ${props => props["data-m"] ? "2em 1em" : "3em 2em"};
  margin: 5%;
  
  
  &:focus {
    outline: none;
  }
`;

const ModalBodyContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

const ModalButton = styled(Button)`
  margin: 0 10px;
  padding: 1.5em 3em;
  
  border-radius: 20px;
  color: inherit;
  border: 1px solid ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
`;

const SubmitButton = styled(ModalButton)`
  &:hover {
    background-color: ${props => props["data-dm"] ? siteColors.vote.modal.submit.dark : siteColors.vote.modal.submit.light};
  }
`;

const CancelButton = styled(ModalButton)`
  &:hover {
    background-color: ${props => props["data-dm"] ? siteColors.vote.modal.cancel.dark : siteColors.vote.modal.cancel.light}; 
  }
`;

const TowerTier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorContainer = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const ErrorTitle = styled(Typography)`
  margin-bottom: 20px;
`;

export default function VoteModal({className, form, modalStatus, handleSubmit, handleClose}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    const Error = ({error}) => (
        <>
            <ErrorContainer>
                <ErrorTitle variant="h3" color="error">
                    Error
                </ErrorTitle>
                <Typography variant="h4" color="error">
                    {error}
                </Typography>
            </ErrorContainer>
        </>
    );

    const Tower = ({tower, tier}) => (
        <>
                <Typography variant={mobile ? "h4" : "h3"} color="inherit">
                    {tower}
                </Typography>

            <TowerTier>
                <RankTitle rank={tier} showText={true}/>
            </TowerTier>
        </>
    );

    const Ability = ({rank, ranks, pros, cons}) => (
        <>
            <FixedDivider width={80} />
            <Typography variant={mobile ? "h4" : "h3"} color="inherit">
                Ability Tier
            </Typography>
            <RankTitle rank={rank} ranks={ranks} />
            {(pros || cons) && (
                <>
                    <FixedDivider width={80} />
                    <ProsCons pros={pros} cons={cons} />
                </>
            )}
        </>
    );

    return (
        <>
            <Check
                open={modalStatus}
                onClose={handleClose}
                className={className}
            >
                <Fade in={modalStatus} timeout={mobile ? 50 : 100}>
                    <ModalContainer data-m={mobile} data-dm={darkMode}>
                        <Typography variant={mobile ? "h3" : "h2"}>
                            Review Your Vote:
                        </Typography>
                        <FixedDivider width={100} height={2} />
                        <ModalBodyContainer>
                            <ModalBody>
                                {form.err ?
                                    <Error error={form.err} />
                                    : (
                                        <>
                                            <Tower tower={parseTowerLink(form.tower)} tier={form["tower-tier"]} />

                                            {form["ability-tier"] && (
                                                <Ability rank={form["ability-tier"]}
                                                         pros={form["pros"]}
                                                         cons={form["cons"]}
                                                         ranks={{
                                                             "top_path": form["ability-top"],
                                                             "middle_path": form["ability-middle"],
                                                             "bottom_path": form["ability-bottom"]
                                                         }}
                                                />
                                            )}
                                        </>
                                    )
                                }
                            </ModalBody>
                        </ModalBodyContainer>
                        <FixedDivider width={100} height={2} />
                        <div>
                            <CancelButton onClick={handleClose} variant="outlined" size="large" data-dm={darkMode}>
                                Cancel
                            </CancelButton>
                            {!form.err && (
                                <SubmitButton onClick={handleSubmit} variant="outlined" size="large" data-dm={darkMode}>
                                    Submit
                                </SubmitButton>
                            )}
                        </div>
                    </ModalContainer>
                </Fade>
            </Check>
        </>
    );
}