import React, { useEffect, useState } from 'react';
import styled from 'styled-components'


function Reviewcard(props) {
 
  return (
      <Container>
        <div className='inner-cont'>
            <p><span>{props.data['movieName']}</span></p>
            <p><span>Date of review: </span>{new Date(props.data['date']).toLocaleDateString()}</p>
            <div className='picture-review-cont'>
                <img src={props.data['imageUrl']}></img>
                <div className='review-cont'>
                    <p><span>Name of reviewer: </span> {props.data['name']}</p>
                    <p><span>review: </span> {props.data['review']}</p>
                </div>
            </div>
        </div>
       
                    
      </Container>
  );
}


const Container = styled.div`
background: grey;
margin: 15px;
border-radius: 30px;
font-family: 'Lato', sans-serif;
border: 4px solid black;


img{
    width: 90px;
    margin-right: 20px;
    border-radius: 10px;
}

.inner-cont{
    padding: 20px;
}

.picture-review-cont{
    display: flex;
    
}
span{
    font-weight: bold;
}
.review-cont{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;    
}
p{
    padding-bottom: 5px;
    margin: 0;
}

@media only screen and (max-width: 650px) {
    margin: 10px;
    border: 2px solid black;

.inner-cont{
    padding: 10px;
}

span{
    font-size: 17px;
}

p{
    padding-bottom: 5px;
    margin: 0;
    font-size: 15px;
}  
  
}
`

export default Reviewcard;