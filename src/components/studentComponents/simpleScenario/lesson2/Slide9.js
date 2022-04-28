import { useEffect } from 'react';
import useSound from 'use-sound';
import intro from "../../../../audios/simpleScenarioAudios/lesson2/slide9.mp3"


export default function Slide3({ setIsOn }) {

    const [playIntro] = useSound(intro)

    useEffect(() => {
        setIsOn(true)
        playIntro()
    }, [playIntro, setIsOn])

    return (
        <>
            <div className={`px-8 text-[#efe3d9] h-full font-normal flex gap-5 justify-center flex-col w-full`}>
                <div className='px-10 py-4 text-2xl mx-auto lg:text-1xl rounded-md bg-[#fa976d] animate__animated animate__backInDown'>
                    قياس القدرة الكهربائية
                    <div className='animate__animated animate__backInDown animate__delay-3s'>
                        ما معنى أن مصباحا كهربائيا يستهلك قدرة كهربائية 100 واط؟
                    </div>
                    <div className='animate__animated animate__backInDown animate__delay-20s'>
                        إن الكيلوواط ساعة يساوى استهلاك هذا المصباح من الطاقة بشكل مستمر لمدة 10 ساعات
                    </div>
                </div>

            </div>
        </>
    )
}