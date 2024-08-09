
import './styles.css'
import Button from '../button/index'

export default function Header() {
    return (
        <header>
            <h1>Unyfood</h1>
            <nav>
                <ul>
                    <li>Categorias</li>
                    <li>Restaurantes</li>
                    <li>Informações</li>
                    <li>Cadastre-se</li>
                    <li>
                        <Button name="Entrar" />
                    </li>
                </ul>
            </nav>
        </header>
    );
}