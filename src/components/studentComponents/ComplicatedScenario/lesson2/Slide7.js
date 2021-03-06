import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import Audio from "../../../../audios/complicatedScenarioAudios/lesson2/slide7/audio.mp3"
import Intro from "../../../../audios/complicatedScenarioAudios/lesson2/slide7/intro.mp3"

export default function Index({ setIsOn }) {
    const [isIntroOver, setIsIntroOver] = useState(false)
    const [introTitle, setIntroTitle] = useState('animate__animated animate__backInDown')
    const [tomasClass, setTomasClass] = useState('hidden')
    const [qClass, setqClass] = useState('hidden')
    const [lampClass, setLampClass] = useState('hidden')
    const [phonographClass, setPhonographClass] = useState('hidden')
    const [cameraClass, setCameraClass] = useState('hidden')

    const [playAudio] = useSound(Audio, {
        onend: () => {
            setIsOn(false);
        }
    })

    const [plaIntro] = useSound(Intro, {
        onend: () => {
            setIsIntroOver(true)
        }
    })



    useEffect(() => {
        if (!isIntroOver) {
            plaIntro()
            setIsOn(true);
        } else {
            playAudio()
        }

        const introtimeout = setTimeout(() => {
            if (isIntroOver) {
                setIntroTitle('animate__animated animate__backOutUp')
                setTimeout(() => {
                    setIntroTitle('hidden')
                    setqClass('animate__animated animate__backInDown')
                    setTomasClass('animate__animated animate__backInDown animate__delay-4s')
                }, 500);
            }
        }, 1000);

        const lampTimeout = setTimeout(() => {
            if (isIntroOver) {
                setTomasClass('animate__animated animate__backOutUp')
                setqClass('animate__animated animate__backOutUp')
                setTimeout(() => {
                    setTomasClass('hidden')
                    setqClass('hidden')
                    setLampClass('animate__animated animate__fadeInRightBig')
                    setPhonographClass('animate__animated animate__fadeInRightBig animate__delay-2s')
                    setCameraClass('animate__animated animate__fadeInRightBig animate__delay-4s')
                }, 500);
            }
        }, 14000);
        return () => {
            clearTimeout(introtimeout)
            clearTimeout(lampTimeout)
        }
    }, [playAudio, setIsOn, isIntroOver, plaIntro])

    return (
        <>
            <div className="mx-8 text-[#efe3d9] h-full flex justify-center flex-col font-normal w-4/6">
                <h3 className={`p-2 lg:p-5 text-2xl max-w-fit mx-auto lg:text-4xl rounded-md bg-[#639e98] ${introTitle}`}>
                    ?????????? ???? ??????????????
                </h3>
                <h3 className={`p-4 lg:p-5 text-xl max-w-fit shadow-md mx-auto md:text-3xl rounded-md bg-[#fa976d] ${qClass}`}>
                    ???? ???? ?????????? ?????????????? ????????????????????
                </h3>

                <div className={`bg-white max-w-fit mx-auto p-2 mt-4 shadow-md ${tomasClass}`}>
                    <img src="./lesson2/slide7/c/tomas.png" className='mx-auto w-72' alt="???????? ???????????? ?????????? ????????????" />
                    <p className='text-black md:text-xl'>???????????? ?????????? ???????????? 1847??-1913??</p>
                </div>

                <div className='flex justify-between flex-wrap md:mt-5 md:mx-auto md:w-full'>
                    <div className={`bg-white max-w-fit p-2 mt-4 shadow-md mx-auto md:mx-0 ${lampClass}`}>
                        <img src="./lesson2/slide7/c/lamp.jpg" className='mx-auto w-28 md:w-32' alt="???????? ?????????????? ??????????????????" />
                        <p className='text-black md:text-xl'>?????????????? ??????????????????</p>
                    </div>

                    <div className={`bg-white max-w-fit p-2 mt-4 shadow-md mx-auto md:mx-0 ${phonographClass}`}>
                        <img src="./lesson2/slide7/c/phonograph.jpg" className='mx-auto w-28 md:w-32' alt="???????? ???????? ????????????????????" />
                        <p className='text-black md:text-xl'>???????? ????????????????????</p>
                    </div>

                    <div className={`bg-white max-w-fit p-2 mt-4 shadow-md mx-auto md:mx-0 ${cameraClass}`}>
                        <img src="./lesson2/slide7/c/camera.jpg" className='mx-auto w-28 md:w-32' alt="?????? ?????????????? ????????????????????." />
                        <p className='text-black md:text-xl'>?????? ?????????????? ????????????????????.</p>
                    </div>
                </div>

            </div>
        </>
    )
}
