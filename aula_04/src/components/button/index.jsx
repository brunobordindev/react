import './styles.css'

export default function Button(props) {
    return (
        <button className='btn'>{props.name}</button>
    )
}