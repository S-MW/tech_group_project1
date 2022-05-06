import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio5_0 from "../../../../audios/simpleScenarioAudios/lesson1/slide5_0.mp3"
import slideAudio5_1 from "../../../../audios/simpleScenarioAudios/lesson1/slide5_1.mp3"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-regular-svg-icons'

function SL1s5(props) {

    const [audioNumber, setAudioNumber] = useState(0)



    const [playAudio5_1, { stop: stopAudio5_1 }] = useSound(slideAudio5_1, {
        onend: () => {
            //console.info('Sound playAudio5_1 ended!');
            props.setIsAudioOn(false);
        },
    });

    const [playAudio5_0, { stop: stopAudio5_0 }] = useSound(slideAudio5_0, {
        onend: () => {
            //console.info('playAudio5_0 ended!');
            setAudioNumber(audioNumber + 1)
        },
    });



    useEffect(() => {
        if (audioNumber == 0) {
            //console.info('playAudio5_0 Start!');
            playAudio5_0();
        }

        if (audioNumber == 1) {
            //console.info('playAudio5_1 Start!');
            playAudio5_1();
        }

        props.setIsAudioOn(true);


    }, [playAudio5_0, playAudio5_1, audioNumber]);


    return (
        <>
            <div className="animate__animated animate__bounceInDown">
                <h1 className="mb-3 text-2xl animate__animated animate__fadeInDownBig animate__delay-3s TitleHeading">الشحنة الكهربائية الساكنة Charge Static</h1>
                <div className={`mb-2 text-2xl lg:text-xl flex items-center animate__animated animate__backInDown animate__delay-8s`}>
                    <button onClick={() => window.open('https://phet.colorado.edu/sims/html/john-travoltage/latest/john-travoltage_ar_SA.html')} className='bg-[#fc8b92] block mx-auto py-3 px-5 rounded-md text-3xl shadow-md border-2 animate__animated animate__pulse animate__infinite'>
                        التجربة
                        <FontAwesomeIcon icon={faHandPointer} className="mr-2 " />
                    </button>
                </div>
            </div>
        </>
    );
}

export default SL1s5;