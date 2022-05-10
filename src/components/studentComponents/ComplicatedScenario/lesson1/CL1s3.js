import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio3 from "../../../../audios/complicatedScenarioAudios/lesson1/slide3.mp3"

function CL1s3(props) {

    const [playAudio3, { stop: stopAudio3 }] = useSound(slideAudio3, {
        onend: () => {
            //console.info('Sound ended!');
            props.setIsAudioOn(false);
        },
    });

    useEffect(() => {
        //console.info('Sound Start!');
        playAudio3();
        props.setIsAudioOn(true);
    }, [playAudio3]);

    return (
        <>
            <h1 className="animate__animated animate__fadeInDownBig p-2 text-4xl text-center font-bold mx-8 md:text-5xl shadow-md rounded-md bg-[#fa976d]">الشحنة الكهربائية الساكنة</h1>
        </>
    );
}

export default CL1s3;