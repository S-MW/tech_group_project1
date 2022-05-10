import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio15 from "../../../../audios/simpleScenarioAudios/lesson1/slide15.mp3"

export default function SL1s15(props) {

  const [playAudio15, { stop: stopAudi15 }] = useSound(slideAudio15, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    //console.info('Sound Start!');
    playAudio15();
    props.setIsAudioOn(true);
  }, [playAudio15]);

  return (
    <>
      <h1 className="animate__animated animate__fadeInDownBig px-2 py-2 text-6xl text-center font-bold mx-8 md:text-5xl shadow-md rounded-md bg-[#fa976d]">التفريغ الكهربائي </h1>
    </>
  );
}