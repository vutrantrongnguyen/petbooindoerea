import React, { useState } from 'react'
import Popup from 'reactjs-popup'

import { SiteContext, ContextProviderComponent } from '../context/mainContext'
import CartLink from '../components/CartLink'
import Button from '../components/Button'
import Image from '../components/Image'
import QuantityPicker from '../components/QuantityPicker'
import { withScriptjs } from "react-google-maps";
import Map from './Map';
  const MapLoader = withScriptjs(Map);
  // const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const ItemView = (props) => {
  const [numberOfitems, updateNumberOfItems] = useState(1)
  const [position, setPosition] = useState(undefined);
  const item = props.pageContext.content
  const { price, image, name, description, phone, shoplocation, lat, lng } = item
  const { context: { addToCart }} = props


  function addItemToCart (item) {
    item["quantity"] = numberOfitems
    addToCart(item)
  }

  function increment() {
    updateNumberOfItems(numberOfitems + 1)
  }

  function decrement() {
    if (numberOfitems === 1) return
    updateNumberOfItems(numberOfitems - 1)
  }

  let geolocation = require('geolocation')

  geolocation.getCurrentPosition(function(err, position){
    if (err) throw err
    setPosition(position)
  })

  return (
    <>
      <CartLink />
      <div className="py-12 flex flex-1 flex-col
      md:flex-row
      w-full
      my-0 mx-auto">
        <div className="w-full md:w-1/1 h-112 flex flex-1 bg-light hover:bg-light-200">
          <div className="py-16 p10 flex flex-1 justify-center items-center">
            <Popup modal trigger={<img src={image} className="max-w-lg m-0 max-h-96 w-64 md:w-full" alt="Inventory item" />}>
              <Image src={image} alt="Inventory item" />
            </Popup>
          </div>
        </div>
      </div>
      <div className="py-12 flex flex-1 flex-col
      md:flex-row
      w-full
      my-0 mx-auto">
        <div className="pt-2 px-0 md:px-10 pb-8 w-full md:w-1/1">
          <h2 className="text-5xl font-light">{name}</h2>
          {/*<p>Distance: {position && Math.sqrt((parseFloat(lat) - position.coords.latitude )*(parseFloat(lat) - position.coords.latitude ) - (parseFloat(lng) - position.coords.longitude )*(parseFloat(lng) - position.coords.longitude ))}</p>*/}
          <h2 className="text-2xl tracking-tighter">Distance: {price} km</h2>
          <div>
            {position && <MapLoader
              lat1={parseFloat(lat)}
              lng1={parseFloat(lng)}
              lat2={position.coords.latitude}
              lng2={position.coords.longitude}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHARpF3EFSAmJCPtdNAVYfMoLOeico1yc"
              loadingElement={<div/>}
            />}

          </div>
          <p className="text-gray-600 text-sm"><strong>Địa chỉ: </strong>{shoplocation}</p>
          <p className="text-gray-600 text-sm"><strong>SDT: </strong>{phone}</p>
          <p className="text-gray-600 text-sm">{description}</p>
          <p className="text-gray-600 text-sm"><strong>Dịch vụ đi kèm: </strong>{description}</p>
          <p className="text-gray-600 text-sm"><strong>Số lần đã đặt: </strong>{count}</p>
          {/*<div className="mb-6">*/}
          {/*  <QuantityPicker*/}
          {/*    increment={increment}*/}
          {/*    decrement={decrement}*/}
          {/*    numberOfitems={numberOfitems}*/}
          {/*  />*/}
          {/*</div>*/}
          <Button
            full
            title="Choose this one"
            onClick={() => addItemToCart(item)}
          />
        </div>
      </div>
    </>
  )
}


function ItemViewWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {
          context =>  <ItemView {...props} context={context} />
        }
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}


export default ItemViewWithContext
