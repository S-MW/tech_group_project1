import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio2 from "../../../../audios/simpleScenarioAudios/lesson1/slide2.mp3"

export default function SL1s2(props) {


  const [playAudio2, { stop: stopAudio2 }] = useSound(slideAudio2, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });

  useEffect(() => {
    //console.info('Sound Start!');
    playAudio2();
    props.setIsAudioOn(true);
  }, [playAudio2]);


  return (
    <>
      <div className="mx-8 text-[#efe3d9] lg:w-1/2 text-[1.125rem] lg:text-2xl font-semibold">
        <div className="bg-[#639e98] p-2 text-center sm:text-right rounded-md mb-2 animate__animated animate__zoomIn ">تصف كيف يمكن أن يصبح جسم ما مشحوناً كهربائياً</div>
        <div className="bg-[#fc8b92] p-2 text-center sm:text-right rounded-md mb-2 animate__animated animate__zoomIn animate__delay-5s">توضح كيف تؤثر شحنة كهربائية في شحنة كهربائية أخرى</div>
        <div className="bg-[#edac34] p-2 text-center sm:text-right rounded-md mb-2 animate__animated animate__zoomIn animate__delay-11s">تميز بين المواد الموصلة للكهرباء والمواد العازلة لها</div>
        <div className="bg-[#fa976d] p-2 text-center sm:text-right rounded-md mb-2 animate__animated animate__zoomIn animate__delay-16s">تصف كيف يحدث التفريغ الكهربائي (البرق عل سبيل المثال)</div>
        <div className="bg-[#639e98] p-2 text-center sm:text-right rounded-md mb-2 animate__animated animate__zoomIn animate__delay-22s">تربط بين الجهد الكهربائي، ومقدار الطاقة التي ينقلها التيار الكهربائي</div>
        <div className="bg-[#fc8b92] p-2 text-center sm:text-right rounded-md mb-2 animate__animated animate__zoomIn animate__delay-29s">تصف البطارية وكيف تولد تياراً كهربائياً</div>
        <div className="bg-[#edac34] p-1 text-center sm:text-right rounded-md animate__animated animate__zoomIn animate__delay-34s">توضح المقاومة الكهربائية</div>
      </div>
    </>
  );
}
