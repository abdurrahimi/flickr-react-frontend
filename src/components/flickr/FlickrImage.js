const FlickrImg = (imgList) => {
  
  if (imgList.imgList !== undefined) {
    console.log(imgList.imgList[0]);
    return imgList.imgList[0].items.map((data,key) =>
      //console.log(data)
      <div className="col-sm-3" key={key}>
        <div className="col-sm-12 d-flex justify-content-center" style={{ backgroundColor: '#fff', height:'250px',margin:'10px'}}>
          <img src={data.media.m} />
          </div>
        </div>
      );
  }
    return (
      <>
        
      </>
    );
  };
  
  export default FlickrImg;
  