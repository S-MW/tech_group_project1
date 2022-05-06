import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import Audio from "../../../../audios/complicatedScenarioAudios/lesson2/slide14.mp3"

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
            <div className="mx-5 text-[#efe3d9] h-full flex justify-center flex-col font-normal w-4/6">
                <h3 className={`mt-4 p-4 lg:p-5 text-2xl max-w-fit mx-auto lg:text-3xl rounded-md shadow-md bg-[#639e98] ${introTitle}`}>
                    تطبيق الرياضيات
                </h3>
                <h3 className='p-4 mb-1 lg:p-5 text-sm sm:text-base max-w-fit mx-auto md:text-2xl shadow-md rounded-md bg-[#fa976d] animate__animated animate__backInDown animate__delay-3s'>
                    القدرة الكهربائية لمصباح كهربائي
                </h3>
                <h3 className='p-2 lg:p-5 text-xs sm:text-base max-w-fit mx-auto md:text-xl shadow-md rounded-md bg-[#fc8b92] animate__animated animate__backInDown animate__delay-5s'>
                    ُوصل مصباح كهربائي بمصدر جهد كهربائي مقداره 110 فولت. واحسب مقدار القدرة الكهربائية التي يستهلكها المصباح إذا كانت شدة التيار فيه تساوي 55.0 أمبير؟
                </h3>
                <h3 className='my-1 p-2 lg:p-5 max-w-fit mx-auto text-xs sm:text-base md:text-lg shadow-md rounded-md bg-[#639e98] animate__animated animate__backInDown animate__delay-21s'>
                    الحل:
                    <br />
                    المعطيات
                    <br />
                    الجهد الكهربائي: ج = 110 فولت
                    <br />
                    التيار الكهربائي: ت =55.0 أمبير
                </h3>

                <h3 className='p-2 lg:p-5 max-w-fit mx-auto text-xs sm:text-base md:text-lg shadow-md rounded-md bg-[#639e98] animate__animated animate__backInDown animate__delay-32s'>
                    المطلوب:
                    <b>
                        القدرة الكهربائية
                    </b>
                </h3>
                <h3 className='mt-1 p-2 lg:p-5 max-w-fit mx-auto text-xs sm:text-base md:text-lg shadow-md rounded-md bg-[#639e98] animate__animated animate__backInDown animate__delay-36s'>
                    الخطوات :
                    <br />
                    لحساب القدرة الكهربائية نعوض القيم المعطاة في معادلة القدرة الكهربائية
                    <br />
                    <b>
                        القدرة الكهربائية = ج × ت = (110 فولت) × (55.0 أمبير) = 5.60 واط.
                    </b>
                </h3>

            </div>
        </>
    )
}
