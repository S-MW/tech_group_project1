import { useEffect } from 'react';
import useSound from 'use-sound';
import intro from "../../../../audios/complicatedScenarioAudios/lesson2/slide12.mp3"


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
                <div className='px-6 py-2 text-xl mx-auto md:text-5xl shadow-md lg:text-5xl rounded-md animate__animated animate__backInDown bg-[#fa976d]'>
                    القدرة الكهربائية
                </div>
                <div className='px-6 py-2 text-base sm:text-lg mx-auto md:text-3xl shadow-md lg:text-4xl rounded-md animate__animated animate__backInDown animate__delay-2s bg-[#edac34]'>
                    معدل تحول الطاقة الكهربائية الى اى شكل اخر من الطاقة.
                </div>
                <div className='px-6 py-2 text-base sm:text-lg mx-auto md:text-3xl shadow-md lg:text-4xl rounded-md animate__animated animate__backInDown animate__delay-7s bg-[#639e98]'>
                    ما معنى ان المكيف استهلك 2كيلو واط بالساعة
                </div>
                <div className='animate__animated animate__backInDown animate__delay-9s mx-auto md:w-1/2 lg:w-1/4 '>
                    <img src="./lesson2/slide10/conditioner.png" className='shadow-md mx-auto w-full' alt="conditioner" />
                </div>
                <h3 className='md:w-1/2 px-6 py-2 shadow-md text-xl sm:text-lg mx-auto md:text-3xl lg:text-4xl rounded-md animate__animated animate__backInDown animate__delay-13s bg-[#fc8b92]'>
                    معناه ان المكيف يستهلك مقدارا من الطاقة الكهربائية يساوى استهلاك قدرة مقدارها 2000واط فى الثانية بشكل مستمر لمدة ساعة.
                </h3>
            </div>
        </>
    )
}