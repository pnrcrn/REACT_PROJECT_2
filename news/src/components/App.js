import React, { Component } from 'react'
import SearchBar from './SearchBar';
import { newsApi } from '../apis/news_api';
import NewsList from './NewsList';

class App extends Component {

  state = { news: [] };//response'dan dönen değeri alıp listelemek için
  //bize dizi dönüyor o yüzden dizi olarak aldık

  onTermSubmit = async term => {
    const response = await newsApi.get('', {
      params: {
        q: term,
      }
    });
    console.log(response);
    this.setState({ news: response.data.articles });
  };
  render() {
    return (
      <div className='container'>
        <SearchBar onSearchSubmit={this.onTermSubmit} />
        <NewsList news={this.state.news}></NewsList>
      </div>
    )
  }
}
export default App;