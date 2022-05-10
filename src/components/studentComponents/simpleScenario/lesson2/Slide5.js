import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import TitleAudio from "../../../../audios/simpleScenarioAudios/lesson2/slide5/head_title.mp3"
import Audio from "../../../../audios/simpleScenarioAudios/lesson2/slide5/audio.mp3"
import LabAudio from "../../../../audios/simpleScenarioAudios/lesson2/slide5/lab.mp3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-regular-svg-icons'


export default function Index({ setIsOn }) {
    const [headTitleClass, setHeadTitleClass] = useState('animate__animated animate__backInDown animate__slower')
    const [titleClass, setTitleClass] = useState('hidden')
    const [definitionClass, setDefinitionClass] = useState('hidden')
    const [labClass, setLabClass] = useState('hidden')
    const [ohmsLaw, setOhmsLaw] = useState('hidden')
    const [isHeadTitleSoundLoaded, setIsHeadTitleSoundLoaded] = useState(false)
    const [isHeadTitleOver, setIsHeadTitleOver] = useState(false)
    const [isLabTime, setIsLabTime] = useState(false)

    const [playTitleAudio, { duration }] = useSound(TitleAudio, {
        onend: () => {
            setIsHeadTitleOver(true)
        },
        onload: () => {
            setIsHeadTitleSoundLoaded(true)
        }
    })
    const [playAudio] = useSound(Audio, {
        onend: () => {
            setIsHeadTitleOver(true)
            setIsLabTime(true)
        }
    })
    const [playLab] = useSound(LabAudio, {
        onend: () => {
            setIsOn(false);
            setIsHeadTitleOver(true)
        }
    })

    useEffect(() => {
        if (isHeadTitleOver) {
            playAudio()
            setTitleClass('animate__animated animate__backInRight')
            setDefinitionClass('animate__animated animate__backInRight animate__delay-14s')
            setOhmsLaw('animate__animated animate__backInRight animate__delay-23s')
            setHeadTitleClass('hidden')
        }
    }, [isHeadTitleOver, setTitleClass, playAudio])

    useEffect(() => {
        if (isLabTime) {
            playLab()
            setLabClass('animate__animated animate__backInRight')
        }
    }, [isLabTime, playLab])

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isHeadTitleSoundLoaded) {
                setHeadTitleClass('animate__animated animate__backOutDown animate__slower mt-0 opacity-0')
            }
        }, duration);
        return () => {
            clearTimeout(timeout)
        }
    }, [setHeadTitleClass, duration, isHeadTitleSoundLoaded])


    useEffect(() => {
        const timeout = setTimeout(() => {
            playTitleAudio();
            setIsOn(true);
        }, 1000);
        return () => {
            clearTimeout(timeout)
        }
    }, [playTitleAudio, setIsOn])

    return (
        <>
            <div className="mx-8 text-[#efe3d9] h-full font-normal w-4/6">
                <h3 className={`head-title mt-32 ${headTitleClass}`}>
                    علاقة الجهد والتيار الكهربائي والمقاومة الكهربائية في دائرة كهربائية
                </h3>
                <div className='mr-2 w-full ml-auto text-xl lg:text-2xl h-full flex flex-col justify-center '>
                    <h3 className={`sub-title mb-2 ${titleClass}`}>
                        المقاومة – شدة التيار – الجهد
                    </h3>
                    <h3 className={`p-2 mb-2 text-center max-w-fit rounded-md bg-[#edac34] shadow-md ${definitionClass}`}>
                        قانون أوم: التيار الكهربائى المتدفق فى دائرة كهربائية يساوى حاصل قسمة الجهد على المقاومة
                    </h3>
                    <h3 className={`text-center p-2 mb-2 max-w-fit rounded-md bg-[#fc8b92] shadow-md ${ohmsLaw}`}>
                        <p>
                            <b className='text-[#000]'> قانون أوم: </b>
                            <br />
                            <span>
                                الجهد (فولت) = التيار (أمبير) * المقاومة (أوم)
                            </span>
                            <br />
                            <span>
                                جـ = ت * م
                            </span>
                        </p>
                    </h3>
                    <div className={`mb-2 flex items-center animate__animated animate__backInDown ${labClass}`}>
                        <button onClick={() => window.open('https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law_ar_SA.html')} className='bg-[#639e98] block mx-auto py-3 px-5 rounded-md text-2xl shadow-md border-2 animate__animated animate__pulse animate__infinite'>
                            التطبيق
                            <FontAwesomeIcon icon={faHandPointer} className="mr-2 " />
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}