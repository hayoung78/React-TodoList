import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./component/TodoTemplate/todotemplate";
import TodoHead from "./component/TodoHead/todohead";
import Todolist from "./component/TodoList/todolist";
import TodoCreate from "./component/TodoCreate/tocreate";

const GlobalStyle = createGlobalStyle`
body {
  background-color: #e9ecef;
}
`;
function App() {
    return (
        <>
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <Todolist />
                <TodoCreate />
            </TodoTemplate>
        </>
    );
}

export default App;
