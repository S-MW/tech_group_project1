import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio25_0 from "../../../../audios/simpleScenarioAudios/lesson1/slide25_0.mp3"
import slideAudio25_1 from "../../../../audios/simpleScenarioAudios/lesson1/slide25_1.mp3"


function SL1s25(props) {

  const slideLink = "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html"
  const [audioNumber, setAudioNumber] = useState(0)

  const [playAudio25_0, { stop: stopAudio25_0 }] = useSound(slideAudio25_0, {
    onend: () => {
      console.info('Sound ended!');
      setAudioNumber(audioNumber + 1);
    },
  });

  const [playAudio25_1, { stop: stopAudio25_1 }] = useSound(slideAudio25_1, {
    onend: () => {
      console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    console.info('Sound Start!');
    if (audioNumber == 0) {
      playAudio25_0();
    }
    if (audioNumber == 1) {
      playAudio25_1();
    }

    props.setIsAudioOn(true);
  }, [playAudio25_0, playAudio25_1, audioNumber]);


  return (
    <>
      <div>
        <img src="/slide25.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-60" />
        <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate__animated animate__fadeInDownBig animate__delay-30s" onClick={() => window.open(slideLink)}>
          التجربة
        </button>
      </div>
    </>
  );
}

export default SL1s25;
