import styled from "styled-components";
import TodoItem from "../TodoItem/todoitem";
const Todolist = () => {
    return (
        <TodolistBlock>
            <TodoItem text="프로젝트 생성하기" done={true} />
            <TodoItem text="컴포넌트 스타일링하기" done={true} />
            <TodoItem text="Context 생성하기" done={false} />
            <TodoItem text="기능 구현하기" done={false} />
        </TodolistBlock>
    );
};
export default Todolist;

const TodolistBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;
