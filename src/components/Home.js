import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import toastifyFile from "../components/React-toastify/index"

import axios from "axios"


export default function Home() {

    let navigate = useNavigate();

    const [studentCode, setStudentCode] = useState("");
    const handleChangeStudentCode = (e) => {
        setStudentCode(e.target.value)
    }

    function navigatePage() {
        login(studentCode)
    }


    function login(studentCode) {

        axios
            .post(`https://asr.tawfig.info/api/login`, { id: studentCode })
            .then(response => {
                let student = {
                    name: response.data.user.name, sinarioType: response.data.user.pattern, isCompletedLesson1: response.data.user.isCompletedLesson1,
                    progressLesson1Slide: response.data.user.progressLesson1Slide,
                    isCompletedLesson2: response.data.user.isCompletedLesson2, progressLesson2Slide: response.data.user.progressLesson2Slide
                }
                localStorage.setItem("studentData", JSON.stringify(student))
                navigate("/StudentHome")
            })
            .catch(error => {
                document.getElementById("StudentCodeId").value = ""
                if (error.response.status == 404) {
                    toastifyFile.errorNotify("رقم المعرف غير صحيح")
                }
                if (error.response.status == 422) {
                    toastifyFile.errorNotify("يجب ادخال رقم المعرف")
                }
                if (error.response.status == 500) {
                    toastifyFile.errorNotify("خلل عام")
                }
            })

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
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img className="mx-auto h-auto w-auto" src="stem.png" alt="STEM image" />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">ادخل رمز الطالبة</h2>

                    </div>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Student Code</label>
                            <input onChange={handleChangeStudentCode} id="StudentCodeId" type="text" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="999 بسيط - 777 معقد" />
                        </div>
                    </div>
                    <div>
                        <button onClick={() => navigatePage()} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            دخول
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
