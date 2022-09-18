import { useState, createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

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
    updateFeedback
  };

  return <FeedbackContext.Provider value={value}>{children}</FeedbackContext.Provider>;
};

export const useFeedback = () => useContext(FeedbackContext);
