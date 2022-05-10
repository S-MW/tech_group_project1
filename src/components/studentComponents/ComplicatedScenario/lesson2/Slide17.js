import { useEffect } from 'react';
import useSound from 'use-sound';
import Audio from "../../../../audios/complicatedScenarioAudios/lesson2/slide17.mp3"

export default function Index({ setIsOn }) {

    const [playAudio] = useSound(Audio, {
        onend: () => {
            setIsOn(false);
        }
    })

    useEffect(() => {
        playAudio();
        setIsOn(true);
    }, [playAudio, setIsOn])

    return (
        <div className="mx-8 text-[#efe3d9] h-full flex justify-center flex-col font-normal w-4/6">

            <h3 className='p-2 lg:p-5 font-bold text-xl text-center md:text-2xl max-w-fit mx-auto rounded-md bg-[#639e98] animate__animated animate__fadeInRight  animate__delay-1s'>
                ما هى إجراءات الإسعافات الأولية في معالجة الصدمة الكهربائية؟
            </h3>
            <img src="./lesson2/slide17/shocked.jpg" alt="" className='w-40 mt-2 md:w-56 mx-auto animate__animated animate__fadeInRight animate__delay-2s' />

            <h3 className='p-2 my-2 lg:p-5 text-xl md:text-2xl max-w-fit mx-auto rounded-md bg-[#fc8b92] animate__animated animate__fadeInRight animate__delay-5s'>
                عملية انعاش القلب (CPR) لإعادة نبض القلب ومعالجة الصدمة
            </h3>
            <img src="./lesson2/slide17/cpr.jpg" alt="" className='w-40 md:w-56 mx-auto animate__animated animate__fadeInRight animate__delay-6s' />


        </div>
    )
}
