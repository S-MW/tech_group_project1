import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio23 from "../../../../audios/simpleScenarioAudios/lesson1/slide23.mp3"

export default function SL1s23(props) {

  const [playAudio23, { stop: stopAudi23 }] = useSound(slideAudio23, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    //console.info('Sound Start!');
    playAudio23();
    props.setIsAudioOn(true);
  }, [playAudio23]);

  return (
    <>
      <h1 className="px-4 py-2 text-5xl text-center font-bold mx-8 md:text-5xl shadow-md rounded-md bg-[#fa976d] animate__animated animate__fadeInDownBig">المقاومة الكهربائية</h1>
    </>
  );
}