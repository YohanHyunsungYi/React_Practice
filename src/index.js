import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAH5boP84JaNwB1xrsVH0Sk_pXMlbweIoE';

const Youtube_PlaylistID_Speaking = 'PLt14bNimFHvNn9nj0tzv6RlrkemL93LDw';
const Youtube_PlaylistID_OPIC = 'PLt14bNimFHvOglJmk21cUx4d9yUjZPGi7';
const Youtube_PlaylistID_TOEIC = 'PLt14bNimFHvNhx81FyrLwpzU8Ri9hEAjw';
const Youtube_PlaylistID_English = 'PLt14bNimFHvO-qbhsyPorK4SnSSOSDaBZ';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboard');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
