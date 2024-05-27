import CardStat from '../../../components/cardstat/CardStat'
import { Chart } from '../../../components/charts/Chart'
import { DangerCard } from '../../../components/dangercard/DangerCard';
import SideBarAdmin from '../../../components/sidebaradmin/SideBarAdmin';

import { Card } from '@tremor/react';
import { FunnelChart } from '@tremor/react';
import React from 'react'
import { TableDashboardAdminManageUsers } from '../../../components/tables/tableUser/TableDashboardAdminManageUsers';
import { VisitorsChart } from '../../../components/charts/VisitorsChart';

const DashboardAdminManageUsers = () => {
    return (
        <div className="pt-16">
        <div className="flex min-h-screen bg-white antialiased dark:bg-gray-800 md:py-5">
            <SideBarAdmin></SideBarAdmin>

            <div>
                <div className='grid grid-cols-3 gap-2'>
                    <CardStat />
                    <CardStat />
                    <CardStat />
                </div>
                <div className='grid grid-cols-4'>
                    <div className='col-span-2 mt-10'>
                        <TableDashboardAdminManageUsers />
                    </div>
                <div className='col-span-2 mt-10 px-7'>
                    <Card className="mb-5 ">
                        <VisitorsChart></VisitorsChart>
                    </Card>
                </div>

                </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardAdminManageUsers