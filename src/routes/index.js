import * as routeDefinition from './routeDefinition';

import { ActivityPages } from '../activities'

const routes = [
    {
        path: routeDefinition.root(),
        component: ActivityPages.HomePage,
        exact: true
    },
];

export {routeDefinition};

export default routes;