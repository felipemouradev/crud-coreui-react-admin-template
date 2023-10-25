import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar, cilUser,
} from '@coreui/icons'
import {CNavGroup, CNavItem, CNavTitle} from '@coreui/react'

const components = {
  "CNavTitle": CNavTitle,
  "CNavGroup": CNavGroup,
  "CNavItem": CNavItem,
}

const setIcon = (iconName) => {
  const iconsAvailable = {
    "cilBell": cilBell,
    "cilCalculator": cilCalculator,
    "cilChartPie": cilChartPie,
    "cilCursor": cilCursor,
    "cilDescription": cilDescription,
    "cilDrop": cilDrop,
    "cilNotes": cilNotes,
    "cilPencil": cilPencil,
    "cilPuzzle": cilPuzzle,
    "cilSpeedometer": cilSpeedometer,
    "cilStar": cilStar,
    "cilUser": cilUser,
  }
  return <CIcon icon={iconsAvailable[iconName]} customClassName="nav-icon"/>
}

const mountNav = async () => {
  const _navJson = require("./_nav.json")
  console.log("_navJson: ", _navJson);
   return _navJson.map((item)=> {
     item.icon ? item.icon = setIcon(item.icon) : undefined;
     item.component ? item.component = components[item.component] : undefined;
     item.items ? item.items = item.items.map((subItem)=> {
       subItem.icon ? subItem.icon = setIcon(subItem.icon) : undefined;
       subItem.component ? subItem.component = components[subItem.component] : undefined;
       return subItem
     }) : undefined
     return item
   })
}

const _nav = await mountNav();
// const _nav = [
//   {
//     component: CNavItem,
//     name: 'Dashboard',
//     to: '/dashboard',
//     icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon"/>,
//     badge: {
//       color: 'info',
//       text: 'NEW',
//     },
//   },
//   {
//     component: CNavTitle,
//     name: 'Cadastros',
//   },
//   {
//     component: CNavGroup,
//     name: 'Clientes',
//     to: '/customers',
//     icon: <CIcon icon={cilUser} customClassName="nav-icon"/>,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Gerenciar',
//         to: '/customers/manage',
//       },
//       {
//         component: CNavItem,
//         name: 'Criar',
//         to: '/customers/create',
//       },
//       {
//         component: CNavItem,
//         name: 'Teste',
//         to: '/customers/teste',
//       },
//     ]
//   },
//   {
//     component: CNavItem,
//     name: 'venda',
//     to: '/venda/create',
//   },
//   //TEMLATE_ADD
// ]

export default _nav
