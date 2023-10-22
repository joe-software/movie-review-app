import React from 'react';
import styled from 'styled-components'


function Reviewsearch(props) {
  console.log(props)
 
  return (
      <Container>
        
        {props.reviewData == "" ? <p>loading</p> : <p>{props.reviewData[0]['name']}</p> }
        {props.reviewData == "" ? <p>loading</p> : <p>{props.reviewData[0]['name']}</p> }
        {props.reviewData == "" ? <p>loading</p> : <p>{props.reviewData[0]['name']}</p> }
        {props.reviewData == "" ? <p>loading</p> : <p>{props.reviewData[0]['name']}</p> }
        {props.reviewData == "" ? <p>loading</p> : <p>{props.reviewData[0]['name']}</p> }
        {props.reviewData == "" ? <p>loading</p> : <p>{props.reviewData[0]['name']}</p> }
        {props.reviewData == "" ? <p>loading</p> : <p>{props.reviewData[0]['name']}</p> }
        {props.reviewData == "" ? <p>loading</p> : <p>{props.reviewData[0]['name']}</p> }
        {props.reviewData == "" ? <p>loading</p> : <p>{props.reviewData[0]['name']}</p> }
       
                    
      </Container>
  );
}


const Container = styled.div`

`

export default Reviewsearch;