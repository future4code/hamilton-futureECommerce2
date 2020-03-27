import React from 'react';
import styled from 'styled-components'
import Produtos from './Produtos'

const Teste = styled.div `
    width: 500px;
    heigth: 500px;
    background-color: grey;
    position: absolute;
    z-index: 1;
`


class Carrinho extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Teste>
                 
            </Teste>
        )
    }
}

export default Carrinho