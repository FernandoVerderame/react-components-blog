// Importo lo style della card ed il button
import postCardStyle from './PostCard.module.css';
import Button from '../Button/Button';

const PostCard = () => {
    return (
        <>
            <div className={postCardStyle.card}>
                <div className={postCardStyle.image}></div>
                <div className={postCardStyle.bottom}>
                    <h3>Napoli. Effetto Conte: boom di trapianti di capelli in città</h3>
                    <p className={postCardStyle.paragraph}>
                        Conte ha dichiarato: "Sono qui per rivoluzionare il calcio napoletano. Scordatevi il gioco offensivo, da oggi si gioca tutti dietro la linea del pallone, compreso il magazziniere".
                    </p>
                    <div className={postCardStyle.flexAuthor}>
                        <Button />
                        <author className={postCardStyle.author}>Fernando Verderame</author>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostCard;