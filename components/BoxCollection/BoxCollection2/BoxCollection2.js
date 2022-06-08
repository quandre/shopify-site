export default function BoxCollection2() {
  return (
    <div className="box-collection2">
      <div className="box-collection2__container">
        <div className="box-collection2__top box-collection2--aligned-left box-collection2--contain box-collection2--img-center">
          <img
            src="https://m.media-amazon.com/images/I/71xMzz84JfS._AC_SL1500_.jpg"
            alt=""
          />
          <div className="box-collection2__content-container">
            <div className="box-collection2__top-box">
              <p className="box-collection2__top-box-header">Title</p>
              <p className="box-collection2__top-box-text">Text</p>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="box-collection2__bottom">
          <div className="box-collection2__bottom-left box-collection2--aligned-left box-collection2--cover box-collection2--img-center">
            <img
              src="https://m.media-amazon.com/images/I/71xMzz84JfS._AC_SL1500_.jpg"
              alt=""
            />
            <div className="box-collection2__content-container">
              <div className="box-collection2__bottom-box">
                <p className="box-collection2__bottom-box-header">Title</p>
                <p className="box-collection2__bottom-box-text">Text</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
          <div
            className="box-collection2__bottom-right box-collection2--aligned-left box-collection2--cover
          box-collection2--img-center"
          >
            <img
              src="https://m.media-amazon.com/images/I/71xMzz84JfS._AC_SL1500_.jpg"
              alt=""
            />
            <div className="box-collection2__content-container">
              <div className="box-collection2__bottom-box">
                <p className="box-collection2__bottom-box-header">Title</p>
                <p className="box-collection2__bottom-box-text">Text</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
