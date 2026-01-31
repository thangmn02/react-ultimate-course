import type { Question } from '../../../types/questionboard.types';
import { getStatusColor } from '../../../utils/getStatusColor';

const QuestionCard = ({ question, status }: { question: Question; status: string }) => {
  return (
    <div className="question-card">
      <div 
        className="status-dot"
        style={{ backgroundColor: getStatusColor(status) }}
      />
      <span className="question-name">{question.name}</span>
    </div>
  );
};

export default QuestionCard