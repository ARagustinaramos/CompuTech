import { useEffect , useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/firebase";
import { getOrderByUser, getUserById, getUsers } from '../../../redux/actions/actions'; // Asegúrate de que la ruta sea correcta

//COMPONENTES
import CardStatUser from '../../../components/cardstatUser/CardStatUser'
import SideBarUser from '../../../components/sidebarUser/SideBarUser';
import { TableUsageExample } from '../../../components/tables/tableUser/TableUsageExample'
import { Card } from '@tremor/react';
import CardProductStock from '../../../components/cardstatUser/CardProductsStock';


const DashboardUser2 = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const userByMail = allUsers.find(u => u.mail === user.email);
  const currentUserData = useSelector((state) => state.currentUserData)

  useEffect(() => {
    dispatch(getUsers());

  }, [dispatch]);

 console.log(userByMail)

console.log(currentUserData)

  return (
    <div className="pt-16">
      <div className="flex min-h-screen bg-white antialiased dark:bg-gray-800 md:py-5">
        {/* Sidebar */}
        <SideBarUser />
      <div>
        <div className='grid grid-cols-4 gap-2'>
          {/*<CardSoldProducts />*/}
          <CardProductStock />
          <CardStatUser userByMail={userByMail}/>

        </div>
        <div className='grid grid-cols-4'>
          <div className='col-span-2 mt-10'>
            <TableUsageExample />
          </div>

            <div className='col-span-2 mt-10 px-7'>
              <Card className="mb-5 ">
                {/*<Chart></Chart>*/}
              </Card>
              <Card className="mb-5 ">
                {/*<ChartCategories></ChartCategories>*/}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DashboardUser2