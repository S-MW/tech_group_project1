import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio16 from "../../../../audios/simpleScenarioAudios/lesson1/slide16.mp3"


function SL1s16(props) {

  const [playAudio16, { stop: stopAudio16 }] = useSound(slideAudio16, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    //console.info('Sound Start!');
    playAudio16();
    props.setIsAudioOn(true);
  }, [playAudio16]);


  return (
    <>
      <div>
        <img src="/slide16.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-60" />
      </div>
      <h3 className="animate__animated animate__fadeInDownBig text-sm w-2/3 text-center p-3 m-2 rounded-md bg-[#fa976d]
      md:text-lg
      lg:text-3xl">هو الحركة السريعة للشحنات الفائضة من مكان إلى آخر</h3>
    </>
  );
}

export default SL1s16;
