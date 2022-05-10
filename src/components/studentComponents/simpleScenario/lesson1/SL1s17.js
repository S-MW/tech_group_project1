import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio17 from "../../../../audios/simpleScenarioAudios/lesson1/slide17.mp3"

export default function SL1s17(props) {

  const [playAudio17, { stop: stopAudi17 }] = useSound(slideAudio17, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    //console.info('Sound Start!');
    playAudio17();
    props.setIsAudioOn(true);
  }, [playAudio17]);

  return (
    <>
      <h1 className="p-2 text-5xl text-center font-bold mx-8 shadow-md rounded-md bg-[#fa976d] animate__animated animate__fadeInDownBig">التيار الكهربائي </h1>
    </>
  );
}