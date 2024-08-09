import React from "react"

export default function Footer(props) {
    return (
        <footer className='footer'>
            {/* <p>{props.desc ? props.desc : 'Desenvolvido por Bruno Bordin'}</p> */}
            <p>{props.desc || 'Desenvolvido por Bruno Bordin'}</p>
        </footer>
    )
}