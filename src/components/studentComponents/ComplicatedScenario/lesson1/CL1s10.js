import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio10 from "../../../../audios/complicatedScenarioAudios/lesson1/slide10.mp3"


function CL1s10(props) {



    const [showAnswer, setShowAnswer] = useState(false)

    const [playAudio10, { stop: stopAudio10 }] = useSound(slideAudio10, {
        onend: () => {
            //console.info('Sound ended!');
            props.setIsAudioOn(false);
        },
    });

    useEffect(() => {
        //console.info('Sound Start!');
        playAudio10();
        props.setIsAudioOn(true);
    }, [playAudio10]);

    return (
        <>
            <div className='absolute top-5 right-5 animate__animated animate__bounceInDown text-sm my-2 w-fit text-center p-3 rounded-md bg-[#639e98]
                md:text-lg
                lg:text-3xl'>
                <h2 className=''>التفكير الناقد</h2>
            </div>
            <div className="bg-[#fa976d] mx-8 p-2 text-xl md:text-3xl rounded mb-2 animate__animated animate__bounceInDown animate__delay-1s"> قارن بين القوة التى أثر بها البالون فى القصاصات ، والقوة التى أثر بها أحد البالونين فى البالون الآخر.</div>
            <div className='flex items-center animate__animated animate__backInDown animate__delay-1s'>
                <button
                    class='bg-[#fc8b92] block mx-auto py-2 px-6 rounded-md text-xl md:text-3xl shadow-md border-2'
                    onClick={() => setShowAnswer(true)}
                >
                    الجواب
                </button>
            </div>
            {showAnswer &&
                <h2 className='bg-[#639e98] p-2 text-xl animate__animated animate__backInDown md:text-2xl mx-8 rounded w-2/3 mt-2'>
                    لم يكن للبالون في الخطوة الثانية أي تأثير في قصاصات الورق، في حين جذب البالون في الخطوة 4 قصاصات الورق. أما في الخطوة 5 فقد تنافر البالونان بعضهما مع بعض.
                </h2>
            }
        </>
    );
}

export default CL1s10;