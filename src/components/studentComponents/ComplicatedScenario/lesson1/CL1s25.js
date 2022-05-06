import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio25 from "../../../../audios/complicatedScenarioAudios/lesson1/slide25.mp3"

function CL1s25(props) {

    const [playAudio25, { stop: stopAudio25 }] = useSound(slideAudio25, {
        onend: () => {
            console.info('Sound ended!');
            props.setIsAudioOn(false);
        },
    });

    useEffect(() => {
        console.info('Sound Start!');
        playAudio25();
        props.setIsAudioOn(true);
    }, [playAudio25]);

    return (
        <>
            <h1 className="animate__animated animate__fadeInDownBig TitleHeading">الربط مع الكيمياء</h1>
        </>
    );
}

export default CL1s25;