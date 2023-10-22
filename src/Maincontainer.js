import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Moviesearch from './Moviesearch';
import Reviewsearch from './Reviewsearch';


function Maincontainer(props) {
    //  *** handling the movie search functionality ***
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

    // *** Handling the display page selection (existing reviews / movie search) ***
    // state to store the page toggle selection
    let [displaySelection, setDisplaySelection] = useState('Reviews')
    // handle page selection and reload the reviews from the db api
    function selectPage(e){
        setDisplaySelection(e.target.innerText)
        setReviewsApiCall(!reviewsApiCall)
        console.log(displaySelection)
    }

    // *** handle the reviews state for display ***
    let [reviewsApiCall, setReviewsApiCall] = useState(true)
    let [reviewData, setReviewData] = useState('')

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`http://localhost:3500/get-reviews`, requestOptions)
        .then(data => data.json())
        .then(data => setReviewData(data))
    }, [reviewsApiCall])


 
  return (
      <Container>
        <Header>
        <input type='text' placeholder="Movie search..." onChange={movieSearchHandler} value={movieSearchWord}></input>
        <p onClick={selectPage} name='test'>Movie Search</p>
        <p onClick={selectPage} name='reviews'>Reviews</p>
        </Header>
        {/* conditionally display the movie search page or the reviews page depending upon what the user has selected */}
        {displaySelection == 'Reviews' ? <Reviewsearch reviewData={reviewData}/> : <Moviesearch movieSearchHandler={movieSearchHandler} movieSearchWord={movieSearchWord} movieApiRes={movieApiRes} />}
       

              </Container>
  );
}


const Container = styled.div`

`

const Header = styled.div`
padding: 10px;
padding-left: 60px;
position: fixed;
width: 100%;
background: grey;
display: flex;
align-items: center;
justify-content: flex-start;
input{
    height: 30px;
    width: 200px;
    border-radius: 20px;
    padding-left: 10px;
    font-size: 25px;
}
p{
    margin-left: 30px;
    font-size: 30px;
    cursor: pointer;
}

`

export default Maincontainer;