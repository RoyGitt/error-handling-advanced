import styled from "styled-components";
import User from "./User";

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 40rem;
  max-width: 80%;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.4);
`;

const UserList = (props) => {
  const content = <h3>No users to show.</h3>;
  return (
    <List userData={props.userData}>
      {props.userData.length === 0 && content}
      {props.userData.map((user) => {
        return <User key={user.id} username={user.username} age={user.age} />;
      })}
    </List>
  );
};

export default UserList;
