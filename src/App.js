import React, { Component } from "react";
import './styles.css';
import SearchBar from "components/SearchBar";
import ImgGallery from "components/ImgGallery";
import fetchUrl from "components/servises/FetchUrl";
import Button from "components/Button";
import Modal from "components/Modal";
import Loader from "components/Loader";

export default class App extends Component { 
  state = {
    imageUrl: '',
    images: [],
    pages: 1,
    loadMorePage:0,
    error: null,
    status: 'idle',
    showModal: false,
    largeImageUrl:null,
  };

  componentDidUpdate(prevProps, prevState) { 
    const prevImageUrl = prevState.imageUrl;
    const nextImageUrl = this.state.imageUrl;
    const prevPage = prevState.pages;
    const nextPage = this.state.pages;

    if (prevImageUrl !== nextImageUrl || prevPage !== nextPage) {
      this.setState({ status: 'pending' });
      this.addFetch();
     };
  };

  addFetch = () => { 
    const { imageUrl,pages} = this.state;
    this.setState({ status: 'pending' });
    
    fetchUrl (imageUrl,pages)
      .then(response => {
        const images = response.hits.map(({ id, tags, largeImageURL, webformatURL }) =>
          ({ id, tags, largeImageURL, webformatURL }));
          this.setState(prevState => ({ images: [...prevState.images, ...images], status: 'resolved', loadMorePage:response.loadMorePage }));
        }).catch(error => this.setState({
          error, status: 'rejected'
        }));
  };

  handleFormSubmit = imageUrl => { 
    this.setState({images:[]});
    if (this.state.imageUrl !== imageUrl) { 
    this.setState({ imageUrl,pages:1 });
    console.log(imageUrl);
    };
  };

  toggleModal = () => { 
    this.setState(({ showModal }) => ({
      showModal:!showModal,
    }));
  };

  largeImageClick = images => { 
    this.setState({ largeImageUrl: images });
    console.log(images);
    console.log(this.state.largeImageUrl);
  };

  loadMoreButton = event => { 
    event.preventDefault();
    this.setState(({ pages }) => ({pages:pages +1}));
  };

  render() { 
    const { images, status, showModal } = this.state;
    
    return (
      <>
        <SearchBar onSubmit={ this.handleFormSubmit} />
        {images.length > 0 &&
          (<ImgGallery
          images={images}
          largeImageClick={this.largeImageClick}
          toggleModal={ this.toggleModal}
          />)
          } 
        {showModal && <Modal onClose={this.toggleModal}
            largeImage={this.state.largeImageUrl}
        />}
        {images.length > 0 && status === "resolved" && (<Button onClick={this.loadMoreButton} />)}
        { status === 'pending' && <Loader/>}
        
      </>
    )
  }
};