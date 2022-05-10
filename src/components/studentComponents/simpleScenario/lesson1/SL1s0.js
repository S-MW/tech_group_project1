import { useEffect } from 'react';
import useSound from 'use-sound';
import slideAudio0 from "../../../../audios/simpleScenarioAudios/lesson1/slide0.mp3"
import { useNavigate } from "react-router-dom";

// import { AiOutlineLogout } from 'react-icons/ai';

// SL1s0 == (S = Simple) (L1 = Lesson 1) (s0 = slide 0)
export default function SL1s0(props) {

  let navigate = useNavigate();


  const [playAudio0, { stop: stopAudio0 }] = useSound(slideAudio0, {
    onend: () => {
      //console.info('Sound ended!');
      props.setIsAudioOn(false);
    },
  });


  useEffect(() => {
    //console.info('Sound Start!');
    playAudio0();
    props.setIsAudioOn(true);
  }, [playAudio0]);

  return (
    <>
      <div onClick={() => {
        localStorage.clear();
        navigate("/")
      }} className='bg-red-300 text-[#efe3d9] w-fit h-fit absolute top-3 left-3 rounded-md flex flex-row cursor-pointer'>
        <div className="m-2">
          {/* <AiOutlineLogout /> */}
        </div>
        <div className="m-1">
          <button className='font-bold'>تسجيل الخروج</button>
        </div>
      </div>
      <div className="h-full grid place-items-center">
        <div className="pb-20">
          <h1 className="p-2 text-4xl text-center font-bold mx-auto md:text-6xl shadow-md rounded-md bg-[#fa976d] animate__animated animate__fadeInDownBig animate__delay-1s">
            الأهـداف التعليمية
          </h1>
        </div>
      </div>
    </>
  );
}