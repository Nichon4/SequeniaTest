import styled from 'styled-components'
import {Link} from "react-router-dom";

export const FilmContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const Header = styled.div`
display: block;
width: 100%;
height: auto;
text-align: center;
box-shadow: 0 0 5px ;
font-size: 30px;
margin: 0px auto;
`;

export const FilmDataContainer = styled.div`
display: flex;
flex-direction: column;
flex-grow: 0;
margin: auto;
padding-top: auto;
overflow-y: auto;
`;

export const TopBox = styled.div`
display: flex;
flex-direction: row;
`;

export const FilmCoverContainer = styled.div`
display: block;
flex-grow: 4;
flex-basis: 40%;
padding: 6px;
    background-size: cover;
    overflow: hidden;
    text-align: center;
`;

export const FilmCover = styled.img`
max-height: 100%;
width: auto;
max-width: 100%;
`;

export const FilmTopData = styled.div`
display: flex;
flex-grow: 6;
flex-direction: column;
padding: 3px;
`;

export const FilmName = styled.div`
display: block;
flex-grow: 6;
font-size: 12px;
padding: 3px;
color: gray;
`;

export const FilmYear = styled.div`
display: block;
flex-grow: 6;
font-size: 14px;
`;

export const FilmRate = styled.div`
display: block;
flex-grow: 6;
font-size: 14px;
padding: 3px;
`;

export const FilmDescription = styled.div`
display: block;
flex-grow: 6;
font-size: 14px;
padding: 6px;
`;

export const GoBack = styled(Link)`
float: left;
padding-left: 10px;
font-size: 30px;
text-decoration: none;
`;