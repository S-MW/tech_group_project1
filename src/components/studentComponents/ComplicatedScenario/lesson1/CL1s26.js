import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio26 from "../../../../audios/complicatedScenarioAudios/lesson1/slide26.mp3"


function CL1s26(props) {


  const [image, setImage] = useState(`<img src="ComplicatedScenarioImages/slide26_0.png" alt="" class=" animate__animated animate__bounceInDown  w-60 h-60" />`)


  const [playAudio26, { stop: stopAudio26 }] = useSound(slideAudio26, {
    onend: () => {
      console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });

  useEffect(() => {
    console.info('playAudio9_0 Start!');
    playAudio26();
    props.setIsAudioOn(true);

    const timer = setTimeout(() => {
      setImage(`<img src="ComplicatedScenarioImages/slide26_1.png" alt="" class="animate__animated animate__bounceInDown  w-60 h-60" />`)
      const timer2 = setTimeout(() => {
        setImage(`<img src="ComplicatedScenarioImages/slide26_2.jpg" alt="" class="animate__animated animate__bounceInDown  w-60 h-60" />`)
      }, 5000);
    }, 17000);

  }, [playAudio26]);


  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: image }} />
    </>
  );
}

export default CL1s26;
