// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem
  console.log(appItem)
  return (
    <li className="app">
      <img src={imageUrl} alt={appName} className="im" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
