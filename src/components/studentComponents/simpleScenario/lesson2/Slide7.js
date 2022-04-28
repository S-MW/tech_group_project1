import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import intro from "../../../../audios/simpleScenarioAudios/lesson2/slide7/intro.mp3"
import way1 from "../../../../audios/simpleScenarioAudios/lesson2/slide7/way1.mp3"
import way2 from "../../../../audios/simpleScenarioAudios/lesson2/slide7/way2.mp3"
import labA from "../../../../audios/simpleScenarioAudios/lesson2/slide7/lab.mp3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-regular-svg-icons'


export default function Slide3({ setIsOn }) {
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
        }, 2000);
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
            <div className={`px-8 text-[#efe3d9] h-full font-normal felx ${(introImg || lab) && "flex items-center justify-center"} w-full`}>
                {introImg &&
                    <div className='w-72 animate__animated animate__backInDown animate__delay-1s animate__slower'>
                        <img src="./lesson2/slide7/img1.png" alt="الدائرة الكهربائية" />
                    </div>
                }
                {way1Img &&
                    <div className='ml-auto lg:mr-10 text-2xl w-80 h-80 lg:text-xl mt-16'>
                        <h3 className='p-4 mb-5 rounded-md bg-[#639e98] animate__animated animate__backInDown'>
                            <b>دوائر التوصيل على التوالى </b>
                            وهى دائرة كهربائية تتضمن مسارأ واحدًا فقط ، يتدفق فيه التيار الكهربائى
                        </h3>
                        <img src="./lesson2/slide7/img2.png" className='w-full  animate__animated animate__backInDown animate__delay-1s' alt="دوائر التوصيل على التوالى" />
                    </div>
                }
                {way2Img &&
                    <div className='ml-auto lg:mr-10 text-2xl w-80 h-80 lg:text-xl mt-16'>
                        <h3 className='p-4 mb-5 rounded-md bg-[#639e98] animate__animated animate__backInDown'>
                            <b>دوائر التوصيل على التوازى </b>
                            وهى دائرة كهربائية تتضمن أكثر من مسار لتدفق التيار الكهربائى خلالها.
                        </h3>
                        <img src="./lesson2/slide7/img3.png" className='w-full animate__animated animate__backInDown animate__delay-1s' alt="دوائر التوصيل على التوازى" />
                    </div>
                }
                {lab &&
                    <div className='mx-auto text-2xl w-80 h-80 lg:text-xl flex items-center lg:mt-16 animate__animated animate__backInDown'>
                        <button className='bg-[#639e98] block mx-auto py-5 px-8' onClick={() => window.open('https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_en.html')}>
                            التطبيق
                            <FontAwesomeIcon icon={faHandPointer} className="mr-2 animate__animated animate__tada animate__infinite" />
                        </button>
                    </div>
                }

            </div>
        </>
    )
}