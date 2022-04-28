import SL1s17 from "../../simpleScenario/lesson1/SL1s17";

export default function CL1s16(props) {


  return (
    <>
      {/* Reuse the component SL1s17 from simple scenario */}
      <SL1s17 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn} />
    </>
  );
}
