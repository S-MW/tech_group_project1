import { useEffect } from "react"
// import useSound from "use-sound"
// import intro from '../../../../audios/simpleScenarioAudios/lesson2/goals.mp3'

export default function Index({ setIsOn }) {
    // const [playAudio] = useSound(intro, {
    //     onend: () => {
    //         setIsOn(false);
    //     }
    // });

    // useEffect(() => {
    //     setIsOn(true)
    //     const timeout = setTimeout(() => {
    //         playAudio()
    //     }, 1000)

    //     return () => {
    //         clearTimeout(timeout)
    //     }
    // }, [playAudio, setIsOn])

    useEffect(() => {
        setIsOn(false)
    }, [setIsOn])



    return (
        <div className="h-full grid place-items-center">
            <div className="pb-20">
                <h1 className="p-2 text-4xl text-center font-bold mx-auto md:text-6xl shadow-md rounded-md bg-[#fa976d] animate__animated animate__fadeInDownBig animate__delay-1s">
                    الأهـداف التعليمية
                </h1>
            </div>
        </div>
    )
}
