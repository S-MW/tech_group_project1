import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio9 from "../../../../audios/simpleScenarioAudios/lesson1/slide9.mp3"

export default function SL1s9(props) {


  const [playAudio9, { stop: stopAudio9 }] = useSound(slideAudio9, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    //console.info('Sound Start!');
    playAudio9();
    props.setIsAudioOn(true);
  }, [playAudio9]);

  return (
    <>
      <h1 className="text-4xl animate__animated animate__fadeInDownBig px-4 py-2 mx-8 text-center font-bold shadow-md rounded-md bg-[#fa976d]">تعريف العوازل والموصلات</h1>
    </>
  );
}