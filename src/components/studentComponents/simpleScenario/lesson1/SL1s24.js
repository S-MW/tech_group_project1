import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio24 from "../../../../audios/simpleScenarioAudios/lesson1/slide24.mp3"


function SL1s24(props) {

  const [playAudio24, { stop: stopAudio24 }] = useSound(slideAudio24, {
    onend: () => {
      console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    console.info('Sound Start!');
    playAudio24();
    props.setIsAudioOn(true);
  }, [playAudio24]);


  return (
    <>
      <div>
        <img src="/slide24.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-60" />
      </div>
      <h3 className="animate__animated animate__fadeInDownBig  text-sm w-2/3 text-center p-3 m-2 rounded-md bg-[#96d2ca]
      md:text-lg
      lg:text-3xl">مقياس لمدى ممانعة الموصل (السلك)  لمرور التيّار الكهربائيّ من خلاله، وتقاس بوحدة الأوم.</h3>
    </>
  );
}

export default SL1s24;
