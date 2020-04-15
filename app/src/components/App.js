import React from "react";
import { connect } from "react-redux";
import { fetchVideos } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    return <div>App</div>;
  }
}

const mapStateToProps = state => {
  return { videos: state.videos };
};

export default connect(mapStateToProps, { fetchVideos })(App);
