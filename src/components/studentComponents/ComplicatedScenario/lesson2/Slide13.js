import { useEffect } from 'react';
import useSound from 'use-sound';
import intro from "../../../../audios/complicatedScenarioAudios/lesson2/slide13.mp3"


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
                <div className='animate__animated animate__backInDown'>
                    <img src="./lesson2/slide11/conditioner.png" className='shadow-md mx-auto md:w-1/2 lg:w-1/4' alt="conditioner" />
                </div>
                <div className='px-6 py-2 text-lg mx-auto md:text-xl shadow-md lg:text-xl rounded-md animate__animated animate__backInDown animate__delay-2s bg-[#edac34]'>
                    اذا كان المكيف يعمل على 220فولت ، ويمر به 5 امبير، ما هى القدرة الكهربائية له؟
                </div>
                <div className='px-6 py-2 text-lg mx-auto md:text-xl shadow-md lg:text-xl rounded-md animate__animated animate__backInDown animate__delay-12s bg-[#639e98]'>
                    القدرة الكهربائية = التيار ووحدته (أمبير) X الجهد ووحدته(فولت)
                    اى
                    <br />
                    القدرة = ت X جـ
                    اى:
                    <br />
                    <b>
                        220فولت X 5 امبير= 1100واط
                    </b>

                </div>
            </div>
        </>
    )
}