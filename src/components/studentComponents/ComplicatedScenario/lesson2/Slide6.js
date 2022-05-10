import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import Audio from "../../../../audios/complicatedScenarioAudios/lesson2/slide6/audio.mp3"

export default function Index({ setIsOn }) {
    const [introTitle, setIntroTitle] = useState('animate__animated animate__backInDown')

    const [playAudio] = useSound(Audio, {
        onend: () => {
            setIsOn(false);
        }
    })



    useEffect(() => {
        playAudio();
        setIsOn(true);
        const timeout = setTimeout(() => {
            setIntroTitle('animate__animated animate__backOutUp')
        }, 1500);
        return () => {
            clearTimeout(timeout)
        }
    }, [playAudio, setIsOn])

    return (
        <>
            <div className="mx-8 text-[#efe3d9] h-full flex justify-center flex-col font-normal w-4/6">
                <div className='absolute top-5 right-5 animate__animated animate__bounceInDown animate__delay-2s text-sm my-2 w-fit text-center p-2 rounded-md bg-[#fa976d]
                md:text-lg
                lg:text-3xl'>
                    <h2>  تطبيق الرياضيات</h2>
                </div>
                <h3 className='p-2 lg:p-5 text-xl max-w-fit mx-auto md:text-3xl rounded-md bg-[#edac34] animate__animated animate__backInDown animate__delay-3s'>
                    الجهد عبر مقبس الحائط
                </h3>
                <h3 className='mt-2 p-2 text-center lg:p-5 max-w-fit mx-auto md:text-xl rounded-md bg-[#fc8b92] animate__animated animate__backInDown animate__delay-4s'>
                    عند وصل مصباح كهربائى مقاومته 220 أوم (ꭥ) بمقبس الحائط ، مر فيه تيار 0.5 أمبير (A) ما قيمة الجهد الكهربائى بالفولت (V) الذى يزوده المقبس؟
                </h3>
                <h3 className='mt-2 p-2 lg:p-5 text-sm max-w-fit mx-auto md:text-lg rounded-md bg-[#639e98] animate__animated animate__backInDown animate__delay-14s'>
                    المعطيات
                    <br />
                    <span className='animate__animated animate__fadeIn animate__delay-2s'>
                        التيار (ت) =0.5 أمبير(A)
                    </span>
                    <br />
                    <span className='animate__animated animate__fadeIn animate__delay-6s'>
                        المقاومة(م) = 220أوم (ꭥ)
                    </span>
                </h3>

                <h3 className='mt-2 p-2 lg:p-5 max-w-fit mx-auto text-sm md:text-lg rounded-md bg-[#639e98] animate__animated animate__backInDown animate__delay-23s'>
                    المطلوب : حساب قيمة الجهد الكهربائى (جـ) بالفولت(V)
                </h3>
                <h3 className='mt-2 p-2 lg:p-5 max-w-fit mx-auto text-sm md:text-lg rounded-md bg-[#639e98] animate__animated animate__backInDown animate__delay-27s'>
                    الخطوات : عوض المعطيات فى قانون أوم:
                    <br />
                    الجهد =المقاومة X التيار = 220 X 0.5 أمبير = 110فولت
                </h3>

            </div>
        </>
    )
}
