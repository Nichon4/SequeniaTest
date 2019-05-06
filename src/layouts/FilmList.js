import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {openFilmData} from "../components/actions";

const mapStateToProps = ({filmDataShow}) => ({
  filmDataShow: filmDataShow
});

const mapDispatchToProps ={
  openFilmData: openFilmData,
};

const YearList = ({year, films}) => {
  return (
    <li >
      <YearHeader>{year}</YearHeader>
      <NoStyledUl>
        {
          Object.keys(films).map( id => <Film key={id} film={films[id]} /> )
        }
      </NoStyledUl>
    </li>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(YearList)

const Film = ({film}) => {
  return (
    <FilmBox to={`/${film.id}`}>
      <FilmNameBox>
        <FilmLocalName>{film.localized_name}</FilmLocalName>
        <FilmName>{film.name}</FilmName>
      </FilmNameBox>
      <FilmRate>{film.rating}</FilmRate>
    </FilmBox>
  )
};

export const ListContainer = styled.div`
max-height: 100vh;
display: flex;
flex-direction: column;
`;

export const Header = styled.div`
display: block;
width: 100%;
height: 40px;
text-align: center;
box-shadow: 0 0 5px ;
font-size: 30px;
`;

const YearHeader = styled.div`
display: block;
margin: 8px 3px 3px 3px;
border: 1px solid black;
background-color: darkgrey;
height: 30px;
text-align: center;
font-size: 20px;
`;

export const NoStyledUl = styled.ul`
list-style-type: none;
margin: 0;
padding-top: 0px;
padding-inline-start: 0;
overflow: auto;
`;

const FilmBox = styled(Link)`
display: flex;
margin: 3px;
border: 1px solid black;
background-color: rgba(97,218,251,0.5);
text-decoration: none;
`;

const FilmNameBox = styled.div`
display: flex;
flex-direction: column;
flex-grow: 6;
`;

const FilmLocalName = styled.div`
display: block;
flex-grow: 6;
font-size: 15px;
padding: 3px;
color: black;
`;

const FilmName = styled.div`
display: block;
flex-grow: 6;
font-size: 12px;
padding: 3px;
color: gray;
`;

const FilmRate = styled.div`
display: inline-flex;
position: relative;
top: 0;
right: 0;
flex-basis: 40px;
color: green;
padding: 3px;
`;