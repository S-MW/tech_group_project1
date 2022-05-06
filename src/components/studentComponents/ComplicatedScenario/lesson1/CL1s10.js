import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio10 from "../../../../audios/complicatedScenarioAudios/lesson1/slide10.mp3"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-regular-svg-icons'

function CL1s10(props) {

    

    const [question1, setQuestion1] = useState(`<div class='text-2xl lg:text-xl flex items-center animate__animated animate__backInDown'>
    <button class='bg-[#fc8b92] block mx-auto py-3 px-5 rounded-md text-3xl shadow-md border-2 animate__animated animate__pulse animate__infinite'>
        الجواب
        <FontAwesomeIcon icon={faHandPointer} class="mr-2 " />
    </button>
</div>`)

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
            <div className='absolute top-5 right-5 animate__animated animate__bounceInDown text-sm my-2 w-fit text-center p-3 rounded-md bg-[#fa976d]
                md:text-lg
                lg:text-3xl'>
                <h2 className=''>التفكير الناقد</h2>
            </div>

            <table className="table-auto  animate__animated animate__bounceInDown animate__delay-1s w-2/3 text-sm my-2 text-center p-3 rounded-md bg-[#639e98]
                md:text-lg
                lg:text-3xl">
                <thead>
                    <tr>
                        <th className="">السؤال</th>
                        <th className="">الجواب</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='animate__animated animate__fadeInDownBig'>
                        <td className="animate__animated animate__bounceInDown animate__delay-1s"> قارن بين القوة التى أثر بها البالون فى القصاصات ، والقوة التى أثر بها أحد البالونين فى البالون الآخر.</td>
                        <td className="" >
                            <div onClick={() => {
                                setQuestion1(`<h2 class='text-base text-white'>لم يكن للبالون في الخطوة الثانية أي تأثير في قصاصات الورق، في حين جذب البالون في الخطوة 4 قصاصات الورق. أما في الخطوة 5 فقد تنافر البالونان بعضهما مع بعض.</h2>`)
                            }} dangerouslySetInnerHTML={{ __html: question1 }} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default CL1s10;