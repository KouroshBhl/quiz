import { useEffect, useReducer } from 'react';
import {
  Header,
  ContainerApp,
  SetupQuiz,
  Question,
  Loader,
} from './components';
import GetQuestions from './components/GetQuestions';

const initialState = {
  categories: [],
  // 'loading', 'error', 'ready', 'active', 'finished', preparing
  status: 'loading',
  numOfQuestions: 5,
  categorySelectedID: null,
  difficultySelected: null,
  typeSelected: null,
  apiString: null,
  questions: [],
  index: 0,
  correctAnswers: [],
  incorrectAnswers: [],
  hasAnswered: false,
  randomAnswers: [],
  allAnswers: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataRecieved':
      return { ...state, categories: action.payload, status: 'ready' };

    case 'getQuestionNumbers':
      return { ...state, numOfQuestions: action.payload };

    case 'getCategorySelected':
      return { ...state, categorySelectedID: action.payload };

    case 'getDifficultySelected':
      return { ...state, difficultySelected: action.payload };

    case 'getTypeSelected':
      return { ...state, typeSelected: action.payload };

    case 'startQuiz':
      let api;
      if (state.categorySelectedID)
        api = `&category=${state.categorySelectedID}`;
      if (state.difficultySelected)
        api = api
          ? api + `&difficulty=${state.difficultySelected}`
          : `&difficulty=${state.difficultySelected}`;

      if (state.typeSelected)
        api = api
          ? api + `&type=${state.typeSelected}`
          : `&type=${state.typeSelected}`;

      return { ...state, status: 'preparing', apiString: api };

    case 'questionsRecieved':
      const alls = action.payload.map((question) => {
        return [question.correct_answer, ...question.incorrect_answers];
      });

      function shuffle(array) {
        let currentIndex = array.length,
          randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }

        return array;
      }

      const random = alls.map((all) => shuffle(all));

      return {
        ...state,
        questions: action.payload,
        status: 'active',
        allAnswers: alls,
        randomAnswers: random,
      };

    // case 'randomizeAnswers':
    //   console.log(action.payload);
    //   let answers = [...action.payload[state.index].incorrect_answers];
    //   const tempIndex = Math.floor(Math.random() * 4);
    //   if (tempIndex === 3) {
    //     answers.push(action.payload[state.index].correct_answer);
    //   } else {
    //     answers.push(answers[tempIndex]);
    //     answers[tempIndex] = action.payload[state.index].correct_answer;
    //   }

    // return { ...state };

    case 'checkAnswer':
      if (state.questions[state.index].correct_answer === action.payload)
        return {
          ...state,
          hasAnswered: true,
          correctAnswers: [
            ...state.correctAnswers,
            {
              question: state.questions[state.index],
              selectedOption: action.payload,
            },
          ],
        };
      return {
        ...state,
        hasAnswered: true,
        incorrectAnswers: [
          ...state.incorrectAnswers,
          {
            question: state.questions[state.index],
            selectedOption: action.payload,
          },
        ],
      };

    case 'nextQuestion':
      return { ...state, hasAnswered: false, index: state.index + 1 };

    default:
      throw new Error(
        'Could not caught the action! Please contact administrator of the website!'
      );
  }
}

function App() {
  const [
    {
      status,
      categories,
      numOfQuestions,
      apiString,
      questions,
      index,
      hasAnswered,
      randomAnswers,
      allAnswers,
      correctAnswers,
      incorrectAnswers,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    async function getCategorie() {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_QUESTION_API}api_category.php`,
          { String: controller.signal }
        );
        const data = await res.json();
        dispatch({ type: 'dataRecieved', payload: data.trivia_categories });
      } catch (error) {
        console.log(error);
      }
    }
    getCategorie();

    return function () {
      controller.abort();
    };
  }, []);

  return (
    <ContainerApp>
      {status === 'loading' && (
        <>
          <Header /> <Loader />
        </>
      )}
      {status === 'ready' && (
        <>
          <Header />
          <SetupQuiz dispatch={dispatch} categories={categories} />
        </>
      )}

      {status === 'preparing' && (
        <GetQuestions
          numOfQuestions={numOfQuestions}
          apiString={apiString}
          dispatch={dispatch}
        />
      )}

      {status === 'active' && (
        <Question
          numOfQuestions={numOfQuestions}
          dispatch={dispatch}
          questions={questions}
          index={index}
          hasAnswered={hasAnswered}
          randomAnswers={randomAnswers[index]}
          allAnswers={allAnswers}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
        />
      )}
    </ContainerApp>
  );
}

export default App;
