import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio15 from "../../../../audios/simpleScenarioAudios/lesson1/slide15.mp3"

export default function SL1s15(props) {

    const [playAudio15 , { stop: stopAudi15 }] = useSound(slideAudio15, {
        onend: () => {
          //console.info('Sound ended!');
          props.setIsAudioOn(false);
        },
      });


    useEffect(() => {
        //console.info('Sound Start!');
        playAudio15();
        props.setIsAudioOn(true);
      },[playAudio15]);

    return (
        <>
            <h1 className="text-6xl animate__animated animate__fadeInDownBig TitleHeading">التفريغ الكهربائي </h1>
        </>
    );
}