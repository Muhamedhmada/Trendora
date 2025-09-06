import { useState } from 'react'
import { AngleDown, AngleUp, Prev } from '../../Assets/SVGs'
import './AdditionlProdInfo.css'

function AdditionlProdInfo({data}){
  // const 

  // let ProductData = data
  // console.log(ProductData?.description)

  const [isOpen , setIsOpen] = useState({
    one : false,
    two: false,
    three :false,
    four:false
  })
  return(
    <div className="additionalProdInfo-container">

      <div>
        <div className="header" onClick={()=>setIsOpen((prev)=>({...Prev,one:!isOpen.one}))}>
          Descriotion 
          {isOpen.one?<AngleUp width="30px"/>:<AngleDown width="30px"/>}
        </div>
        <div className={isOpen.one?"info open":"info close"}>
          <p>
            {data?.description?.text}
          </p>
          <ul>
            {
              data?.description?.list?.map((item)=>(
                <li>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div>
        <div className="header" onClick={()=>setIsOpen((prev)=>({...Prev,two:!isOpen.two}))}>
        composition 
          {isOpen.one?<AngleUp width="30px"/>:<AngleDown width="30px"/>}
        </div>
        <div className={isOpen.two?"info open":"info close"}>
          {data?.composition?.text}
          <ul>
            {
              data?.composition?.list?.map((item)=>(
                <li>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div>
        <div className="header" onClick={()=>setIsOpen((prev)=>({...Prev,three:!isOpen.three}))}>
          modal Parameter 
          {isOpen.one?<AngleUp width="30px"/>:<AngleDown width="30px"/>}
        </div>
        <div className={isOpen.three?"info open":"info close"}>
          <ul>
            {
              data?.modalParameter?.map((item)=>(
                <li>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div>
        <div className="header" onClick={()=>setIsOpen((prev)=>({...Prev,four:!isOpen.four}))}>
        product Care 
          {isOpen.one?<AngleUp width="30px"/>:<AngleDown width="30px"/>}
        </div>
        <div className={isOpen.four?"info open":"info close"}>
          <ul>
            {
              data?.productCare?.map((item)=>(
                <li>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>

    </div>
  )
}
export default AdditionlProdInfo