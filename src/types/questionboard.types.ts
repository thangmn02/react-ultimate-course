export interface Question {
  id: string;
  name: string;
  category: string;
}

export interface Submission {
  questionId: string;
  status: 'CORRECT' | 'INCORRECT' | 'PARTIALLY_CORRECT';
}

export interface CategoryColumnProps {
  title: string;
  questions: Question[];
  submissions: Submission[];
}