// Importo lo style del footer
import footerStyle from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <footer className={footerStyle.footerSec}>
                <div>
                    Tutti gli articoli contenuti in questo Sito sono falsi (almeno finché non si avverano) e sono stati redatti a scopo esclusivamente umoristico.
                </div>
            </footer>
        </>
    );
}

export default Footer;