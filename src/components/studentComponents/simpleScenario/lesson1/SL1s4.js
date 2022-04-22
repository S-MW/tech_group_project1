import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio4 from "../../../../audios/simpleScenarioAudios/lesson1/slide4.mp3"

function SL1s4(props) {

    const [playAudio4 , { stop: stopAudio4 }] = useSound(slideAudio4, {
        onend: () => {
          console.info('Sound ended!');
          props.setIsAudioOn(false);
        },
      });

      
    useEffect(() => {
        console.info('Sound Start!');
        playAudio4();
        props.setIsAudioOn(true);
      },[playAudio4]);


    return ( 
        <>
        <div className='relative'>
        <img src="/slide4.png" alt="" className="animate__animated animate__bounceInDown animate__delay-10s" />
        <img src="/slide4-1.svg" alt="" className="absolute top-1/2 left-1/2 animate__animated animate__bounceInDown animate__delay-26s" />
        <img src="/slide4-2.svg" alt="" className="absolute top-1/3 left-1/3 animate__animated animate__bounceInDown animate__delay-30s" />
            
        </div>
        <h3 className="animate__animated animate__fadeInDownBig animate__delay-18s">قوة ارتباط ذرات الشعر بإلكتروناتها أقل من قوة ارتباط ذرات البالون بإلكتروناتها</h3>

        </>
     );
}

export default SL1s4;