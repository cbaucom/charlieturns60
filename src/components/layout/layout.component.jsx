import React from "react"
import Helmet from 'react-helmet'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "typeface-montserrat"
import "./layout.css"

import {
  LayoutContainer,
  MainContainer,
  FooterContainer,
} from "./layout.styles"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Helmet>
        <LayoutContainer>
          <MainContainer>{children}</MainContainer>
          <FooterContainer>
            <a href="https://builtbybaucom.com">Built by Baucom</a>
          </FooterContainer>
        </LayoutContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
