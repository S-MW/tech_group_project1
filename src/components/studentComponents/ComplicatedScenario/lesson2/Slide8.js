import { useEffect } from 'react';
import useSound from 'use-sound';
import Audio from "../../../../audios/simpleScenarioAudios/lesson2/slide6.mp3"

export default function Index({ setIsOn }) {


    const [playAudio] = useSound(Audio, {
        onend: () => {
            setIsOn(false);
        }
    })

    useEffect(() => {
        const timeout = setTimeout(() => {
            playAudio();
            setIsOn(true);
        }, 1000);
        return () => {
            clearTimeout(timeout)
        }
    }, [playAudio, setIsOn])

    return (
        <>
            <div className="mx-8 text-[#efe3d9] h-full flex justify-center flex-col font-normal w-4/6">
                <h3 className='p-4 lg:p-5 text-3xl max-w-fit mx-auto lg:text-xl rounded-md bg-[#639e98] animate__animated animate__backInDown animate__slower'>
                    دوائر التوصيل على التوالي وعلى التوازى
                </h3>
            </div>
        </>
    )
}
