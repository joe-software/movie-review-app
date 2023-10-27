import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


function Reviewpage(props) {

    
 
  return (
      <Container className='inner-container'>
        <div className='inner-container'>
        <p onClick={props.closeReviewBox}>X</p>
        <input type='text' placeholder='Your name here' onChange={props.reviewBodyHandler} value={props.reviewBody['reviewName']} name='reviewName'></input>
        <textarea type='textbox' onChange={props.reviewBodyHandler} placeholder='Your review here' value={props.reviewBody['reviewText']} name='reviewText'></textarea>
        <button onClick={props.reviewPost}>Submit Review</button>
        <p className='disclaimer'>Please be aware that this review will be stored in a database and displayed on the 'Reviews' page of this site - do not include sensitive information</p>
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

input, textarea{
  height: 30px;
  width: 200px;
  border-radius: 20px;
  padding-left: 10px;
  font-size: 15px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  margin: 10px;

}
p{
  font-size: 50px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  color: white;
  margin: 10px;
  cursor: pointer;

}

.inner-container{
    width: 60%;
    height: 50%;
    background: grey;
    z-index: 1;
    border-radius: 35px;
    padding-left: 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    

textarea{
   height: 100px;
   width: 90%;

}
}  
.disclaimer{
  font-size: 10px;
  font-weight: normal;
}

//adaptive for mobile
@media only screen and (max-width: 600px) {
  .inner-container{
    width: 90%;
    height: 60%;
    padding-left: 10px;

  }

  
}


`

export default Reviewpage;