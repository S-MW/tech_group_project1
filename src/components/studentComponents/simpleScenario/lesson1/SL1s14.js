import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio14_0 from "../../../../audios/simpleScenarioAudios/lesson1/slide14_0.mp3"
import slideAudio14_1 from "../../../../audios/simpleScenarioAudios/lesson1/slide14_1.mp3"


function SL1s14(props) {

  const [audioNumber, setAudioNumber] = useState(0)


  const [playAudio14_0] = useSound(slideAudio14_0, {
    onend: () => {
      //console.info('Sound ended!');
      setAudioNumber(1)
    },
  });

  const [playAudio14_1] = useSound(slideAudio14_1, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });




  useEffect(() => {
    if (audioNumber === 0) {
      //console.info('Sound Start!');
      playAudio14_0();
      props.setIsAudioOn(true);
    }
    if (audioNumber === 1) {
      //console.info('Sound Start!');
      playAudio14_1();
      props.setIsAudioOn(true);
    }

  }, [playAudio14_0, playAudio14_1, audioNumber]);


  return (
    <>
      <div>
        <a href='https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_ar_SA.html' rel="noreferrer" target="_blank" >
          <img src="/slide14.jpg" alt="" className="animate__animated animate__bounceInDown mx-8 animate__delay-2s w-56" />
        </a>
      </div>
      <h3 className="animate__animated animate__fadeInDownBig text-2xl text-center p-2 mt-2 mx-8 rounded-md bg-[#fa976d]">هو الحيز الذي يحيط بالشحنة الكهربائية والذي تظهر فيه الآثار الكهربائية لتلك الشحنة وتــزداد قوة المجال الكهربائي كلما اقتربنا من الشحنة الكهربائية</h3>
    </>
  );
}

export default SL1s14;
