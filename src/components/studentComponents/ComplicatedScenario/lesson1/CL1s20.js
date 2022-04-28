import SL1s21 from "../../simpleScenario/lesson1/SL1s21";

export default function CL1s20(props) {


  return (
    <>
      {/* Reuse the component SL1s21 from simple scenario */}
      <SL1s21 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn} />
    </>
  );
}
