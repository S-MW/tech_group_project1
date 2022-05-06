import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import Audio from "../../../../audios/complicatedScenarioAudios/lesson2/slide11.mp3"


export default function Index({ setIsOn }) {
    const [showImgs, setShowImgs] = useState(true)

    const [playAudio] = useSound(Audio, {
        onend: () => {
            setIsOn(false)
        }
    })

    useEffect(() => {
        setIsOn(true)
        playAudio()
        const timeout = setTimeout(() => {
            setShowImgs(false)
        }, 28000);
        return () => {
            clearTimeout(timeout)
        }
    }, [playAudio, setIsOn])

    return (
        <>
            <div className={`px-8 text-[#efe3d9] h-full font-normal flex gap-5 justify-center flex-col w-full`}>
                {showImgs &&
                    <>
                        <div className='px-6 py-2 text-xl mx-auto md:text-3xl shadow-md lg:text-xl rounded-md animate__animated animate__backInDown bg-[#fa976d]'>
                            القدرة الكهربائية
                        </div>
                        <div className='px-6 py-2 text-xl mx-auto md:text-3xl shadow-md lg:text-xl rounded-md animate__animated animate__backInDown animate__delay-2s bg-[#edac34]'>
                            ما هى اكثر الاجهزة استهلاكا للقدرة الكهربائية؟
                        </div>
                        <div className='animate__animated animate__backInDown animate__delay-7s'>
                            <img src="./lesson2/slide11/table.png" className='shadow-md mx-auto md:w-1/2 lg:w-1/4' alt="جدول المقارنة بين الأجهزة الكهربائية" />
                            <div className="flex justify-center gap-1 mt-2">
                                <img src="./lesson2/slide11/conditioner.png" className='shadow-md' alt="مكيف" />
                                <img src="./lesson2/slide11/fridge.png" className='shadow-md' alt="ثلاجة" />
                                <img src="./lesson2/slide11/tv.png" className='shadow-md' alt="تلفاز" />
                            </div>
                        </div>
                    </>
                }

                {!showImgs &&
                    <>
                        <div className='md:w-1/2 lg:w-1/3 px-6 py-2 text-xl shadow-md md:text-2xl mx-auto lg:text-xl rounded-md animate__animated animate__backInDown bg-[#fc8b92]'>
                            ولماذا تستهلك هذه الاجهزة قدرة كبيرة؟
                        </div>
                        <div className='md:w-1/2 lg:w-1/3 px-6 py-2 text-xl shadow-md md:text-2xl mx-auto lg:text-xl rounded-md animate__animated animate__backInDown animate__delay-3s bg-[#639e98]'>
                            وتستهلك هذه الاجهزة قدرة كبيرة لان لهذه الاجهزة دوائر كهربائية قليلة المقاومة، لذا يسري فيها تيار كهربائي كبير
                        </div>

                    </>
                }
            </div>
        </>
    )
}