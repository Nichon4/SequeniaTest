import React from 'react'
import { connect } from 'react-redux'
import YearList, {Header, ListContainer, NoStyledUl} from "../layouts/FilmList"
import {loadData} from "./actions";
import {jsonParse} from "../data/dataTransfer";
import defaultFilms from "../data/films"

const mapStateToProps = ({films, filmDataShow}) => ({
  films: films,
  filmDataShow: filmDataShow
});

const mapDispatchToProps ={
  loadData: loadData,
};

class FilmList extends React.Component {

  loadData() {
    fetch("http://s3-eu-west-1.amazonaws.com/sequeniatesttask/films.json")
      .then(res => jsonParse(res) )
      .then( res => res["films"].reduce( (acc, cur) =>( {
          ...acc,
          [cur.id]: cur
        }), {})
      )
      .then( films => {
        this.props.loadData({
          isLoaded: true,
          data: films,
        });
        console.log(films)
      })
      .catch( error => {
        console.log(error);
        this.props.loadData({
          isLoaded: true,
          data: defaultFilms["films"],
        })
      })

  }

  componentDidMount() {

    this.loadData()

  }

  render() {
    if (this.props.films.isLoaded) {
      let filmList = this.props.films.data.reduce( (acc, cur) => {
        return (
          {
            ...acc,
            [cur.year]: {...acc[cur.year], [cur.id]: cur}
          }
        )
      }, {});
      return (
        <ListContainer>
          <Header>Фильмы</Header>
          <NoStyledUl>
            {
              Object.keys(filmList)
                .map( (year) => <YearList key={year} year={year} films={filmList[year]} /> )
            }
          </NoStyledUl>
        </ListContainer>
      )
    } else {
      return (
        <span>Loading...</span>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmList)