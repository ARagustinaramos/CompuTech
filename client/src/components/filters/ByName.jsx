import React from 'react';


const ByName = ({ setNameOrder }) => { 
  const handleOrderByName = (event) => {
    setNameOrder(event.target.value); 
  };

  return (
    <div className="py-2">
      <label htmlFor="" className="text-slate-500 dark:text-gray-400">Orden alfabético: </label>
      <select name='' onChange={handleOrderByName} className="border-hidden text-slate-500 dark:text-gray-400 bg-white dark:bg-gray-800">
        <option value="a-z" className="text-slate-500 dark:text-gray-400"> A-Z</option>
        <option value="z-a" className="text-slate-500 dark:text-gray-400"> Z-A</option>
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
