import { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import WithTitle from "./Slides/WithTitle"
import 'animate.css';
import useSound from 'use-sound';
import myaudio from '../audios/test.mp3'
import { scene1 } from "../data/scene1";


const App = () => {
    const [currentSlide, setCurrentSlide] = useState(2)
    const [loaded, setLoaded] = useState(false)
    const [playAudio1, { stop: stopAudio1 }] = useSound(myaudio);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 2,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        rtl: true,
    })

    useEffect(() => {
        if (currentSlide === 3) {
            playAudio1();
        } else {
            stopAudio1()
        }

    }, [currentSlide, playAudio1, stopAudio1])




    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <WithTitle>
                        {currentSlide === 0 &&
                            <h1 className="animate__animated animate__fadeInDownBig">الأهدافُ التعليمية</h1>
                        }
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
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 2 &&
                            <div className="px-10 pt-10 text-sm">
                                {scene1.map((s) =>
                                    <p
                                        key={s.id}
                                        className={`animate__animated animate__fadeInDownBig animate__delay-${s.id - 1}s`}
                                    >
                                        {s.id}- {s.text}
                                    </p>

                                )}


                            </div>
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
                    </WithTitle>
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