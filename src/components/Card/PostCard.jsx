// Importo lo style della card
import Button from '../Button/Button';
import postCardStyle from './PostCard.module.css';

const PostCard = () => {
    return (
        <>
            <div className={postCardStyle.card}>
                <div className={postCardStyle.image}></div>
                <div className={postCardStyle.bottom}>
                    <h3>Titolo del Post</h3>
                    <p className={postCardStyle.paragraph}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic vitae dolorum explicabo aperiam cumque sequi tempora recusandae quaerat! Incidunt assumenda praesentium dicta reiciendis temporibus eaque, sunt atque numquam est aliquam!
                    </p>
                    <Button />
                </div>
            </div>
        </>
    );
}

export default PostCard;