import { useNavigate } from "react-router-dom";

export default function ExaminationPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>Examination</h1>
            <button 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => navigate("/examdashboard")}
            >
                Go to Exam Dashboard and get your code clean and BKL CSE HACKATHON laura 
            </button>
        </div>
    );
}
