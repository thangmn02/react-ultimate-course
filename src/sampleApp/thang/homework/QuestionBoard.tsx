import '../../../styles/QuestionBoard.css';
interface Question {
  id: string;
  name: string;
  category: string;
}

interface Submission {
  questionId: string;
  status: 'CORRECT' | 'INCORRECT' | 'PARTIALLY_CORRECT';
}

interface CategoryColumnProps {
  title: string;
  questions: Question[];
  submissions: Submission[];
}

const QUESTIONS: Question[] = [
  { id: 'sign-up-form', name: 'Sign-Up Form', category: 'HTML' },
  { id: 'item-cart', name: 'Item Cart', category: 'HTML' },
  { id: 'spaghetti-recipe', name: 'Spaghetti Recipe', category: 'HTML' },
  { id: 'blog-post', name: 'Blog Post', category: 'HTML' },
  { id: 'rainbow-circles', name: 'Rainbow Circles', category: 'CSS' },
  { id: 'navbar', name: 'Navbar', category: 'CSS' },
  { id: 'pig-emoji', name: 'Pig Emoji', category: 'CSS' },
  { id: 'purchase-form', name: 'Purchase Form', category: 'CSS' },
  { id: 'algoexpert-products', name: 'AlgoExpert Products', category: 'CSS' },
  { id: 'testing-framework', name: 'Testing Framework', category: 'JavaScript' },
  { id: 'array-methods', name: 'Array Methods', category: 'JavaScript' },
  { id: 'event-target', name: 'Event Target', category: 'JavaScript' },
  { id: 'debounce', name: 'Debounce', category: 'JavaScript' },
  { id: 'this-binding', name: 'This Binding', category: 'JavaScript' },
  { id: 'promisify', name: 'Promisify', category: 'JavaScript' },
  { id: 'throttle', name: 'Throttle', category: 'JavaScript' },
  { id: 'curry', name: 'Curry', category: 'JavaScript' },
  { id: 'infinite-scroll', name: 'Infinite Scroll', category: 'DOM Manipulation' },
  { id: 'stopwatch', name: 'Stopwatch', category: 'DOM Manipulation' },
  { id: 'tic-tac-toe', name: 'Tic Tac Toe', category: 'DOM Manipulation' },
  { id: 'todo-list', name: 'Todo List', category: 'DOM Manipulation' },
  { id: 'typeahead', name: 'Typeahead', category: 'DOM Manipulation' },
  { id: 'tier-list', name: 'Tier List', category: 'DOM Manipulation' },
  { id: 'toasts', name: 'Toasts', category: 'DOM Manipulation' },
  { id: 'sudoku', name: 'Sudoku', category: 'DOM Manipulation' },
  { id: 'questions-list', name: 'Questions List', category: 'DOM Manipulation' },
];

const SUBMISSIONS: Submission[] = [
  { questionId: 'blog-post', status: 'CORRECT' },
  { questionId: 'throttle', status: 'INCORRECT' },
  { questionId: 'stopwatch', status: 'PARTIALLY_CORRECT' },
  { questionId: 'pig-emoji', status: 'CORRECT' },
  { questionId: 'todo-list', status: 'CORRECT' },
  { questionId: 'testing-framework', status: 'CORRECT' },
  { questionId: 'array-methods', status: 'INCORRECT' },
  { questionId: 'spaghetti-recipe', status: 'PARTIALLY_CORRECT' },
  { questionId: 'algoexpert-products', status: 'PARTIALLY_CORRECT' },
  { questionId: 'curry', status: 'CORRECT' },
  { questionId: 'toasts', status: 'INCORRECT' },
  { questionId: 'tic-tac-toe', status: 'CORRECT' },
  { questionId: 'event-target', status: 'CORRECT' },
  { questionId: 'debounce', status: 'PARTIALLY_CORRECT' },
  { questionId: 'item-cart', status: 'CORRECT' },
  { questionId: 'typeahead', status: 'CORRECT' },
  { questionId: 'tier-list', status: 'PARTIALLY_CORRECT' },
  { questionId: 'sudoku', status: 'CORRECT' },
  { questionId: 'rainbow-circles', status: 'INCORRECT' },
  { questionId: 'infinite-scroll', status: 'CORRECT' },
  { questionId: 'navbar', status: 'PARTIALLY_CORRECT' },
];

const getStatusColor = (status: string): string => {
  const colorMap: Record<string, string> = {
    'CORRECT': '#22c55e',
    'INCORRECT': '#ef4444',
    'PARTIALLY_CORRECT': '#eab308',
    'NONE': '#d1d5db'
  };
  return colorMap[status] || colorMap['NONE'];
};

const getQuestionStatus = (questionId: string, submissions: Submission[]): string => {
  const submission = submissions.find(sub => sub.questionId === questionId);
  return submission ? submission.status : 'NONE';
};

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

const CategoryColumn = ({ title, questions, submissions }: CategoryColumnProps) => {
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
};

function QuestionBoard() {
  const categories = [...new Set(QUESTIONS.map(q => q.category))];

  const categoryColumns = categories.map(category => {
    const categoryQuestions = QUESTIONS.filter(q => q.category === category);
    return (
      <CategoryColumn
        key={category}
        title={category}
        questions={categoryQuestions}
        submissions={SUBMISSIONS}
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