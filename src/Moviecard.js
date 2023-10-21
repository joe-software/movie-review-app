import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Reviewcard from './Reviewcard';


function Moviecard(props) {
 let movieApiRes = props.movieApiRes 
 
//  state to determine wether to open or close the review box
let [displayReviewBox, setDisplayReviewBox] = useState('false')

function openReviewBox(placeholder){
  setDisplayReviewBox(true)
}
function closeReviewBox(placeholder){
  setDisplayReviewBox(false)
}

 
  return (
      <Container>
        <p >{movieApiRes['original_title']}</p>
        <img src={`https://image.tmdb.org/t/p/w500//${movieApiRes['poster_path']}`}></img>
        <p>Rating(/10):{movieApiRes['vote_average']}</p>
          <div>
            <button onClick={openReviewBox}>Click to review {movieApiRes['original_title']}</button>
          {displayReviewBox == true ? <Reviewcard closeReviewBox={closeReviewBox}></Reviewcard> : null}
          </div>

        {/* rating element */}
        {/* <div className='review-text-area'>
          <p>Write your review/comments below</p>
        <input type="textbox "></input>
        <button>Submit your review</button>
        </div> */}
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