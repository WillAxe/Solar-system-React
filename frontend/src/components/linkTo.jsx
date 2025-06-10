import { Link } from "react-router-dom"
function LinkTo(props) {
  const name = props.body.MoonName || props.body.PlanetName
  return (
    <>
      <Link to={`/${props.bodies}/${name}`}>More info</Link>
    </>
  )
}

export default LinkTo
