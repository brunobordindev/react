
import Header from '../../components/header'
import Search from '../../components/search'
import Card from '../../components/card-food'
import Restaurantes from '../../components/restaurants'
import './styles.css'


import Img1 from '../../imgs/img1.png'
import Img2 from '../../imgs/img2.png'

export default function Home() {
    return (
        <div>
            <Header />
            <Search />
            <div className='container_card'>
                <Card color="#ED1C16" title="Comidas" img={Img1} />
                <Card color="#009432" title="Bebidas" img={Img2} />
            </div>
            <Restaurantes />

        </div>
    )
}