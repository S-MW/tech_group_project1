import SL1s1 from "../../simpleScenario/lesson1/SL1s1";

export default function CL1s1(props) {


  return (
    <>
      {/* Reuse the component SL1s1 from simple scenario */}
      <SL1s1 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn} />
    </>
  );
}