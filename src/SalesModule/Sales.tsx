import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'

import AppRoute from 'AppRoute'
import DashboardLayout from '_layouts/DashboardLayout'
import Overview from './Overview'
import Orders from './Orders'
import Customers from './Customers'

export interface SalesProps extends RouteComponentProps {}

const Sales = ({ match }: SalesProps) => {
  return (
    <Switch>
      {/* <Route path={`${match.url}/dashboard`} component={Overview} /> */}
      {/* <Route path={`${match.url}/orders`} component={Orders} /> */}
      {/* <Route path={`${match.url}/customers`} component={Customers} /> */}

      <AppRoute path={`${match.url}/dashboard`} component={Overview} />
      <AppRoute path={`${match.url}/orders`} component={Orders} />
      <AppRoute path={`${match.url}/customers`} component={Customers} />
    </Switch>
  )
}

export default Sales