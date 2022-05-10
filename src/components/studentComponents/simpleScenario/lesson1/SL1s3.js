import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio3 from "../../../../audios/complicatedScenarioAudios/lesson1/slide3.mp3"

function SL1s3(props) {

    const [playAudio3] = useSound(slideAudio3, {
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
        <div className='mx-8text-[#efe3d9] h-full flex justify-center flex-col font-normal w-4/6'>
            <h1 className="animate__animated animate__fadeInDownBig head-title">
                الشحنة الكهربائية الساكنة</h1>
        </div>
    );
}

export default SL1s3;
