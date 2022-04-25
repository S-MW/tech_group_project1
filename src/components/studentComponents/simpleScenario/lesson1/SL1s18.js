import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio18 from "../../../../audios/simpleScenarioAudios/lesson1/slide18.mp3"


function SL1s18(props) {

  const [playAudio18, { stop: stopAudio18 }] = useSound(slideAudio18, {
    onend: () => {
      console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    console.info('Sound Start!');
    playAudio18();
    props.setIsAudioOn(true);
  }, [playAudio18]);


  return (
    <>
      <div>
        <img src="/slide18.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-60" />
      </div>
      <h3 className="animate__animated animate__fadeInDownBig ">يقصد به تدفّق الشحنات الكهربائيّة (الإلكترونات) وينتج التيار الكهربائــي في المواد الصلبة بســبب تدفق الإلكترونات.</h3>
      <h3 className="animate__animated animate__fadeInDownBig  animate__delay-11s">أما في السوائل فينتج التيارّ الكهربائي بســبب تدفق الأيونات التي يمكن أن تكون ذات شــحنة موجبة أو شحنة ُسالبة </h3>
    </>
  );
}

export default SL1s18;
