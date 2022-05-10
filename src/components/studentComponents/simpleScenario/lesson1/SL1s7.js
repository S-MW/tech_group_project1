import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio7 from "../../../../audios/simpleScenarioAudios/lesson1/slide7.mp3"


function SL1s7(props) {

  const [playAudio7] = useSound(slideAudio7, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    //console.info('Sound Start!');
    playAudio7();
    props.setIsAudioOn(true);
  }, [playAudio7]);


  return (
    <>
      <h3 className="animate__animated animate__fadeInDownBig animate__delay-1s mx-8 px-4 py-2 text-4xl text-center font-bold md:text-5xl shadow-md rounded-md bg-[#fa976d] ">الايون هو الذرة المشحونة بشحنة موجبة أو سالبة</h3>
      <div>
        <img src="/SL1s7.png" alt="" className="animate__animated animate__bounceInDown animate__delay-1s" />
      </div>

    </>
  );
}

export default SL1s7;
