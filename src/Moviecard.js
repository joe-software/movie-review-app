import React from 'react';
import styled from 'styled-components'


function Moviecard(props) {

 let movieApiRes = props.movieApiRes   
 
  return (
      <Container>
        <p >{movieApiRes['original_title']}</p>
        <img src={`https://image.tmdb.org/t/p/w500//${movieApiRes['poster_path']}`}></img>
        <p>Rating(/10):{movieApiRes['vote_average']}</p>
      </Container>
  );
}


const Container = styled.div`
background: #D3D3D3;
width: 350px;
margin: 0.1%;
border-radius: 35px;

text-overflow: elipsis;
white-space: nowrap;
overflow: hidden;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

img{
    height: 450px;
    width: 300px;
    border-radius: 25px;
}

`

export default Moviecard;