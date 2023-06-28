import { Modal } from 'semantic-ui-react'

const BasicModal = ({ show, close, title, size, children }) => {

    return (
        <Modal closeIcon open={show} onClose={close} size={size} style={{ border: "1px solid #fff" }}
        >
            {title && <Modal.Header
                style={{ backgroundColor: "#151030", color: "#fff" }}
            >{title}</Modal.Header>}
            <Modal.Content
                style={{ backgroundColor: "#100d25", color: "#fff" }}
            >{children}</Modal.Content>
        </Modal>
    );
}

BasicModal.defaultProps = {
    size: "small",
};

export default BasicModal;
