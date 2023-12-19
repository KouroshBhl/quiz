import { useEffect } from 'react';
import SectionContainer from './SectionContainer';

function Quote({ quote, dispatch }) {
  // useEffect(() => {
  //   async function getQuote() {
  //     try {
  //       const res = await fetch(
  //         `https://api.api-ninjas.com/v1/quotes?category=education`,
  //         {
  //           headers: {
  //             'X-Api-Key': process.env.REACT_APP_API_KEY_NINJA,
  //           },
  //           contentType: 'application/json',
  //         }
  //       );

  //       const data = await res.json();
  //       console.log(data);
  //       dispatch({ type: 'getQuote', payload: data });
  //     } catch (error) {}
  //   }

  //   getQuote();
  // }, [dispatch]);

  return (
    <SectionContainer>
      <blockquote className='q-card q-card-color-2'>
        <div className='content'>quote</div>
        <div className='author'>author</div>
      </blockquote>
    </SectionContainer>
  );
}

export default Quote;
