// Write your code here
import './index.css'

const PlanetItem = props => {
  const {item} = props
  console.log(item)
  return (
    <div className="card">
      <img className="p-img" src={item.imageUrl} alt={`planet ${item.name}`} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  )
}

export default PlanetItem
