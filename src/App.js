import { useState } from "react";
import AddUserForm from "./components/AddUser/AddUserForm";
import UserList from "./components/UserList/UserList";
import ModalWindow from "./components/UI/ModalWindow";
function App() {
  const [userData, setUserData] = useState([]);
  const addUserHandler = (enteredUserData) => {
    setUserData((prevUsers) => {
      return [enteredUserData, ...prevUsers];
    });
  };
  const [valid, setValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const errorMessageHandler = (errorMessage) => {
    setErrorMessage(errorMessage);
  };
  return (
    <div className="App">
      <AddUserForm
        onAddUser={addUserHandler}
        onError={errorMessageHandler}
        valid={setValid}
      />
      <UserList userData={userData} />
      {!valid && (
        <ModalWindow
          title="Invalid Input"
          message={errorMessage}
          valid={setValid}
        />
      )}
    </div>
  );
}

export default App;
