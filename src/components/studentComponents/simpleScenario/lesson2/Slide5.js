import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import Audio from "../../../../audios/simpleScenarioAudios/lesson2/slide5_head_title.mp3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-regular-svg-icons'


export default function Slide3({ setIsOn }) {
    const [headTitleClass, setHeadTitleClass] = useState('animate__animated animate__backInDown animate__slower')
    const [titleClass, setTitleClass] = useState('hidden')
    const [definitionClass, setDefinitionClass] = useState('hidden')
    const [labClass, setLabClass] = useState('hidden')
    const [ohmsLaw, setOhmsLaw] = useState('hidden')
    const [isHeadTitleSoundLoaded, setIsHeadTitleSoundLoaded] = useState(false)
    const [isHeadTitleOver, setIsHeadTitleOver] = useState(false)

    const [playAudio, { duration }] = useSound(Audio, {
        onend: () => {
            setIsOn(false);
            setIsHeadTitleOver(true)
        },
        onload: () => {
            setIsHeadTitleSoundLoaded(true)
        }
    })

    useEffect(() => {
        if (isHeadTitleOver) {
            setTitleClass('animate__animated animate__backInRight')
            setDefinitionClass('animate__animated animate__backInRight animate__delay-5s')
            setOhmsLaw('animate__animated animate__backInRight animate__delay-7s')
            setLabClass('animate__animated animate__backInRight animate__delay-10s')
            setHeadTitleClass('hidden')
        }
    }, [isHeadTitleOver, setTitleClass])

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
            playAudio();
            setIsOn(true);
        }, 1000);
        return () => {
            clearTimeout(timeout)
        }
    }, [playAudio, setIsOn])

    return (
        <>
            <div className="mx-8 text-[#efe3d9] h-full font-normal w-4/6">
                <h3 className={`p-4 lg:p-5 text-2xl max-w-fit mx-auto lg:text-xl rounded-md bg-[#639e98] mt-32 ${headTitleClass}`}>
                    علاقة الجهد والتيار الكهربائي والمقاومة الكهربائية في دائرة كهربائية
                </h3>
                <div className='mr-2 w-full ml-auto text-xl lg:text-2xl h-full flex flex-col justify-center '>
                    <h3 className={`p-2 mb-2 max-w-fit rounded-md bg-[#edac34] ${titleClass}`}>
                        المقاومة – شدة التيار – الجهد
                    </h3>
                    <h3 className={`p-2 mb-2 max-w-fit rounded-md bg-[#639e98] ${definitionClass}`}>
                        قانون أوم: التيار الكهربائى المتدفق فى دائرة كهربائية يساوى حاصل قسمة الجهد على المقاومة


                    </h3>
                    <h3 className={`p-2 mb-2 max-w-fit rounded-md bg-[#fc8b92] ${ohmsLaw}`}>
                        <p className='text-[#]  mt-2 p-1' style={{ textShadow: 'unset' }}>
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
                    <h3 className={`p-2 rounded-sm mb-2 max-w-fit bg-[#96d2ca] ${labClass}`}>
                        <button onClick={() => window.open('https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law_ar_SA.html')}>
                            التطبيق
                            <FontAwesomeIcon icon={faHandPointer} className="mr-2 animate__animated animate__tada animate__infinite" />
                        </button>
                    </h3>
                </div>
            </div>
        </>
    )
}