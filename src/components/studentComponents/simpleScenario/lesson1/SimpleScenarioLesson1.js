import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

// simple Scenario Slide Imports
import SL1s0 from "./SL1s0";
import SL1s1 from "./SL1s1";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import 'animate.css';
import { scene1 } from "../../../../data/scene1";


import WithTitle from "../../../Slides/WithTitle"
import WithVideo from "../../../Slides/WithVideo";
import WithImageAndTab from "../../../Slides/WithImageAndTab";

export default function SimpleScenarioLesson1() {
    let navigate = useNavigate();

    const [isAudioOn, setIsAudioOn] = useState(false)

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

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
                            <SL1s0 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 1 &&
                            <SL1s1 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn}/>
                        }
                    </WithTitle>

                    < WithTitle >
                        {currentSlide === 2 &&
                            <h1>test</h1>
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 3 &&
                            <button className=" p-3 rounded-lg bg-blue-300" onClick={() => navigate("/StudentHome")}>العودة الى القائمة الرئيسية</button>
                        }
                    </WithTitle>


                    {/*  for testing */}
                    {/* <WithTitle>
                        {currentSlide === 2 &&
                            <div className="text-xl" dangerouslySetInnerHTML={{ __html: slide2Word }} />
                        }
                    </WithTitle> */}
                    {/* <WithImageAndTab currentSlide={currentSlide} src="/img-1.png" tab="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html" /> */}
                    {/* <WithVideo currentSlide={currentSlide} src="https://www.youtube.com/embed/18u2WjUxN7Q" /> */}

                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) => 
                            {
                                if (!isAudioOn) {
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                            }
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />

                        <Arrow
                            onClick={(e) =>
                                {
                                    if (!isAudioOn) {
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                }
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