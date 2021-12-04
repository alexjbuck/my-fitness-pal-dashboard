import * as React from "react"
import Main from "../layouts/Main"
import SiteMetadata from '../queries/SiteMetadata'


const Index = () => {
  const { siteUrl } = SiteMetadata()
  return (
    <Main>{siteUrl}</Main>
  )
}

export default Index