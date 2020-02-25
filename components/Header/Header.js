import styled from 'styled-components';
import {Title1} from '../index';

const Container = styled.header`
    align-items: center;
    background-color: #fff;
    border-bottom: 2px solid #000;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 24px;
    position: sticky;
    top: 0px;
    width: 100%;
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Title1>Atharot</Title1>
                <Title1>AAG</Title1>
            </Container>
        );
    }
}

export default Header;
