import styled from "styled-components";

const ButtonStyle = styled.button`
  align-self: flex-end;
  font-weight: 500;
  padding: 10px 15px;
  font-size: 20px;
  background-color: #8e44ad;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
`;

const Button = (props) => {
  return (
    <ButtonStyle
      type={props.type || "button"}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </ButtonStyle>
  );
};

export default Button;
