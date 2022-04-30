import { useEffect } from 'react';
import useSound from 'use-sound';
import intro from "../../../../audios/simpleScenarioAudios/lesson2/slide10.mp3"


export default function Slide3({ setIsOn }) {

    const [playIntro] = useSound(intro, {
        onend: () => {
            setIsOn(false)
        }
    })

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsOn(true)
            playIntro()
        }, 2000)
        return () => {
            clearTimeout(timeout)
        }
    }, [playIntro, setIsOn])

    return (
        <>
            <div className={`px-8 text-[#efe3d9] h-full font-normal flex gap-5 justify-center flex-col w-full`}>
                <div className='px-6 py-2 text-xl mx-auto md:text-3xl shadow-md lg:text-1xl rounded-md animate__animated animate__backInDown bg-[#fa976d]'>
                    قياس القدرة الكهربائية
                </div>
                <div className='px-6 py-2 text-xl mx-auto md:text-3xl shadow-md lg:text-1xl rounded-md animate__animated animate__backInDown animate__delay-2s bg-[#edac34]'>
                    ما معنى ان المكيف استهلك 2كيلو واط بالساعة
                </div>
                <div className='animate__animated animate__backInDown animate__delay-7s'>
                    <img src="./lesson2/slide10/conditioner.png" className='shadow-md mx-auto w-3/4 md:w-1/2 lg:w-1/4' alt="conditioner" />
                </div>
                <div className='md:w-1/2 lg:w-1/3 px-6 py-2 text-xl shadow-md md:text-2xl mx-auto lg:text-1xl rounded-md animate__animated animate__backInDown animate__delay-7s bg-[#fc8b92]'>
                    معناه ان المكيف يستهلك مقدارا من الطاقة الكهربائية يساوى استهلاك قدرة مقدارها 2000واط فى الثانية بشكل مستمر لمدة ساعة.
                </div>
            </div>
        </>
    )
}