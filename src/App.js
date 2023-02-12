import Header from "./components/Header";
import { useState } from "react";
import Feedbacklist from "./components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";



function App() {
    const [feedback, setFeedback] = useState()

 return(
    <>
        <Header/>
        <div className="container">
        <Feedbacklist feedback = {feedback}/>

    </div>
    </>
    )
}

export default App