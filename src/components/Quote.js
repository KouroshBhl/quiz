import { useEffect } from 'react';
import SectionContainer from './SectionContainer';

function Quote({ quote, dispatch }) {
  useEffect(() => {
    const controller = new AbortController();
    async function getQuote() {
      try {
        const res = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=education`,
          {
            headers: {
              'X-Api-Key': process.env.REACT_APP_API_KEY_NINJA,
            },
            contentType: 'application/json',
          },
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error('Could not get quote!');
        const data = await res.json();
        if (data.length === 0) throw new Error('Could not get quote!');
        dispatch({ type: 'getQuote', payload: data });
      } catch (error) {
        dispatch({
          type: 'quoteError',
        });
        console.log(error);
      }
    }

    getQuote();
  }, [dispatch]);

  return (
    <SectionContainer>
      <blockquote className='q-card q-card-color-2'>
        <div className='content'>{quote.quote}</div>
        <div className='author'>{quote.author}</div>
      </blockquote>
    </SectionContainer>
  );
}

export default Quote;
