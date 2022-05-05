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
      <div className="grid grid-cols-1 text-sm w-2/3 my-3
            md:text-lg
            lg:text-2xl">
        <div className="bg-[#639e98] animate__animated animate__zoomIn p-2 rounded-md my-1
        md:text-lg md:my-2 md:p-5
        lg:text-2xl">تصف كيف يمكن أن يصبح جسم ما مشحوناً كهربائياً</div>
        <div className="bg-[#fc8b92] animate__animated animate__zoomIn animate__delay-5s  p-2 rounded-md my-1
        md:text-lg md:my-2 md:p-5
        lg:text-2xl">توضح كيف تؤثر شحنة كهربائية في شحنة كهربائية أخرى</div>
        <div className=" bg-[#edac34] animate__animated animate__zoomIn animate__delay-11s  p-2 rounded-md my-1
        md:text-lg md:my-2 md:p-5
        lg:text-2xl">تميز بين المواد الموصلة للكهرباء والمواد العازلة لها</div>
        <div className=" bg-[#fa976d] animate__animated animate__zoomIn animate__delay-16s  p-2 rounded-md my-1
        md:text-lg md:my-2 md:p-5
        lg:text-2xl">تصف كيف يحدث التفريغ الكهربائي (البرق عل سبيل المثال)</div>
        <div className=" bg-[#96d2ca] animate__animated animate__zoomIn animate__delay-22s  p-2 rounded-md my-1
        md:text-lg md:my-2 md:p-5
        lg:text-2xl">تربط بين الجهد الكهربائي، ومقدار الطاقة التي ينقلها التيار الكهربائي</div>
        <div className=" bg-[#a19a8c] animate__animated animate__zoomIn animate__delay-29s  p-2 rounded-md my-1
        md:text-lg md:my-2 md:p-5
        lg:text-2xl">تصف البطارية وكيف تولد تياراً كهربائياً</div>
        <div className=" bg-[#8c7c5e] animate__animated animate__zoomIn animate__delay-34s  p-2 rounded-md my-1
        md:text-lg md:my-2 md:p-5
        lg:text-2xl">توضح المقاومة الكهربائية</div>
      </div>
    </>
  );
}
