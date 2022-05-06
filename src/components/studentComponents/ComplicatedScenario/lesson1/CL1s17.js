import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio17 from "../../../../audios/complicatedScenarioAudios/lesson1/slide17.mp3"


function CL1s17(props) {

  const [playAudio17, { stop: stopAudio17 }] = useSound(slideAudio17, {
    onend: () => {
      console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    console.info('Sound Start!');
    playAudio17();
    props.setIsAudioOn(true);
  }, [playAudio17]);


  return (
    <>
      <img src="ComplicatedScenarioImages/slide17_0.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-32" />
      <img src="ComplicatedScenarioImages/slide17_1.jpg" alt="" className="mt-2 animate__animated animate__bounceInDown w-60 h-32 animate__delay-17s" />
      <h1 className="mb-2 font-bold animate__animated animate__fadeInDownBig  animate__delay-17s  text-sm my-2 w-2/3 text-center p-3 rounded-md bg-[#96d2ca]
                md:text-lg
                lg:text-3xl ">
        يقصد به تدفّق الشحنات الكهربائيّة (الإلكترونات) وينتج التيار الكهربائــي في المواد الصلبة بســبب تدفق الإلكترونات. أما في السوائل فينتج التيارّ الكهربائي بســبب تدفق الأيونات التي يمكن أن تكون ذات شــحنة موجبة أو شحنة ُسالبة .
      </h1>
      <img src="ComplicatedScenarioImages/slide17_2.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-32 animate__delay-36s" />
    </>
  );
}

export default CL1s17;
