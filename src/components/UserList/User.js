import styled from "styled-components";

const ListItem = styled.li`
  background-color: #fff;
  padding: 10px 15px;
  font-size: 20px;
  border: 2px solid #333;
  border-radius: 5px;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
  & span:not(:last-of-type) {
    margin-right: 5px;
  }
`;
const User = (props) => {
  return (
    <ListItem>
      <span>{props.username}</span>
      <span>({props.age} years old)</span>
    </ListItem>
  );
};
export default User;
