import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio7 from "../../../../audios/simpleScenarioAudios/lesson1/slide7.mp3"


function SL1s7(props) {

  const [playAudio7, { stop: stopAudio7 }] = useSound(slideAudio7, {
    onend: () => {
      console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    console.info('Sound Start!');
    playAudio7();
    props.setIsAudioOn(true);
  }, [playAudio7]);


  return (
    <>
      <div>
        <img src="/SL1s7.png" alt="" className="animate__animated animate__bounceInDown animate__delay-1s" />
      </div>
      <h3 className="animate__animated animate__fadeInDownBig animate__delay-1s TitleHeading ">الايون هو الذرة المشحونة بشحنة موجبة أو سالبة</h3>

    </>
  );
}

export default SL1s7;
