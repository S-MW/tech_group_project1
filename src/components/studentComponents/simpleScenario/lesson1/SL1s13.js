import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio13 from "../../../../audios/simpleScenarioAudios/lesson1/slide13.mp3"

export default function SL1s13(props) {

    const [playAudio13 , { stop: stopAudi13 }] = useSound(slideAudio13, {
        onend: () => {
          console.info('Sound ended!');
          props.setIsAudioOn(false);
        },
      });


    useEffect(() => {
        console.info('Sound Start!');
        playAudio13();
        props.setIsAudioOn(true);
      },[playAudio13]);

    return (
        <>
            <h1 className="text-6xl animate__animated animate__fadeInDownBig TitleHeading">المجال الكهربائي </h1>
        </>
    );
}