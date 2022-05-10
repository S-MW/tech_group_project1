import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio1 from "../../../../audios/simpleScenarioAudios/lesson1/slide1.mp3"

// SL1s1 == (S = Simple) (L1 = Lesson 1) (s1 = slide 1)
export default function SL1s1(props) {


  const [playAudio1] = useSound(slideAudio1, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });

  useEffect(() => {
    //console.info('Sound Start!');
    playAudio1();
    props.setIsAudioOn(true);
  }, [playAudio1]);

  return (
    <div className='h-full flex flex-col justify-center gap-3 mx-8'>
      <h4 className="animate__animated animate__fadeInDownBig sub-title">
        عزيزتى الطالبة ،
        <br />
        من المتوقع بعد انتهائك منْ هذا الدرس
        <br />
        أنْ تكونى قادرة وبكفاءة على أنْ:
      </h4>
    </div>
  );
}