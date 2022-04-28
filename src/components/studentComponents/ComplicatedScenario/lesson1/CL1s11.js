import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio11_0 from "../../../../audios/complicatedScenarioAudios/lesson1/slide11_0.mp3"
import slideAudio11_1 from "../../../../audios/complicatedScenarioAudios/lesson1/slide11_1.mp3"

function CL1s11(props) {

    const [audioNumber, setAudioNumber] = useState(0)


    const [playAudio11_0, { stop: stopAudio11_0 }] = useSound(slideAudio11_0, {
        onend: () => {
            console.info('Sound ended!');
            setAudioNumber(1);
        },
    });

    const [playAudio11_1, { stop: stopAudio11_01 }] = useSound(slideAudio11_1, {
        onend: () => {
            console.info('Sound ended!');
            props.setIsAudioOn(false);
        },
    });

    useEffect(() => {
        if (audioNumber === 0) {
            console.info('playAudio9_0 Start!');
            playAudio11_0();
            props.setIsAudioOn(true);
        }
        if (audioNumber === 1) {
            console.info('playAudio9_0 Start!');
            playAudio11_1();
            props.setIsAudioOn(true);
        }

    }, [playAudio11_0, playAudio11_1, audioNumber]);

    return (
        <>
            <div className='absolute top-5 right-5 animate__animated animate__bounceInDown'>
                <h2 className='text-4xl'>تنوع الثقافات</h2>
            </div>
            <h1 className="text-3xl font-bold animate__animated animate__fadeInDownBig animate__delay-2s">هل تعلمى عزيزتى الطالبة اصل كلمة كهرباء؟</h1>
            <h1 className="text-4xl text-blue-600 fort-bold font-bold animate__animated animate__fadeInDownBig animate__delay-5s">كلمة كهرباء أصلها من اللغة اإلغريقية ومعناها الكترون. حيث وجد عالم إغريقي أن دلك العنبر بالفرو يجعل العنبر ً قادرا على جذب قطع صغيرة من القش.</h1>



        </>
    );
}

export default CL1s11