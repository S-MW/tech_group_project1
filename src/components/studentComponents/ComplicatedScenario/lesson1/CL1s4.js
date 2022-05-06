// copywrite http://kawtherali44.blogspot.com/2009/05/blog-post_2077.html
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio4_0 from "../../../../audios/complicatedScenarioAudios/lesson1/slide4_0.mp3"
import slideAudio4_1 from "../../../../audios/complicatedScenarioAudios/lesson1/slide4_1.mp3"
import slideAudio4_2 from "../../../../audios/complicatedScenarioAudios/lesson1/slide4_2.mp3"
import slideAudio4_3 from "../../../../audios/complicatedScenarioAudios/lesson1/slide4_3.mp3"
import slideAudio4_4 from "../../../../audios/complicatedScenarioAudios/lesson1/slide4_4.mp3"
import slideAudio4_5 from "../../../../audios/simpleScenarioAudios/lesson1/slide5_1.mp3"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-regular-svg-icons'


function CL1s4(props) {

  const [audioNumber, setAudioNumber] = useState(0)
  const [image, setImage] = useState(`<img src="ComplicatedScenarioImages/slide4_0.jpg" alt="" class="animate__animated animate__bounceInDown w-60 h-60" />`)



  const [playAudio4_0, { stop: stopAudio4_0 }] = useSound(slideAudio4_0, {
    onend: () => {
      //console.info('Sound ended!');
      setImage(`<img src="ComplicatedScenarioImages/slide4_1.jpg" alt="" class="animate__animated animate__bounceInDown w-60 h-60" />`)
      setAudioNumber(1);
    },
  });

  const [playAudio4_1, { stop: stopAudio4_1 }] = useSound(slideAudio4_1, {
    onend: () => {
      //console.info('Sound ended!');
      setImage(`<img src="ComplicatedScenarioImages/slide4_2.jpg" alt="" class="animate__animated animate__bounceInDown w-60 h-60" />`)
      setAudioNumber(2);
    },
  });

  const [playAudio4_2, { stop: stopAudio4_2 }] = useSound(slideAudio4_2, {
    onend: () => {
      //console.info('Sound ended!');
      setImage(`<img src="ComplicatedScenarioImages/slide4_3.jpg" alt="" class="animate__animated animate__bounceInDown w-60 h-60" />`)
      setAudioNumber(3);
    },
  });

  const [playAudio4_3, { stop: stopAudio4_3 }] = useSound(slideAudio4_3, {
    onend: () => {
      //console.info('Sound ended!');
      setImage(`<h4 class="animate__animated animate__fadeInDownBig  mx-10 text-sm w-2/3 text-center p-3 m-2 rounded-md bg-[#96d2ca]
      md:text-lg
      lg:text-3xl">اذا كيف يصبح الجسم مشحونًا كهربائيًا؟</h4>
      <h4 class="animate__animated animate__fadeInDownBig animate__delay-3s mx-10 text-sm w-2/3 text-center p-3 m-2 rounded-md bg-[#507570]
      md:text-lg
      lg:text-3xl">يصبح الجسم مشحونا بالكهرباء إذا افقد أو اكتسب الكترونات.</h4>`)
      setAudioNumber(4);
    },
  });

  const [playAudio4_4, { stop: stopAudio4_4 }] = useSound(slideAudio4_4, {
    onend: () => {
      //console.info('Sound ended!');
      setAudioNumber(5);
    },
  });

  const [playAudio4_5, { stop: stopAudio4_5 }] = useSound(slideAudio4_5, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    if (audioNumber == 0) {
      stopAudio4_0();
      //console.info('playAudio4_0 Start!');
      playAudio4_0();
    }

    if (audioNumber == 1) {
      //console.info('playAudio4_1 Start!');
      playAudio4_1();
    }

    if (audioNumber == 2) {
      //console.info('playAudio4_2 Start!');
      playAudio4_2();
    }
    if (audioNumber == 3) {
      //console.info('playAudio4_3 Start!');
      playAudio4_3();
    }
    if (audioNumber == 4) {
      //console.info('playAudio4_4 Start!');
      playAudio4_4();
    }
    if (audioNumber == 5) {
      //console.info('playAudio4_5 Start!');
      playAudio4_5();
    }

    props.setIsAudioOn(true);
  }, [playAudio4_0, playAudio4_1, playAudio4_2, playAudio4_3, playAudio4_4, playAudio4_5, audioNumber]);


  return (
    <>
      <div className="grid justify-items-center" dangerouslySetInnerHTML={{ __html: image }} />
      <div className={`mb-2 text-2xl lg:text-xl flex items-center animate__animated animate__backInDown animate__delay-50s`}>
        <button onClick={() => window.open('https://phet.colorado.edu/sims/html/john-travoltage/latest/john-travoltage_ar_SA.html')} className='bg-[#fc8b92] block mx-auto py-3 px-5 rounded-md text-3xl shadow-md border-2 animate__animated animate__pulse animate__infinite'>
          التجربة
          <FontAwesomeIcon icon={faHandPointer} className="mr-2 " />
        </button>
      </div>
    </>
  );
}

export default CL1s4;
