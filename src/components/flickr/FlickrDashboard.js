import React, { useState, useEffect,useRef } from 'react'
import axios from '../../api/axios/axios';
import FlickrImg from './FlickrImage';

const FlickrDashboard = () => {
  const [imgList, setImgList] = useState();
  const [keyword, setKeyword] = useState();
  const [isLoading, setLoading] = useState();
  const input = useRef();

  useEffect(() => {
    // DELETE request using fetch with async/await
    //console.log("ok")
    getPublicImg();
  }, [keyword]);


  const getPublicImg = async () => {
    var tag = "";
    if (keyword !== undefined) tag = keyword;
    await axios.get('/public?keyword=' + tag)
      .then((response) => {
        setLoading(false)
        setImgList(response.data)
      });
  }
  
  const search = () => {
    setLoading(true);
    setKeyword(input.current.value)
  }

  return (
    <>
      <div className="container">
        <div className="col-sm-12 d-flex align-item-center">
          <div className="form-inline col-sm-12">
            <input className="form-control mr-sm-2 col-sm-11" type="search" placeholder="Search" ref={input} aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={search}>Search</button>
          </div>
        </div>
        <hr style={{ margin: "40px 0px 40px 12px", backgroundColor: "#ffffff" }} />
        
        {isLoading ?
          <>
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="sr-only">Loading...</span>
            </div>
          </>  :
          <FlickrImg imgList={imgList} />
        }
        </div>
    </>
  );
};

export default FlickrDashboard;
