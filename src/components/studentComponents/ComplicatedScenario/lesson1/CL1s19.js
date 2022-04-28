import SL1s20 from "../../simpleScenario/lesson1/SL1s20";

export default function CL1s19(props) {


  return (
    <>
      {/* Reuse the component SL1s20 from simple scenario */}
      <SL1s20 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn} />
    </>
  );
}
