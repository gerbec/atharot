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
    z-index: 100;
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Title1>Styled components</Title1>
                <Title1>
                    <a href="https://styled-components.com/">https://styled-components.com/</a>
                </Title1>
            </Container>
        );
    }
}

export default Header;
