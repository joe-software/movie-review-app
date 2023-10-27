import React, { useEffect, useState } from 'react';
import styled from 'styled-components'


function Reviewcard(props) {
 
  return (
      <Container>
        <div className='inner-cont'>
            <p><span>{props.data['movieName']}</span></p>
            <p><span>Date of review: </span>{props.data['date']}</p>
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
`

export default Reviewcard;