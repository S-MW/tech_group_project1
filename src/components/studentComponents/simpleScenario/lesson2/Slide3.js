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
        <div className='h-full flex flex-col justify-center gap-3 mx-5 text-[#efe3d9]'>
            <h4 className="animate__animated animate__fadeInDownBig max-w-fit mx-auto text-center text-4xl shadow-md px-1 py-4 md:px-10 lg:text-xl rounded-md bg-[#edac34]">عزيزتى الطالبة ،</h4>
            <h4 className="animate__animated animate__fadeInDownBig animate__delay-1s text-center text-2xl shadow-md px-1 py-4 md:px-10 lg:text-xl rounded-md bg-[#fa976d]">من المتوقع بعد انتهائك منْ هذا الدرس
                أنْ تكونى قادرة وبكفاءة على أنْ:
            </h4>
        </div>
    )
}