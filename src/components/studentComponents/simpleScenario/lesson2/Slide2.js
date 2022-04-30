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
        <div className="h-screen grid place-items-center">
            <div>
                <h1 className="shadow-md px-1 py-4 md:px-10 mx-auto lg:text-1xl rounded-md bg-[#639e98] text-[#efe3d9] animate__animated animate__fadeInDownBig animate__delay-1s text-4xl">
                    الأهداف التعليمية
                </h1>
            </div>
        </div>
    )
}
