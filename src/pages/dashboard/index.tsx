// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'

export default function Dashboard() {
  if (typeof window === 'undefined') {
    console.log('window is undefined')

    return <></>
  } else {
    return (
      <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Trophy />
          </Grid>

          <Grid item xs={12} md={8}>
            <StatisticsCard />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <WeeklyOverview />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TotalEarning />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='10%'
                  icon={<Poll />}
                  color='success'
                  trendNumber='+42%'
                  title='Total Construction Process'
                  subtitle=''
                />
              </Grid>

              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='$32M'
                  title='Total Money Spend'
                  trend='negative'
                  color='secondary'
                  trendNumber='-15%'
                  subtitle='Past Month'
                  icon={<CurrencyUsd />}
                />
              </Grid>

              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='862'
                  trend='negative'
                  trendNumber='-18%'
                  title='People Worked'
                  subtitle='Yearly Project'
                  icon={<BriefcaseVariantOutline />}
                />
              </Grid>

              <Grid item xs={6}>
                <CardStatisticsVerticalComponent
                  stats='90%'
                  color='warning'
                  trend='negative'
                  trendNumber='-18%'
                  subtitle=''
                  title='Percentage Of Completion'
                  icon={<HelpCircleOutline />}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <SalesByCountries />
          </Grid>

          <Grid item xs={12} md={12} lg={8}>
            <DepositWithdraw />
          </Grid>

          <Grid item xs={12}>
            <Table />
          </Grid>
        </Grid>
      </ApexChartWrapper>
    )
  }
}
