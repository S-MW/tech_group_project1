import SL1s24 from "../../simpleScenario/lesson1/SL1s24";

export default function CL1s23(props) {


  return (
    <>
      {/* Reuse the component SL1s24 from simple scenario */}
      <SL1s24 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn} />
    </>
  );
}
