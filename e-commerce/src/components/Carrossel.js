import React from 'react';
import styled from 'styled-components'

const ContainerCarrossel = styled.div `
    border: 1px solid black;
    height: 400px;
    width: 1400px;
    margin: 10px auto;
`

class Carrossel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ContainerCarrossel>Eu sou o Carrossel</ContainerCarrossel>
        )
    }
}

export default Carrossel