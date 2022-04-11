import styled from "styled-components";
import Button from "../UI/Button";

const ModalDesign = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  max-width: 90%;
  border-radius: 5px;
  background-color: #fff;
  color: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  overflow: hidden;

  & h2 {
    padding: 10px 20px;
    font-size: 40px;
    background-color: #8e44ad;
  }
  & p {
    color: #333;
    padding: 10px 20px;
    padding-bottom: 50px;
    font-size: 20px;
  }
`;
const Modal = (props) => {
  const hideModal = () => {
    props.valid(true);
  };
  return (
    <ModalDesign>
      <h2>{props.errorText.title}</h2>
      <p>{props.errorText.message}</p>
      <Button onClick={hideModal}>Okay</Button>
    </ModalDesign>
  );
};
export default Modal;
