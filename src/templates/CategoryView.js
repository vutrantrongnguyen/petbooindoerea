import React, { useState } from "react"
import ListItem from '../components/ListItem'
import { titleIfy, slugify } from '../../utils/helpers'
import CartLink from '../components/CartLink'
let geolocation = require('geolocation')

geolocation.getCurrentPosition(function(err, position){
  if (err) throw err
  localStorage.setItem('position', position)
})


const CategoryView = (props) => {
  const { pageContext: { title, content: { items = [] }}} = props
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="max-w-fw flex flex-col">
          <div className="pt-10 pb-8">
            <h1 className="text-5xl font-light">Pet House List</h1>
          </div>

          <div>
            <div className="flex flex-1 flex-wrap flex-row">
              {
                items.map((item, index) => {
                  return (
                    <ListItem
                      key={index}
                      link={slugify(item.name)}
                      title={item.name}
                      price={item.price}
                      // price={position && Math.sqrt((parseFloat(item.lat) - position.coords.latitude )*(parseFloat(item.lat) - position.coords.latitude ) - (parseFloat(item.lng) - position.coords.longitude )*(parseFloat(item.lng) - position.coords.longitude ))}
                      imageSrc={item.image}
                    />
                  )
                })
              }
            </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default CategoryView