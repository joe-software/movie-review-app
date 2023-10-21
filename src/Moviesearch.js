import React from 'react';
import styled from 'styled-components'
import Moviecard from './Moviecard';


function Moviesearch(props) {
    // function testApi(){
    //     console.log(props.movieApiRes)
    //  }
 
  return (
      <Container>
        <input type='text' onChange={props.movieSearchHandler} value={props.movieSearchWord} ></input>

        {/* conditionally display the results based on if results were found for the search */}
        <div className='card-layout'>
        {props.movieApiRes[0] ? 
        props.movieApiRes.map(item =>  <Moviecard movieApiRes={item} reviewBodyHandler={props.reviewBodyHandler} reviewBody={props.reviewBody} reviewPost={props.reviewPost} resetReview={props.resetReview}/>)
         : <p>No results found, please try annother search</p>}
         </div>

             </Container>
  );
}


const Container = styled.div`
.card-layout{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

`

export default Moviesearch;