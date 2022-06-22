// import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import FeedbackForm from "./compoments/FeedbackForm";
import FeedbackList from "./compoments/FeedbackList";
import FeedbackStats from "./compoments/FeedbackStats";
import Header from "./compoments/Header";
// import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./compoments/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm 
                  // handleAdd={addFeedback}
                   />
                  <FeedbackStats />
                  <FeedbackList
                    // feedback={feedback}
                    // handleDelete={deleteFeedback}
                  />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
