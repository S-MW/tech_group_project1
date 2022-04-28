import { useEffect } from 'react';
import useSound from 'use-sound';
import Audio from "../../../../audios/simpleScenarioAudios/lesson1/slide1.mp3"

export default function Slide3({ setIsOn, currentSlide }) {


    const [playAudio] = useSound(Audio, {
        onend: () => {
            setIsOn(false);
        }
    })

    useEffect(() => {
        if (currentSlide === 3) {
            playAudio();
            setIsOn(true);
        }
    }, [playAudio, setIsOn, currentSlide])

    return (
        <>
            <div className="mx-8 text-[#efe3d9] lg:w-1/2 text-xl lg:text-2xl">
                <h3 className='p-5 rounded-md my-2 bg-[#639e98] animate__animated animate__zoomIn'>
                    -	توضح العلاقة بين الجهد والتيار الكهربائي والمقاومة الكهربائية في دائرة كهربائية.
                </h3>
                <h3 className='p-5 rounded-md my-3 bg-[#fa976d] animate__animated animate__zoomIn animate__delay-5s'>-	تستكشــف الفرق بيــن التوصيل علــى التوالــي والتوصيــل على التوازي</h3>
                <h3 className='p-5 rounded-md my-2 bg-[#fc8b92] animate__animated animate__zoomIn animate__delay-10s'>-	تحســب الـقـدرة الكـهـربائـية المستهلكة في الدائرة</h3>
                <h3 className='p-5 rounded-md my-2 bg-[#edac34] animate__animated animate__zoomIn animate__delay-15s'>- توضحّ كيفية تجـــنب مخـــاطر الصدمة الكهربائية.</h3>
            </div>
        </>
    )
}

/*
text #efe3d9
bg1 #fa976d
bg2 #fc8b92
bg3 #edac34
bg4 #639e98
bg5 #96d2ca
*/