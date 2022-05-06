import { faHandPointer, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import Audio from "../../../../audios/complicatedScenarioAudios/lesson2/slide10.mp3"

export default function Index({ setIsOn }) {

    const [showAnswer, setShowAnswer] = useState(false)
    const [intro, setIntro] = useState('animate__animated animate__backInDown')
    const [showContent, setShowContent] = useState(false)
    const [showBtns, setShowBtns] = useState(false)

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
        }, 10000);
        return () => {
            clearTimeout(timeout)
        }
    }, [playAudio, setIsOn])

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (showContent) {
                setShowAnswer(false)
                setShowBtns(true)
            }
        }, 2000);
        return () => {
            clearTimeout(timeout)
        }
    }, [showContent])


    return (
        <>
            <div className="mx-8 text-[#efe3d9] h-full flex justify-center flex-col font-normal w-4/6">
                <h3 className={`p-4 lg:p-5 text-2xl max-w-fit mx-auto lg:text-xl rounded-md bg-[#639e98] ${intro}`}>
                    ماعدد المسارات المختلفة التى يمكن ان يسرى فيها التيار الكهربائى فى الدوائر الكهربائية الموصولة على التوالى؟
                </h3>

                {showContent &&
                    <>

                        <h3 className='p-4 lg:p-5 text-xl md:text-2xl max-w-fit mx-auto lg:text-2xl rounded-md bg-[#fc8b92] animate__animated animate__backInDown'>
                            للاجابة على السؤال قم باجراء التجربة من خلال الضغط على زر "التجربة"
                        </h3>

                        <img src="./lesson2/circuit.png" alt="circuit" className='mt-3 animate__animated animate__backInDown animate__slower w-40 md:w-56 mx-auto' />
                    </>
                }

                {showBtns &&
                    <>
                        <div className='mx-auto my-3 border text-xl flex items-center animate__animated animate__backInDown w-3/4 md:w-56'>
                            <button className='bg-[#edac34] block mx-auto px-3 py-2 md:py-5 md:px-8 w-full rounded-md text-lg md:text-3xl shadow-md border-2 animate__animated animate__pulse animate__infinite' onClick={() => window.open('https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_en.html')}>
                                التجربة
                                <FontAwesomeIcon icon={faHandPointer} className="mr-2 " />
                            </button>
                        </div>

                        <div className='mx-auto border text-xl flex items-center animate__animated animate__backInDown animate__delay-1s w-3/4 md:w-56'>
                            <button className='bg-[#fa976d] block mx-auto px-3 py-2 md:py-5 md:px-8 w-full rounded-md text-lg md:text-3xl shadow-md border-2 animate__animated animate__pulse animate__infinite' onClick={() => setShowAnswer(true)}>
                                الاجابة
                                <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                            </button>
                        </div>
                    </>
                }

                {showAnswer &&
                    <h3 className='mt-3 p-4 lg:p-5 text-xl max-w-fit mx-auto md:text-2xl rounded-md bg-[#639e98] animate__animated animate__bounceInRight'>
                        للتيار الكهربائي مسار واحد فقط في دائرة التوالي الكهربائية
                    </h3>
                }

            </div>
        </>
    )
}
