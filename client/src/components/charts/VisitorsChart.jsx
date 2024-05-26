'use client';

import { FunnelChart } from '@tremor/react';

const chartdata = [
    
    { name: 'Visitas', value: 351 },
    {
        name: "Agregadas al carrito",
        value: 191,
    },
    { name: 'Ordenes', value: 10 },
];

export function VisitorsChart() {
    return (
        <>
            <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Conversion general
            </h3>
            <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                2.85%
            </p>
            <p className="mt-4 text-tremor-label text-tremor-content dark:text-dark-tremor-content">
                Uniques in specific order, who converted within 30 days.
            </p>
            <FunnelChart className="h-80" data={chartdata} onValueChange={(v) => console.log(v)} />
        </>
    )
}