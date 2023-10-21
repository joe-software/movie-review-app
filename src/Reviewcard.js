import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


function Reviewcard(props) {
 
  return (
      <Container>
        <div className='inner-container'>
        <p onClick={props.closeReviewBox}>X</p>
        <textarea type="textbox"></textarea>
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