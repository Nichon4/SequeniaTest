import React from 'react'
import { connect } from 'react-redux'
import FilmList from "./FilmList";
import FilmData from "./FilmData";

const mapStateToProps = ({films}) => ({
  films: films,
});

const Container = ({location, filmDataShow, films}) =>  {

  let film = films.data.find( (elem) =>  elem.id.toString() === location.pathname.slice(1) );

  return (
    <>
      {
        film ?
          <FilmData filmData={film}/> :
          <FilmList/>
      }
    </>
  );
};


export default connect(mapStateToProps)(Container);
