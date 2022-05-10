// copywrite https://ar.wikihow.com/%D9%82%D8%B1%D8%A7%D8%A1%D8%A9-%D8%AC%D9%87%D8%A7%D8%B2-%D9%82%D9%8A%D8%A7%D8%B3-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A-%D9%85%D8%AA%D8%B9%D8%AF%D9%91%D8%AF
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import slideAudio22 from "../../../../audios/simpleScenarioAudios/lesson1/slide22.mp3"


function SL1s22(props) {

  const [image, setImage] = useState(`<img src="/slide22.jpg" alt="" class="animate__animated animate__bounceInDown w-56 h-60" />`)


  const [playAudio22, { stop: stopAudio22 }] = useSound(slideAudio22, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    //console.info('Sound Start!');
    playAudio22();

    const timer = setTimeout(() => {
      //console.log('This will run after 8 second!')
      setImage(`<img src="/slide22_1.jpg" alt="" class="animate__animated animate__bounceInDown w-56 h-60" />`)
    }, 8000);

    props.setIsAudioOn(true);
  }, [playAudio22]);


  return (
    <>
      <div>
        <div className="text-xl" dangerouslySetInnerHTML={{ __html: image }} />
      </div>
      <h3 className="animate__animated animate__fadeInDownBig text-2xl w-2/3 text-center p-2 m-2 rounded-md bg-[#fc8b92]
      md:text-lg
      lg:text-3xl">هو مقياس كمّيّة طاقة الوضع الكهربائيّة التي تسبّب حركة الإلكترونات في الدائرة الكهربائيّة، وتُقاس بوحدة الفولت</h3>
    </>
  );
}

export default SL1s22;
