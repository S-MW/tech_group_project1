import { useEffect } from 'react';
import useSound from 'use-sound';
import audio from "../../../../audios/simpleScenarioAudios/lesson1/slide1.mp3"

export default function Slide3({ setIsOn }) {


    const [playAudio] = useSound(audio, {
        onend: () => {
            setIsOn(false);
        }
    })

    useEffect(() => {
        playAudio();
        setIsOn(true);
    }, [playAudio, setIsOn])

    return (
        <div className='h-full flex flex-col justify-center gap-3 mx-9 text-[#efe3d9]'>
            <h4 className="animate__animated animate__fadeInDownBig max-w-fit mx-auto text-center text-2xl shadow-md px-1 py-4 md:px-10 lg:text-xl rounded-md bg-[#edac34]">عزيزتى الطالبة ،</h4>
            <h4 className="animate__animated animate__fadeInDownBig animate__delay-1s text-center text-xl shadow-md px-1 py-4 md:px-10 lg:text-xl rounded-md bg-[#fa976d]">من المتوقع بعد انتهائك منْ هذا الدرس
                أنْ تكونى قادرة وبكفاءة
                <br />
                على أنْ:
            </h4>
        </div>
    )
}