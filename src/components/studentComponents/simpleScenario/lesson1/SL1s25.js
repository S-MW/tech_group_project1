import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio25_0 from "../../../../audios/simpleScenarioAudios/lesson1/slide25_0.mp3"
import slideAudio25_1 from "../../../../audios/simpleScenarioAudios/lesson1/slide25_1.mp3"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-regular-svg-icons'

function SL1s25(props) {

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
        <div className={`mb-2 text-2xl lg:text-xl flex items-center animate__animated animate__backInDown animate__delay-30s`}>
          <button onClick={() => window.open('https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html')} className='bg-[#fc8b92] block mx-auto py-3 px-5 rounded-md text-3xl shadow-md border-2 animate__animated animate__pulse animate__infinite'>
            التجربة
            <FontAwesomeIcon icon={faHandPointer} className="mr-2 " />
          </button>
        </div>
      </div>
    </>
  );
}

export default SL1s25;
