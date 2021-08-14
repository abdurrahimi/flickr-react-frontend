const FlickrImg = (imgList) => {
  if (imgList.imgList !== undefined) {
    //console.log(imgList.imgList[0]);
    return (
      <>
        <h3>{imgList.imgList.title}</h3>
        <div className="row">
          {imgList.imgList.items.map((data, key) => (
            //console.log(data)
            <div className="col-sm-6" key={key}>
              <div className="content">
                {" "}
                <div
                  className="col-sm-12 d-flex justify-content-center"
                  style={{
                    //backgroundColor: "#fff",
                    height: "450px",
                    margin: "10px",
                  }}
                >
                  <div className="content-overlay"></div> <img className="content-image" src={data.media.m} />
                  <div className="content-details fadeIn-bottom">
                    <h4 className="content-title">{data.title}</h4>
                    <p className="content-text">
                      <i>Author : {data.author.match(/\"(.*)\"/)[1]}</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
  return <></>;
};

export default FlickrImg;
