import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio10 from "../../../../audios/complicatedScenarioAudios/lesson1/slide10.mp3"

function CL1s10(props) {

    const [question1, setQuestion1] = useState(`<button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
     focus:ring-indigo-500 animate__animated animate__fadeInDownBig animate__delay-2s">
    الجواب
  </button>`)

    const [playAudio10, { stop: stopAudio10 }] = useSound(slideAudio10, {
        onend: () => {
            console.info('Sound ended!');
            props.setIsAudioOn(false);
        },
    });

    useEffect(() => {
        console.info('Sound Start!');
        playAudio10();
        props.setIsAudioOn(true);
    }, [playAudio10]);

    return (
        <>
            <div className='absolute top-5 right-5 animate__animated animate__bounceInDown'>
                <h2 className='text-4xl'>التفكير الناقد</h2>
            </div>

            <div className='mt-3'>
                <table className="table-auto border-collapse  border-2 border-black animate__animated animate__bounceInDown animate__delay-1s">
                    <thead>
                        <tr>
                            <th className="border-2 border-black">السؤال</th>
                            <th className="border-2 border-black">الجواب</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='animate__animated animate__fadeInDownBig'>
                            <td className="border-2  border-black animate__animated animate__bounceInDown animate__delay-1s"> قارن بين القوة التى أثر بها البالون فى القصاصات ، والقوة التى أثر بها أحد البالونين فى البالون الآخر.</td>
                            <td className="border-2  border-black" >
                                <div onClick={() => {
                                    setQuestion1(`<h2 class='text-base text-blue-600'>لم يكن للبالون في الخطوة الثانية أي تأثير في قصاصات الورق، في حين جذب البالون في الخطوة 4 قصاصات الورق. أما في الخطوة 5 فقد تنافر البالونان بعضهما مع بعض.</h2>`)
                                }} dangerouslySetInnerHTML={{ __html: question1 }} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CL1s10;