import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom.min";
import { AuthProvider } from "./AuthContext";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./App.scss";

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
         
          <Route exact path="/" component={ShowTodoList} />
          <Route path="/create-todo" component={CreateTodo} />
        </BrowserRouter>
      </div>
    </AuthProvider>

  );
}

export default App;
