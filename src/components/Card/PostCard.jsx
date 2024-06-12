// Importo lo style della card ed il button
import postCardStyle from './PostCard.module.css';
import Button from '../Button/Button';

const PostCard = ({ p }) => {
    return (
        <>
            {/* Post Card */}
            <div className={postCardStyle.card}>
                {/* Post Image */}
                <div className={postCardStyle.image}>
                    <img src={p.image} alt={p.title} className={postCardStyle.img} />
                    <div className={postCardStyle.badge}>{p.category}</div>
                </div>
                <div className={postCardStyle.bottom}>
                    {/* Post Title */}
                    <h3>{p.title}</h3>
                    {/* Post Content */}
                    <p className={postCardStyle.paragraph}>
                        {p.content}
                    </p>
                    <div className={postCardStyle.flexAuthor}>
                        {/* Button */}
                        <Button />
                        {/* Post Author */}
                        <p className={postCardStyle.author}>{p.author}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCard;