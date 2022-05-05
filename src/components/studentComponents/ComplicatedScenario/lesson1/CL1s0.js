import SL1s0 from "../../simpleScenario/lesson1/SL1s0";

export default function CL1s0(props) {


  return (
    <>
      {/* Reuse the component SL1s0 from simple scenario */}
      <SL1s0 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn} />
    </>
  );
}