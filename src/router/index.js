import { lazy, Suspense } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import Index from '@/pages/Index'

export default function RouterView () {
  const Collect = lazy(() => import(/* webpackChunkName: "collect" */ '@/pages/Collect'))

  // __RENDER
  return (
    <div className="ui--router-view">
      <Switch>
        <Suspense fallback={<></>}>
          <Route path="/" component={Index} exact />
          <Route path="/collects" component={Collect} />
        </Suspense>
      </Switch>
    </div>
  )
}
