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
      <table className="table-auto border-collapse  border-2 border-black">
        <thead>
          <tr>
            <th className="border-2 border-black">النوع</th>
            <th className="border-2 border-black">التعريف</th>
            <th className="border-2 border-black">الصورة</th>
          </tr>
        </thead>
        <tbody>
          <tr className='animate__animated animate__fadeInDownBig'>
            <td className="border-2  border-black">المواد العازلة</td>
            <td className="border-2  border-black">هي المادة التي لا يمكن للإلكترونات الحركة فيها بسهولة.مثل البلاستيك والخشب</td>
            <td className="border-2  border-black">
              <img src="/slide10_0.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-32" />
            </td>
          </tr>
          <tr className='animate__animated animate__fadeInDownBig animate__delay-8s'>
            <td className="border-2 border-black">المواد الموصلة</td>
            <td className="border-2 border-black"> هي المواد التي يمكن للإلكترونات الحركة فيها بسهولة.مثل الذهب والنحاس</td>
            <td className="border-2  border-black">
              <img src="/slide10_1.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-32" />
            </td>
          </tr>
          <tr className='animate__animated animate__fadeInDownBig animate__delay-16s'>
            <td className="border-2 border-black">أشباه الموصلات</td>
            <td className="border-2 border-black"> هي مواد تتصرف بعض الأحيان كعازل للكهرباء وبعض الأحيان كموصل.مثل الجرمانيوم والسليكون</td>
            <td className="border-2  border-black">
              <img src="/slide10_2.jpg" alt="" className="animate__animated animate__bounceInDown w-60 h-32" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}