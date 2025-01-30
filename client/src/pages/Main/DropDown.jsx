import Select from 'react-select'
import { useState } from 'react'
// import logo3 from '../assets/Vector1.png'
const DropDown = () => {
    const [selectLanguage, setSelectedLanguage] = useState(
    // {    value:'English (United States)',
    //      label:'English (US)'
    // }           
    )
   const options  = [
    {value:'English (United States)', label:'English (US)'},
    {value:'English (United Kingdom)', label:'English (UK)'},
    {value:'French', label:'French'},
   ]
   const handleChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
    // console.log(`Selected`, selectedOption)
   }

  
   
  return (
    <div style={{textAlign:'center', display:'flex', width:'150px', height:"30px"}}>
        {/* <img className='globe' src = {logo3} alt='/home'></img> */}
      
        <Select 
        
        options={options}
        value = {selectLanguage}
        onChange={handleChange}
        placeholder="Select your language"
        styles={{position:'fixed',height:"100px", width:'70px', } } >

        </Select>
    </div>
  )
}

export default DropDown
