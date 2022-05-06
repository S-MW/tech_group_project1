import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio5_0 from "../../../../audios/complicatedScenarioAudios/lesson1/slide5_0.mp3"
import slideAudio5_1 from "../../../../audios/complicatedScenarioAudios/lesson1/slide5_1.mp3"
import slideAudio5_2 from "../../../../audios/complicatedScenarioAudios/lesson1/slide5_2.mp3"




function CL1s5(props) {


  const [audioNumber, setAudioNumber] = useState(0)
  const [question1, setQuestion1] = useState(`<button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate__animated animate__fadeInDownBig animate__delay-34s">
  الجواب
</button>`)
  const [question2, setQuestion2] = useState(`<button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate__animated animate__fadeInDownBig animate__delay-37s">
  الجواب
</button>`)
  const [image, setImage] = useState(`
  <div class='grid gap-3 grid-cols-5'>
    <div class='animate__animated animate__bounceInDown animate__delay-8s text-center'>
      <img src="ComplicatedScenarioImages/slide5_4.jpg" alt="" class="w-40 h-40" />
      <h2>صحن</h2>
    </div>
    <div class='animate__animated animate__bounceInDown animate__delay-9s text-center'>
      <img src="ComplicatedScenarioImages/slide5_0.jpg" alt="" class="w-40 h-40" />
      <h2>ملح</h2>
    </div>
    <div class='animate__animated animate__bounceInDown animate__delay-10s text-center'>
      <img src="ComplicatedScenarioImages/slide5_1.jpg" alt="" class="w-40 h-40" />
      <h2>فلفل اسود مطحون</h2>
    </div>
    <div class='animate__animated animate__bounceInDown animate__delay-11s text-center'>
      <img src="ComplicatedScenarioImages/slide5_2.jpg" alt="" class="w-40 h-40" />
      <h2>مشط بلاستيكي</h2>
    </div>
    <div class='animate__animated animate__bounceInDown animate__delay-12s text-center'>
      <img src="ComplicatedScenarioImages/slide5_3.jpg" alt="" class="w-40 h-40" />
      <h2>ملابس صوف</h2>
    </div>
  </div>
`)



  const [playAudio5_0, { stop: stopAudio5_0 }] = useSound(slideAudio5_0, {
    onend: () => {
      //console.info('Sound ended!');
      setAudioNumber(1);
    },
  });

  const [playAudio5_1, { stop: stopAudio5_1 }] = useSound(slideAudio5_1, {
    onend: () => {
      //console.info('Sound ended!');
      setImage(`<h2 class="m-2 animate__animated animate__fadeInDownBig animate__delay-3s">	الشحنة الكهرابائية الساكنة بانها هى عدم توازن للشحنة الكهربائية على الجسم</h2>`)
      setAudioNumber(2);
    },
  });

  const [playAudio5_2, { stop: stopAudio5_2 }] = useSound(slideAudio5_2, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });




  useEffect(() => {
    if (audioNumber == 0) {
      //console.info('playAudio5_0 Start!');
      playAudio5_0();
      props.setIsAudioOn(true);
    }
    if (audioNumber == 1) {
      //console.info('playAudio5_1 Start!');
      playAudio5_1();
      props.setIsAudioOn(true);
    }
    if (audioNumber == 2) {
      //console.info('playAudio5_2 Start!');
      playAudio5_2();
      props.setIsAudioOn(true);
    }



  }, [playAudio5_0, playAudio5_1, playAudio5_2, audioNumber]);


  return (
    <>
      <div className='absolute top-5 right-5 animate__animated animate__bounceInDown animate__delay-2s'>
        <h2 className='text-2xl'>تجربة</h2>
      </div>

      <div dangerouslySetInnerHTML={{ __html: image }} />

      <div className='mt-3'>
        <table className="table-auto border-collapse  border-2 border-black animate__animated animate__bounceInDown animate__delay-32s">
          <thead>
            <tr>
              <th className="border-2 border-black">السؤال</th>
              <th className="border-2 border-black">الجواب</th>
            </tr>
          </thead>
          <tbody>
            <tr className='animate__animated animate__fadeInDownBig'>
              <td className="border-2  border-black animate__animated animate__bounceInDown animate__delay-33s"> كيف استجاب كلا من الملح والفلفل مع المشط؟</td>
              <td className="border-2  border-black" ><div onClick={() => {
                setQuestion1(`<h2 class='text-base text-blue-600'>.يجذب المشط دقائق الفلفل وبعض بلورات الملح الصغيرة</h2>`)
              }} dangerouslySetInnerHTML={{ __html: question1 }} /></td>
            </tr>
            <tr className='animate__animated animate__fadeInDownBig animate__animated animate__bounceInDown animate__delay-36s'>
              <td className="border-2  border-black"> فسر سبب استجابة الفلفل بصورة مختلفة عن استجابة الملح للمشط؟</td>
              <td className="border-2  border-black" ><div onClick={() => {
                setQuestion2(`<h2 class='text-base text-blue-600'>بلورات الملح كبيرة وثقيلة مقارنة بدقائق الفلفل، والقوة الكهربائية لا تكفي إلا لرفع بلورات الملح الصغيرة.</h2>`)
              }} dangerouslySetInnerHTML={{ __html: question2 }} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CL1s5;
