import React from 'react';
import styled from 'styled-components'

const ContainerFiltro = styled.div `
    border: 1px solid black;
    
    width: 1400px;
    margin: 0 auto 10px;
`

class Filtro extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            valorMin: "",
            valorMax: ""
          }
    }

    onChangeMin = (event) => {
        this.setState({valorMin: event.target.value})
      }

    onChangeMax = (event) => {
        this.setState({valorMax: event.target.value})
      }

    onClickValores = () => {
        this.props.funcao(this.state.valorMin, this.state.valorMax)
    }

    onClickReset = () => {
        this.props.funcao(0, 9999999999)
    }

    render() {
        return (
            <ContainerFiltro>
                <span>Filtro</span>
                <input type= "Number" onChange = {this.onChangeMin} placeholder = {"minimo"}/>
                <input type= "Number" onChange = {this.onChangeMax} placeholder = {"maximo"}/>
                <input type= "text"/>
                <button onClick= {this.onClickValores}>Me aperta</button>
                <button onClick= {this.onClickReset}>Reset</button>
            </ContainerFiltro>
        )
    }
}

export default Filtro