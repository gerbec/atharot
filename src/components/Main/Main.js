import styled, {keyframes, ThemeProvider} from 'styled-components';
import theme from '../../styles/themeStyledComponents';
import React from 'react';

// BASIC STYLES
const Etiqueta = styled.div`
    width: 64px;
    height: 64px;
    background-color: #5500ff;
    border-radius: 50%;
    margin: auto;
`;

const EtiquetaConProps = styled.div`
    width: ${(props) => (props.ovalo ? '128px' : '64px')};
    height: 64px;
    background-color: #5500ff;
    border-radius: 50%;
    margin: auto;
    border: none;
`;

const EtiquetaConPropsConValor = styled.div`
    width: ${(props) => (props.ovalo ? '128px' : '64px')};
    height: 64px;
    background-color: ${(props) => (props.propiedad ? 'blue' : 'red')};
    border-radius: 50%;
    margin: auto;
    border: ${(props) => (props.borde ? '3px solid #000' : 'none')};
`;

const Title = styled.h3`
    font-weight: bold;
`;
const Texto = styled.p`
    font-size: 20px;
    margin: 16px 0px;
`;

const AclaracionSuperImportante = styled.p`
    color: red;
`;

const LinkSuperCopado = styled.a`
    color: blue;
    display: block;
    font-size: 14px;
`;
const ConsoleTag = styled.div`
    background-color: #333;
    color: #fff;
    padding: 8px;
    border-radius: 4px;
`;

const Step = styled.div`
    margin: 52px 0px;
    background-color: #fff;
    border-radius: 8px;
    padding: 16px 32px 32px;
    box-shadow: 0px 0px 5px 1px #00000033;
`;

const Container = styled.div`
    width: 800px;
    margin: auto;
    font-family: Arial, Helvetica, sans-serif;
`;
// EXTENDING STYLES

const Button = styled.button`
    color: #5500ff;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #5500ff;
    border-radius: 3px;
`;

const ButtonSecundario = styled(Button)`
    background-color: #5500ff;
    color: #fff;
`;

const ButtonDesactivado = styled(ButtonSecundario)`
    opacity: 0.5;
    pointer-events: 'none';
`;

// animación
const gira = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const DaVueltas = styled.div`
    width: 64px;
    height: 64px;
    background-color: red;
    animation: ${gira} 1s linear infinite;
`;

// THEME

const ConTheme = styled.p`
    color: ${(props) => props.theme.colors.primary};
`;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Step>
                    <Title>¿Que es styled components?</Title>
                    <Texto>
                        Es una libreria que nos permite crear un componente al mismo tiempo que
                        definimos sus estilos a partir de cualquier etiqueta.
                    </Texto>
                </Step>
                <Step>
                    <Title>Como lo instalamos ? </Title>
                    <ConsoleTag>npm install --save styled-components</ConsoleTag>
                    <Texto>
                        Además de esto nos permite escribir CSS como nos dicto el gran oraculo W3C.
                    </Texto>
                </Step>

                <Step>
                    <Title>Definimos un nuevo componente y le damos estilos.</Title>
                    <Etiqueta></Etiqueta>
                </Step>
                <Step>
                    <Title>Integrando props</Title>
                    <EtiquetaConProps ovalo></EtiquetaConProps>
                    <Title>¿Podemos darle props con un valor y cambiar su estado visual?</Title>
                    <EtiquetaConPropsConValor propiedad={false}></EtiquetaConPropsConValor>
                    <Title>¿Mas de una? </Title>
                    <Texto>Sí todas las que quieras</Texto>
                    <EtiquetaConProps propiedad={false} borde={true}></EtiquetaConProps>
                </Step>

                <Step>
                    <AclaracionSuperImportante>
                        No se olviden de la semantica !! -.- y la accesibilidad que proporciona cada
                        etiqueta
                    </AclaracionSuperImportante>
                    <a alt="esto es un link" href="#">
                        esto es un link
                    </a>
                    <LinkSuperCopado alt="esto es un link" href="#">
                        esto es un link
                    </LinkSuperCopado>
                </Step>

                <Step>
                    <Title>Como extender estilos de un componente predeterminado</Title>
                    <Texto>
                        Imaginemos que tenemos varios botones pero queremos mantener nuestra guia de
                        estilos como por ejemplo activado y desactivado que si bien tienen muchas
                        cosas en común tienen diferentes colores, pero todos tienen algo en común,
                        para eso utilizamos esta técnica que se llama <b>Extending Styles</b> y de
                        esa manera no crear codigo ni componentes de más.
                    </Texto>

                    <Button>Boton generico</Button>
                    <ButtonSecundario>Boton secundario</ButtonSecundario>
                    <ButtonDesactivado>Boton Desactivado</ButtonDesactivado>

                    <Texto>
                        Tengamos en cuenta que esto tambien podemos hacerlo desde las props, pero
                        dependerá del uso que le demos y el cual pensemos a la hora de desarrolla
                        nuestra interfaz.
                    </Texto>
                </Step>

                <Step>
                    <Title>ANIMACIONES!!!!!! :P XD =)</Title>
                    <Texto>
                        hay animaciones de muchos tipos y se pueden combinar con lo todo lo anterior
                    </Texto>
                    <Texto>
                        para poder utilizar animaciones tienen que importar {keyframes} en:
                    </Texto>
                    <ConsoleTag>import styled, keyframes from 'styled-components';</ConsoleTag>
                    <DaVueltas></DaVueltas>
                    <Texto> no se envicien</Texto>
                </Step>

                <Step>
                    <Title>Utilizando Theme's</Title>
                    <Texto>
                        Esta tecnica esta buena para tomar velocidad al igual que utilizar global
                        styles, como ejepmlo pueden revisar el repo de aerolab pero veamos un ejmplo
                        a continuación.
                    </Texto>
                    <Texto>Para utilizarlo debemos llamarlo tambien en:</Texto>
                    <ConsoleTag>import ThemeProvider from 'styled-components';</ConsoleTag>

                    <ThemeProvider theme={theme}>
                        <ConTheme>
                            este es un texto con theme. No hace falta insertarlo en cada componente
                            ya que el ThemeProvider funciona como un high order component por lo
                            cual tenemos la ventaja de declararlo en nuestro archivo de inicio
                            _document o como nosotros en views disponemos de varios repos con
                            diferentes estilos podriamos declararlo por page y funcionaria
                            exactamente igual solo deberiamos definir cada theme para cada template.
                            esto nos va a dar mucha velocidad ya que no deberemos reescribir estilos
                            sumado a esto podremos generar que nuestra libreria views sea aun mas
                            agil ya que podremos utilizar una definición de componente en diferentes
                            proyectos los cuales cada uno poseeran su propio theme
                        </ConTheme>
                    </ThemeProvider>
                </Step>
            </Container>
        );
    }
}

export default Main;
