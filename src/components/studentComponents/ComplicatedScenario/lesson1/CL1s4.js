// copywrite http://kawtherali44.blogspot.com/2009/05/blog-post_2077.html
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio4_0 from "../../../../audios/complicatedScenarioAudios/lesson1/slide4_0.mp3"
import slideAudio4_1 from "../../../../audios/complicatedScenarioAudios/lesson1/slide4_1.mp3"
import slideAudio4_2 from "../../../../audios/complicatedScenarioAudios/lesson1/slide4_2.mp3"
import slideAudio4_3 from "../../../../audios/complicatedScenarioAudios/lesson1/slide4_3.mp3"
import slideAudio4_4 from "../../../../audios/complicatedScenarioAudios/lesson1/slide4_4.mp3"
import slideAudio4_5 from "../../../../audios/simpleScenarioAudios/lesson1/slide5_1.mp3"



function CL1s4(props) {

  const slideLink = "https://phet.colorado.edu/sims/html/john-travoltage/latest/john-travoltage_ar_SA.html"
  const [audioNumber, setAudioNumber] = useState(0)
  const [image, setImage] = useState(`<img src="ComplicatedScenarioImages/slide4_0.jpg" alt="" class="animate__animated animate__bounceInDown w-60 h-60" />`)



  const [playAudio4_0, { stop: stopAudio4_0 }] = useSound(slideAudio4_0, {
    onend: () => {
      console.info('Sound ended!');
      setImage(`<img src="ComplicatedScenarioImages/slide4_1.jpg" alt="" class="animate__animated animate__bounceInDown w-60 h-60" />`)
      setAudioNumber(1);
    },
  });

  const [playAudio4_1, { stop: stopAudio4_1 }] = useSound(slideAudio4_1, {
    onend: () => {
      console.info('Sound ended!');
      setImage(`<img src="ComplicatedScenarioImages/slide4_2.jpg" alt="" class="animate__animated animate__bounceInDown w-60 h-60" />`)
      setAudioNumber(2);
    },
  });

  const [playAudio4_2, { stop: stopAudio4_2 }] = useSound(slideAudio4_2, {
    onend: () => {
      console.info('Sound ended!');
      setImage(`<img src="ComplicatedScenarioImages/slide4_3.jpg" alt="" class="animate__animated animate__bounceInDown w-60 h-60" />`)
      setAudioNumber(3);
    },
  });

  const [playAudio4_3, { stop: stopAudio4_3 }] = useSound(slideAudio4_3, {
    onend: () => {
      console.info('Sound ended!');
      setImage(`<h4 class="animate__animated animate__fadeInDownBig text-center text-6xl mx-10">اذا كيف يصبح الجسم مشحونًا كهربائيًا؟</h4>
      <h4 class="animate__animated animate__fadeInDownBig animate__delay-3s text-center text-6xl mx-10">يصبح الجسم مشحونا بالكهرباء إذا افقد أو اكتسب الكترونات.</h4>`)
      setAudioNumber(4);
    },
  });

  const [playAudio4_4, { stop: stopAudio4_4 }] = useSound(slideAudio4_4, {
    onend: () => {
      console.info('Sound ended!');
      setAudioNumber(5);
    },
  });

  const [playAudio4_5, { stop: stopAudio4_5 }] = useSound(slideAudio4_5, {
    onend: () => {
      console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    if (audioNumber == 0) {
      console.info('playAudio4_0 Start!');
      playAudio4_0();
    }

    if (audioNumber == 1) {
      console.info('playAudio4_1 Start!');
      playAudio4_1();
    }

    if (audioNumber == 2) {
      console.info('playAudio4_2 Start!');
      playAudio4_2();
    }
    if (audioNumber == 3) {
      console.info('playAudio4_3 Start!');
      playAudio4_3();
    }
    if (audioNumber == 4) {
      console.info('playAudio4_4 Start!');
      playAudio4_4();
    }
    if (audioNumber == 5) {
      console.info('playAudio4_5 Start!');
      playAudio4_5();
    }

    props.setIsAudioOn(true);
  }, [playAudio4_0, playAudio4_1, playAudio4_2, playAudio4_3, playAudio4_4, playAudio4_5, audioNumber]);


  return (
    <>
      <div>
        <div className="text-xl" dangerouslySetInnerHTML={{ __html: image }} />
      </div>
      <button className="group relative w-16 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate__animated animate__fadeInDownBig animate__delay-50s" onClick={() => window.open(slideLink)}>
        التجربة
      </button>
    </>
  );
}

export default CL1s4;
