import "./App.scss"
import { ShowTodoList } from "./components/showTodoList";
import { BrowserRouter, Route } from "react-router-dom";
import { CreateTodo } from "./components/createTodo";
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
     <BrowserRouter>
                <Route exact path="/" component={ShowTodoList} />
                <Route path="/create-todo" component={CreateTodo} />
            </BrowserRouter>
    </div>
=======
import { AuthProvider } from "./AuthContext";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { ShowTodoList } from "./components/showTodoList";

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
>>>>>>> Stashed changes
  );
}

export default App;
