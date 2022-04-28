import SL1s14 from "../../simpleScenario/lesson1/SL1s14";

export default function CL1s13(props) {


  return (
    <>
      {/* Reuse the component SL1s14 from simple scenario */}
      <SL1s14 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn} />
    </>
  );
}
