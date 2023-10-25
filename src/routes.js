import React from 'react'
import {mapSeries} from "p-iteration";
// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'))
//
// // Base
// const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
// const Cards = React.lazy(() => import('./views/base/cards/Cards'))
// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
// const Navs = React.lazy(() => import('./views/base/navs/Navs'))
// const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
// const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
// const Progress = React.lazy(() => import('./views/base/progress/Progress'))
// const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
// const Tables = React.lazy(() => import('./views/base/tables/Tables'))
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))
//
// // Buttons
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
// const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))
//
// //Forms
// const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
// const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
// const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
// const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
// const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
// const Range = React.lazy(() => import('./views/forms/range/Range'))
// const Select = React.lazy(() => import('./views/forms/select/Select'))
// const Validation = React.lazy(() => import('./views/forms/validation/Validation'))
//
// const Charts = React.lazy(() => import('./views/charts/Charts'))
//
// // Icons
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'))
//
// // Notifications
// const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
// const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
// const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
// const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))
// //Customer
// const CreateCustomer = React.lazy(() => import('./views/pages/customers/Create'))
// const ManageCustomer = React.lazy(() => import('./views/pages/customers/Manage'))
// const KappaCreate = React.lazy(() => import('./views/pages/kappa/create'))
// const vendaCreate = React.lazy(() => import('./views/pages/venda/create'))
// //TEMPLATE_ADD_OBJECT
//
// const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const loadObject = (path) => {
  return React.lazy(()=> import(`${path}`))
}

const mountRoutes = async () => {
  const _routes = require("./routes.json")
  console.log("_routes: ", _routes)
  return await mapSeries(_routes, (async (route) => {
    const [_, root, subRoute] = route.path.split("/")
    console.log("root, subRoute", root, subRoute)
    const routePath = subRoute ? `${root}/${capitalizeFirstLetter(subRoute)}` : `${root}/${capitalizeFirstLetter(root)}`;
    console.log("routePath: ", routePath);
    route.element ? route.element = await loadObject(`./views/pages/${routePath}`) : undefined
    console.log("route: ", route)
    return route;
  }));
}

const result = await mountRoutes()
const routes = result;

// const routes = [
//   {path: '/', exact: true, name: 'Home'},
//   {path: '/dashboard', name: 'Dashboard', element: Dashboard},
//   {path: '/customers/create', name: 'Cliente / Criar', element: CreateCustomer},
//   {path: '/customers/manage', name: 'Cliente / Gerenciar', element: ManageCustomer},
//   {path: '/customers/teste', name: 'Cliente / Gerenciar', element: React.lazy(() => import('./views/pages/kappa/create'))},
//   { path: '/venda/create', name: 'venda / Criar', element: vendaCreate },
// //TEMPLATE_ADD_ROUTE
//   {path: '/theme', name: 'Theme', element: Colors, exact: true},
//   {path: '/theme/colors', name: 'Colors', element: Colors},
//   {path: '/theme/typography', name: 'Typography', element: Typography},
//   {path: '/base', name: 'Base', element: Cards, exact: true},
//   {path: '/base/accordion', name: 'Accordion', element: Accordion},
//   {path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs},
//   {path: '/base/cards', name: 'Cards', element: Cards},
//   {path: '/base/carousels', name: 'Carousel', element: Carousels},
//   {path: '/base/collapses', name: 'Collapse', element: Collapses},
//   {path: '/base/list-groups', name: 'Manage Groups', element: ListGroups},
//   {path: '/base/navs', name: 'Navs', element: Navs},
//   {path: '/base/paginations', name: 'Paginations', element: Paginations},
//   {path: '/base/placeholders', name: 'Placeholders', element: Placeholders},
//   {path: '/base/popovers', name: 'Popovers', element: Popovers},
//   {path: '/base/progress', name: 'Progress', element: Progress},
//   {path: '/base/spinners', name: 'Spinners', element: Spinners},
//   {path: '/base/tables', name: 'Tables', element: Tables},
//   {path: '/base/tooltips', name: 'Tooltips', element: Tooltips},
//   {path: '/buttons', name: 'Buttons', element: Buttons, exact: true},
//   {path: '/buttons/buttons', name: 'Buttons', element: Buttons},
//   {path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns},
//   {path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups},
//   {path: '/charts', name: 'Charts', element: Charts},
//   {path: '/forms', name: 'Forms', element: FormControl, exact: true},
//   {path: '/forms/form-control', name: 'Form Control', element: FormControl},
//   {path: '/forms/select', name: 'Select', element: Select},
//   {path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios},
//   {path: '/forms/range', name: 'Range', element: Range},
//   {path: '/forms/input-group', name: 'Input Group', element: InputGroup},
//   {path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels},
//   {path: '/forms/layout', name: 'Layout', element: Layout},
//   {path: '/forms/validation', name: 'Validation', element: Validation},
//   {path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons},
//   {path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons},
//   {path: '/icons/flags', name: 'Flags', element: Flags},
//   {path: '/icons/brands', name: 'Brands', element: Brands},
//   {path: '/notifications', name: 'Notifications', element: Alerts, exact: true},
//   {path: '/notifications/alerts', name: 'Alerts', element: Alerts},
//   {path: '/notifications/badges', name: 'Badges', element: Badges},
//   {path: '/notifications/modals', name: 'Modals', element: Modals},
//   {path: '/notifications/toasts', name: 'Toasts', element: Toasts},
//   {path: '/widgets', name: 'Widgets', element: Widgets},
// ]

export default routes
