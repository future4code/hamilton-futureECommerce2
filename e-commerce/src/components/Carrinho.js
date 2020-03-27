import React from 'react';
import styled from 'styled-components'

const SecaoCarrinho = styled.div `
    width: 500px;
    height: 90%;
    border: 1px solid black;
    background-color: white;
    right: 0vw;
    bottom: 13vh;
    z-index: 1;
    position: fixed;
    text-align: left;
`

const H3 = styled.h3 `
    margin-top: 40px; 
`

class Carrinho extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <SecaoCarrinho>
                <H3>Carrinho: </H3>
                {this.props.nomeProduto.map(nome => {
                    return <p>{nome}</p>  
                })}
                <H3>Total: R${this.props.valorTotal.toFixed(2)}</H3>
            </SecaoCarrinho>
        )
    }
}

export default Carrinho