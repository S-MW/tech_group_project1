import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio6 from "../../../../audios/simpleScenarioAudios/lesson1/slide6.mp3"


function SL1s6(props) {

    const [playAudio6 , { stop: stopAudio6 }] = useSound(slideAudio6, {
        onend: () => {
          //console.info('Sound ended!');
          props.setIsAudioOn(false);
        },
      });


    useEffect(() => {
        //console.info('Sound Start!');
        playAudio6();
        props.setIsAudioOn(true);
      },[playAudio6]);


    return (
        <>
            <h1 className="animate__animated animate__fadeInDownBig TitleHeading">حركة الايونات فى المحاليل</h1>
        </>
    );
}

export default SL1s6;
