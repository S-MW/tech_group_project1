import SL1s22 from "../../simpleScenario/lesson1/SL1s22";

export default function CL1s21(props) {


  return (
    <>
      {/* Reuse the component SL1s22 from simple scenario */}
      <SL1s22 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn} />
    </>
  );
}
