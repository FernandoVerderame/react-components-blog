// Importo lo style del main
import PostCard from '../Card/PostCard';
import mainStyle from './Main.module.css';
import posts from '../../data/posts.js';

const Main = () => {
    return (
        <>
            <main className={mainStyle.mainSec}>
                {posts.map(p => (
                    <PostCard key={p.id} p={p} />
                ))}
            </main>
        </>
    );
}

export default Main;