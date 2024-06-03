import CardStat from '../../../components/cardstat/CardStat'
import { Chart } from '../../../components/charts/Chart'
import { DangerCard } from '../../../components/dangercard/DangerCard';
import SideBarAdmin from '../../../components/sidebaradmin/SideBarAdmin';
import { DangerCardUser } from '../../../components/dangercard/DangerCardUser';
import { Card } from '@tremor/react';
import { FunnelChart } from '@tremor/react';
import React from 'react'
import { TableDashboardAdminManageUsers } from '../../../components/tables/tableUser/TableDashboardAdminManageUsers';
import { VisitorsChart } from '../../../components/charts/VisitorsChart';
import { TableDashboardReviews } from '../../../components/tables/tableUser/TableDashboardReviews';

const DashboardAdminManageUsers = () => {
    return (
        <div className="pt-16">
            <div className="flex min-h-screen bg-white antialiased dark:bg-gray-800 md:py-5">
                <SideBarAdmin></SideBarAdmin>
                <div className="flex flex-col w-full">
                    <div className='grid grid-cols-3 gap-2'>
                        <CardStat />
                        <CardStat />
                        <CardStat />
                    </div>
                    <div className='flex-1 grid grid-cols-2 gap-7 mt-10'>
                        <div className='flex flex-col'>
                            <TableDashboardAdminManageUsers className='flex-1 mb-55' />
                            <TableDashboardReviews className='flex-1' />
                        </div>
                        <div className='flex flex-col'>
                            <Card className="mb-5 flex-1">
                                <VisitorsChart />
                            </Card>
                            <Card className="mb-5">
                                <DangerCardUser />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardAdminManageUsers;