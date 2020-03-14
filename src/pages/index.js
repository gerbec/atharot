import Head from 'next/head';
import styled, {createGlobalStyle} from 'styled-components';
import {Button, Header, Footer, Main, Section, Title1} from '../components';
import Fonts from '../../utils/Fonts';

const Body = styled.body`
    background-color: '#ffffff';
    padding: 0;
    margin: 0;
`;

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Fonts();
    }

    render() {
        return (
            <>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content={
                            'user-scalable=0, initial-scale=1, ' +
                            'minimum-scale=1, width=device-width, height=device-height'
                        }
                    />
                    <meta property="og:site_name" content="Atharot" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-title" content="Atharot" />
                    <meta name="application-name" content="Atharot" />
                    <meta name="msapplication-TileColor" content="#FFFFFF" />
                    <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>

                    <title>Atharot</title>
                </Head>
                <Body>
                    <Header />
                    <Main />
                    <Footer />
                </Body>
            </>
        );
    }
}
export default index;
