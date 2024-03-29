// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Made with `}

        <Box component='span' sx={{ color: 'error.main' }}>
          ❤️
        </Box>

        {` by `}

        <Link target='_blank' href='https://resitrend.com/'>
         Resitrend
        </Link>
      </Typography>

      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <Link
            href='/dashboard'
          >
            Privacy Policy
          </Link>

          <Link href='/dashboard'>
            Term & Services
          </Link>

          <Link
            href='/dashboard'
          >
            Support
          </Link>

          <Link
            href='/dashboard'
          >
            Faqs
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
