import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import WithTitle from "../../../Slides/WithTitle"
import 'animate.css';
import { scene1 } from "../../../../data/scene1";

// Audios imports
import useSound from 'use-sound';
import slideAudio0 from "../../../../audios/simpleScenarioAudios/lesson1/slide1.mp3"



import WithVideo from "../../../Slides/WithVideo";
import WithImageAndTab from "../../../Slides/WithImageAndTab";

export default function SimpleScenarioLesson1() {
    let navigate = useNavigate();


    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const [playAudio0, { stop: stopAudio0 }] = useSound(slideAudio0);

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
                    </WithTitle>
                    {/* <WithTitle>
                        {currentSlide === 2 &&
                            // <div className="text-xl" dangerouslySetInnerHTML={{ __html: slide2Word }} />
                        }
                    </WithTitle> */}

                    < WithTitle >
                        {currentSlide === 2 &&
                            <h3 className="pr-5 text-3xl">
                                <span className="animate__animated animate__fadeInDownBig animate__delay-1s"> علاقة</span>
                                <span className="animate__animated animate__fadeInDownBig animate__delay-1s"> الجهد</span>
                                <span className="animate__animated animate__fadeInDownBig animate__delay-2s"> والتيار الكهربائي</span>
                                <span className="animate__animated animate__fadeInDownBig animate__delay-3s"> والمقاومة الكهربائية</span>
                                <span className="animate__animated animate__fadeInDownBig animate__delay-5s animate__slower"> في الدائرة الكهربائية</span>
                            </h3>
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 3 &&
                            <button className=" p-3 rounded-lg bg-blue-300" onClick={() => navigate("/StudentHome")}>العودة الى القائمة الرئيسية</button>
                        }
                    </WithTitle>

                    {/* <WithImageAndTab currentSlide={currentSlide} src="/img-1.png" tab="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html" /> */}
                    {/* <WithVideo currentSlide={currentSlide} src="https://www.youtube.com/embed/18u2WjUxN7Q" /> */}

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



    function Arrow(props) {
        // console.log(props.disabeld)
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
}