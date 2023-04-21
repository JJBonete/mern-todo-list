import "./App.scss"
import { ShowTodoList } from "./components/showTodoList";
import { BrowserRouter, Route } from "react-router-dom";
import { CreateTodo } from "./components/createTodo";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
                <Route exact path="/" component={ShowTodoList} />
                <Route path="/create-todo" component={CreateTodo} />
            </BrowserRouter>
    </div>
  );
}

export default App;
