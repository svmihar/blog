import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../../static/img/favicon.png'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet 
      title="- svmihar's scribbles" 
      meta={[
        { name: 'description', content: 'blog' },
        { name: 'keywords', content: 'webdev, videography, gatsbyjs, reactjs, frontend' },
        ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
    ]}/>
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
