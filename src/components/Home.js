import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import toastifyFile from "../components/React-toastify/index"

export default function Home() {

    const SimpleScenarioCode = "code1";
    const ComplicatedScenario = "code2";

    let navigate = useNavigate();
    const [scenarioCode, setScenarioCode] = useState("");

    const handleChangeScenarioCode = (e) => {
        setScenarioCode(e.target.value)
    }

    function navigatePage() {
        switch (scenarioCode) {
            case SimpleScenarioCode:
                navigate("/SimpleScenario")
                break;

            case ComplicatedScenario:
                navigate("/ComplicatedScenario")
                break;

            default:
                document.getElementById("scenarioCodeId").value = ""
                toastifyFile.errorNotify("Error Code")
                break;
        }
    }
    return (
        <>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">ادخل رمز السيناريو</h2>

                    </div>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Scenario Code</label>
                            <input onChange={handleChangeScenarioCode} id="scenarioCodeId" type="text" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="رمز السيناريو" />
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