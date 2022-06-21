export default function SaleBox1() {
  return (
    <div className="sale-box1">
      <div
        className="sale-container"
        id="sale-section"
        style="background: url('assets/friends.jpg'); background-size: cover; height: 700px; width: 100%; background-position: center;"
      >
        <div className="overlay">
          <span className="percent-number">80%</span>
          <span className="title">OFF SALE</span>
          <a href="#">View</a>
        </div>
      </div>
    </div>
  );
}
