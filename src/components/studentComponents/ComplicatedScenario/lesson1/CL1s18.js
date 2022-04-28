import SL1s19 from "../../simpleScenario/lesson1/SL1s19";

export default function CL1s18(props) {


  return (
    <>
      {/* Reuse the component SL1s19 from simple scenario */}
      <SL1s19 isAudioOn={props.isAudioOn} setIsAudioOn={props.setIsAudioOn} />
    </>
  );
}
