import React from 'react';
import Knight from './Knight';
import Square from './Square';
import BoardSquare from './BoardSquare';
import PropTypes from 'prop-types';
import {moveKnight,canMoveKnight} from './Game';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from'react-dnd-html5-backend';


class Board extends React.Component{
    constructor(props){
        super(props);
        this.renderSquare=this.renderSquare.bind(this);
    }
    static propTypes={
        knightPosition:PropTypes.arrayOf(
        PropTypes.number.isRequired
        ).isRequired
    };
    renderSquare(i){
        const x=i%8;
        const y=Math.floor(i / 8);
        console.log("x:: "+x+"  Y:::"+y);
        const black=(x+y)%2 == 1;
        const [knightX,knightY]=this.props.knightPosition;
        const piece=(x===knightX&& y===knightY)?<Knight />:null;
        return(
        <div key={i} style={{width:'12.5%',height:'12.5%'}} >
            <BoardSquare x={x} y={y}>
            {this.renderPiece(x,y)}
            </BoardSquare>
            </div>
        );
    }
    renderPiece(x,y){
        const [knightX,knightY]=this.props.knightPosition;
        if(x===knightX&&y===knightY){
            return <Knight />;
        }
    }
handleSquareClick(toX,toY){
    if(canMoveKnight(toX,toY))
moveKnight(toX,toY);
}
    render(){
        const squares=[];
        for(let i=0;i<64;i++){
            squares.push(this.renderSquare(i));
        }
        return(
        <div style={{
            width:'800px',
            height:'600px',
            display:'flex',
            flexWrap:'wrap'
            }}>
            {squares}
            </div>
        );
    }
}
export default DragDropContext(HTML5Backend)(Board);