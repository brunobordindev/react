import './app.css'

import img1 from './imgs/img1.png'
import img2 from './imgs/img2.png'
import img3 from './imgs/img3.png'
import img4 from './imgs/img4.png'

import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

export default function App() {
    return (
        <div>

            <Header />

            <h2 className='titulo'>Fast-Food Infnet</h2>

            <div className='containers_cards'>
                <Card img={img1} title='Feijoada' descricao='Um prato típico brasileiro' />
                <Card img={img2} title='Moqueca Camrão' descricao='Prato típico praiano' />
                <Card img={img3} title='Coca-Cola' descricao='Refrigerante' />
                <Card img={img4} title='Torta de Limão' descricao='Sobremesa' />
                <Card />
            </div>

            {/* <Footer desc='Todos os direitos reservados - 2024' /> */}
            <Footer />

        </div>
    )

}


