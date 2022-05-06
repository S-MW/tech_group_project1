import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import 'animate.css';
import WithTitle from "../../../Slides/WithTitle"
import Intro from "./intro";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";
import Slide7 from "./Slide7";
import Slide8 from "./Slide8";
import Slide9 from "./Slide9";
import Slide10 from "./Slide10";
import Slide11 from "./Slide11";
import Slide12 from "./Slide12";
import Slide13 from "./Slide13";
import Slide14 from "./Slide14";
import Slide15 from "./Slide15";
import Slide16 from "./Slide16";
import Slide17 from "./Slide17";



export default function Index() {

    const [isOn, setIsOn] = useState(false)

    const [currentSlide, setCurrentSlide] = useState(4)
    const [loaded, setLoaded] = useState(false)

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 4,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        rtl: true,
        drag: !isOn
    })

    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <WithTitle>
                        {currentSlide === 0 &&
                            <Intro isOn={isOn} setIsOn={setIsOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 1 &&
                            <Slide2 isOn={isOn} setIsOn={setIsOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 2 &&
                            <Slide3 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 3 &&
                            <Slide4 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 4 &&
                            <Slide5 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 5 &&
                            <Slide6 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 6 &&
                            <Slide7 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 7 &&
                            <Slide8 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 8 &&
                            <Slide9 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 9 &&
                            <Slide10 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 10 &&
                            <Slide11 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 11 &&
                            <Slide12 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 12 &&
                            <Slide13 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 13 &&
                            <Slide14 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 14 &&
                            <Slide15 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 15 &&
                            <Slide16 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 16 &&
                            <Slide17 isOn={isOn} setIsOn={setIsOn} currentSlide={currentSlide} />
                        }
                    </WithTitle>

                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) => {
                                if (!isOn) {
                                    e.stopPropagation() || instanceRef.current?.next()
                                }
                            }
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1 || isOn
                            }
                        />

                        <Arrow
                            onClick={(e) => {
                                if (!isOn) {
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                            }
                            }
                            disabled={currentSlide === 0 || isOn}
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
                                        if (!isOn) {
                                            instanceRef.current?.moveToIdx(idx)
                                        }
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