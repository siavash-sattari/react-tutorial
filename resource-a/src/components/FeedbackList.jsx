import FeedbackItem from './FeedbackItem';
import { useFeedback } from '../context/FeedbackContext';

const FeedbackList = () => {
  const { feedback } = useFeedback();

  if (!feedback || feedback.length === 0) {
    return <h1>No Feedback Yet</h1>;
  }

  return (
    <div className='feedback-list'>
      {feedback.map(item => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
