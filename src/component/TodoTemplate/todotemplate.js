import styled from "styled-components";

//여기서 props로 children을 가져오는 이유
//이 컴포넌트는 스타일 관련한 템플릿 컴포넌트로 안에 자식 컴포넌트를 감싸는 역할을 함

function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;
    position: relative;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    margin: 0 auto;
    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`;
