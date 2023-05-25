// Write your code here
// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, changeTab, isActive} = props
  const {tabId, displayText} = tabItem
  const classN = isActive ? 'ActiveTab' : 'tab'
  const func = () => {
    changeTab(tabId)
  }
  return (
    <li onClick={func}>
      <button className={classN} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
