import useSound from 'use-sound';
import slideAudio1 from "../../../../audios/simpleScenarioAudios/lesson1/slide1.mp3"

// SL1s1 == (S = Simple) (L1 = Lesson 1) (s1 = slide 1)
export default function SL1s1() {


    const [playAudio1 , { stop: stopAudio1 }] = useSound(slideAudio1, {
        onend: () => {
          console.info('Sound ended!');
        },
      });

    function playSound()
    {
        console.info('Sound Start!');
        playAudio1();
    }

    return (
        <>
        <h4 className="animate__animated animate__fadeInDownBig text-center text-6xl mx-10">عزيزتى الطالبة ،</h4>
        <h4 className="animate__animated animate__fadeInDownBig animate__delay-1s text-center text-6xl mx-10">من المتوقع بعد انتهائك منْ هذا الدرس
            أنْ تكونى قادرة وبكفاءة على أنْ:
        </h4>
        {playSound()}
    </>
    );
}