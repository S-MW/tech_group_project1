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
      <ol className="list-decimal mx-8 text-base 
            md:text-lg
            lg:text-2xl lg:w-1/2">
        <li className="p-5 rounded-md my-2 bg-[#639e98] animate__animated animate__zoomIn ">تصف كيف يمكن أن يصبح جسم ما مشحوناً كهربائياً</li>
        <li className="p-5 rounded-md my-2 bg-[#fc8b92] animate__animated animate__zoomIn animate__delay-5s">توضح كيف تؤثر شحنة كهربائية في شحنة كهربائية أخرى</li>
        <li className="p-5 rounded-md my-2 bg-[#edac34] animate__animated animate__zoomIn animate__delay-11s">تميز بين المواد الموصلة للكهرباء والمواد العازلة لها</li>
        <li className="p-5 rounded-md my-2 bg-[#fa976d] animate__animated animate__zoomIn animate__delay-16s">تصف كيف يحدث التفريغ الكهربائي (البرق عل سبيل المثال)</li>
        <li className="p-5 rounded-md my-2 bg-[#96d2ca] animate__animated animate__zoomIn animate__delay-22s">تربط بين الجهد الكهربائي، ومقدار الطاقة التي ينقلها التيار الكهربائي.</li>
        <li className="p-5 rounded-md my-2 bg-[#a19a8c] animate__animated animate__zoomIn animate__delay-29s">تصف البطارية وكيف تولد تياراً كهربائياً</li>
        <li className="p-5 rounded-md my-2 bg-[#8c7c5e] animate__animated animate__zoomIn animate__delay-34s">توضح المقاومة الكهربائية</li>
      </ol>
    </>
  );
}
