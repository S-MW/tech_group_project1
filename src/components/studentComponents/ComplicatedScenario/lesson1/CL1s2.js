import SL1s2 from "../../simpleScenario/lesson1/SL1s2";
export default function CL1s2(props) {


  return (
    <>
    {/* Reuse the component SL1s2 from simple scenario */}
      <SL1s2 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn}/>
    </>
  );
}