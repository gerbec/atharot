import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#fff')};
    border: ${props => (props.color ? `1px solid ${props.color}` : `1px solid #000`)};
    border-radius: 4px;
    box-sizing: border-box;
    color: #000;
    font-size: 16px;
    margin: 0px;
    padding: 8px 24px;
    text-align: center;

    &:hover {
        border: 1px solid #0055ff;
        color: #0055ff;
    }
`;

export default Button;
