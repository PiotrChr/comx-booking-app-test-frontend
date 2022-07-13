import React from 'react'
import querystring from 'query-string'
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

export const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export const stringifyParams = (params) => {
    let pageParams = null
    let restParams = null

    const { page, ...rest } = params

    if (page && Object.entries(page).length > 0) {
        pageParams = Object.keys(page).reduce((string, paramName) => {
            if (string.length > 0) {
                string += '&'
            }

            string += `page[${paramName}]=${page[paramName]}`

            return string
        }, '')
    }

    if (rest && Object.entries(rest).length > 0) {
        restParams = querystring.stringify(rest)
    }

    if (pageParams || restParams) {
        return '?' + [pageParams, restParams].filter(x => x).join('&')
    }

    return ''
}