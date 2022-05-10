import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio5_0 from "../../../../audios/complicatedScenarioAudios/lesson1/slide5_0.mp3"
import slideAudio5_1 from "../../../../audios/complicatedScenarioAudios/lesson1/slide5_1.mp3"
import slideAudio5_2 from "../../../../audios/complicatedScenarioAudios/lesson1/slide5_2.mp3"
import { faHandPointer, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* 
<div class='flex w-full gap-2 flex-wrap justify-center pt-11'>
    <div class='animate__animated animate__bounceInDown animate__delay-8s text-center bg-white p-1 md:text-2xl'>
      <img src="ComplicatedScenarioImages/slide5_4.jpg" alt="" class="w-28 h-28 md:h-40 md:w-40" />
      <h2 class='text-black'>صحن</h2>
    </div>
    <div class='animate__animated animate__bounceInDown animate__delay-9s text-center bg-white p-1 md:text-2xl'>
      <img src="ComplicatedScenarioImages/slide5_0.jpg" alt="" class="w-28 h-28 md:h-40 md:w-40" />
      <h2 class='text-black'>ملح</h2>
    </div>
    <div class='animate__animated animate__bounceInDown animate__delay-10s text-center bg-white p-1 md:text-2xl'>
      <img src="ComplicatedScenarioImages/slide5_1.jpg" alt="" class="w-28 h-28 md:h-40 md:w-40" />
      <h2 class='text-black'>فلفل اسود مطحون</h2>
    </div>
    <div class='animate__animated animate__bounceInDown animate__delay-11s text-center bg-white p-1 md:text-2xl'>
      <img src="ComplicatedScenarioImages/slide5_2.jpg" alt="" class="w-28 h-28 md:h-40 md:w-40" />
      <h2 class='text-black'>مشط بلاستيكي</h2>
    </div>
    <div class='animate__animated animate__bounceInDown animate__delay-12s text-center bg-white p-1 md:text-2xl'>
      <img src="ComplicatedScenarioImages/slide5_3.jpg" alt="" class="w-28 h-28 md:h-40 md:w-40" />
      <h2 class='text-black'>ملابس صوف</h2>
    </div>
  </div>
*/

function CL1s5(props) {

  const [showGeorge, setShowGeorge] = useState('hidden')

  const [audioNumber, setAudioNumber] = useState(0)
  const [question1, setQuestion1] = useState(`<button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate__animated animate__fadeInDownBig animate__delay-1s">
  الجواب
</button>`)
  const [question2, setQuestion2] = useState(`<button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate__animated animate__fadeInDownBig animate__delay-5s">
  الجواب
</button>`)

  const [showAnswer1, setShowAnswer1] = useState(false)
  const [showAnswer2, setShowAnswer2] = useState(false)

  const [image, setImage] = useState(`
  <div class='flex w-full gap-2 flex-wrap justify-center pt-11'>
    <div class='animate__animated animate__bounceInDown animate__delay-8s text-center bg-white p-1 md:text-2xl'>
      <img src="ComplicatedScenarioImages/slide5_4.jpg" alt="" class="w-28 h-28 md:h-40 md:w-40" />
      <h2 class='text-black'>صحن</h2>
    </div>
    <div class='animate__animated animate__bounceInDown animate__delay-9s text-center bg-white p-1 md:text-2xl'>
      <img src="ComplicatedScenarioImages/slide5_0.jpg" alt="" class="w-28 h-28 md:h-40 md:w-40" />
      <h2 class='text-black'>ملح</h2>
    </div>
    <div class='animate__animated animate__bounceInDown animate__delay-10s text-center bg-white p-1 md:text-2xl'>
      <img src="ComplicatedScenarioImages/slide5_1.jpg" alt="" class="w-28 h-28 md:h-40 md:w-40" />
      <h2 class='text-black'>فلفل اسود مطحون</h2>
    </div>
    <div class='animate__animated animate__bounceInDown animate__delay-11s text-center bg-white p-1 md:text-2xl'>
      <img src="ComplicatedScenarioImages/slide5_2.jpg" alt="" class="w-28 h-28 md:h-40 md:w-40" />
      <h2 class='text-black'>مشط بلاستيكي</h2>
    </div>
    <div class='animate__animated animate__bounceInDown animate__delay-12s text-center bg-white p-1 md:text-2xl'>
      <img src="ComplicatedScenarioImages/slide5_3.jpg" alt="" class="w-28 h-28 md:h-40 md:w-40" />
      <h2 class='text-black'>ملابس صوف</h2>
    </div>
  </div>
`)



  const [playAudio5_0, { stop: stopAudio5_0 }] = useSound(slideAudio5_0, {
    onend: () => {
      //console.info('Sound ended!');
      setAudioNumber(1);
      setImage(``)
      setShowGeorge('animate__animated animate__backInDown');
    },
  });

  const [playAudio5_1, { stop: stopAudio5_1 }] = useSound(slideAudio5_1, {
    onend: () => {
      //console.info('Sound ended!');
      setImage(`<h2 class="mx-8 animate__animated animate__fadeInDownBig animate__delay-3s shadow-md p-2 text-2xl md:text-3xl text-center rounded-md bg-[#fc8b92]">	الشحنة الكهربائية الساكنة بانها هى عدم توازن للشحنة الكهربائية على الجسم</h2>`)
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
      <div className='absolute top-5 right-5 animate__animated animate__bounceInDown animate__delay-2s text-sm my-2 w-fit text-center p-3 rounded-md bg-[#fa976d]
                md:text-lg
                lg:text-3xl'>
        <h2>تجربة</h2>
      </div>

      <div dangerouslySetInnerHTML={{ __html: image }} />

      <div className={`animate__animated animate__fadeInDownBig animate__delay-1s ${showGeorge}`}>
        <div className='mx-8 animate__animated animate__fadeInDownBig animate__delay-1s'>
          <h3 className='shadow-md p-1 text-xl my-2 mx-auto md:text-2xl text-center rounded-md bg-[#639e98]'>كيف استجاب كلا من الملح والفلفل مع المشط؟</h3>
          {!showAnswer1 ?
            <button className='group relative w-full flex justify-center py-2 px-4 border-2 border-white text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  animate__animated animate__pulse animate__infinite' onClick={() => setShowAnswer1(true)}>
              الجواب
              <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
            </button>
            : <h2 className='shadow-md animate__animated animate__slideInRight mb-2 p-2 text-lg mx-auto md:text-xl text-center rounded-md bg-[#fa976d]'>يجذب المشط دقائق الفلفل وبعض بلورات الملح الصغيرة</h2>
          }
        </div>

        <div className='mx-8 animate__animated animate__fadeInDownBig animate__delay-5s'>
          <h3 className='shadow-md p-2 text-xl mb-2 mx-auto md:text-2xl text-center rounded-md mt-2 bg-[#639e98]'> فسر سبب استجابة الفلفل بصورة مختلفة عن استجابة الملح للمشط؟</h3>
          {!showAnswer2 ?
            <button className='group relative w-full flex justify-center py-2 px-4 border-2 border-white text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  animate__animated animate__pulse animate__infinite' onClick={() => setShowAnswer2(true)}>
              الجواب
              <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
            </button>
            : <h2 className='shadow-md animate__animated animate__slideInRight mb-2 p-2 text-lg mx-auto md:text-xl text-center rounded-md bg-[#edac34]'>بلورات الملح كبيرة وثقيلة مقارنة بدقائق الفلفل، والقوة الكهربائية لا تكفي إلا لرفع بلورات الملح الصغيرة.</h2>
          }
        </div>
      </div>

    </>
  );
}

export default CL1s5;
