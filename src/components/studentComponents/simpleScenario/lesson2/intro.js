import { useEffect } from "react"
import useSound from "use-sound"
import intro from '../../../../audios/simpleScenarioAudios/lesson2/intro.mp3'

export default function Index({ setIsOn }) {
    const [playAudio] = useSound(intro, {
        onend: () => {
            setIsOn(false);
        }
    })

    useEffect(() => {
        setIsOn(true)
        const timeout = setTimeout(() => {
            playAudio()
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [playAudio, setIsOn])


    return (
        <div className="h-screen grid place-items-center w-5/6 text-[#efe3d9]">
            <div>
                <h1 className="animate__animated animate__fadeInDownBig animate__delay-1s mb-5 px-4 py-2 text-4xl text-center font-bold mx-auto md:text-5xl shadow-md rounded-md bg-[#fa976d]">
                    الدرس الثاني:
                </h1>
                <h1 className="shadow-md p-2 text-3xl mx-auto md:text-4xl text-center rounded-md bg-[#639e98] animate__animated animate__fadeInDownBig animate__delay-2s">الدوائر الكهربائية</h1>
            </div>
        </div>
    )
}
