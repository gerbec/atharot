import styled, {keyframes, ThemeProvider} from 'styled-components';
import theme from '../../styles/themeStyledComponents';
import React from 'react';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    margin: auto;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #000;
    overflow: hidden;
`;

const move = keyframes`
  from {
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  }

  to {
    background-position: -2px -2px, -2px -2px, -1px 20px, -1px -1px;
  }
`;

const Floor = styled.div`
    height: 400px;
    width: 25vw;
    margin: auto;
    background-color: #000;
    background-image: linear-gradient(cyan 0px, transparent 0px),
        linear-gradient(90deg, cyan 0px, transparent 0px),
        linear-gradient(cyan 1px, transparent 1px),
        linear-gradient(90deg, cyan 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 100px 100px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    transform-style: preserve-3d;
    transform: perspective(125px) rotateX(45deg);
    animation: ${move} 0.5s linear infinite;
`;
const Square = styled.div``;
// EXTENDING STYLES

// animación

const DaVueltas = styled.div`
    width: 64px;
    height: 64px;
    background-color: red;
`;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Floor>
                    <Square></Square>
                </Floor>
            </Container>
        );
    }
}

export default Main;
