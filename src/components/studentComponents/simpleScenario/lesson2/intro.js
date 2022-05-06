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
                <h1 className="shadow-md px-1 md:px-10 py-4 mx-auto lg:text-xl rounded-md animate__animated animate__fadeInDownBig animate__delay-1s text-5xl bg-[#fc8b92]">
                    الدرس الثاني:
                </h1>
                <h1 className="shadow-md px-1 py-4 md:px-10 mx-auto lg:text-xl rounded-md animate__animated animate__fadeInDownBig animate__delay-2s text-3xl mt-5 bg-[#fc8b92]">الدوائر الكهربائية</h1>
            </div>
        </div>
    )
}
