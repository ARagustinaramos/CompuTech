import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/actions';
import { useEffect} from 'react';

import { BarChart } from '@tremor/react';

const chartdata = [
  {
    name: 'Amphibians',
    'Number of threatened species': 2488,
  },
  {
    name: 'Birds',
    'Number of threatened species': 1445,
  },
  {
    name: 'Crustaceans',
    'Number of threatened species': 743,
  },
  {
    name: 'Ferns',
    'Number of threatened species': 281,
  },
  {
    name: 'Arachnids',
    'Number of threatened species': 251,
  },
  {
    name: 'Corals',
    'Number of threatened species': 232,
  },
  {
    name: 'Algae',
    'Number of threatened species': 98,
  },
];

const dataFormatter = (number) =>
  Intl.NumberFormat('us').format(number).toString();

export function Chart() {
    
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.copyProducts);
    console.log(allProducts)
    
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    
    return (
    <>
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Stock de productos
      </h3>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="name"
        categories={['Number of threatened species']}
        colors={['blue']}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </>
  );
}