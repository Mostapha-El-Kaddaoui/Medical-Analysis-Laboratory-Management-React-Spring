import '../../style/support.css'

export default function Card(props) {
  return (
    <div style={{ top: props.mtop, left: props.mleft, backgroundImage:`url(${props.img})` }} className= "relative min-w-60 h-64 bg-cover bg-no-repeat bg-center rounded-lg">
    </div>
  );
}
