import React, { useEffect, useState } from 'react';
import styled from 'styled-components'


function Reviewcard(props) {
  console.log(props)
 
  return (
      <Container>
        <div className='inner-cont'>
            <p>Movie title: {props.data['movieName']}</p>
            <p>Date of review: {props.data['date']}</p>
            <div className='picture-review-cont'>
                <img src={props.data['imageUrl']}></img>
                <div className='review-cont'>
                    <p>Name of reviewer: {props.data['name']}</p>
                    <p>review: {props.data['review']}</p>
                </div>
            </div>
        </div>
       
                    
      </Container>
  );
}


const Container = styled.div`
background: grey;
margin: 5px;
border-radius: 30px;

img{
    width: 90px;
    margin-right: 20px;
    border-radius: 10px;
}

.inner-cont{
    padding: 10px;
}

.picture-review-cont{
    display: flex;
    
}
.review-cont{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p{
        padding-bottom: 5px;;
        margin: 0;
    }
  
}
`

export default Reviewcard;