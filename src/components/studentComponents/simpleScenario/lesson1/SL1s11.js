import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio11 from "../../../../audios/simpleScenarioAudios/lesson1/slide11.mp3"

export default function SL1s11(props) {

    const [playAudio11 , { stop: stopAudi11 }] = useSound(slideAudio11, {
        onend: () => {
          console.info('Sound ended!');
          props.setIsAudioOn(false);
        },
      });


    useEffect(() => {
        console.info('Sound Start!');
        playAudio11();
        props.setIsAudioOn(true);
      },[playAudio11]);

    return (
        <>
            <h1 className="text-6xl animate__animated animate__fadeInDownBig TitleHeading">القوة الكهربائية</h1>
        </>
    );
}