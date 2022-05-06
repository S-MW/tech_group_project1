import { useEffect } from 'react';
import useSound from 'use-sound';
import Audio from "../../../../audios/simpleScenarioAudios/lesson2/slide4.mp3"

export default function Index({ setIsOn }) {

    const [playAudio] = useSound(Audio, {
        onend: () => {
            setIsOn(false);
        }
    })

    useEffect(() => {
        playAudio();
        setIsOn(true);
    }, [playAudio, setIsOn])

    return (
        <>
            <div className="mx-8 text-[#efe3d9] lg:w-1/2 text-xl lg:text-2xl">
                <h3 className='p-5 rounded-md my-2 bg-[#639e98] animate__animated animate__zoomIn'>
                    -	توضح العلاقة بين الجهد والتيار الكهربائي والمقاومة الكهربائية في دائرة كهربائية.
                </h3>
                <h3 className='p-5 rounded-md my-3 bg-[#fa976d] animate__animated animate__zoomIn animate__delay-10s'>-	تستكشــف الفرق بيــن التوصيل علــى التوالــي والتوصيــل على التوازي</h3>
                <h3 className='p-5 rounded-md my-2 bg-[#fc8b92] animate__animated animate__zoomIn animate__delay-17s'>-	تحســب الـقـدرة الكـهـربائـية المستهلكة في الدائرة</h3>
                <h3 className='p-5 rounded-md my-2 bg-[#edac34] animate__animated animate__zoomIn animate__delay-22s'>- توضحّ كيفية تجـــنب مخـــاطر الصدمة الكهربائية.</h3>
            </div>
        </>
    )
}