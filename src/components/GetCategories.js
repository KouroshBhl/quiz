import { useEffect } from 'react';
import Header from './Header';
import Loader from './Loader';

function GetCategories({ dispatch }) {
  useEffect(() => {
    const controller = new AbortController();
    async function getCategorie() {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_QUESTION_API}api_category.php`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error('Could not connect to server!');
        const data = await res.json();
        dispatch({ type: 'loading', payload: data.trivia_categories });
      } catch (error) {
        if (error.name !== 'AbortError')
          dispatch({
            type: 'error',
            payload: {
              msg: 'Could not get categories list!',
              error: error.message,
            },
          });
      }
    }
    getCategorie();
  }, [dispatch]);

  return (
    <>
      <Header /> <Loader />
    </>
  );
}

export default GetCategories;
