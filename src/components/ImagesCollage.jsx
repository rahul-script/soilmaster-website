import React from 'react'

const ImagesCollage = ({images = []}) => {
  return (
    <div className={`grid grid-rows-2 grid-flow-row p-2`}>
      {
        images.map((element, index) => (
          <div key={index} className={`h-[27rem] w-[22rem] p-[2rem]`}>
            <img key={element.label} src={element.imagePath} alt={element.label} />
          </div>
        ))
      }
    </div>
  )
}

export default ImagesCollage