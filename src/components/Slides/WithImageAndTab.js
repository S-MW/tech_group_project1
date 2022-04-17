import { useEffect, useState } from "react"

export default function WithImageAndTab({ currentSlide, src, tab }) {
    console.log(currentSlide)
    const [showLab, setShowLab] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLab(true)
        }, 5000);

        return () => {
            clearTimeout(timeout)
        }
    }, [])


    return (
        <div className={`keen-slider__slide number-slide`}>
            {currentSlide === 4 &&
                <div>
                    <img src={src} alt="" className="animate__animated animate__bounceInDown" />
                    {showLab &&
                        <div className="animate__animated animate__bounceInDown">
                            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => window.open(tab)}>
                                جرب بنفسك
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    )
}
