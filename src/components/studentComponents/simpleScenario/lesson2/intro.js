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
        <div className="h-screen grid place-items-center w-5/6">
            <div>
                <h1 className="animate__animated animate__fadeInDownBig animate__delay-1s text-7xl">
                    الدرس الثاني:
                </h1>
                <h1 className="animate__animated animate__fadeInDownBig animate__delay-2s text-7xl mt-5">الدوائر الكهربائية</h1>
            </div>
        </div>
    )
}
