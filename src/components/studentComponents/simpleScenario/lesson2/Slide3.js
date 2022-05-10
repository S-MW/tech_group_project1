import { useEffect } from 'react';
import useSound from 'use-sound';
import audio from "../../../../audios/simpleScenarioAudios/lesson1/slide1.mp3"

export default function Index({ setIsOn, currentSlide }) {


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
        <div className='h-full flex flex-col justify-center gap-3 mx-8 text-[#efe3d9]'>
            <h4 className="animate__animated animate__fadeInDownBig sub-title">
                عزيزتى الطالبة ،
                <br />
                من المتوقع بعد انتهائك منْ هذا الدرس
                <br />
                أنْ تكونى قادرة وبكفاءة على أنْ:
            </h4>
        </div>
    )
}