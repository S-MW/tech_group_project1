import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio8 from "../../../../audios/simpleScenarioAudios/lesson1/slide8.mp3"


function SL1s8(props) {

  const [playAudio8, { stop: stopAudio8 }] = useSound(slideAudio8, {
    onend: () => {
      console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    console.info('Sound Start!');
    playAudio8();
    props.setIsAudioOn(true);
  }, [playAudio8]);


  return (
    <>
      <img src="/SL1s8_1.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-32" />
      <h3 className="animate__animated animate__fadeInDownBig animate__delay-9s text-sm my-2 w-fit text-center p-3 rounded-md bg-[#fa976d]
      md:text-lg
      lg:text-3xl">وزن معادلة التفكك</h3>
      <img src="/SL1s8_2.jpg" alt="" className="animate__animated animate__bounceInDown animate__delay-9s" />
    </>
  );
}

export default SL1s8;
