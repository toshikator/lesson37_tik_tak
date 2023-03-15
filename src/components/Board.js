import React, {Component} from 'react';
import Square from "./Square";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state= {
            squares: Array(9).fill(null),
            isNext: true // true => 'X', false => 'O'
        }
    }

    fillSquare = (index) => {
        let temp  = [...this.state.squares];
        temp[index] = this.state.isNext? 'X' : 'O';
        this.setState({
            squares: temp,
            isNext: !this.state.isNext
        })
    }

    renderSquare = index => {
        return(
                <Square value={this.state.squares[index]}
                        fillSquare={this.fillSquare} index={index}/>
            )
    }

    render() {
        let status = `Next player: ${this.state.isNext? 'X' : 'O'}`
        return (
            <div>
                <div className={'status'}>{status}</div>
                <div className={'board-row'}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className={'board-row'}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={'board-row'}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;