import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio2 from "../../../../audios/simpleScenarioAudios/lesson1/slide2.mp3"

export default function SL1s2(props) {


    const [playAudio2, { stop: stopAudio2 }] = useSound(slideAudio2, {
        onend: () => {
          console.info('Sound ended!');
          props.setIsAudioOn(false);
        },
      });
    
      useEffect(() => {
        console.info('Sound Start!');
        playAudio2();
        props.setIsAudioOn(true);
      }, [playAudio2]);


    return (
        <>
            <ol className="list-decimal pr-5 text-3xl">
                <li className="animate__animated animate__fadeInDownBig ">تصف كيف يمكن أن يصبح جسم ما مشحوناً كهربائياً</li>
                <li className="animate__animated animate__fadeInDownBig animate__delay-5s">توضح كيف تؤثر شحنة كهربائية في شحنة كهربائية أخرى</li>
                <li className="animate__animated animate__fadeInDownBig animate__delay-11s">تميز بين المواد الموصلة للكهرباء والمواد العازلة لها</li>
                <li className="animate__animated animate__fadeInDownBig animate__delay-16s">تصف كيف يحدث التفريغ الكهربائي (البرق عل سبيل المثال)</li>
                <li className="animate__animated animate__fadeInDownBig animate__delay-22s">تربط بين الجهد الكهربائي، ومقدار الطاقة التي ينقلها التيار الكهربائي.</li>
                <li className="animate__animated animate__fadeInDownBig animate__delay-29s">تصف البطارية وكيف تولد تياراً كهربائياً</li>
                <li className="animate__animated animate__fadeInDownBig animate__delay-34s">توضح المقاومة الكهربائية</li>
            </ol>
        </>
    );
}
