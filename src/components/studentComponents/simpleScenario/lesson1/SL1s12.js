import { useEffect } from 'react';
import useSound from 'use-sound';
// Sound not found yet
// import slideAudio12 from "../../../../audios/simpleScenarioAudios/lesson1/slide12.mp3"


function SL1s12(props) {

  // const [playAudio12, { stop: stopAudio7 }] = useSound(slideAudio12, {
  //   onend: () => {
  //     console.info('Sound ended!');
  //     props.setIsAudioOn(false);
  //   },
  // });


  // useEffect(() => {
  //   console.info('Sound Start!');
  //   playAudio12();
  //   props.setIsAudioOn(true);
  // }, [playAudio12]);


  return (
    <>
      <div>
        <img src="/slide12.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-60" />
      </div>
      <h3 className="animate__animated animate__fadeInDownBig ">هي القوة التي تؤثر بها الأجسام المشحونة في بعضها البعض البعض وهذه القوة يمكن  ان تكون تجاذب أو تنافر</h3>

    </>
  );
}

export default SL1s12;
