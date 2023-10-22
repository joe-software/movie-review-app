import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


function Reviewcard(props) {

    
 
  return (
      <Container className='inner-container'>
        <div className='inner-container'>
        <p onClick={props.closeReviewBox}>X</p>
        <input type='text' onChange={props.reviewBodyHandler} value={props.reviewBody['reviewName']} name='reviewName'></input>
        <textarea type='textbox' onChange={props.reviewBodyHandler} value={props.reviewBody['reviewText']} name='reviewText'></textarea>
        <button onClick={props.reviewPost}>Submit Review</button>
        </div>
      </Container>
  );
}



const Container = styled.div`
position: fixed;
width: 100%;
height: 100%;
top:0;
right:0;
display: flex;
align-items: center;
justify-content: center;

.inner-container{
    width: 80%;
    height: 80%;
    background: grey;
    z-index: 1;
    border-radius: 35px;

display: flex;
flex-direction: column;
align-items: center;

textarea{
   height: 100px;
   width: 90%;

}
}   


`

export default Reviewcard;