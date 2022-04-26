import SL1s9 from "../../simpleScenario/lesson1/SL1s9";
export default function CL1s6(props) {


  return (
    <>
    {/* Reuse the component SL1s9 from simple scenario */}
      <SL1s9 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn}/>
    </>
  );
}