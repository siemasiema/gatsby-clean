import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link, Route } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'

import { rhythm } from '../utils/typography'
import About from "./pages/About";

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: '#252525'
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
            }}
          >
            <Route path="about" component={About}></Route>
            <Link
              to={prefixLink('/')}
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              START
            </Link>
            <Link
              to={About}
              style={{
                color: 'white',
                textDecoration: 'none',
                paddingLeft: '20px',
              }}
            >
              About
            </Link>
          </Container>
        </Headroom>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
