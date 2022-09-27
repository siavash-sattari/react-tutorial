import { useState, useEffect, createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc');
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  const deleteFeedback = id => {
    if (window.confirm('Are you sure to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true
    });
  };

  const updateFeedback = (id, updateItem) => {
    setFeedback(feedback.map(item => (item.id === id ? { ...item, ...updateItem } : item)));
  };

  const value = {
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
    isLoading,
    updateFeedback
  };

  return <FeedbackContext.Provider value={value}>{children}</FeedbackContext.Provider>;
};

export const useFeedback = () => useContext(FeedbackContext);
