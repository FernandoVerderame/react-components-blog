// Importo lo style dell'header
import headerStyle from './Header.module.css';
import logoImage from '../../assets/images/logo.png';

const Header = () => {
    return (
        <>
            <header className={headerStyle.headerSec}>
                <img src={logoImage} alt="logo-image" className={headerStyle.logo} />
                <h1>Lercio</h1>
            </header>
        </>
    );
}

export default Header;