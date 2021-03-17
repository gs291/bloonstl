import {Modal, Backdrop, Fade, Container} from "@material-ui/core";
import styled from "@emotion/styled";

const ModalContainer = styled(Container)`
  position: relative;
  top: 25%;
  height: 60%;
  background-color: #1F1F1F;
  color: white;
`;

export default function PageModal({ children, open, handleClose}) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 100,
            }}
        >
            <Fade in={open}>
                <ModalContainer maxWidth="md">
                    { children }
                </ModalContainer>
            </Fade>
        </Modal>
    );
}