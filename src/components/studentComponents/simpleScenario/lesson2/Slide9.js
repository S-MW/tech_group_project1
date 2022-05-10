import { useEffect } from 'react';
import useSound from 'use-sound';
import intro from "../../../../audios/simpleScenarioAudios/lesson2/slide9.mp3"


export default function Index({ setIsOn }) {

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
                <div className='head-title animate__animated animate__backInDown'>
                    قياس القدرة الكهربائية
                </div>
                <div className='animate__animated animate__backInDown'>
                    <img src="./lesson2/slide9/lamp.png" className='mx-auto lg:w-16 md:w-16 w-1/4 animate__animated animate__pulse animate__infinite animate__slower' alt="lamp" />
                </div>
                <div className='sub-title animate__animated animate__backInDown animate__delay-3s '>
                    ما معنى أن مصباحا كهربائيا يستهلك قدرة كهربائية 100 واط؟
                </div>
                <div className='shadow-md p-2 text-xl mx-auto md:text-2xl text-center rounded-md animate__animated animate__backInDown animate__delay-8s bg-[#fc8b92]'>
                    إن الكيلوواط ساعة يساوى استهلاك هذا المصباح من الطاقة بشكل مستمر لمدة 10 ساعات
                </div>
            </div>
        </>
    )
}