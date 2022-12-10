import React from 'react'
import './squareComponent.css'

function SquareComponent(props) {
    if(props.state==='X'){
        var style={color:'#F77431'}
    }else{
        var style={color:'#BED753'}
    }
    return (
        <div className='square' style={style} onClick={props.onClick}>
          <span>{props.state}</span>
        </div>
    )
}

export default SquareComponent
