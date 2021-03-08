import {Modal, Backdrop, Fade, Container} from "@material-ui/core";
import styled from "@emotion/styled";

const ModalContainer = styled(Container)`
  position: relative;
  top: 25%;
  height: 50%;
  background-color: white;
`;

export default function PageModal({ children, open, handleClose}) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <ModalContainer maxWidth="sm">
                    { children }
                </ModalContainer>
            </Fade>
        </Modal>
    );
}