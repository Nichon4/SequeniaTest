import React from 'react'
import {
  FilmContainer,
  FilmCover, FilmCoverContainer,
  FilmDataContainer, FilmDescription,
  FilmName,
  FilmRate,
  FilmTopData,
  FilmYear, GoBack,
  Header,
  TopBox
} from "../layouts/FilmData";

export default class FilmData extends React.Component {

  render() {
    if (this.props.filmData) {
      let   filmData = this.props.filmData;

      return (
        <FilmContainer>
          <Header>
            <GoBack to='/'> ⇐ </GoBack>
            {filmData.localized_name}
          </Header>
          <FilmDataContainer>
            <TopBox>
              <FilmCoverContainer>
                <FilmCover src={filmData.image_url} alt="Cover"/>
              </FilmCoverContainer>
              <FilmTopData>
                <FilmName>{filmData.name}</FilmName>
                <FilmYear>Год: {filmData.year}</FilmYear>
                <FilmRate>Рейтинг: {filmData.rating}</FilmRate>
              </FilmTopData>
            </TopBox>
            <FilmDescription>{filmData.description}</FilmDescription>
          </FilmDataContainer>
        </FilmContainer>
      )
    } else {
      return (<></>)
    }
  }
}
