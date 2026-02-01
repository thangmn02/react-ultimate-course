import React from 'react';
import { dataQuestion, dataSubmission } from '../../../mocks/mockQuestionboard';
import CategoryColumn from '../components/CategoryColumn';

import ReactLogo from '../../../assets/react.svg'

function QuestionBoard() {
  // const categories = [...new Set(dataQuestion.map(q => q.category))];
  const [categories, setCategories] = React.useState([...new Set(dataQuestion.map(q => q.category))]);

  function deleteItem(id: string) {
    console.log('deleteItem: ', id)
  }

  const categoryColumns = categories.map(category => {
    const categoryQuestions = dataQuestion.filter(q => q.category === category);
    return (
      <CategoryColumn
        key={category}
        title={category}
        questions={categoryQuestions}
        submissions={dataSubmission}
        deleteItem={deleteItem}
      />
    );
  });

  return (
    <div className="board-container">
      <div className="columns-wrapper">
        {categoryColumns}

        <img src={ReactLogo} alt="" />
      </div>
    </div>
  );
}

export default QuestionBoard;