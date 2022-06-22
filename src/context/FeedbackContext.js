import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is a feedback from context1",
      rating: 6,
    },
    {
      id: 2,
      text: "This is a feedback from context2",
      rating: 10,
    },
    {
      id: 3,
      text: "This is a feedback from context3",
      rating: 8,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };
  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // console.log("From App", newFeedback);
    // console.log(feedback);
    setFeedback([newFeedback, ...feedback]);
  };
  // Update feedback item
  const updateFeedback = (id, updItem) => {
    console.log(id, updItem);
    setFeedback(feedback.map((item)=> item.id === id ? {...item, ...updItem} : item));
   
  };

  // Set item to be updated
  const editFeedback = (item) => {
    console.log(item);
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
