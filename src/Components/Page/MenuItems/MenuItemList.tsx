import { useEffect, useState } from 'react'
import { menuItemModel } from '../../../Interfaces';
import MenuItemCard from './MenuItemCard';

function MenuItemList() {
  const [menuItem, setMenuItem] = useState<menuItemModel[]>([]);

  useEffect(() => {
      fetch("https://redmangoapi.azurewebsites.net/api/MenuItem").then((response) => response.json()).then((data) =>{
      console.log(data)
      setMenuItem(data.result)
      })
  }, [])
  return (

    <div className='container row'>
      {menuItem.length > 0 && menuItem.map((menuItem, index)=>(
        <MenuItemCard menuItem={menuItem} key={index}/>
      ))}
    </div>
  )
}

export default MenuItemList