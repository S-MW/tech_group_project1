import SL1s25 from "../../simpleScenario/lesson1/SL1s25";

export default function CL1s24(props) {


  return (
    <>
      {/* Reuse the component SL1s25 from simple scenario */}
      <SL1s25 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn} />
    </>
  );
}
