import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

// simple Scenario Slide Imports
import CL1s0 from "./CL1s0";
import CL1s1 from "./CL1s1";
import CL1s2_0 from "./CL1s2_0";
import CL1s2_1 from "./CL1s2_1";
import CL1s2_2 from "./CL1s2_2";
import CL1s3 from "./CL1s3";

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
                    <WithTitle>
                        {currentSlide === 1 &&
                            <CL1s1 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 2 &&
                            <CL1s2_0 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 3 &&
                            <CL1s2_1 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 4 &&
                            <CL1s2_2 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 5 &&
                            <CL1s3 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>



                    {/* last Slide */}
                    <WithTitle>
                        {currentSlide === 6 &&
                            <button className=" p-3 rounded-lg bg-blue-300" onClick={() => navigate("/StudentHome")}>العودة الى القائمة الرئيسية</button>
                        }
                    </WithTitle>

                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) => {
                                // !isAudioOn
                                if (true) {
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
                                // !isAudioOn
                                if (true) {
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