import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio10 from "../../../../audios/simpleScenarioAudios/lesson1/slide10.mp3"

export default function SL1s10(props) {


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
      <div className="grid grid-cols-1 text-sm w-2/3 my-3 justify-items-center
            md:text-lg
            lg:text-2xl">
        <div className="bg-[#639e98] animate__animated animate__zoomIn p-2 rounded-md my-1 w-fit
        md:text-lg md:my-2 md:p-5
        lg:text-2xl">
          <div className="grid grid-rows-2 grid-flow-col justify-items-center ">
            <div className='row-span-2 text-center mt-4'>المواد العازلة : هي المادة التي لا يمكن للإلكترونات الحركة فيها بسهولة.مثل البلاستيك والخشب</div>
            <div className='row-span-2'><img src="/slide10_0.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-32" /></div>
          </div>
        </div>
        <div className="bg-[#fc8b92] animate__animated animate__zoomIn animate__delay-8s p-2 rounded-md my-1 w-fit
        md:text-lg md:my-2 md:p-5
        lg:text-2xl">
          <div className="grid grid-rows-2 grid-flow-col justify-items-center ">
            <div className='row-span-2 text-center mt-4'> المواد الموصلة :  هي المواد التي يمكن للإلكترونات الحركة فيها بسهولة.مثل الذهب و النحاس</div>
            <div className='row-span-2'><img src="/slide10_1.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-32" /></div>
          </div>
        </div>
        <div className="bg-[#a19a8c]  animate__animated animate__zoomIn animate__delay-16s p-2 rounded-md my-1 w-fit
        md:text-lg md:my-2 md:p-5
        lg:text-2xl">
          <div className="grid grid-rows-2 grid-flow-col justify-items-center ">
            <div className='row-span-2 text-center mt-4'> أشباه الموصلات : هي مواد تتصرف بعض الأحيان كعازل للكهرباء وبعض الأحيان كموصل.مثل الجرمانيوم والسليكون</div>
            <div className='row-span-2'><img src="/slide10_2.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-32" /></div>
          </div>
        </div>

      </div>
    </>
  );
}