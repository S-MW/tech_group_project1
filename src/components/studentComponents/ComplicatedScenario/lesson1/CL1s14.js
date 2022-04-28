import SL1s15 from "../../simpleScenario/lesson1/SL1s15";

export default function CL1s14(props) {


  return (
    <>
      {/* Reuse the component SL1s15 from simple scenario */}
      <SL1s15 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn} />
    </>
  );
}
