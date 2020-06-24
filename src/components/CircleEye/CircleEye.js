import styled, {keyframes, ThemeProvider} from 'styled-components';
import React from 'react';

const Eye = styled.div`
    margin: auto;
    width: 20px;
    height: 20px;
    background-color: #fff;
    overflow: hidden;
    border-radius: 50%;
    display: inline-block;
    margin: 22px 5px;
`;

const Pupile = styled.div`
    width: 4px;
    height: 4px;
    background-color: #000;
    border-radius: 50%;
    margin: 8px 4px;
`;

const CircleEye = () => {
    return (
        <Eye>
            <Pupile></Pupile>
        </Eye>
    );
};

export default CircleEye;
