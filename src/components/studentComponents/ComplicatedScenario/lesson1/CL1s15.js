import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio15_0 from "../../../../audios/complicatedScenarioAudios/lesson1/slide15_0.mp3"
import slideAudio15_1 from "../../../../audios/complicatedScenarioAudios/lesson1/slide15_1.mp3"

function CL1s15(props) {

    const [audioNumber, setAudioNumber] = useState(0)


    const [playAudio15_0, { stop: stopAudio15_0 }] = useSound(slideAudio15_0, {
        onend: () => {
            console.info('Sound ended!');
            setAudioNumber(1);
        },
    });

    const [playAudio15_1, { stop: stopAudio15_01 }] = useSound(slideAudio15_1, {
        onend: () => {
            console.info('Sound ended!');
            props.setIsAudioOn(false);
        },
    });

    useEffect(() => {
        if (audioNumber === 0) {
            console.info('playAudio15_0 Start!');
            playAudio15_0();
            props.setIsAudioOn(true);
        }
        if (audioNumber === 1) {
            console.info('playAudio15_1 Start!');
            playAudio15_1();
            props.setIsAudioOn(true);
        }

    }, [playAudio15_0, playAudio15_1, audioNumber]);

    return (
        <>
            <h1 className="text-3xl font-bold animate__animated animate__fadeInDownBig ">هل يمكن للبرق ان يحرز شحنات كهربائية؟
            </h1>
            <h1 className="text-3xl font-bold animate__animated animate__fadeInDownBig  animate__delay-3s ">
                -يمكن للتفريغ الكهربائى أن يحرز كمية هائلة من الطاقة الكهربائية فى لحظة واحدة ، كما يحدث فى صاعقة البرق
            </h1>
            <div>
                <img src="/slide16.jpg" alt="" className="animate__animated animate__bounceInDown animate__delay-15s w-60 h-60" />
            </div>
            <h1 className="text-4xl text-blue-600  font-bold animate__animated animate__fadeInDownBig animate__delay-15s">هو الحركة السريعة للشحنات الفائضة من مكان إلى آخر.</h1>
        </>
    );
}

export default CL1s15
