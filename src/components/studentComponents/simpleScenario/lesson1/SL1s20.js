// copywrite http://kawtherali44.blogspot.com/2009/05/blog-post_2077.html
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio20_0 from "../../../../audios/simpleScenarioAudios/lesson1/slide20_0.mp3"
import slideAudio20_1 from "../../../../audios/simpleScenarioAudios/lesson1/slide20_1.mp3"
import slideAudio20_2 from "../../../../audios/simpleScenarioAudios/lesson1/slide20_2.mp3"


function SL1s20(props) {

  const slideLink = "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_en.html"
  const [audioNumber, setAudioNumber] = useState(0)
  const [image, setImage] = useState(`<img src="/slide20.jpg" alt="" class="animate__animated animate__bounceInDown w-60 h-60" />`)



  const [playAudio20_0, { stop: stopAudio20_0 }] = useSound(slideAudio20_0, {
    onend: () => {
      console.info('Sound ended!');
      setAudioNumber(audioNumber + 1);

      const timer = setTimeout(() => {
        console.log('This will run after 5 second!')
        setImage(`<img src="/slide20_1.gif" alt="" class="animate__animated animate__bounceInDown w-60 h-60" />`)
      }, 16000);
    },
  });

  const [playAudio20_1, { stop: stopAudio20_1 }] = useSound(slideAudio20_1, {
    onend: () => {
      console.info('Sound ended!');
      setAudioNumber(2);
    },
  });

  const [playAudio20_2, { stop: stopAudio20_2 }] = useSound(slideAudio20_2, {
    onend: () => {
      console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    if (audioNumber == 0) {
      console.info('playAudio20_0 Start!');
      playAudio20_0();
    }

    if (audioNumber == 1) {
      console.info('playAudio20_1 Start!');
      playAudio20_1();
    }

    if (audioNumber == 2) {
      console.info('playAudio20_2 Start!');
      playAudio20_2();
    }

    props.setIsAudioOn(true);
  }, [playAudio20_0, playAudio20_1, audioNumber]);


  return (
    <>
      <div>
        <div className="text-xl" dangerouslySetInnerHTML={{ __html: image }} />
        <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate__animated animate__fadeInDownBig animate__delay-35s" onClick={() => window.open(slideLink)}>
          التجربة
        </button>
      </div>
    </>
  );
}

export default SL1s20;
