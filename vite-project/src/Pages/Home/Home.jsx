import React,{useState} from 'react'
import  './Home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/ExploreMenu/Exploremenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Appdownload from '../../Components/AppDownload/Appdownload'
const home = () => {

  const [Category,setCategory] = useState("All");

  return (
  <div>
     <Header />
     <Exploremenu Category={Category} setCategory={setCategory}/>
     <FoodDisplay Category={Category}/>
     <Appdownload/>
  </div>
   
  )
}

export default home