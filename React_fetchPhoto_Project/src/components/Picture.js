import React from 'react'

 const Picture = ({data }) => {
    return (
        <div className="picture">
            <p>{data.photographer}</p>
            <div className="imageContainer">
                <img src={data.src.large} alt="" />
            </div>
            <p>
              Download Image {" "} 
              <a target="_blank" href={data.src.large}>
                    Click Here
              </a>
            </p>
            <p>{data.id}</p>
            <p>{data.liked}</p>
            <p>{data.width}</p>
        </div>
    )
}

export default Picture