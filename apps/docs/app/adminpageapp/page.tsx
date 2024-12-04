import { Admin } from '@repo/ui/admin'
import { InputBox } from '@repo/ui/input-box'
import React from 'react'

const page = () => {
  return (
    <div>
        hi  app from admin page app
        <Admin/>
        {/* http://localhost:3001/adminpageapp   you can check by this */}
        <InputBox/>
    </div>
  )
}

export default page