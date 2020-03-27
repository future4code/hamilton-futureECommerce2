import React from 'react';
import styled from 'styled-components'

const ContainerCarrossel = styled.div `
    border: 1px solid black;
    height: 500px;
    max-width: 1400px;
    min-width: 100%;
    margin: 10px auto;
    overflow: hidden;


    figure.slider-principal {
        position: relative;
        width: 500%;
        height: 500%;
        margin: 0;
        left: 0;
        animation: 20s slider infinite;
    }

    figure.slider-principal img {
        width: 20%;
        height: 60vh;
        float: left;
        background-size: cover;
    }

    @keyframes slider {
        0% { left: 0;}
        20% { left: 0;}
        25% { left: -100%;}
        45% {left: -100%;}
        50% { left: -200%;}
        70% {left: -200%;}
        75% {left: -300%;}
        95% {left: -300%;}
        100% {left: -400%}
    }
    
`

const Imagem = styled.img `
    height: 100px;
    width: 100px;
`

class Carrossel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ContainerCarrossel>
                <figure className="slider-principal">
                    <Imagem src= {require("../Imagens/carrossel1.jpg")} />
                    <Imagem src= {require("../Imagens/carrossel2.jpg")} />
                    <Imagem src= {require("../Imagens/carrossel3.jpg")} />
                    <Imagem src= {require("../Imagens/Camiseta1.png")} />
                    <Imagem src= {require("../Imagens/Camiseta2.png")} />
                </figure>
            </ContainerCarrossel>
        )
    }
}

export default Carrossel