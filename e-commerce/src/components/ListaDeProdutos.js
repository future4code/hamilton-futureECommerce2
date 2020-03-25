import React from 'react';
import styled from 'styled-components'
import Produtos from './Produtos';

const ContainerListaDeProdutos = styled.div `
    display: grid;
    grid-template-rows: 1fr 1fr 1fr; 
    grid-template-columns: 1fr 1fr 1fr; 
    border: 1px solid black;
    height: 100%;
    width: 1400px;
    margin: 0 auto;
    grid-gap: 20px;
    justify-items: center;
    padding: 20px;
    box-sizing: border-box;
`

class ListaDeProdutos extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ContainerListaDeProdutos>
                <Produtos preco = {"30"}/>
                <Produtos preco = {"49"}/>
                <Produtos preco = {"59"}/>
                <Produtos preco = {"49"}/>
                <Produtos preco = {"79"}/>
                <Produtos preco = {"30"}/>
                <Produtos preco = {"49"}/>
                <Produtos preco = {"29"}/>
                <Produtos preco = {"19"}/>
            </ContainerListaDeProdutos>
        )
    }
}

export default ListaDeProdutos