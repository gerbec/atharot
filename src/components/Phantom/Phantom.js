import styled, {keyframes, ThemeProvider} from 'styled-components';
import React from 'react';
import {CircleEye} from '..';

const phantomWalk = keyframes`
  from {
    background-position: 0px;
  }

  to {
    background-position: 26px 0px;
  }
`;
const Caracter = styled.div`
    margin: 8px;
    width: 90px;
    overflow: hidden;
`;
const PhantomHead = styled.div`
    border-top-left-radius: 90px;
    border-top-right-radius: 90px;
    height: 45px;
    width: 90px;
    background-color: ${(props) => props.colorized};
    margin: 0px auto;
`;
const PhantomBody = styled.div`
    height: 30px;
    width: 90px;
    margin: 0px auto;
    background-color: ${(props) => props.colorized};
`;
const PhantomFooter = styled.div`
    width: 150px;
    height: 27px;
    background: ${(props) =>
        props.colorized
            ? `linear-gradient(${props.colorized} 40%, rgba(255, 255, 255, 0) 0px) 0px 0px, radial-gradient(circle closest-side,  ${props.colorized} 100%, rgba(0, 0, 0, 0) 0) 100px 0px transparent`
            : `linear-gradient(#e05c5c 40%, rgba(255, 255, 255, 0) 0px) 0px 0px, radial-gradient(circle closest-side, #e05c5c 100%, rgba(0, 0, 0, 0) 0) 100px 0px transparent`};
    background-size: 26px 26px;
    background-repeat: repeat-x;
    animation: ${phantomWalk} 0.5s linear infinite;
`;
const Eyes = styled.div``;

const Phantom = (props) => {
    const {chColor} = props;
    return (
        <Caracter>
            <PhantomHead colorized={chColor}>
                <Eyes>
                    <CircleEye></CircleEye>
                    <CircleEye></CircleEye>
                </Eyes>
            </PhantomHead>
            <PhantomBody colorized={chColor}></PhantomBody>
            <PhantomFooter colorized={chColor}></PhantomFooter>
        </Caracter>
    );
};

export default Phantom;
