import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Moviesearch from './Moviesearch';
import Reviewsearch from './Reviewsearch';


function Maincontainer(props) {
    // handling the movie search functionality

    // state containing the movie search word
    let [movieSearchWord, setMovieSearchWord] = useState('')
    //state containing the API response
    let [movieApiRes, setMovieApiRes] = useState(false)
    // function updates the movieSearchWord as the user types
    function movieSearchHandler(e){
        setMovieSearchWord(e.target.value)
    }
    //effect to make the API call for the movie information whenever the movieSearchWord is changed
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${movieSearchWord}&api_key=29b6abdc89cf65e8ce271115a53db28e`)
        .then(res => res.json())
        .then(data => {
            setMovieApiRes(data.results)
        })

    }, [movieSearchWord])

 
  return (
      <Container>
        <Moviesearch movieSearchHandler={movieSearchHandler} movieSearchWord={movieSearchWord} movieApiRes={movieApiRes} />
        {/* Below - placeholder for the page to display all reviews */}
        {/* <Reviewsearch /> */}
      </Container>
  );
}


const Container = styled.div`

`

export default Maincontainer;