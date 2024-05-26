"use client";
import React from 'react';
import { useDispatch } from 'react-redux';
import { orderName } from '../../redux/actions/actions';

const ByName = () => {
  const dispatch = useDispatch();

  const handleOrderByName = (event) => {
    dispatch(orderName(event.target.value));
  };

  return (
    <div className="py-2">
      <label htmlFor="" className="text-slate-500">Orden alfabético: </label>
      <select name='' onChange={handleOrderByName} className="border-hidden text-slate-500">
        <option value="a-z" className="text-slate-500"> A-Z</option>
        <option value="z-a" className="text-slate-500"> Z-A</option>
      </select>
    </div>
  );
};

export default ByName;



// export function Component() {
//   return (
//     <Dropdown label="Dropdown" inline>
//       <Dropdown.Item>Dashboard</Dropdown.Item>
//       <Dropdown.Item>Settings</Dropdown.Item>
//       <Dropdown.Item>Earnings</Dropdown.Item>
//       <Dropdown.Item>Sign out</Dropdown.Item>
//     </Dropdown>
//   );
// }
