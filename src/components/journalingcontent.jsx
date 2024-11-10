
import Navbar from './Navbar'
import { useState,useEffect } from 'react'

const JournalingContent = () => {
  const [have, setHave] = useState(false)
  const data = true

  useEffect(() => {
    if (data) {
      setHave(true)
    }
  }, [data]) // only run this effect when data changes

  return (
    // <div>
    //   {have ? <textarea className='w-[100%] h-[20rem] border-2 rounded-2xl p-2' placeholder='Write your journal here' style={{margintop:"100%"}}/> : "hello"}
    // </div>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
    {have ? <textarea className='w-[100%] h-[20rem] border-2 rounded-2xl p-2' placeholder='Write your journal here' style={{marginTop:"40%"}}/> : <span style={{fontSize: "24px"}}>hello</span>}
  </div>
  )
}



export default JournalingContent
