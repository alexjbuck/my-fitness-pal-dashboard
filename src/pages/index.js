import * as React from "react"
import Main from "../layouts/Main"


const Index = ({location}) => {

  const url = location.href ? location.href : '';
  return (
    <Main>
      {url}
    </Main>
  )
}

export default Index