import SL1s10 from "../../simpleScenario/lesson1/SL1s10";

export default function CL1s7(props) {


  return (
    <>
    {/* Reuse the component SL1s10 from simple scenario */}
      <SL1s10 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn}/>
    </>
  );
}