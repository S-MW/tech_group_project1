import { useEffect } from 'react';
import useSound from 'use-sound';
import intro from "../../../../audios/simpleScenarioAudios/lesson2/slide9.mp3"


export default function Slide3({ setIsOn }) {

    const [playIntro] = useSound(intro, {
        onend: () => {
            setIsOn(false)
        }
    })

    useEffect(() => {
        setIsOn(true)
        playIntro()
    }, [playIntro, setIsOn])

    return (
        <>
            <div className={`px-8 text-[#efe3d9] h-full font-normal flex gap-5 justify-center flex-col w-full`}>
                <div className='animate__animated animate__backInDown'>
                    <img src="./lesson2/slide9/lamp.png" className='mx-auto lg:w-20 md:w-24 w-1/4 animate__animated animate__pulse animate__infinite animate__slower' alt="lamp" />
                </div>
                <div className='shadow-md px-10 py-4 text-2xl mx-auto lg:text-1xl rounded-md bg-[#fa976d] animate__animated animate__backInDown'>
                    قياس القدرة الكهربائية
                </div>
                <div className='shadow-md px-6 py-2 text-xl mx-auto lg:text-1xl rounded-md animate__animated animate__backInDown animate__delay-3s bg-[#edac34]'>
                    ما معنى أن مصباحا كهربائيا يستهلك قدرة كهربائية 100 واط؟
                </div>
                <div className='shadow-md px-6 py-2 text-xl mx-auto lg:text-1xl rounded-md animate__animated animate__backInDown animate__delay-8s bg-[#fc8b92]'>
                    إن الكيلوواط ساعة يساوى استهلاك هذا المصباح من الطاقة بشكل مستمر لمدة 10 ساعات
                </div>
            </div>
        </>
    )
}