import { useEffect } from 'react';
import useSound from 'use-sound';
import intro from "../../../../audios/simpleScenarioAudios/lesson2/slide8.mp3"


export default function Index({ setIsOn }) {

    const [playIntro] = useSound(intro, {
        onend: () => {
            setIsOn(false);
        }
    })

    useEffect(() => {
        setIsOn(true)
        playIntro()
    }, [playIntro, setIsOn])


    return (
        <>
            <div className={`px-8 text-[#efe3d9] h-full font-normal flex gap-10 items-center justify-center flex-col w-full`}>
                <div className='animate__animated animate__backInDown lg:mr-6 mt-5'>
                    <img src="./lesson2/slide8/power.png" className='w-60 lg:w-64' alt="الدائرة الكهربائية" />
                </div>
                <div className='animate__animated animate__backInDown animate__delay-22s '>
                    <img src="./lesson2/slide8/kwh.png" alt="الدائرة الكهربائية" className='w-60 lg:w-64' />
                </div>

            </div>
        </>
    )
}