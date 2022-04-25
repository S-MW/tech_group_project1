import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

// simple Scenario Slide Imports
import CL1s0 from "./CL1s0";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import 'animate.css';

import WithTitle from "../../../Slides/WithTitle"

export default function ComplicatedScenarioLesson1() {
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
                            <CL1s0 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                  


                    {/* last Slide */}
                    <WithTitle>
                        {currentSlide === 1 &&
                            <button className=" p-3 rounded-lg bg-blue-300" onClick={() => navigate("/StudentHome")}>العودة الى القائمة الرئيسية</button>
                        }
                    </WithTitle>

                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) => {
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
                            onClick={(e) => {
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
                                    // onClick={() => {
                                    //     instanceRef.current?.moveToIdx(idx)
                                    // }}
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