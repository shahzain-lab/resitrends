// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import mdiChatQuestionOutline from 'mdi-material-ui/ChatQuestionOutline'
import Bell from 'mdi-material-ui/Bell'
import ChartPie from 'mdi-material-ui/ChartPie'
import FileDocumentEdit from 'mdi-material-ui/FileDocumentEdit'
import Lightbulb from 'mdi-material-ui/Lightbulb'
import ProjectorScreen from 'mdi-material-ui/ProjectorScreen'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/dashboard'
    },
    {
      title: 'Projects',
      icon: ProjectorScreen,
      path: '/projects',
      disabled: true
    },
    {
      title: 'Inventory',
      icon: Lightbulb,
      path: '/inventory',
      disabled: true
    },
    {
      title: 'Contracts',
      icon: FileDocumentEdit,
      path: '/contracts',
      disabled: true
    },
    {
      title: 'Report & Graphs',
      icon: ChartPie,
      path: '/report',
      disabled: true
    },
    {
      title: 'Notification',
      icon: Bell,
      path: '/notification',
      disabled: true
    },
    {
      title: 'Account Settings',
      icon: mdiChatQuestionOutline,
      path: '/account-settings'
    },
    {
      title: 'Help & Supports',
      icon: AccountCogOutline,
      path: '/report',
      disabled: true
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
