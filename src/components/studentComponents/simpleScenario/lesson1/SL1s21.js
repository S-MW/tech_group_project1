import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio21 from "../../../../audios/simpleScenarioAudios/lesson1/slide21.mp3"

export default function SL1s21(props) {

  const [playAudio21, { stop: stopAudi21 }] = useSound(slideAudio21, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    //console.info('Sound Start!');
    playAudio21();
    props.setIsAudioOn(true);
  }, [playAudio21]);

  return (
    <>
      <h1 className="px-4 py-2 text-4xl md:text-6xl text-center font-bold mx-8 shadow-md rounded-md bg-[#fa976d] animate__animated animate__fadeInDownBig">الجهد الكهربائي </h1>
    </>
  );
}