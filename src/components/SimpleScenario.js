import { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import WithTitle from "./Slides/WithTitle"
import 'animate.css';
import { scene1 } from "../data/scene1";

// Audios imports
import useSound from 'use-sound';

import slideAudio0 from '../audios/slide1.mp3'
import slideAudio1 from '../audios/slide2.mp3'

import slideAudio2 from '../audios/slide3.mp3'
import slideAudio2_0 from '../audios/slide3-0.mp3'
import slideAudio2_1 from '../audios/slide3-1.mp3'
import slideAudio2_2 from '../audios/slide3-2.mp3'


import slideAudio4 from '../audios/test.mp3'
import WithVideo from "./Slides/WithVideo";
import WithImageAndTab from "./Slides/WithImageAndTab";


const App = () => {

    let slide2WordTimers = [4000, 4000, 4000, 4000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,]

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const [slide2Word, setSlide2Word] = useState()


    const [playAudio0, { stop: stopAudio0 }] = useSound(slideAudio0);
    const [playAudio1, { stop: stopAudio1 }] = useSound(slideAudio1);

    const [playAudio2, { stop: stopAudio2 }] = useSound(slideAudio2);
    const [playAudio2_0, { stop: stopAudio2_0 }] = useSound(slideAudio2_0);
    const [playAudio2_1, { stop: stopAudio2_1 }] = useSound(slideAudio2_1);
    const [playAudio2_2, { stop: stopAudio2_2 }] = useSound(slideAudio2_2);

    const [playAudio4, { stop: stopAudio4 }] = useSound(slideAudio4);


    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        rtl: true,
    })

    let slide2Audios = [playAudio2_0, playAudio2_1, playAudio2_2]

    useEffect(() => {

        setTimeout(() => {
            playAudio0();

        }, 1000);
    }, [])

    useEffect(() => {
        if (currentSlide == 2) {

            let timeToshow = 1;
            for (let i = 0; i <= scene1.length - 1; i++) {
                (
                    function () {
                        let testTime = setTimeout(() => {
                            setSlide2Word(`<p class="animate__animated animate__fadeInDownBig" >${scene1[i].id + " - " + scene1[i].text}</p>`)
                            slide2Audios[i]();
                        }, timeToshow);
                        addTestTimeToLocalStorage(testTime);
                        timeToshow = timeToshow + slide2WordTimers[i];
                    })();
            }

        }
        else {
            removeTestTimeToLocalStorage()
        }
    }, [currentSlide])

    function removeTestTimeToLocalStorage() {
        if (localStorage.getItem('keys')) {
            var dd = localStorage.getItem('keys')
            let ddAfter = JSON.parse(dd)

            ddAfter.map((i, key) => {
                clearTimeout(i[0].keys);
            })
        }

        localStorage.removeItem("keys");
    }


    function addTestTimeToLocalStorage(testTime) {

        // make itme at the best format  
        var data = [[{ "keys": testTime }]]

        // get the localstorage data if any!
        if (localStorage.getItem('keys')) {
            // there are pervoues data

            // get the arrayDate form localstorage and push the new itme into it
            var theDataFromLocalStorage = localStorage.getItem('keys')
            let DataAfterParse
            DataAfterParse = JSON.parse(theDataFromLocalStorage)

            DataAfterParse.push([{ "keys": testTime }])

            localStorage.setItem("keys", JSON.stringify(DataAfterParse))
        }
        else {
            // there are no itmes , the first add 
            localStorage.setItem("keys", JSON.stringify(data))
        }
    }



    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <WithTitle>
                        {currentSlide === 0 &&
                            <h1 className="animate__animated animate__fadeInDownBig">الأهدافُ التعليمية</h1>
                        }
                        {currentSlide === 0 ? playAudio0() : stopAudio0()}
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 1 &&
                            <>
                                <h4 className="animate__animated animate__fadeInDownBig text-center text-6xl mx-10">عزيزتى الطالبة ،</h4>
                                <h4 className="animate__animated animate__fadeInDownBig animate__delay-1s text-center text-6xl mx-10">من المتوقع بعد انتهائك منْ هذا الدرس
                                    أنْ تكونى قادرة وبكفاءة على أنْ:
                                </h4>
                            </>
                        }
                        {currentSlide == 1 ? playAudio1() : stopAudio1()}
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 2 &&
                            <div className="text-xl" dangerouslySetInnerHTML={{ __html: slide2Word }} />

                        }
                    </WithTitle>

                    < WithTitle >
                        {currentSlide === 3 &&
                            <h3 className="pr-5 text-3xl">
                                <span className="animate__animated animate__fadeInDownBig animate__delay-1s"> علاقة</span>
                                <span className="animate__animated animate__fadeInDownBig animate__delay-1s"> الجهد</span>
                                <span className="animate__animated animate__fadeInDownBig animate__delay-2s"> والتيار الكهربائي</span>
                                <span className="animate__animated animate__fadeInDownBig animate__delay-3s"> والمقاومة الكهربائية</span>
                                <span className="animate__animated animate__fadeInDownBig animate__delay-5s animate__slower"> في الدائرة الكهربائية</span>
                            </h3>
                        }
                        {currentSlide == 3 ? playAudio4() : stopAudio4()}
                    </WithTitle>

                    <WithImageAndTab currentSlide={currentSlide} src="/img-1.png" tab="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html" />

                    <WithVideo currentSlide={currentSlide} src="https://www.youtube.com/embed/18u2WjUxN7Q" />

                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />
                    </>
                )}
            </div>
            {
                loaded && instanceRef.current && (
                    <div className="dots">
                        {[
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                        ].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx)
                                    }}
                                    className={"dot" + (currentSlide === idx ? " active" : "")}
                                ></button>
                            )
                        })}
                    </div>
                )
            }
        </>
    )
}

function Arrow(props) {
    console.log(props.disabeld)
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

export default App