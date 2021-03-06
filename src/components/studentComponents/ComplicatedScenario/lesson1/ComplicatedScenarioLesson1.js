import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

// simple Scenario Slide Imports
import CL1s0 from "./CL1s0";
import CL1s1 from "./CL1s1";
import CL1s2 from "./CL1s2";
import CL1s3 from "./CL1s3";
import CL1s4 from "./CL1s4";
import CL1s5 from "./CL1s5";
import CL1s6 from "./CL1s6";
import CL1s7 from "./CL1s7";
import CL1s8 from "./CL1s8";
import CL1s9 from "./CL1s9";
import CL1s10 from "./CL1s10";
import CL1s11 from "./CL1s11";
import CL1s12 from "./CL1s12";
import CL1s13 from "./CL1s13";
import CL1s14 from "./CL1s14";
import CL1s15 from "./CL1s15";
import CL1s16 from "./CL1s16";
import CL1s17 from "./CL1s17";
import CL1s18 from "./CL1s18";
import CL1s19 from "./CL1s19";
import CL1s20 from "./CL1s20";
import CL1s21 from "./CL1s21";
import CL1s22 from "./CL1s22";
import CL1s23 from "./CL1s23";
import CL1s24 from "./CL1s24";
import CL1s25 from "./CL1s25";
import CL1s26 from "./CL1s26";
import CL1s27 from "./CL1s27";

import axios from "axios"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import 'animate.css';

import WithTitle from "../../../Slides/WithTitle"

export default function ComplicatedScenarioLesson1() {

    let student = JSON.parse(localStorage.getItem("studentData"))
    let navigate = useNavigate();

    const [isAudioOn, setIsAudioOn] = useState(false)

    const [currentSlide, setCurrentSlide] = useState(student.progressLesson1Slide == null ? 0 : student.progressLesson1Slide)
    const [loaded, setLoaded] = useState(false)

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: student.progressLesson1Slide == null ? 0 : student.progressLesson1Slide,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        rtl: true,
        drag: !isAudioOn
    })

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }

    let trackData = {
        "progressLesson1Slide": currentSlide == 28 ? 0 : currentSlide,
        "isCompletedLesson1": currentSlide == 28 ? true : student.isCompletedLesson1
    }


    useEffect(() => {
        axios
            .post(`https://api.abedahstem.com/api/user/update`, trackData, config)
            .then(response => {
                let student = {
                    name: response.data.user.name, sinarioType: response.data.user.pattern, isCompletedLesson1: parseInt(response.data.user.isCompletedLesson1),
                    progressLesson1Slide: parseInt(response.data.user.progressLesson1Slide),
                    isCompletedLesson2: parseInt(response.data.user.isCompletedLesson2), progressLesson2Slide: parseInt(response.data.user.progressLesson2Slide)
                }
                localStorage.setItem("studentData", JSON.stringify(student))
            })
            .catch(error => {
                localStorage.clear();
                navigate("/")
            }
            )
    }, [currentSlide]);

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
                            <CL1s2 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 3 &&
                            <CL1s3 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 4 &&
                            <CL1s4 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 5 &&
                            <CL1s5 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 6 &&
                            <CL1s6 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 7 &&
                            <CL1s7 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 8 &&
                            <CL1s8 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 9 &&
                            <CL1s9 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 10 &&
                            <CL1s10 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 11 &&
                            <CL1s11 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 12 &&
                            <CL1s12 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 13 &&
                            <CL1s13 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 14 &&
                            <CL1s14 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 15 &&
                            <CL1s15 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 16 &&
                            <CL1s16 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 17 &&
                            <CL1s17 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 18 &&
                            <CL1s18 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 19 &&
                            <CL1s19 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 20 &&
                            <CL1s20 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 21 &&
                            <CL1s21 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 22 &&
                            <CL1s22 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 23 &&
                            <CL1s23 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 24 &&
                            <CL1s24 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 25 &&
                            <CL1s25 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 26 &&
                            <CL1s26 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 27 &&
                            <CL1s27 isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />
                        }
                    </WithTitle>
                    <WithTitle>
                        {currentSlide === 28 &&
                            <button className="text-3xl border-2 border-white mx-8 p-3 rounded-md bg-[#fa976d]" onClick={() => navigate("/StudentHome")}>???????????? ?????? ?????????????? ????????????????</button>
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
                                instanceRef.current.track.details.slides.length - 1 || isAudioOn
                            }
                        />

                        <Arrow
                            onClick={(e) => {
                                if (!isAudioOn) {
                                    e.stopPropagation() || instanceRef.current?.prev()
                                }
                            }
                            }
                            disabled={currentSlide === 0 || isAudioOn}
                        />
                    </>
                )}
            </div>
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