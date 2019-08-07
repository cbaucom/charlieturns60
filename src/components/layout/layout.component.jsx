import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"

import { LayoutContainer, MainContainer, FooterContainer } from "./layout.styles";

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
