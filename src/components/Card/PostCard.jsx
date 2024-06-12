// Importo lo style della card ed il button
import postCardStyle from './PostCard.module.css';
import Button from '../Button/Button';

const PostCard = ({ p }) => {
    return (
        <>
            <div className={postCardStyle.card}>
                <div className={postCardStyle.image}>
                    <img src={p.image} alt={p.title} className={postCardStyle.img} />
                </div>
                <div className={postCardStyle.bottom}>
                    <h3>{p.title}</h3>
                    <p className={postCardStyle.paragraph}>
                        {p.content}
                    </p>
                    <div className={postCardStyle.flexAuthor}>
                        <Button />
                        <p className={postCardStyle.author}>{p.author}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCard;