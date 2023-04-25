import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { CreateTodo } from "./components/createTodo";
import { AuthProvider, AuthContext } from "./AuthContext";
import { useContext } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { ShowTodoList } from "./components/showTodoList";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={ShowTodoList} />
          <Route
            path="/create-todo"
            component={CreateTodo}
            authenticated={user !== null}
          />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
