import styled from "styled-components";

const OverlayDesign = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5;
`;
const Overlay = (props) => {
  const hideModal = () => {
    props.valid(true);
  };
  return <OverlayDesign onClick={hideModal}></OverlayDesign>;
};

export default Overlay;
