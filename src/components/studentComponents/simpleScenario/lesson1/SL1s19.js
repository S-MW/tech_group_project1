import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio19 from "../../../../audios/simpleScenarioAudios/lesson1/slide19.mp3"

export default function SL1s19(props) {

  const [playAudio19, { stop: stopAudi19 }] = useSound(slideAudio19, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    //console.info('Sound Start!');
    playAudio19();
    props.setIsAudioOn(true);
  }, [playAudio19]);

  return (
    <>
      <h1 className="text-6xl animate__animated animate__fadeInDownBig TitleHeading">الدائرة الكهربائية </h1>
    </>
  );
}