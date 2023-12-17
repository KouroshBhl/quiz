import { useEffect } from 'react';
import Loader from './Loader';

function GetQuestions({ apiString, numOfQuestions, dispatch }) {
  useEffect(() => {
    const controller = new AbortController();
    async function getQuestions() {
      try {
        const res = await fetch(
          `${
            process.env.REACT_APP_QUESTION_API
          }api.php?amount=${numOfQuestions}${apiString || ''}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        dispatch({ type: 'questionsRecieved', payload: data.results });
      } catch (error) {
        console.log(error.message);
      }
    }

    getQuestions();

    return function () {
      controller.abort();
    };
  }, [numOfQuestions, apiString, dispatch]);

  return <Loader />;
}

export default GetQuestions;
