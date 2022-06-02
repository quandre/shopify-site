
export default function MainLayout(props){
  return(<div className="fixed-nav transparent-nav">
    <main >{props.children}</main>
  </div>)
}