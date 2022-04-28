import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio27 from "../../../../audios/complicatedScenarioAudios/lesson1/slide27.mp3"

function CL1s27(props) {

    const [audioNumber, setAudioNumber] = useState(0)




    const [playAudio27, { stop: stopAudio27 }] = useSound(slideAudio27, {
        onend: () => {
            console.info('Sound ended!');
            props.setIsAudioOn(false);
        },
    });

    useEffect(() => {
        console.info('playAudio9_0 Start!');
        playAudio27();
        props.setIsAudioOn(true);
    }, [playAudio27]);

    return (
        <>
            <div className='absolute top-5 right-5 animate__animated animate__bounceInDown'>
                <h2 className='text-4xl'>الربط مع التاريخ</h2>
            </div>
            <h1 className="text-3xl font-bold animate__animated animate__fadeInDownBig animate__delay-2s">الأوم.... وحدة قياس المقاومة الكهربائية</h1>
            <img src="ComplicatedScenarioImages/slide27.jpg" alt="" className="animate__animated animate__bounceInDown animate__delay-7s w-60 h-60" />
        </>
    );
}

export default CL1s27