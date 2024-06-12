// Importo lo style del main
import PostCard from '../Card/PostCard';
import mainStyle from './Main.module.css';

const Main = () => {
    return (
        <>
            <main className={mainStyle.mainSec}>
                <PostCard />
            </main>
        </>
    );
}

export default Main;