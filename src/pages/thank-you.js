import React from "react"
import ConfettiGenerator from "confetti-js"
import styled from "styled-components"

import Layout from "../components/layout/layout.component"
import SEO from "../components/seo/seo.component"
import { StyledLink } from "../components/link/link.styled"

const Container = styled.div`
  background: #fefefe;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  white-space: nowrap;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;

  .text-wrapper {
    height: 100%;
    box-sizing: border-box;
    white-space: pre-wrap;
  }
  .text-wrapper > * {
    z-index: 9;
    position: relative;
    top: 0;
  }

  canvas {
    z-index: 1;
    position: absolute;
    left: 0;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
`

export default props => {
  React.useEffect(() => {
    const confettiSettings = { target: "confetti-canvas" }
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()

    return () => confetti.clear()
  }, [])

  if (typeof window !== "undefined") {
    return (
      <Layout>
        <SEO title="Thanks" />
        <>
          <Container>
            <div className="text-wrapper">
              <h1>
                Thanks, {props.location.state.name}!{" "}
                <span role="img" aria-label="beer cheers emoji">
                  🍻
                </span>
              </h1>
              <h3>We can't wait to see you!</h3>
            </div>
            <StyledLink to="/">Back Home</StyledLink>
            <canvas id="confetti-canvas"></canvas>
          </Container>
        </>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title="Thanks" />
        <>
          <Container>
            <div className="text-wrapper">
              <h1>
                Thanks!{" "}
                <span role="img" aria-label="beer cheers emoji">
                  🍻
                </span>
              </h1>
              <h3>We can't wait to see you!</h3>
            </div>
            <StyledLink to="/">Back Home</StyledLink>
            <canvas id="confetti-canvas"></canvas>
          </Container>
        </>
      </Layout>
    )
  }
}
