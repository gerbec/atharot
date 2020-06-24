import styled, {keyframes, ThemeProvider} from 'styled-components';
import theme from '../../styles/themeStyledComponents';
import React from 'react';
import {Phantom} from '../index';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    margin: auto;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #000;
    overflow: hidden;
`;

const ThreePhanthoms = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
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
                <ThreePhanthoms>
                    <Phantom chColor={'#e05c5c'}></Phantom>
                    <Phantom chColor={'#1c6aad'}></Phantom>
                    <Phantom chColor={'#e0ca5c'}></Phantom>
                </ThreePhanthoms>
            </Container>
        );
    }
}

export default Main;
