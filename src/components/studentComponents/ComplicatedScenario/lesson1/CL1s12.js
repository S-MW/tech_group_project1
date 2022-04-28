import SL1s13 from "../../simpleScenario/lesson1/SL1s13";

export default function CL1s12(props) {


  return (
    <>
      {/* Reuse the component SL1s13 from simple scenario */}
      <SL1s13 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn} />
    </>
  );
}