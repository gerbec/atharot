import styled from 'styled-components';

const Title1 = styled.h1`
    font-weight: 700;
    box-sizing: border-box;
    color: ${props => (props.color ? props.color : '#000')};
    font-size: 28px;
    font-family: Lato;
    font-style: italic;
    line-height: 23px;
    margin: 0px;
    padding: 0px;
`;

export default Title1;
