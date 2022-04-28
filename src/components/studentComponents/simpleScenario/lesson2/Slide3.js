import { useEffect } from 'react';
import useSound from 'use-sound';
import audio from "../../../../audios/simpleScenarioAudios/lesson1/slide1.mp3"

export default function Slide3({ setIsOn, currentSlide }) {


    const [playAudio, { stop }] = useSound(audio, {
        onend: () => {
            setIsOn(false);
        }
    })

    useEffect(() => {
        if (currentSlide === 2) {
            playAudio();
            setIsOn(true);
        } else {
            stop()
        }
    }, [playAudio, setIsOn, currentSlide, stop])

    return (
        <>
            <h4 className="animate__animated animate__fadeInDownBig text-center text-6xl mx-10">عزيزتى الطالبة ،</h4>
            <h4 className="animate__animated animate__fadeInDownBig animate__delay-1s text-center text-6xl mx-10">من المتوقع بعد انتهائك منْ هذا الدرس
                أنْ تكونى قادرة وبكفاءة على أنْ:
            </h4>
        </>
    )
}