// ** Next Imports
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Chakra-ui Imports
import { ChakraProvider, Divider } from '@chakra-ui/react'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'

// import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'
import Navbar from '@/layouts/Navbar'
import Footer from '@/layouts/Footer'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })

  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })

  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const ThemeComponent = dynamic(
  async () => {
    const mod = await import('src/@core/theme/ThemeComponent')

    return mod.default
  },
  { ssr: false }
)

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  const publicRoutes = ['/'];
  const router = useRouter();

  return (
    <div>
       {!publicRoutes.includes(router.pathname) && (
       <CacheProvider value={emotionCache}>
        <Head>
          <title>{`${themeConfig.templateName} - Material Design React Admin Template`}</title>

          <meta
            name='description'
            content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
          />

          <meta name='keywords' content='Material Design, MUI, Admin Template, React Admin Template' />

          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>

        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => {
              return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </CacheProvider>
     )}

      {publicRoutes.includes(router.pathname) && 
        <ChakraProvider>
           <Navbar />

             <Component {...pageProps} />

             <Divider />

            <Footer />
        </ChakraProvider>
      }
    </div>
  )
}

export default App
