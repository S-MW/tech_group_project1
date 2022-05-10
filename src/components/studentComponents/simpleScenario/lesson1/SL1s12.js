import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio12 from "../../../../audios/simpleScenarioAudios/lesson1/slide12.mp3"


function SL1s12(props) {

  const [playAudio12] = useSound(slideAudio12, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    //console.info('Sound Start!');
    playAudio12();
    props.setIsAudioOn(true);
  }, [playAudio12]);


  return (
    <>
      <div>
        <img src="/slide12.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-60" />
      </div>
      <h3 className="animate__animated animate__fadeInDownBig text-3xl w-2/3 text-center p-3 m-2 rounded-md bg-[#fa976d]
      lg:text-3xl">هي القوة التي تؤثر بها الأجسام المشحونة في بعضها البعض البعض وهذه القوة يمكن  ان تكون تجاذب أو تنافر</h3>

    </>
  );
}

export default SL1s12;
