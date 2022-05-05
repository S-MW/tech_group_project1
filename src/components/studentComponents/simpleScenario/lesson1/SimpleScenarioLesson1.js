import { useState } from "react"
import { useNavigate } from "react-router-dom";

// simple Scenario Slide Imports
import SL1s0 from "./SL1s0";
import SL1s1 from "./SL1s1";
import SL1s2 from "./SL1s2";
import SL1s3 from "./SL1s3";
import SL1s4 from "./SL1s4";
import SL1s5 from "./SL1s5";
import SL1s6 from "./SL1s6";
import SL1s7 from "./SL1s7";
import SL1s8 from "./SL1s8";
import SL1s9 from "./SL1s9";
import SL1s10 from "./SL1s10";
import SL1s11 from "./SL1s11";
import SL1s12 from "./SL1s12";
import SL1s13 from "./SL1s13";
import SL1s14 from "./SL1s14";
import SL1s15 from "./SL1s15";
import SL1s16 from "./SL1s16";
import SL1s17 from "./SL1s17";
import SL1s18 from "./SL1s18";
import SL1s19 from "./SL1s19";
import SL1s20 from "./SL1s20";
import SL1s21 from "./SL1s21";
import SL1s22 from "./SL1s22";
import SL1s23 from "./SL1s23";
import SL1s24 from "./SL1s24";
import SL1s25 from "./SL1s25";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import 'animate.css';

import WithTitle from "../../../Slides/WithTitle"

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
        drag: !isAudioOn
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
                            <SL1s1 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>

                    < WithTitle >
                        {currentSlide === 2 &&
                            <SL1s2 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 3 &&
                            <SL1s3 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 4 &&
                            <SL1s4 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 5 &&
                            <SL1s5 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 6 &&
                            <SL1s6 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 7 &&
                            <SL1s7 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 8 &&
                            <SL1s8 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 9 &&
                            <SL1s9 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 10 &&
                            <SL1s10 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 11 &&
                            <SL1s11 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 12 &&
                            <SL1s12 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 13 &&
                            <SL1s13 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 14 &&
                            <SL1s14 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 15 &&
                            <SL1s15 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 16 &&
                            <SL1s16 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 17 &&
                            <SL1s17 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 18 &&
                            <SL1s18 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 19 &&
                            <SL1s19 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 20 &&
                            <SL1s20 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 21 &&
                            <SL1s21 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 22 &&
                            <SL1s22 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 23 &&
                            <SL1s23 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 24 &&
                            <SL1s24 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    < WithTitle >
                        {currentSlide === 25 &&
                            <SL1s25 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 26 &&
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
                                instanceRef.current.track.details.slides.length - 1 || isAudioOn
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
                            disabled={currentSlide === 0 || isAudioOn}
                        />
                    </>
                )}
            </div>
            {/* {
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
            } */}
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