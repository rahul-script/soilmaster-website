import React from 'react'
import ParentContainer from '../../../components/molecular-components/ParentContainer'
import { moto } from '../../../utils/text-constants'

const HomeSix = () => {
  return (
    <ParentContainer height={"h-[16rem]"} width={"w-full"} child={
      <div className={`relative h-full w-full flex items-center justify-center text-center bg-center bg-cover rounded-3xl`} style={{
        backgroundImage: "url('/images/farm.png')"
      }}>
        <div className={`absolute inset-0 bg-custom-black rounded-3xl opacity-20`}></div>
        <span className={`text-custom-white text-4xl font-semibold z-[2]`}>{moto}</span>
      </div>
    } />
  )
}

export default HomeSix