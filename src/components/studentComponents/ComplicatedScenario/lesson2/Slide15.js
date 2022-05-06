import { useEffect } from 'react';
import useSound from 'use-sound';
import Audio from "../../../../audios/complicatedScenarioAudios/lesson2/slide15.mp3"

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
        <>
            <div className="mx-5 text-[#efe3d9] h-full flex justify-center flex-col font-normal w-4/6">
                <h3 className='p-4 my-3 lg:p-5 text-xl max-w-fit mx-auto md:text-2xl rounded-md bg-[#fa976d] animate__animated animate__backInDown'>
                    علام يدل الرمز kwh؟ وماذا يقيس؟
                </h3>
                <h3 className='p-2 lg:p-5 text-lg max-w-fit mx-auto md:text-xl rounded-md bg-[#fc8b92] animate__animated animate__backInDown animate__delay-4s'>
                    يشير الرمز (KWh) إلى وحدة الكيلو واط .ساعة، وهي مقدار الطاقة الكهربائية التي تساوي استهلاك استخدام 1000 واط من القدرة بشكل مستمرة لمدة ساعة واحدة.
                </h3>
            </div>
        </>
    )
}
