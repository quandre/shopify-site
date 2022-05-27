export default function Collection1() {
  return (
    <div className="collection collection1">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="collection1__collection-item">
              <div className="collection1__product-img">
                <div className="collection1__heart">
                  <i className="far fa-heart"></i>
                </div>
                <img
                  src="https://www.pngall.com/wp-content/uploads/5/Men-Shoes-PNG-Image-File.png"
                  alt=""
                />
              </div>
              <div className="collection1__product-info">
                <div className="collection1__product-details">
                  <span className="collection1__product-title">Sneakers</span>
                  <span className="collection1__product-price">$250</span>
                </div>
                <div className="collection1__colors">
                  <div className="collection1__color collection1__color--blue"></div>
                  <div className="collection1__color collection1__color--black"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="collection1__collection-item">
              <div className="collection1__product-img">
                <div className="collection1__heart">
                  <i className="far fa-heart"></i>
                </div>
                <img
                  src="https://www.pngall.com/wp-content/uploads/5/Men-Shoes-PNG-Transparent-HD-Photo.png"
                  alt=""
                />
              </div>
              <div className="collection1__product-info">
                <div className="collection1__product-details">
                  <span className="collection1__product-title">Sneakers</span>
                  <span className="collection1__product-price">$250</span>
                </div>
                <div className="collection1__colors">
                  <div className="collection1__color collection1__color--blue"></div>
                  <div className="collection1__color collection1__color--white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
