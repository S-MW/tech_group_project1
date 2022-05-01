import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio4_0 from "../../../../audios/simpleScenarioAudios/lesson1/slide4_0.mp3"
import slideAudio4_1 from "../../../../audios/simpleScenarioAudios/lesson1/slide4_1.mp3"
import slideAudio4_2 from "../../../../audios/simpleScenarioAudios/lesson1/slide4_2.mp3"
import slideAudio4_3 from "../../../../audios/simpleScenarioAudios/lesson1/slide4_3.mp3"

function SL1s4(props) {

  const [image, setImage] = useState(``)
  const [audioNumber, setAudioNumber] = useState(0)


  const [playAudio4_0, { stop: stopAudio4_0 }] = useSound(slideAudio4_0, {
    onend: () => {
      console.info('Sound ended!');
      setImage(`<img src="/slide4_0.jpg" alt="" class="animate__animated animate__bounceInDown w-60 h-60" />`)
      setAudioNumber(1);
    },
  });

  const [playAudio4_1, { stop: stopAudio4_1 }] = useSound(slideAudio4_1, {
    onend: () => {
      console.info('Sound ended!');
      setAudioNumber(2);
    },
  });

  const [playAudio4_2, { stop: stopAudio4_2 }] = useSound(slideAudio4_2, {
    onend: () => {
      console.info('Sound ended!');
      setImage(`<img src="/slide4_1.jpg" alt="" class="animate__animated animate__bounceInDown w-60 h-60" />`)
      setAudioNumber(3);
    },
  });

  const [playAudio4_3, { stop: stopAudio4_3 }] = useSound(slideAudio4_3, {
    onend: () => {
      console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    if (audioNumber === 0) {
      console.info('playAudio4_0 Start!');
      playAudio4_0();
      props.setIsAudioOn(true);
    }
    if (audioNumber === 1) {
      console.info('playAudio4_1 Start!');
      playAudio4_1();
      props.setIsAudioOn(true);
    }
    if (audioNumber === 2) {
      console.info('playAudio4_2 Start!');
      playAudio4_2();
      props.setIsAudioOn(true);
    }
    if (audioNumber === 3) {
      console.info('playAudio4_3 Start!');
      playAudio4_3();
      props.setIsAudioOn(true);
    }


  }, [playAudio4_0, playAudio4_1, playAudio4_2, playAudio4_3, audioNumber]);


  return (
    <>
      <div>
        <div className="text-xl" dangerouslySetInnerHTML={{ __html: image }} />
      </div>
      <h3 className="animate__animated animate__fadeInDownBig animate__delay-18s TitleHeading">قوة ارتباط ذرات الشعر بإلكتروناتها أقل من قوة ارتباط ذرات البالون بإلكتروناتها</h3>
    </>
  );
}

export default SL1s4;