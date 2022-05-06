import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import useSound from 'use-sound';
import Intro from "../../../../audios/simpleScenarioAudios/lesson2/slide5/head_title.mp3"
import Question from "../../../../audios/complicatedScenarioAudios/lesson2/slide5/q.mp3"
import Answer from "../../../../audios/complicatedScenarioAudios/lesson2/slide5/a.mp3"
import George from "../../../../audios/complicatedScenarioAudios/lesson2/slide5/george.mp3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-regular-svg-icons';

export default function Index({ setIsOn }) {

    const [isIntroOver, setIsIntroOver] = useState(false)
    const [showVideo, setShowVideo] = useState(false)
    const [isQuestionPlaying, setIsQuestionPlaying] = useState(false)
    const [isAnswerPlaying, setIsAnswerPlaying] = useState(false)
    const [isGeorgePlaying, setIsGeorgePlaying] = useState(false)
    const [showGeorge, setShowGeorge] = useState('hidden')
    const [showGeorge2, setShowGeorge2] = useState('hidden')
    const [ohmsLaw, setOhmsLaw] = useState('hidden')

    const [playIntro] = useSound(Intro, {
        onend: () => {
            setIsIntroOver(true)
            setIsOn(true)
        }
    })

    const [playAnswer] = useSound(Answer, {
        onend: () => {
            setIsAnswerPlaying(false)
            setIsGeorgePlaying(true)
        }
    })

    const [playQuestion] = useSound(Question, {
        onend: () => {
            setIsQuestionPlaying(false)
            setIsAnswerPlaying(true)
        }
    })
    const [playGeorge] = useSound(George, {
        onend: () => {
            setIsOn(false)
        }
    })

    useEffect(() => {
        const timeout = setTimeout(() => {
            playIntro();
            setIsOn(true);
        }, 1000);
        return () => {
            clearTimeout(timeout)
        }
    }, [playIntro, setIsOn])

    useEffect(() => {
        if (isIntroOver) {
            setShowVideo(true);
        }
    }, [setShowVideo, isIntroOver])


    useEffect(() => {
        if (isAnswerPlaying) {
            playAnswer()
        }
    }, [isAnswerPlaying, playAnswer])

    useEffect(() => {
        if (isGeorgePlaying) {
            playGeorge()
            setTimeout(() => {
                setShowGeorge('animate__animated animate__backInDown')
                setShowGeorge2('animate__animated animate__backInDown')
            }, 900);
            setTimeout(() => {
                setShowGeorge('hidden')
                setOhmsLaw('animate__animated animate__backInDown animate__delay-3s')
            }, 4000);

            setTimeout(() => {
                setOhmsLaw('hidden')
                setShowGeorge2('hidden')
            }, 17000);
        }
    }, [isGeorgePlaying, playGeorge])


    return (
        <>
            <div className="mx-5 text-[#efe3d9] h-full flex justify-center flex-col font-normal">
                {!isIntroOver &&
                    <h3 className='p-4 lg:p-5 text-2xl w-[300px] sm:w-[600px] xl:w[800px] mx-auto lg:text-xl rounded-md bg-[#639e98] animate__animated animate__backInDown animate__slower'>
                        علاقة الجهد والتيار الكهربائي والمقاومة الكهربائية في دائرة كهربائية
                    </h3>
                }
                {(isIntroOver && showVideo) &&
                    <div className={`animate__animated animate__bounceInDown my-2 mx-auto`}>
                        <div className='player-wrapper mx-5'>
                            <ReactPlayer
                                url={'videos/slide5.mp4'}
                                width="100%"
                                height="100%"
                                controls
                                onEnded={() => { setShowVideo(false); setIsQuestionPlaying(true); playQuestion() }}
                                playing={showVideo}
                            />
                        </div>
                    </div>
                }

                {isQuestionPlaying &&
                    <h3 className='p-4 lg:p-5 text-2xl mx-auto lg:text-xl rounded-md bg-[#639e98] shadow-md animate__animated animate__backInDown'>
                        ماذا استنتجت؟
                    </h3>
                }
                {isAnswerPlaying &&
                    <h3 className='mx-6 p-4 lg:p-5 text-2xl rounded-md bg-[#fc8b92] shadow-md animate__animated animate__backInDown'>
                        نلاحظ أن الماء الهابط من أعلى يخسر طاقة وضعه، وكلما زاد ذلك الارتفاع ازدادت ّطاقة الماء المتحولة، وتشبه زيادة الارتفاع في النموذج زيادة الجهد الكهربائي للبطارية في الدائرة الكهربائية. وكما أن تيار الماء يزداد بزيادة الارتفاع فإن تيار الكهرباء يزداد بزيادة الجهد الكهربائي للبطارية.
                    </h3>
                }
                {isGeorgePlaying &&
                    <>
                        <div className='mt-10'>
                            <img src="./lesson2/slide5/George.jpg" className={`w-72 mx-auto mb-2 ${showGeorge}`} alt="جورج سيمون أوم" />
                            <h3 className={`mx-6 p-4 lg:p-5 text-xl lg:text-2xl rounded-md bg-[#edac34] ${showGeorge2}`}>
                                وهذا ما توصل اليه العالم الالمانى
                                <b>
                                    &nbsp;
                                    جورج سيمون أوم
                                    &nbsp;
                                </b>
                                الذى اجرى تجربة لقياس أثر تغير الجهد الكهربائى فى التيار المار فى الدائرة
                                الكهربائية فوجد علاقة بسيطة بين الجهد والتيار والمقاومة فى الدائرة الكهربائية.
                            </h3>
                        </div>
                        <>
                            <h3 className={`p-2 mb-2 text-xl lg:text-2xl max-w-fit mx-auto my-2 rounded-md bg-[#fc8b92] shadow-md ${ohmsLaw}`}>
                                <img src="./lesson2/slide5/img.png" alt="" className={`w-72 mx-auto mb-2 ${ohmsLaw}`} />

                                <p className='mt-2 p-1' style={{ textShadow: 'unset' }}>
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
                        </>

                        <div className='mx-auto text-2xl w-80 h-80 lg:text-xl flex items-center lg:mt-16 animate__animated animate__backInDown animate__delay-17s'>
                            <button className='bg-[#639e98] block mx-auto py-5 px-8 rounded-md text-3xl shadow-md border-2 animate__animated animate__pulse animate__infinite' onClick={() => window.open('https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law_ar_SA.html')}>
                                التطبيق
                                <FontAwesomeIcon icon={faHandPointer} className="mr-2 " />
                            </button>
                        </div>
                    </>
                }
            </div>
        </>
    )
}
