import React from 'react';
import styled from 'styled-components'
import Moviecard from './Moviecard';


function Moviesearch(props) {
 
  return (
      <Container>
        <input type='text' onChange={props.movieSearchHandler} value={props.movieSearchWord}></input>
        <Moviecard/>
      </Container>
  );
}


const Container = styled.div`

`

export default Moviesearch;