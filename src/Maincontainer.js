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
        .then(setDisplaySelection('test'))

    }, [movieSearchWord])

    // *** Handling the display page selection (existing reviews / movie search) ***
    // state to store the page toggle selection

     // *** uncomment once API server is connected *** 

    let [displaySelection, setDisplaySelection] = useState('Reviews')
    // handle page selection and reload the reviews from the db api
    function selectPage(e){
        setDisplaySelection(e.target.innerText)
        setReviewsApiCall(!reviewsApiCall)
    }

    // *** handle the reviews state for display ***

    // *** uncomment once API server is connected *** 

    let [reviewsApiCall, setReviewsApiCall] = useState(true)
    let [reviewData, setReviewData] = useState('')

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`https://movie-review-server-e18d38fb50df.herokuapp.com/get-reviews`, requestOptions)
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
        {/* <Moviesearch movieSearchHandler={movieSearchHandler} movieSearchWord={movieSearchWord} movieApiRes={movieApiRes} /> */}
        {/* conditionally display the movie search page or the reviews page depending upon what the user has selected */}
        {/* *** un-comment to access reviews once server is connected *** */}
        {displaySelection == 'Reviews' ? <Reviewsearch reviewData={reviewData}/> : <Moviesearch movieSearchHandler={movieSearchHandler} movieSearchWord={movieSearchWord} movieApiRes={movieApiRes} />}
       

              </Container>
  );
}


const Container = styled.div`
font-family: 'Lato', sans-serif;
font-size: 20px;

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
    font-family: 'Lato', sans-serif;
    font-weight: bold;

}
p{
    margin-left: 30px;
    font-size: 30px;
    cursor: pointer;
}

//adaptive for mobile
@media only screen and (max-width: 600px) {
    padding-left: 5px;

    input{
        width: 100px;
        border-radius: 15px;
        font-size: 17px;      
    
    }
    p{
        margin-left: 15px;
        font-size: 20px;
        cursor: pointer;
    }
 

  
}

`

export default Maincontainer;