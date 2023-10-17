import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Moviesearch from './Moviesearch';
import Reviewsearch from './Reviewsearch';


function Maincontainer(props) {
    // state containing the movie search word
    let [movieSearchWord, setMovieSearchWord] = useState('')

    // function updates the movieSearchWord as the user types
    function movieSearchHandler(e){
        setMovieSearchWord(e.target.value)
    }

    //effect to make the API call for the movie information whenever the movieSearchWord is changed
    useEffect(() => {
        console.log(movieSearchWord)

    }, [movieSearchWord])
 
  return (
      <Container>
        <Moviesearch movieSearchHandler={movieSearchHandler} movieSearchWord={movieSearchWord}/>
        {/* Below - placeholder for the page to display all reviews */}
        {/* <Reviewsearch /> */}
      </Container>
  );
}


const Container = styled.div`

`

export default Maincontainer;