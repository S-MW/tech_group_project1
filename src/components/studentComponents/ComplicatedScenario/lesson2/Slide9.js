import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import intro from "../../../../audios/complicatedScenarioAudios/lesson2/slide9/intro.mp3"
import way1 from "../../../../audios/complicatedScenarioAudios/lesson2/slide9/way1.mp3"
import way2 from "../../../../audios/complicatedScenarioAudios/lesson2/slide9/way2.mp3"
import labA from "../../../../audios/simpleScenarioAudios/lesson2/slide7/lab.mp3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-regular-svg-icons'


export default function Index({ setIsOn }) {
    const [introImg, setIntroImg] = useState(false)
    const [way1Img, setWay1Img] = useState(false)
    const [way2Img, setWay2Img] = useState(false)
    const [lab, setLab] = useState(false)

    const [isIntroOver, setIsIntroOver] = useState(false)
    const [isWay1Over, setIsWay1Over] = useState(false)
    const [isWay2Over, setIsWay2Over] = useState(false)


    const [playIntro] = useSound(intro, {
        onend: () => {
            setIsIntroOver(true)
            setIntroImg(false)
        }
    })
    const [playWay1] = useSound(way1, {
        onend: () => {
            setIsWay1Over(true)
            setWay1Img(false)
        }
    })

    const [playWay2] = useSound(way2, {
        onend: () => {
            setIsWay2Over(true)
            setWay2Img(false)
        }
    })
    const [playLab] = useSound(labA, {
        onend: () => {
            setIsOn(false)
        }
    })

    useEffect(() => {
        setIsOn(true)
        const timeout = setTimeout(() => {
            playIntro()
            setIntroImg(true)
        }, 1000);
        return () => {
            clearTimeout(timeout)
        }
    }, [playIntro, setIsOn])

    useEffect(() => {
        if (isIntroOver) {
            playWay1()
            setWay1Img(true)
        }
    }, [isIntroOver, playWay1])

    useEffect(() => {
        if (isWay1Over) {
            setWay2Img(true)
            playWay2()
        }
    }, [isWay1Over, playWay2])

    useEffect(() => {
        if (isWay2Over) {
            playLab()
            setLab(true)
        }
    }, [isWay2Over, playLab])

    return (
        <>
            <div className={`text-[#efe3d9] h-full font-normal grid place-items-center w-full`}>
                {introImg &&
                    <div className='mx-8 animate__animated animate__backInDown animate__delay-1s animate__slower mt-4'>
                        <h3 className='p-2 text-xl mb-5 rounded-md bg-[#639e98] shadow-md'>هل سبق لك أن شاركت في توصيل الزينة في الاحتفالات ولاحظت أن مصابيح بعض هذه الاسلاك تضيء ً حتى وإن كان بعض المصابيح فيها مفقود ًا أو تالفا، في حين تتوقف مصابيح بعض ُ الاسلاك الصغيرة عن الاضاءة إن فقد منها أو تعطل فيها مصباح واحد؟ </h3>
                        <img src="./lesson2/slide9/lamps.jpg" alt="الدائرة الكهربائية" className='animate__animated animate__delay-4s animate__fadeIn animate__slower w-40 mx-auto' />
                    </div>
                }
                {way1Img &&
                    <div className='text-xl mx-8 lg:text-2xl'>
                        <h3 className='p-4 mb-5 rounded-md bg-[#639e98] animate__animated animate__backInDown shadow-md'>
                            <b>دوائر التوصيل على التوالى </b>
                            وهى دائرة كهربائية تتضمن مسارأ واحدًا فقط ، يتدفق فيه التيار الكهربائى
                        </h3>
                        <img src="./lesson2/slide7/img2.png" className='w-full mx-auto md:w-80 animate__animated animate__backInDown animate__delay-1s' alt="دوائر التوصيل على التوالى" />
                    </div>
                }
                {way2Img &&
                    <div className='text-xl mx-8 lg:text-2xl'>
                        <h3 className='p-4 mb-5 rounded-md bg-[#639e98] animate__animated animate__backInDown shadow-md'>
                            <b>دوائر التوصيل على التوازى </b>
                            وهى دائرة كهربائية تتضمن أكثر من مسار لتدفق التيار الكهربائى خلالها.
                        </h3>
                        <img src="./lesson2/slide7/img3.png" className='w-full mx-auto md:w-80 animate__animated animate__backInDown animate__delay-1s' alt="دوائر التوصيل على التوازى" />
                    </div>
                }
                {lab &&
                    <div className='text-2xl sm:w-80 mx-8 lg:text-xl flex items-center lg:mt-16 animate__animated animate__backInDown'>
                        <button className='bg-[#639e98] block mx-auto py-5 px-8 rounded-md text-3xl shadow-md border-2 animate__animated animate__pulse animate__infinite' onClick={() => window.open('https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_en.html')}>
                            التطبيق
                            <FontAwesomeIcon icon={faHandPointer} className="mr-2 " />
                        </button>
                    </div>
                }

            </div>
        </>
    )
}