import SL1s23 from "../../simpleScenario/lesson1/SL1s23";

export default function CL1s22(props) {


  return (
    <>
      {/* Reuse the component SL1s23 from simple scenario */}
      <SL1s23 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn} />
    </>
  );
}
