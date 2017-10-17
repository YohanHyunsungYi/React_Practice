import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAH5boP84JaNwB1xrsVH0Sk_pXMlbweIoE';

YTSearch({key: API_KEY, term: 'surfboard'}, function(data) {
  console.log(data)
});

// Creat a new componemt. This componemt should produce some HTML
const App = () => {
  return (
    <div>
     <SearchBar />
   </div>
  );
}

// Take this componont's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
