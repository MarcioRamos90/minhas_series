import React, { Component } from "react";
import api from "./Api";

const statuses = {
  watched: "Assistido",
  watching: "Assistindo",
  toWatch: "Assistir"
};

class Series extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      series: []
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    api.SeriesByGenre(this.props.match.params.genre).then(res => {
      this.setState({
        isLoading: false,
        series: res.data
      });
    });
    console.log(this.state.series);
  }
  renderListSeries(serie) {
    return (
      <div className="item  col-xs-4 col-lg-4">
        <div className="thumbnail">
          <img
            className="group list-group-image"
            src="http://placehold.it/400x250/000/fff"
            alt=""
          />
          <div className="caption">
            <h4 className="group inner list-group-item-heading">
              {serie.name}
            </h4>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <p className="lead">
                  {serie.genre} / {statuses[serie.status]}
                </p>
              </div>
              <div className="col-xs-12 col-md-6">
                <a className="btn btn-success" href="">
                  Gerenciar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <section className="intro-section">
        <h1>series de {this.props.match.params.genre}</h1>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Para assistir</h1>
              <div id="series" className="row list-group">
                {this.state.isLoading && <p>Aguarde, ...Carregando</p>}
                {!this.state.isLoading &&
                  this.state.series.map(this.renderListSeries)}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Series;
