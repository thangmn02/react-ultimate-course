import type { Question } from '../../../types/questionboard.types';
import { getStatusColor } from '../../../utils/getStatusColor';

const QuestionCard = ({ question, status, deleteItem }: { question: Question; status: string, deleteItem: (id: string) => void }) => {
  return (
    <div className="question-card">
      <div 
        className="status-dot"
        style={{ backgroundColor: getStatusColor(status) }}
      />
      <span className="question-name">{question.name}</span>
      <button type='button' onClick={() => deleteItem(question.id)}>Delete</button>
    </div>
  );
};

export default QuestionCard