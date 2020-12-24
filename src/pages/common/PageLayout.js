import { Button } from "antd"
import React from "react"
import { useHistory } from "react-router-dom"

const PageLayout = (props) => {
  let history = useHistory()
  const handleClick = () => {
    history.push("/sb")
  }
  return (
    <React.Fragment>
      <div>PageLayout</div>
      <Button onClick={handleClick}>sb</Button>
    </React.Fragment>
  )
}

export default PageLayout
