import { useEffect } from 'react';
import useSound from 'use-sound';
// Sound not found yet
// import slideAudio12 from "../../../../audios/simpleScenarioAudios/lesson1/slide12.mp3"


function SL1s14(props) {

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
      <h3 className="animate__animated animate__fadeInDownBig ">هو الحيز الذي يحيط بالشحنة الكهربائية والذي تظهر فيه الآثار الكهربائية لتلك الشحنة وتــزداد قوة المجال الكهربائي كلما اقتربنا من الشحنة الكهربائية</h3>
      <div>
        <a href='https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_ar_SA.html' target="_blank" >
          <img src="/slide14.jpg" alt="" className="animate__animated animate__bounceInDown  animate__delay-2s w-60 h-60" />
        </a>
      </div>
    </>
  );
}

export default SL1s14;
