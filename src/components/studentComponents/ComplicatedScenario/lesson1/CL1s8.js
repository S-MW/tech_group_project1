import SL1s11 from "../../simpleScenario/lesson1/SL1s11";

export default function CL1s8(props) {


  return (
    <>
    {/* Reuse the component SL1s11 from simple scenario */}
      <SL1s11 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn}/>
    </>
  );
}