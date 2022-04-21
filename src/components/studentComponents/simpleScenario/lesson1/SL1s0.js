import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio0 from "../../../../audios/simpleScenarioAudios/lesson1/slide0.mp3"

// SL1s0 == (S = Simple) (L1 = Lesson 1) (s0 = slide 0)
export default function SL1s0(props) {


    const [playAudio0 , { stop: stopAudio0 }] = useSound(slideAudio0, {
        onend: () => {
          console.info('Sound ended!');
          props.setIsAudioOn(false);
        },
      });


    useEffect(() => {
        console.info('Sound Start!');
        playAudio0();
        props.setIsAudioOn(true);
      },[playAudio0]);

    return (
        <>
            <h1 className="animate__animated animate__fadeInDownBig">الأهدافُ التعليمية</h1>
        </>
    );
}