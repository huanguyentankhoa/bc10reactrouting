import React, { Component } from "react";
import MovieItem from "./MovieItem";
import axios from "axios";
import Loader from "../../../components/Loader";
import { connect } from "react-redux";
import {
  actListMovieFailed,
  actListMovieRequest,
  actListMovieSuccess,
} from "./modules/actions";
class ListMoviePage extends Component {
  componentDidMount() {
    //request
    this.props.request();
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03",
      method: "GET",
    })
      .then((result) => {
        //success
        this.props.success(result.data);
      })
      .catch((err) => {
        //failed
        this.props.failed(err);
      });
  }
  renderListMovie() {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    return data?.map((movie) => {
      return <MovieItem key={movie.maPhim} movie={movie} />;
    });
  }
  render() {
    return (
      <div>
        <div className="row">{this.renderListMovie()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    request: () => {
      dispatch(actListMovieRequest());
    },
    success: (data) => {
      dispatch(actListMovieSuccess(data));
    },
    failed: (data) => {
      dispatch(actListMovieFailed(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
