import * as React from "react"
import Main from "../layouts/Main"
import SiteMetadata from '../queries/SiteMetadata'


const Index = ({location}) => {

  const url = location.href ? location.href : '';
  const { siteUrl } = SiteMetadata()
  return (
    <Main>
      <div>
        {siteUrl}
      </div>
      <div>
        {url}
      </div>
    </Main>
  )
}

export default Index