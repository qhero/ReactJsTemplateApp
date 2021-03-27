import { root, about} from './routeDefinitions'
import { HomePage, AboutPage } from '../pages'

const routes =[
   {
    path: root(),
    component: HomePage,
    exact:true
    },
    {
       path: about(),
        component: AboutPage,
        exact:true
        }
    ]

export default routes