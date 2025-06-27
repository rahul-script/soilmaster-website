import React from 'react'
import { aboutUsHeader } from '../../../utils/text-constants'

const HeaderText = () => {
  return (
    <div
        className={`h-[40vh] w-full flex items-center justify-center text-center rounded-3xl `}
      >
        <div className={`w-[65%] h-fit text-5xl`}>
          {aboutUsHeader.map((element, index) => (
            <span key={index} className={`font-bold ${element.color}`}>
              {element.text}
            </span>
          ))}
        </div>
      </div>
  )
}

export default HeaderText