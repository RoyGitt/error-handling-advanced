import Overlay from "./Overlay";
import Modal from "./Modal";
import ReactDom from "react-dom";

const ModalWindow = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Overlay valid={props.valid} />,
        document.getElementById("overlay")
      )}
      {ReactDom.createPortal(
        <Modal
          errorText={props.message}
          valid={props.valid}
          title={props.title}
        />,
        document.getElementById("modal")
      )}
    </>
  );
};
export default ModalWindow;
