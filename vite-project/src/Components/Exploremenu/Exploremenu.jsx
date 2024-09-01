import React from 'react'
import './Exploremenu.css'
import {menu_list} from '../../assets/assets'
const Exploremenu = ({Category,setCategory}) => {

  return (
    <div className="explore-menu" id='exploremenu'>
      <h1>Exlpore our Menu</h1>
      <p className="explore-menu"> Choose from a diverse menu of expertly crafted dishes, prepared by top local chefs. Once you've made your selection, simply place your order, and we'll handle the rest. Our efficient delivery process ensures your meal arrives fresh and on schedule. Enjoy your dining experience, and please consider providing feedback to help us maintain the highest standards of service.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>
        {
          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key ={index} className="explore-menu-list-item">
              <img className={Category==item.menu_name?"active":""}src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
              
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu