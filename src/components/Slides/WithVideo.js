
export default function WithVideo({ currentSlide, src }) {
    return (
        <div className={`keen-slider__slide number-slide`}>
            {currentSlide === 4 &&
                <div className="animate__animated animate__bounceInDown m-10 xl:m-0">
                    <iframe className="w-[400px] h-[300px] md:w-[600px] md:h-[400px] xl:w-[800px] xl:h-[600px]" src={src} title="YouTube video player" allow="encrypted-media; picture-in-picture;"></iframe>
                </div>
            }
        </div>
    )
}
