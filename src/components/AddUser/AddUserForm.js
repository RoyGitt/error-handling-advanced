import { useRef } from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const FormDesign = styled.form`
  display: flex;
  flex-direction: column;
  justify-conternt: center;
  align-items: flex-start;
  font-size: 20px;
  background-color: #fff;
  color: #333;
  padding: 40px 30px;
  width: 40rem;
  max-width: 80%;
  margin: 30px auto;
  border-radius: 10px;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.4);
  & label {
    font-size: 20px;
    font-weight: 500;
    display: block;
    margin-bottom: 10px;
  }
  & label span {
    font-weight: 500;
    margin-left: 10px;
  }
  & div {
    width: 90%;
    margin-bottom: 20px;
  }
  & input {
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    padding: 5px 15px;
  }
  & button {
    font-weight: 500;
    padding: 10px 15px;
    font-size: 20px;
    background-color: #8e44ad;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Form = (props) => {
  const ageInputRef = useRef();
  const nameInputRef = useRef();

  const resetForm = () => {
    ageInputRef.current.value = "";
    nameInputRef.current.value = "";
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredAge = ageInputRef.current.value;
    const enteredUsername = nameInputRef.current.value;
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      props.valid(false);
      props.onError({
        title: "No input",
        message: "Please enter necessary details",
      });
      return;
    }
    if (+enteredAge < 1) {
      props.valid(false);
      props.onError({
        title: "Invalid Age",
        message: "Please enter age (age > 0)",
      });
      return;
    }

    const userData = {
      id: Math.random().toString(16),
      username: enteredUsername,
      age: enteredAge,
    };
    props.onAddUser(userData);
    resetForm();
  };

  return (
    <FormDesign onSubmit={addUserHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={nameInputRef} />
      </div>
      <div>
        <label htmlFor="age">
          Age<span>(Years)</span>
        </label>
        <input id="age" type="number" ref={ageInputRef} />
      </div>
      <Button type="submit" style={{ margin: "0", alignSelf: "flex-start" }}>
        Add User
      </Button>
    </FormDesign>
  );
};
export default Form;
