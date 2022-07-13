import React from 'react';

// const baseurl = window.bayramo_status ? window.bayramo_status.basename : null // TODO: change this
const baseUrl = 'tempBaseUrl'

const routes = [
  { path: baseurl + '/', exact: true, name: 'Dashboard' },
  { path: baseurl + '/users/:id', exact: true, name: 'User Details' },
  { path: baseurl + '/returns/reasons', exact: true, name: 'Returns reasons' },
  { path: baseurl + '/returns/view', exact: true, name: 'View Reasons' },
  { path: baseurl + '/returns/add', exact: true, name: 'View Reasons' },
  { path: baseurl + '/returns/add', exact: true, name: 'View Reasons' },
  { path: baseurl + '/system/session', exact: true, name: 'Session' },
  { path: baseurl + '/system/users', exact: true, name: 'Users' },
];

export default routes;