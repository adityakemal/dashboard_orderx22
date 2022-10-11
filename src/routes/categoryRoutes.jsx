import { lazy } from "react";
import Auth from "../features/auth/Auth";
import Category from "../features/category/Category";
import FormCategory from "../features/category/components/FormCategory";
import Dashboard from "../features/dashboard/Dashboard";
import Menu from "../features/menu/Menu";

import {
    HiPresentationChartLine,
    HiTag,
    HiCake,
    HiShoppingCart,
    HiQrcode,
    HiThumbUp,
    HiReceiptTax,
    HiShare,
    HiTrash,
    HiPencilAlt,
    HiPlus,
    HiMinus,
    HiFire,
    HiFlag,
    HiChatAlt,
    HiBell,
    HiBookOpen,
    HiArrowLeft,
    HiLogout,
    HiFilter,
    HiHeart,
    HiHand
} from "react-icons/hi";
import Playground from "../features/playground/Playground";


export default [
    {
        name: 'Auth',
        icon: '',
        isSidebarLink: true,
        path: '/',
        element: <Auth />,
        isPrivate: false
    },
    {
        name: 'Playground',
        icon: '',
        isSidebarLink: true,
        path: '/play',
        element: <Playground />,
        isPrivate: false
    },
    {
        name: 'Menu',
        icon: '',
        isSidebarLink: true,
        path: '/menu',
        element: <Menu />,
        icon: <HiBookOpen />,
        isPrivate: true
    },
    {
        name: 'Kategory',
        icon: '',
        isSidebarLink: true,
        path: '/category',
        element: <Category />,
        icon: <HiTag />,
        isPrivate: true
    },
    {
        name: 'Dashboard',
        isSidebarLink: true,
        path: '/dashboard',
        element: <Dashboard />,
        icon: <HiPresentationChartLine />,
        isPrivate: true
    },
    {
        name: 'Tambah Kategory',
        icon: '',
        isSidebarLink: false,
        path: '/category/form',
        element: <FormCategory />,
        isPrivate: true
    },
    {
        name: 'Edit Kategory',
        icon: '',
        isSidebarLink: false,
        path: '/category/form/:id',
        element: <FormCategory />,
        isPrivate: true
    },
]


// {
//     path: "/",
//     component: lazy(() => import("../views/pages/Login")),
//     exact: true,
//     type: "login",
//   },