import "./App.scss";
import PrivateRoute from "./PrivateRoute";
import { ShowTodoList } from "./components/showTodoList";
import { BrowserRouter, Route } from "react-router-dom";
import { CreateTodo } from "./components/createTodo";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { AuthProvider, AuthContext } from "./AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={ShowTodoList} />{" "}
          <PrivateRoute
            path="/create-todo"
            component={CreateTodo}
            authenticated={user !== null}
          />{" "}
          <Route path="/signup" component={SignUp} />{" "}
          <Route path="/signin" component={SignIn} />{" "}
        </BrowserRouter>{" "}
      </div>{" "}
    </AuthProvider>
  );
}

export default App;
