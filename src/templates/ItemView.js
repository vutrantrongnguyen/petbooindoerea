import React, { useState } from "react"
import Popup from "reactjs-popup"

import { SiteContext, ContextProviderComponent } from "../context/mainContext"
import CartLink from "../components/CartLink"
// import Button from "../components/Button"
import Image from "../components/Image"
import { Modal, Form, Button, Col, Row } from "react-bootstrap"
import QuantityPicker from "../components/QuantityPicker"
import { withScriptjs } from "react-google-maps"
import Map from "./Map"
import DateTimePicker from "react-datetime-picker"

const MapLoader = withScriptjs(Map)
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const ItemView = (props) => {
  const [numberOfitems, updateNumberOfItems] = useState(1)
  const [position, setPosition] = useState(undefined)
  const item = props.pageContext.content
  const { price, image, name, description, phone, shoplocation, lat, lng, count } = item
  const { context: { addToCart } } = props


  function addItemToCart(item) {
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

  let geolocation = require("geolocation")

  geolocation.getCurrentPosition(function(err, position) {
    if (err) throw err
    setPosition(position)
  })

  const [show, setShow] = useState(false)
  const [value, setValue] = useState(new Date())
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [input, setInput] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    postal_code: "",
    state: "",
  })
  // const [username, setUsername] = useState(null)
  // const [email, setEmail ] = useState(null)
  // const [password, setPassword ] = useState(null)
  // const [phone, setPhone ] = useState(null)

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  return (
    <>

      <div className="py-12 flex flex-1 flex-col
      md:flex-row
      w-full
      my-0 mx-auto">
        <div className="pt-2 px-0 md:px-10 pb-8 w-full md:w-1/1">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 className="text-5xl font-light">{name}</h2>
            <Button variant="info" onClick={handleShow}>Make an appoinment</Button>
          </div>
          {/* <p>Distance: {position && Math.sqrt((parseFloat(lat) - position.coords.latitude )*(parseFloat(lat) - position.coords.latitude ) - (parseFloat(lng) - position.coords.longitude )*(parseFloat(lng) - position.coords.longitude ))}</p>
          <h2 className="text-2xl tracking-tighter">Distance: {price} km</h2> */}

          <div className="py-12 flex flex-1 flex-col
      md:flex-row
      w-full
      my-0 mx-auto">
            <div className="w-full md:w-1/1 h-112 flex flex-1 bg-light hover:bg-light-200">
              <div className="py-16 p10 flex flex-1 justify-center items-center">
                <Popup modal trigger={<img src={image} className="max-w-lg m-0 max-h-96 w-64 md:w-full"
                                           alt="Inventory item" />}>
                  <Image src={image} alt="Inventory item" />
                </Popup>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm"><strong>Address: </strong>{shoplocation}</p>
          <p className="text-gray-600 text-sm"><strong>Phone number: </strong>{phone}</p>
          <p className="text-gray-600 text-sm"><strong>Detail: </strong>{description}</p>
          <p className="text-gray-600 text-sm"><strong>Plus Service: </strong>{description}</p>
          <p className="text-gray-600 text-sm"><strong>Số lần đã đặt: </strong>{count}</p>

          <div>
            {position && <MapLoader
              lat1={parseFloat(lat)}
              lng1={parseFloat(lng)}
              lat2={position.coords.latitude}
              lng2={position.coords.longitude}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHARpF3EFSAmJCPtdNAVYfMoLOeico1yc"
              loadingElement={<div />}
            />}
          </div>
          <div className="mb-6">
            <QuantityPicker
              increment={increment}
              decrement={decrement}
              numberOfitems={numberOfitems}
            />
          </div>
          <button
            // style={{ backgroundColor: "#85cef9" }}
            full
            title="Make an appointment"
            // onClick={() => addItemToCart(item)}
            // onClick={() => window.location.href = "/apointment"}
            onClick={handleShow}
          />
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        {/*<Modal.Header closeButton>*/}
        {/*  <Modal.Title>Modal heading</Modal.Title>*/}
        {/*</Modal.Header>*/}
        <Modal.Body>
          <div className="flex flex-1 justify-center">
            <div className="w-full max-w-144">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Booking time
                  </label>

                  <DateTimePicker
                    onChange={setValue}
                    value={value}
                  />
                </div>
                <Form>

                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Pet</Form.Label>
                    <Form.Control as="select">
                      <option>Duc</option>
                      <option>La</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Service</Form.Label>
                    <Form.Control as="select">
                      <option>Keep the pet</option>
                      <option>Pet trimming</option>
                      <option>Medical examination</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Note</Form.Label>
                    <Form.Control type="email" placeholder="Ghi chú yêu cầu" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Pick-up address</Form.Label>
                    <Form.Control type="email" placeholder="Địa chỉ cần đón" />
                  </Form.Group>
                </Form>
                <Row>
                  <Button as={Col} onClick={() => addItemToCart(item)} variant="info" style={{
                    // backgroundColor: "#85cef9",
                    // width:"100%",
                    // margin: "auto",
                    // padding: "10px",
                    // display: "flex",
                    justifyContent: "left",
                    // alignItems: "center",
                  }}>Book (Free)
                  </Button>
                  <Col/>
                  <Col/>
                  <Button as={Col} onClick={() => addItemToCart(item)} variant="info" style={{
                    // backgroundColor: "#85cef9",
                    // width:"100%",
                    // margin: "auto",
                    // padding: "10px",
                    // display: "flex",
                    justifyContent: "right",
                    // alignItems: "center",
                  }}>Book (Premium)
                  </Button>
                </Row>
              </form>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/*<button variant="secondary" onClick={handleClose}>*/}
          {/*  Close*/}
          {/*</button>*/}
        </Modal.Footer>
      </Modal>
    </>
  )
}


function ItemViewWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {
          context => <ItemView {...props} context={context} />
        }
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}


export default ItemViewWithContext
