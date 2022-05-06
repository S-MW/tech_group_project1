import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import Audio from "../../../../audios/complicatedScenarioAudios/lesson2/slide16.mp3"

export default function Index({ setIsOn }) {

    const [intro, setIntro] = useState('animate__animated animate__backInDown')
    const [showContent, setShowContent] = useState(false)
    const [shockY, setShockY] = useState('hidden')
    const [shock, setShock] = useState('hidden')
    const [dead, setDead] = useState('hidden')
    const [water, setWater] = useState('hidden')

    const [playAudio] = useSound(Audio, {
        onend: () => {
            setIsOn(false);
        }
    })

    useEffect(() => {
        playAudio();
        setIsOn(true);
        const timeout = setTimeout(() => {
            setIntro('animate__animated animate__backOutUp')
            setTimeout(() => {
                setIntro('hidden')
                setShowContent(true)
            }, 500);
        }, 1500);

        const shockYTimeout = setTimeout(() => {
            setShockY('animate__animated animate__fadeInRight')
        }, 5000);

        const waterTimeout = setTimeout(() => {
            setShockY('animate__animated animate__fadeOutLeft')
            setTimeout(() => {
                setShockY('hidden')
                setWater('animate__animated animate__fadeInRight')
            }, 500);
        }, 14000);

        const shockTimeout = setTimeout(() => {
            setWater('animate__animated animate__fadeOutLeft animate__delay-1s')
            setTimeout(() => {
                setWater('hidden')
                setShock('animate__animated animate__fadeInRight')
            }, 500);
        }, 18000);

        const deadTimeout = setTimeout(() => {
            setShock('animate__animated animate__fadeOutLeft animate__delay-3s')
            setTimeout(() => {
                setShock('hidden')
                setDead('animate__animated animate__fadeInRight')
            }, 500);
        }, 30000);

        return () => {
            clearTimeout(timeout)
            clearTimeout(shockYTimeout)
            clearTimeout(waterTimeout)
            clearTimeout(shockTimeout)
            clearTimeout(deadTimeout)
        }
    }, [playAudio, setIsOn])

    return (
        <>
            <div className="mx-8 text-[#efe3d9] h-full flex justify-center flex-col font-normal w-4/6">
                <h3 className={`p-4 lg:p-5 text-2xl max-w-fit mx-auto lg:text-xl rounded-md bg-[#639e98] ${intro}`}>
                    الربط مع الصحة
                </h3>

                {showContent &&
                    <>
                        <h3 className='p-4 lg:p-5 font-bold md:text-2xl max-w-fit mx-auto lg:text-2xl rounded-md bg-[#edac34] animate__animated animate__backInDown'>
                            لماذا يصاب جسم الانسان بصدمة كهربائية؟
                        </h3>

                        <h3 className='p-4 my-2 lg:p-5 text-sm md:text-2xl max-w-fit mx-auto lg:text-2xl rounded-md bg-[#fc8b92] animate__animated animate__fadeInRight animate__delay-3s'>
                            إذا سرى تيار كهربائي في جسمك فسوف تعاني من ً صدمة كهربائية؛ إذ يشبه جسمك في بعض الأحيان سلكا معزولا؛ فالسوائل داخل جسمك موصلة جيدة للكهرباء، في حين أن مقاومة الجلد الجاف أكبر كثير فالجلد يعزل الجسم كما يفعل الغلاف البلاستيكي حول السلك النحاسي، وهو يمنع التيار من دخول الجسم، إلا أن التيار الكهربائي يعبر جسمك عندما يصبح جسمك جزءا من دائرة كهربائية بطريق الخطأ. وقد تكون الصدمة قاتلة عند مرور بمقدار معين من التيار الكهربائي.
                        </h3>

                        <div className='h-40'>

                            <img src="./lesson2/slide16/shockY.jpg" alt="" className={`w-40 md:w-56 mx-auto ${shockY}`} />
                            <img src="./lesson2/slide16/water.jpg" alt="" className={`w-40 md:w-56 mx-auto ${water}`} />
                            <img src="./lesson2/slide16/shock.png" alt="" className={`w-40 md:w-56 mx-auto ${shock}`} />
                            <img src="./lesson2/slide16/dead.png" alt="" className={`w-40 md:w-56 mx-auto ${dead}`} />
                        </div>

                    </>
                }

            </div>
        </>
    )
}
