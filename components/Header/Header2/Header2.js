export default function Header2(){
  return(
    <header className="header header2">
      <div className="header2__logo">
        <a href="/link">Company</a>
      </div>
      <ul className="header2__collections-nav">
        <a href="/link" className="header2__collection-link">Link</a>
        <a href="/link" className="header2__collection-link">Link</a>
        <li className="header1__collection-link">
          <a href="/link" >Link<i className="fas fa-chevron-down"></i></a>
          <ul className="collection-link__sub-links">
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </li>
      </ul>
      
      <div className="header2__collections-nav">
        <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
        <a href="/cart"><i className="fas fa-user"></i></a>
      </div>
      
    </header>
  )
}