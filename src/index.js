import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAH5boP84JaNwB1xrsVH0Sk_pXMlbweIoE';

// Creat a new componemt. This componemt should produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: {} };

    YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
       <SearchBar />
       <VideoList videos={this.state.videos} />
     </div>
    );
  }
}

// Take this componont's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
