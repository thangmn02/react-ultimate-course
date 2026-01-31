import { dataQuestion, dataSubmission } from '../../../mocks/mockQuestionboard';
import CategoryColumn from '../components/CategoryColumn';

function QuestionBoard() {
  const categories = [...new Set(dataQuestion.map(q => q.category))];

  const categoryColumns = categories.map(category => {
    const categoryQuestions = dataQuestion.filter(q => q.category === category);
    return (
      <CategoryColumn
        key={category}
        title={category}
        questions={categoryQuestions}
        submissions={dataSubmission}
      />
    );
  });

  return (
    <div className="board-container">
      <div className="columns-wrapper">
        {categoryColumns}
      </div>
    </div>
  );
}

export default QuestionBoard;