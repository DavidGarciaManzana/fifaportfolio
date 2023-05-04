import React from 'react'
import styles from '@/pages/Player/Player.module.css'

function Player({
                    className = '',
                    functionAfterAnimation = null,
                    picture,
                    position,
                    animationEnd,
                    player, itsDavid = false,
                    ...delegated
                }) {
    const playerRef = React.useRef(null);
    const audioRef = React.useRef(null);
    const [lastLittlePerk, setLastLittlePerk] = React.useState(false);

    function playSound() {
        audioRef.current.play();
    }

    React.useEffect(() => {
        const player = playerRef.current;
        player.addEventListener('transitionstart', playSound);

        return () => {
            player.removeEventListener('transitionstart', playSound);
        };
    }, [animationEnd])
    let atTheEnd = () => {
        if (typeof functionAfterAnimation === "function"){
            functionAfterAnimation()
        }
        if (itsDavid) {
            setLastLittlePerk(true);
        }
    }
    return (
        <div onTransitionEnd={atTheEnd} ref={playerRef}
             className={`${styles.playerContainer} ${animationEnd ? styles[player] : styles.playerhidden} ${className} ${player === 'david_real_initial' && (animationEnd && styles.david_real_final)} `} {...delegated} >
            {player !== 'david_real_initial' ? (<audio ref={audioRef}>
                <source src='whoosh.mp3' type="audio/mp3"/>
            </audio>) : (<audio ref={audioRef}>
                <source src='impact.mp3' type="audio/mp3"/>
            </audio>)}
            <img className={`${styles.playerImage} ${lastLittlePerk ? styles.pulsing : ''}`} src={picture} alt=""/>
            <img className={styles.baseImage} src='squadSlotBase.png' alt=""/>
            <p className={styles.basePosition}>{position}</p>
        </div>
    );
}

export default Player;