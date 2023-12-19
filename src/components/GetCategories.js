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
          { String: controller.signal }
        );
        const data = await res.json();
        dispatch({ type: 'loading', payload: data.trivia_categories });
      } catch (error) {
        console.log(error);
      }
    }
    getCategorie();

    return function () {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <>
      <Header /> <Loader />
    </>
  );
}

export default GetCategories;
