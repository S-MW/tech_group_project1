import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio8 from "../../../../audios/simpleScenarioAudios/lesson1/slide8.mp3"


function SL1s8(props) {

  const [playAudio8] = useSound(slideAudio8, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    //console.info('Sound Start!');
    playAudio8();
    props.setIsAudioOn(true);
  }, [playAudio8]);


  return (
    <>
      <img src="/SL1s8_1.jpg" alt="" className="animate__animated animate__bounceInDown w-52 sm:72" />
      <div className='animate__animated animate__fadeInDownBig animate__delay-9s sub-title my-5'>

        <h3 className="">وزن معادلة التفكك</h3>
        <img src="/SL1s8_2.jpg" alt="" className="w-52 sm:72" />
      </div>
    </>
  );
}

export default SL1s8;
