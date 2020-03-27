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
            valorMax: "",
            valorInput: "",
            filtroSelect: ""
          }
    }

    onChangeMin = (event) => {
        this.setState({valorMin: event.target.value})
      }

    onChangeMax = (event) => {
        this.setState({valorMax: event.target.value})
      }

    // Transporta os valores para as funções via props
    onClickValores = () => {
        this.props.funcao(this.state.valorMin, this.state.valorMax) // Parâmetros para a função alteraValores via props no componente pai
        this.props.funcao2(this.state.valorInput) // // Parâmetro para a função alteraInput via props no componente pai (app.js)
    }

    // Faz o botão resetar os filtros
    onClickReset = () => {
        this.props.funcao(0, 9999999999)
        this.props.funcao2("")
    }

    // Define o valor do estado "valorInput" de acordo com o valor que o usuário digita
    onChangeInput = (event) => {
        this.setState({valorInput: event.target.value})  
    }

    onChangeSelect = (event) => {
        this.setState({filtroSelect: event.target.value})
    }

    passaValorSelect = () => {
        this.props.funcao3(this.state.filtroSelect)
        console.log(this.state.filtroSelect)
    }

    render() {
        return (
            <ContainerFiltro>
                <span>Filtro</span>
                <input type= "Number" onChange = {this.onChangeMin} placeholder = {"Valor mínimo"}/>
                <input type= "Number" onChange = {this.onChangeMax} placeholder = {"Valor máximo"}/>
                <input type= "text" onChange = {this.onChangeInput}/>
                <button onClick= {this.onClickValores}>Filtrar</button>
                <button onClick= {this.onClickReset}>Resetar filtros</button>

                <select value = {this.state.filtroSelect} onChange = {(this.onChangeSelect, this.passaValorSelect)}>
                    <option value = "">Ordernar: ------</option>
                    <option value = "decrescente">Ordenar: valor decrescente</option>
                    <option value = "crescente">Ordenar: valor crescente</option>
                </select>
            </ContainerFiltro>
        )
    }
}

export default Filtro