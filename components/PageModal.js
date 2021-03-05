import {Modal, Backdrop, Fade } from "@material-ui/core";

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
                { children }
            </Fade>
        </Modal>
    );
}