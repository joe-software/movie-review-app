import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Reviewpage from './Reviewpage';


function Moviecard(props) {
 let movieApiRes = props.movieApiRes 
 console.log(movieApiRes)

// handling the review posting functionality
// store state for review content
 let [reviewBody, setReviewBody] = useState({
  reviewText: "",
  reviewImage: "",
  reviewName: "",
})
// handle the state change for the review content
function reviewBodyHandler(e){
  setReviewBody({...reviewBody, [e.target.name]: e.target.value})
}

// function to post the review information to the API
function reviewPost(){
  let currentDate = new Date()
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ review: reviewBody['reviewText'], date: currentDate, name: reviewBody['reviewName'], imageUrl: `https://image.tmdb.org/t/p/w500//${movieApiRes['poster_path']}`, movieName: movieApiRes['original_title']})
  };
  fetch('http://localhost:3500/post-review', requestOptions)
  .then(data => data.json())
  .then(closeReviewBox())
}
 
//  state and handler to determine wether to open or close the review box - currently this functionality is unavailable
let [displayReviewBox, setDisplayReviewBox] = useState('false')

function openReviewBox(placeholder){
  setDisplayReviewBox(true)
}
function closeReviewBox(placeholder){
  setDisplayReviewBox(false)
  setReviewBody({
    reviewText: "",
    reviewImage: "",
    reviewName: "",
})
}

 
  return (
      <Container>
        <div className='info-cont'>
          <img src={`https://image.tmdb.org/t/p/w500//${movieApiRes['poster_path']}`}></img>
          <div className='text-cont'>
          <h1>{movieApiRes['original_title']}</h1>
          <p><span>Rating: </span>{`${movieApiRes['vote_average']}/10`}</p>
          <p className='overview-text'><span>Overview: </span>{movieApiRes['overview']}</p>
          </div>
        </div>



        <div>
          {/* *** uncomment once API server is connected *** */}
          {/* <button onClick={openReviewBox}>Click to review {movieApiRes['original_title']}</button>
          {displayReviewBox == true ? <Reviewpage closeReviewBox={closeReviewBox} reviewBodyHandler={reviewBodyHandler} reviewBody={reviewBody} reviewPost={reviewPost}></Reviewpage> : null} */}
        </div>
       
      </Container>
  );
}


const Container = styled.div`
font-family: 'Lato', sans-serif;
background: #D3D3D3;
width: 450px;
height: 300px;
margin: 1% 0.1%;
border-radius: 35px;

overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
-webkit-box-orient: vertical;



.info-cont{
  display: flex;
  justify-content: flex-start;
}
.text-cont{
  margin: 0 5%;
}

img{
    height: 300px;
    width: 200px;
    border-radius: 25px;
    background: black;
}

h1{
  font-size: 20px;
  font-weight: bold;
  margin: 5% 0%;
}
p{
  font-size: 20px;
  margin: 5% 0%;

  display: block;/* or inline-block */
  text-overflow: ellipsis ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 12.6em;
  line-height: 1.2em;
}
.overview-text{
  font-size: 15px;
  padding-bottom: 5%;
}
span{
  font-weight: bold;
}
//adaptive for mobile
@media only screen and (max-width: 600px) {
  height: 250px;
  margin: 3% 0.1%;
  img{
    height: 250px;
    width: 166px;
    border-radius: 25px;
    background: black;
}
  h1{
    font-size: 14px;
  }

  p{
    font-size: 14px;
  
  }
  .overview-text{
    font-size: 12px;
    padding-bottom: 5%;
    max-height: 12.5em;
    line-height: 1.2em;
  }

  
}
`

export default Moviecard;