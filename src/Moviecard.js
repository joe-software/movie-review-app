import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Reviewpage from './Reviewpage';


function Moviecard(props) {
 let movieApiRes = props.movieApiRes 

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
 
//  state to determine wether to open or close the review box
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
        <p >{movieApiRes['original_title']}</p>
        <img src={`https://image.tmdb.org/t/p/w500//${movieApiRes['poster_path']}`}></img>
        <p>{`Rating: ${movieApiRes['vote_average']}/10`}</p>

          <div>
          <button onClick={openReviewBox}>Click to review {movieApiRes['original_title']}</button>
          {displayReviewBox == true ? <Reviewpage closeReviewBox={closeReviewBox} reviewBodyHandler={reviewBodyHandler} reviewBody={reviewBody} reviewPost={reviewPost}></Reviewpage> : null}
          </div>
       
      </Container>
  );
}


const Container = styled.div`
background: #D3D3D3;
width: 350px;
margin: 0.1%;
border-radius: 35px;

text-overflow: elipsis;
white-space: nowrap;
overflow: hidden;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

img{
    height: 300px;
    width: 200px;
    border-radius: 25px;
}
.review-text-area{
  display: flex;
flex-direction: column;
}

`

export default Moviecard;