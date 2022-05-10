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
      <div className='mx-8'>
        <img src="/slide16.jpg" alt="" className="animate__animated animate__bounceInDown w-56" />
      </div>
      <h3 className="animate__animated animate__fadeInDownBig text-3xl mx-8 text-center p-3 m-2 rounded-md bg-[#fa976d]">هو الحركة السريعة للشحنات الفائضة من مكان إلى آخر</h3>
    </>
  );
}

export default SL1s16;
