import './styles.css'



export default function Card(props) {
    return (
        <div className='card_container' style={{ backgroundColor: props.color }}>
            <div className='content_card'>
                <p>{props.title}</p>
                <button>Ver opções</button>
            </div>

            <div >
                <img src={props.img}></img>
            </div>
        </div>
    )
}