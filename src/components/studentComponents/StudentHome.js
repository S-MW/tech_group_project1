import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import toastifyFile from "../../components/React-toastify/index"



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
        // if (student.isCompletedLesson1) {
        if (student.sinarioType == "simple") {
            navigate("/SimpleScenarioLesson2")
        }
        else {
            // That mean she is Complicated Type.
            navigate("/ComplicatedScenarioLesson2")
        }
        // }
        // else {
        //     console.log("You have to finish lesson1 first")
        //     toastifyFile.warnNotify('يجب عليك الإنتهاء من الدرس الأول.')
        // }
    }

    function navigateToExam() {
        if (student.isCompletedLesson1 && student.isCompletedLesson2) {
            if (student.sinarioType == "simple") {
                window.open('https://docs.google.com/forms/d/1r1yPN8Y4JAwtqFzNusvAFY0yelUJMlvwPLWraLwkC_g/edit?usp=sharing')
            }
            else {
                // That mean she is Complicated Type.
                window.open('https://docs.google.com/forms/d/1n4p0_d1vAmKFOLo82BJlJTIPzkeUG9gTWh-crocxHvg/edit?usp=sharing')
            }
        }
        else {
            console.log("You have to finish lesson1 & lesson2")
            toastifyFile.warnNotify('يجب عليك الإنتهاء من الدروس السابقة.')
        }
    }


    return (
        <>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="flex flex-col justify-center items-center h-screen w-1/3 mx-auto space-y-2 text-[#efe3d9]">
                <button onClick={() => navigateToLesson1()} className="p-3 w-full rounded-lg border-2 border-white bg-[#edac34]">الدرس الاول : التيار الكهربائي</button>
                <button onClick={() => navigateToLesson2()} className="p-3 w-full rounded-lg border-2 border-white bg-[#fc8b92]">الدرس الثاني : الدوائر الكهربائية</button>
                <button onClick={() => navigateToExam()} className="p-3 w-full rounded-lg border-2 border-white bg-[#fa976d]">الاختبار</button>
            </div>
        </>
    );
}
