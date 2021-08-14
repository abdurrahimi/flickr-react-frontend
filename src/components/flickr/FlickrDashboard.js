import React, { useState, useEffect,useRef } from 'react'
import axios from '../../api/axios/axios';
import FlickrImg from './FlickrImage';

const FlickrDashboard = () => {
  const [imgList, setImgList] = useState();
  const [keyword, setKeyword] = useState();
  const input = useRef();

  useEffect(() => {
    // DELETE request using fetch with async/await
    //console.log("ok")
    getPublicImg();
  }, [keyword]);


  const getPublicImg = async () => {
    const data = await axios.get('http://localhost:3000/public');
    //console.log(data.data);
    //console.log(imgList);
    setImgList([...imgList || "",data.data])
    setKeyword("")
  }
  
  const search = () => {
    //console.log(keyword)
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
        <hr style={{margin:"40px 0px 40px 12px",backgroundColor:"#ffffff"}}/>
        <div className="row">
          
          <FlickrImg imgList={imgList} />
        </div>
      </div>
    </>
  );
};

export default FlickrDashboard;
