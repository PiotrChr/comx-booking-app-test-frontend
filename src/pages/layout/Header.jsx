import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CNavItem,
  CNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// routes config
// import routes from '../routes'

const TheHeader = (props) => {

  return (
    <CHeader>
      <CHeaderNav className="d-none d-md-flex me-auto">
        <CNavItem className="px-3" >
          <CNavLink to="/" component={NavLink}>Home</CNavLink>
        </CNavItem>
        <CNavItem className="px-3" >
          <CNavLink to="/bookings" component={NavLink}>Bookings</CNavLink>
        </CNavItem>
        <CNavItem className="px-3" >
            <CNavLink to="/cars" component={NavLink}>Cars</CNavLink>
        </CNavItem>
        <CNavItem className="px-3" >
            <CNavLink to="/offices" component={NavLink}>Offices</CNavLink>
        </CNavItem>
      </CHeaderNav>

      {/* <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
      </CSubheader> */}
    </CHeader>
  )
}

TheHeader.propTypes = {
    user: PropTypes.object
}

TheHeader.defaultProps = {
    user: {
        username: 'Username'
    }
}

export default TheHeader