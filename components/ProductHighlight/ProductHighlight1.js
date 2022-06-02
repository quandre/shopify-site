export default function ProductHighlight1() {
  return (
    <div className="ProductHighlight1">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="ProductHighlight1__header">
              <h1>Brand New!</h1>
            </div>
          </div>
          <div className="col-md-5">
            <div className="ProductHighlight1__img">
              <a href="#">
                <img
                  src="https://getreadycomics.com/wp-content/uploads/2021/06/x_thup-1002629_b.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ProductHighlight1__text-box">
              <p className="ProductHighlight1__text-title">
                DC: Batman AirPods Case
              </p>
              <span className="ProductHighlight1__text-price">$12.99</span>
              <button className="ProductHighlight1__text-btn">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
