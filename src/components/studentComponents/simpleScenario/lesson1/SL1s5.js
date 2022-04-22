import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio5_0 from "../../../../audios/simpleScenarioAudios/lesson1/slide5_0.mp3"
import slideAudio5_1 from "../../../../audios/simpleScenarioAudios/lesson1/slide5_1.mp3"

function SL1s5(props) {

    const slideLink = "https://phet.colorado.edu/sims/html/john-travoltage/latest/john-travoltage_ar_SA.html"
    const [audioNumber, setAudioNumber] = useState(0)


    
    const [playAudio5_1 , { stop: stopAudio5_1 }] = useSound(slideAudio5_1, {
        onend: () => {
            console.info('Sound playAudio5_1 ended!');
            props.setIsAudioOn(false);
        },
    });
    
    const [playAudio5_0 , { stop: stopAudio5_0 }] = useSound(slideAudio5_0, {
        onend: () => {
          console.info('playAudio5_0 ended!');
          setAudioNumber(audioNumber +1)
        },
      });

   
    
    useEffect(() => {
        if(audioNumber == 0){
            console.info('playAudio5_0 Start!');
            playAudio5_0();
        }

        if(audioNumber == 1){
            console.info('playAudio5_1 Start!');
            playAudio5_1();
        }
        
        props.setIsAudioOn(true);


      },[playAudio5_0,playAudio5_1,audioNumber]);

      
    return (
        <>
            <div className="animate__animated animate__bounceInDown">
                <h1 className="mb-3 text-2xl animate__animated animate__fadeInDownBig animate__delay-5s">الشحنة الكهربائية الساكنة Charge Static</h1>
                <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate__animated animate__fadeInDownBig animate__delay-10s" onClick={() => window.open(slideLink)}>
                    التجربة
                </button>
            </div>
        </>
    );
}

export default SL1s5;