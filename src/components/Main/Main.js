import styled from 'styled-components';
import {Blueprint, Container, Title1, Ps4Controller} from '../index';

const BodyCircleLeft = styled.div`
    width: 303px;
    height: 303px;
    border: 1px solid #fff;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 0;
`;

const BodyCircleRight = styled.div`
    width: 303px;
    height: 303px;
    border: 1px solid #fff;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
`;
const TouchPad = styled.div`
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    border: 1px solid #fff;
    height: 275px;
    width: 485.5px;
    margin: auto;
`;
const TouchPadIn = styled.div`
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
    border: 1px solid #fff;
    height: 265px;
    width: 475.5px;
    margin: 2px auto 0px auto;
`;

const ArrowsCircle = styled.div`
    width: 343px;
    height: 343px;
    border-radius: 50%;
    border: 1px solid #fff;
    position: absolute;
    left: 50px;
`;

const ButtonsCircle = styled.div`
    width: 343px;
    height: 343px;
    border-radius: 50%;
    border: 1px solid #fff;
    position: absolute;
    right: 50px;
`;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Blueprint>
                    <Ps4Controller>
                        <ArrowsCircle></ArrowsCircle>
                        <ButtonsCircle></ButtonsCircle>
                        <TouchPad>
                            <TouchPadIn></TouchPadIn>
                        </TouchPad>

                        <BodyCircleRight></BodyCircleRight>
                        <BodyCircleLeft></BodyCircleLeft>
                    </Ps4Controller>
                </Blueprint>
            </Container>
        );
    }
}

export default Main;
