import './app.css'
import img1 from './imgs/img1.png'
import img2 from './imgs/img2.png'
import img3 from './imgs/img3.png'
import img4 from './imgs/img4.png'

export default function App() {
    return (
        <div>
            <header className="container_home">
                <h1>FF Infinet</h1>

                <ul >
                    <li>Home</li>
                    <li>Contato</li>
                    <li>Quem somos</li>
                </ul>
            </header>

            <h2 className='titulo'>Fast-Food Infnet</h2>

            <div className='containers_cards'>
                <div className='card'>
                    <img src={img1} />
                    <p className='nomeComida'>Titulo 1</p>
                    <p className='description'>Descriçao</p>
                </div>
                <div className='card'>
                    <img src={img2} />
                    <p className='nomeComida'>Titulo 2</p>
                    <p className='description'>Descriçao</p>
                </div>
                <div className='card'>
                    <img src={img3} />
                    <p className='nomeComida'>Titulo 3</p>
                    <p className='description'>Descriçao</p>
                </div>
                <div className='card'>
                    <img src={img4} />
                    <p className='nomeComida'>Titulo 4</p>
                    <p className='description'>Descriçao</p>
                </div>

            </div>

            <footer className='footer'>
                <p>Todos os direitos reservados - 2024</p>
            </footer>
        </div>
    )

}