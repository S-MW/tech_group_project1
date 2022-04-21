import { useNavigate } from "react-router-dom";


export default function StudentHome() {

    let navigate = useNavigate();
    let student = JSON.parse(localStorage.getItem("studentData"))

    function navigateToLesson1() {
        if (student.sinarioType == "simple") {
            navigate("/SimpleScenarioLesson1")
        }
        else {
            // That mean she is Complicated Type.
            navigate("/ComplicatedScenarioLesson1")
        }
    }

    function navigateToLesson2() {
        if (student.isCompletedLesson1) {
            if (student.sinarioType == "simple") {
                navigate("/SimpleScenarioLesson2")
            }
            else {
                // That mean she is Complicated Type.
                navigate("/ComplicatedScenarioLesson2")
            }
        }
        else {
            console.log("You have to finish lesson1 first")
        }
    }

    function navigateToExam() {
        if (student.isCompletedLesson1 && student.isCompletedLesson2) 
        {
           console.log(" go to exam link")
        }
        else {
            console.log("You have to finish lesson1 & lesson2")
        }
    }


    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen w-screen space-y-2">
                <div>
                    <button onClick={() => navigateToLesson1()} className="p-3 rounded-lg  bg-indigo-500 ">الدرس الاول : التيار الكهربائي</button>
                </div>
                <div>
                    <button onClick={() => navigateToLesson2()} className="p-3 rounded-lg bg-red-400">الدرس الثاني : الدوائر الكهربائي</button>
                </div>
                <div>
                    <button onClick={() => navigateToExam()} className="p-3 rounded-lg bg-blue-400">الاختبار</button>
                </div>
            </div>
        </>
    );
}
