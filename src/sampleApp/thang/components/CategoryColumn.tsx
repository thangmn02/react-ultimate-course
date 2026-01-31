import type { CategoryColumnProps, Submission } from '../../../types/questionboard.types';
import QuestionCard from './QuestionCard';

const getQuestionStatus = (questionId: string, submissions: Submission[]): string => {
  const submission = submissions.find(sub => sub.questionId === questionId);
  return submission ? submission.status : 'NONE';
};

function CategoryColumn({ title, questions, submissions }: CategoryColumnProps) {
  const completedCount = questions.filter(q => {
    const status = getQuestionStatus(q.id, submissions);
    return status !== 'NONE';
  }).length;

  const questionCards = questions.map(question => {
    const status = getQuestionStatus(question.id, submissions);
    return (
      <QuestionCard 
        key={question.id}
        question={question}
        status={status}
      />
    );
  });

  return (
    <div className="category-column">
      <h2 className="category-title">
        {title} - {completedCount} / {questions.length}
      </h2>
      <div className="questions-list">
        {questionCards}
      </div>
    </div>
  );
}

export default CategoryColumn