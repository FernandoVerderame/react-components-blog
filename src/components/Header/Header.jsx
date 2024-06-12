// Importo lo style dell'header ed il logo del blog
import headerStyle from './Header.module.css';
import logoImage from '../../assets/images/logo.png';

const Header = () => {
    return (
        <>
            <header className={headerStyle.headerSec}>
                {/* Blog Logo */}
                <img src={logoImage} alt="logo-image" className={headerStyle.logo} />
                {/* Blog Title */}
                <h1>Lercio</h1>
            </header>
        </>
    );
}

export default Header;