import { Route, Switch } from 'react-router-dom'
import Index from '@/pages/Index'
import Collect from '@/pages/Collect'

export default function RouterView () {
  // __RENDER
  return (
    <div className="ui--router-view">
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/collects" component={Collect} />
      </Switch>
    </div>
  )
}
