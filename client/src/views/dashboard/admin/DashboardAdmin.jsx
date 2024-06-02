import CardStat from '../../../components/cardstat/CardStat'
import { ChartCategories } from '../../../components/charts/ChartCategories';
// import { ChartCategories } from '../../../components/charts/ChartCategories';
import { Chart } from '../../../components/charts/ChartProductStock'
import { DangerCard } from '../../../components/dangercard/DangerCard';
import SideBarAdmin from '../../../components/sidebaradmin/SideBarAdmin';
import { TableUsageExample } from '../../../components/tables/tableUser/TableUsageExample'
import { Card } from '@tremor/react';
import CardSoldProducts from '../../../components/cardstat/CardOrderStat';

const DashboardAdmin = () => {
  return (
    <div className="pt-16">
      <div className="flex min-h-screen bg-white antialiased dark:bg-gray-800 md:py-5">
        {/* Sidebar */}
        <SideBarAdmin></SideBarAdmin>

      <div>
        <div className='grid grid-cols-4 gap-2'>
          <CardSoldProducts />
          <CardStat />
          <CardStat />
          <CardStat />
        </div>
        <div className='grid grid-cols-4'>
          <div className='col-span-2 mt-10'>
            <TableUsageExample />
          </div>

            <div className='col-span-2 mt-10 px-7'>
              <Card className="mb-5 ">
                <Chart></Chart>
              </Card>
              <Card className="mb-5 ">
                <ChartCategories></ChartCategories>
              </Card>
              <Card className="mb-5 ">
                <DangerCard></DangerCard>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DashboardAdmin