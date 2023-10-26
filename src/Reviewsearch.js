import React from 'react';
import styled from 'styled-components'
import Reviewcard from './Reviewcard';


function Reviewsearch(props) {
 
  return (
      <Container>
        
        {props.reviewData == "" ? <p>loading</p> : props.reviewData.map((item) => <Reviewcard data={item}  />)}
        {/* {props.reviewData.map(() => <Reviewcard reviewData={props.reviewData} />)} */}
        
                    
      </Container>
  );
}


const Container = styled.div`
padding-top: 70px;

`

export default Reviewsearch;