// import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  let average =
    feedback.reduce((sum, item) => sum + item.rating, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <>
      <div className="feedback-stats">
        <h4>{feedback.length} reviews</h4>
        <div>Average Rating: {isNaN(average) ? 0 : average}</div>
      </div>
    </>
  );
};

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// };
export default FeedbackStats;
