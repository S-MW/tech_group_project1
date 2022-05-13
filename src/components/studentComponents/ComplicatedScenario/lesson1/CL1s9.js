import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio9_0 from "../../../../audios/complicatedScenarioAudios/lesson1/slide9_0.mp3"
import slideAudio9_1 from "../../../../audios/complicatedScenarioAudios/lesson1/slide9_1.mp3"
import slideAudio9_2 from "../../../../audios/complicatedScenarioAudios/lesson1/slide9_2.mp3"




function CL1s9(props) {


  const [audioNumber, setAudioNumber] = useState(0)
  const [image, setImage] = useState(``)
  const [question1, setQuestion1] = useState(`<button class="w-full py-1 px-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 rounded-b
  focus:outline-none focus:ring-2 focus:ring-offset-2 md:py-3 focus:ring-indigo-500 animate__animated animate__fadeInDownBig">
  الجواب
</button>`)
  const [question2, setQuestion2] = useState(`<button class="w-full py-1 px-2 text-sm font-medium rounded-b text-white bg-indigo-600 hover:bg-indigo-700 
  focus:outline-none focus:ring-2 focus:ring-offset-2 md:py-3 focus:ring-indigo-500 animate__animated animate__fadeInDownBig ">
  الجواب
</button>`)
  const [question3, setQuestion3] = useState(`<button class="w-full py-1 px-2 rounded-b text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 
  focus:outline-none focus:ring-2 focus:ring-offset-2 md:py-3 focus:ring-indigo-500 animate__animated animate__fadeInDownBig ">
  الجواب
</button>`)

  const [hideQ1, setHideQ1] = useState(false)
  const [hideQ2, setHideQ2] = useState(false)
  const [hideQ3, setHideQ3] = useState(false)



  const [playAudio9_0, { stop: stopAudio9_0 }] = useSound(slideAudio9_0, {
    onend: () => {
      //console.info('Sound ended!');
      setImage(`<img src="ComplicatedScenarioImages/slide9_0.gif" alt="" class="w-60 h-60" />`)

      const timer = setTimeout(() => {
        //console.log(' setTimeout :: playAudio9_0 : 13s')
        setAudioNumber(1);
      }, 13000);
    },
  });

  const [playAudio9_1, { stop: stopAudio9_1 }] = useSound(slideAudio9_1, {
    onend: () => {
      //console.info('Sound ended!');
      setImage(`<img src="ComplicatedScenarioImages/slide9_1.gif" alt="" class="w-60 h-60" />`)

      const timer = setTimeout(() => {
        //console.log(' setTimeout :: playAudio9_0 : 10s')
        setImage(``)
        setAudioNumber(2);
      }, 10000);

    },
  });

  const [playAudio9_2, { stop: stopAudio9_2 }] = useSound(slideAudio9_2, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);

    },
  });





  useEffect(() => {
    if (audioNumber === 0) {
      stopAudio9_0()
      //console.info('playAudio9_0 Start!');
      playAudio9_0();
      props.setIsAudioOn(true);
    }
    if (audioNumber === 1) {
      //console.info('playAudio9_1 Start!');
      playAudio9_1();
      props.setIsAudioOn(true);
    }
    if (audioNumber === 2) {
      //console.info('playAudio9_2 Start!');
      playAudio9_2();
      props.setIsAudioOn(true);
    }



  }, [playAudio9_0, playAudio9_1, playAudio9_2, audioNumber]);


  return (
    <>

      <div dangerouslySetInnerHTML={{ __html: image }} />
      <div className='animate__animated animate__bounceInDown animate__delay-39ss mx-8'>
        <div className='bg-[#fc8b92] md:w-2/3 md:mx-auto rounded mb-2 animate__animated animate__bounceInDown animate__delay-40ss'>
          {!hideQ1 &&
            <div className='w-fit h-fit p-1 md:py-2 text-xl md:text-2xl'><h2>بعد عرض هذه التجربة ماذا استنتجت منها ؟</h2></div>
          }
          <div>
            <div onClick={() => {
              setQuestion1(`
              <div class="p-2">
                <h2 class='text-base  w-fit text-center
                md:text-md 
                lg:text-lg'>استنتجنا من التجربة انه حدث تجاذب بين الشحنات المختلفة الموجبة والسالبة فالورق تجاذب للبالون لان شحناته مختلفة ، اذا عرفنا ان الاجسام التي تحمل شحنات مختلفة تتجاذب بينما الاجسام التي تحمل شحنات متشابهة تتنافر. </h2>
                <img src="/slide12.jpg" alt="" width="130" style="margin: 0 auto"/>

              </div>
              `);
              setHideQ1(true)
              setHideQ2(false)
              setHideQ3(false)
              setQuestion2(`<button class="w-full py-2 px-3 text-sm font-medium md:py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-b  ">
              الجواب
            </button>`)
              setQuestion3(`<button class="w-full py-2 px-3 text-sm font-medium md:py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-b">
            الجواب
          </button>`)
            }} dangerouslySetInnerHTML={{ __html: question1 }} />
          </div>
        </div>
        <div className='bg-[#fa976d] md:w-2/3 md:mx-auto rounded mb-2 animate__animated animate__bounceInDown animate__delay-42ss'>
          {!hideQ2 &&
            <h2 className='p-1 pr-3 text-xl md:text-2xl'>وما هى القوى الكهربائية؟</h2>
          }
          <div>
            <div onClick={() => {
              setQuestion2(`<h2 class='text-base p-2 w-fit text-center md:2xl
              lg:text-3xl'>تعرف القوى الكهربائية بانها: هي القوة التي تؤثر بها الأجسام المشحونة في بعضها البعض وهذه القوة يمكن  ان تكون تجاذب أو تنافر</h2>`);
              setHideQ1(false)
              setHideQ2(true)
              setHideQ3(false)
              setQuestion1(`<button class="w-full py-1 px-2 text-sm font-medium md:py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-b">
              الجواب
            </button>`)
              setQuestion3(`<button class="w-full py-1 px-2 text-sm font-medium md:py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-b">
            الجواب
          </button>`)
            }} dangerouslySetInnerHTML={{ __html: question2 }} />
          </div>
        </div>
        <div className='bg-[#639e98] md:w-2/3 md:mx-auto rounded animate__animated animate__bounceInDown animate__delay-44ss'>
          {!hideQ3 &&
            <div className='p-2 text-xl md:text-2xl text-center md:text-right'> كيف تعتمد القوى الكهربائية بين جسمين على المسافة بينهم؟</div>
          }
          <div>
            <div onClick={() => {
              setQuestion3(`<h2 class='text-base p-2 w-fit text-cente
              md:text-2xl
              lg:text-3xl'>تقل القوة الكهربائية المتبادلة بين جسمين عند زيادة المسافة بينهما. حيث تقل القوة للربع إذا تضاعفت المسافة بينهما</h2>`);
              setHideQ1(false)
              setHideQ2(false)
              setHideQ3(true)
              setQuestion1(`<button class="w-full py-1 px-2 font-medium text-white md:py-3 bg-indigo-600 hover:bg-indigo-700 rounded-b">
              الجواب
            </button>`)
              setQuestion2(`<button class="w-full py-1 px-2 text-sm font-medium md:py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-b">
            الجواب
          </button>`)
            }} dangerouslySetInnerHTML={{ __html: question3 }} />
          </div>
        </div>
      </div>

      {/* <table className="table-auto border-collapse w-2/3 border-2 border-black animate__animated animate__bounceInDown animate__delay-39s">
        <thead>
          <tr>
            <th className="border-2 border-black">السؤال</th>
            <th className="border-2 border-black">الجواب</th>
          </tr>
        </thead>
        <tbody>
          <tr className='animate__animated animate__fadeInDownBig'>
            <td className="border-2  border-black animate__animated animate__bounceInDown animate__delay-40s"> بعد عرض هذه التجربة ماذا استنتجت منها ؟</td>
            <td className="border-2  border-black" >
              <div onClick={() => {
                setQuestion1(`<img src="/slide12.jpg" alt="" width="120" height="60" />
                  <h2 class='shadow-md text-xs p-4 px-6 rounded-md bg-[#639e98] text-[#efe3d9] md:text-lg lg:text-xl'>استنتجنا من التجربة انه حدث تجاذب بين الشحنات المختلفة الموجبة والسالبة فالورق تجاذب للبالون لان شحناته مختلفة ، اذا عرفنا ان الاجسام التي تحمل شحنات مختلفة تتجاذب بينما الاجسام التي تحمل شحنات متشابهة تتنافر. </h2>`)
              }} dangerouslySetInnerHTML={{ __html: question1 }} />
            </td>
          </tr>
          <tr className='animate__animated animate__fadeInDownBig animate__animated animate__bounceInDown animate__delay-42s'>
            <td className="border-2  border-black"> وما هى القوى الكهربائية؟</td>
            <td className="border-2  border-black" >
              <div onClick={() => {
                setQuestion2(`<h2 class='text-base text-blue-600'>تعرف القوى الكهربائية بانها: هي القوة التي تؤثر بها الأجسام المشحونة في بعضها البعض وهذه القوة يمكن  ان تكون تجاذب أو تنافر</h2>`)
              }} dangerouslySetInnerHTML={{ __html: question2 }} />
            </td>
          </tr>
          <tr className='animate__animated animate__fadeInDownBig animate__animated animate__bounceInDown animate__delay-44s'>
            <td className="border-2  border-black"> كيف تعتمد القوى الكهربائية بين جسمين على المسافة بينهم؟</td>
            <td className="border-2  border-black" >
              <div onClick={() => {
                setQuestion3(`<h2 class='text-base text-blue-600'>تقل القوة الكهربائية المتبادلة بين جسمين عند زيادة المسافة بينهما. حيث تقل القوة للربع إذا تضاعفت المسافة بينهما</h2>`)
              }} dangerouslySetInnerHTML={{ __html: question3 }} />
            </td>
          </tr>
        </tbody>
      </table> */}
    </>
  );
}

export default CL1s9;
