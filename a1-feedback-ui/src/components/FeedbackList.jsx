import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner';
import { useFeedback } from '../context/FeedbackContext';

const FeedbackList = () => {
  const { feedback, isLoading } = useFeedback();

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <h1>No Feedback Yet</h1>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      {feedback.map(item => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
