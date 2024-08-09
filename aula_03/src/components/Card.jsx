import React from "react"
import './card.css'
import Imgvazia from '../imgs/imgvazia.png'

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.img ? props.img : { Imgvazia }} />
            <p className='nomeComida'>{props.title ? props.title : "Titulo não recebido"}</p>
            <p className='description'>{props.descricao ? props.descricao : 'Descrição não recebida'}</p>
        </div>
    )
}