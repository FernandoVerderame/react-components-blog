// Importo lo style dell'header
import headerStyle from './Header.module.css';

const Header = () => {
    return (
        <>
            <header className={headerStyle.headerSec}>
                <h1>Il mio blog</h1>
            </header>
        </>
    );
}

export default Header;