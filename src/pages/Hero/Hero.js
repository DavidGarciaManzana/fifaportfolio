import React from 'react'
import styles from '@/pages/Hero/Hero.module.css'
import DownloadCvButton from "@/pages/DownloadCvButton/DownloadCvButton";
import Player from "@/pages/Player/Player";

function Hero({fchangeState, fstate}) {
    const [fifaCardAnimationFinished, setFifaCardAnimationFinished] = React.useState(false);
    const [emptyCardAnimationFinished, setEmptyCardAnimationFinished] = React.useState(false);
    function handleAnimationEnd() {
        setFifaCardAnimationFinished(true);
    }
    function handleEmptyAnimationEnd() {
        setEmptyCardAnimationFinished(true);
    }

    return (
        <>
            <div className={`${fstate ? styles.heroContainerAfterCv : styles.heroContainer}`}>
                <img className={`${fstate ? styles.imageBackgroundAfterCv : styles.imageBackground}`}
                     src="davidbg.png" alt=""/>
                <img onAnimationEnd={handleAnimationEnd}
                     className={`${fstate ? styles.fifaCardAfterCv : styles.fifaCard} ${fifaCardAnimationFinished ? styles.fifaCardInvisible : ''}`}
                     src='GARCIA.png' alt=""/>
                <Player position={'LW'} animationEnd={fifaCardAnimationFinished}
                        picture={'ronaldo_tots.png'} player={'cr7'}></Player>

                <Player position={'ST'} animationEnd={fifaCardAnimationFinished}
                        picture={'PELÉ.png'} player={'pele'}></Player>

                <Player  position={'RW'} animationEnd={fifaCardAnimationFinished}
                        picture={'messi_toty.png'} player={'messi'}></Player>

                <Player  position={'LM'} animationEnd={fifaCardAnimationFinished}
                        picture={'RONALDINHO.png'} player={'dinho'}></Player>
                <Player position={'CM'} animationEnd={fifaCardAnimationFinished}
                        picture={'zidane_icon.png'} player={'zidane'}></Player>
                <Player functionAfterAnimation={handleEmptyAnimationEnd} position={'CM'} animationEnd={fifaCardAnimationFinished}
                        picture={'emptyCard.png'} player={'david'}></Player>
                <Player  position={'RM'} animationEnd={fifaCardAnimationFinished}
                        picture={'beckham_icon.png'} player={'beckham'}></Player>

                <Player  position={'LB'} animationEnd={fifaCardAnimationFinished}
                        picture={'CARLOS.png'} player={'rc'}></Player>
                <Player  position={'CB'} animationEnd={fifaCardAnimationFinished}
                        picture={'cannvaro_icon.png'} player={'cannavaro'}></Player>
                <Player  position={'RB'} animationEnd={fifaCardAnimationFinished}
                        picture={'PUYOL.png'} player={'puyol'}></Player>

                <Player  position={'GK'} animationEnd={fifaCardAnimationFinished}
                        picture={'casillas_icon.png'} player={'casillas'}></Player>

                <Player position={'CM'} animationEnd={emptyCardAnimationFinished}
                        picture={'garcia_small_toty.png'} player={'david_real_initial'} itsDavid={true} ></Player>


                <DownloadCvButton changeState={fchangeState}></DownloadCvButton>
            </div>
        </>
    )
}

export default Hero