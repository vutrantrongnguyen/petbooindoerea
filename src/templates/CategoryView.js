import React, { useState } from "react"
import ListItem from "../components/ListItem"
import { titleIfy, slugify } from "../../utils/helpers"
import CartLink from "../components/CartLink"
import { Link } from "gatsby"
import { FaCircle, FaShoppingCart } from "react-icons/fa"
import Button from "../components/Button"
import Select from "react-select"
import { Dropdown } from "react-bootstrap"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tabs"

let geolocation = require("geolocation")

geolocation.getCurrentPosition(function(err, position) {
  if (err) throw err
  localStorage.setItem("position", position)
})

const navigation = [
  "Keep the pet", "Pet trimming", "Medical examination",
]

const options1 = [
  { value: "gaia", label: "GAIA" },
  { value: "j-and-p", label: "J&P" },
  { value: "kimi", label: "KIMI" },
  { value: "lolipet", label: "LOLIPET" },
  { value: "netpet", label: "NETPET" },
  { value: "petboarding", label: "PETBOARDING" },
  { value: "petmart", label: "PETMART" },
  { value: "petlovers", label: "PET LOVERS" },
  // { value: "hai-ba-trung", label: "Hai Bà Trưng - location" },
]
const options2 = [
  { value: "dong-da", label: "Đống Đa" },
  { value: "tu-liem", label: "Từ Liêm" },
  { value: "tay-ho", label: "Tây Hồ" },
  { value: "hung-vuong", label: "Hùng Vương" },
]


const CategoryView = (props) => {
  const { pageContext: { title, content: { items = [] } } } = props
  console.log("check props", props)

  let links = navigation.map(link => ({
    name: titleIfy(link),
    link: slugify(link),
  }))
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [key, setKey] = useState("home")
  const selectStyle = {
    control: styles => ({ ...styles, margin: "10px" }),
  }

  let handleChange = selectedOption => {
    setSelectedOption(selectedOption)
    window.location.href = "/" + (selectedOption.value)
  }

  let handleChangeLocation = selectedLocation => {
    setSelectedLocation(selectedLocation)
    window.location.href = "/" + (selectedLocation.value)
  }
  // let handleChangeStatus {
  //   localStorage.setItem("isAdmin", "false")
  //   window.location.href = "/signin"
  //   this.forceUpdate();
  // }

  return (
    <>
      <div className="fixed top-49 right-20 desktop:right-flexiblemargin z-10">
        {JSON.parse(window.localStorage.getItem("PROFILE")).isAdmin ? (<Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            {/*<div style={{ display: "flex" }}>*/}
            {/*<img src="/images/products/avatar2.png" width="30px" alt="" />*/}
            {JSON.parse(window.localStorage.getItem("PROFILE")).name}
            {/*</div>*/}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/profile">
              Profile
            </Dropdown.Item>
            <Dropdown.Item href="/cart">
              Medical history
            </Dropdown.Item>
            <Dropdown.Item href="/signin">
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>) : (<Button variant="info" onClick={()=> {window.location.href="/signin"}}>Login</Button>)}
      </div>

      <div>
        <div className="mx-auto" style={{ width: "400px", fontSize: "15px" }}>
          <Select
            style={selectStyle}
            value={selectedOption}
            onChange={handleChange}
            options={options1}
            isSearchable={true}
            placeholder={"Find pet house"}
          />

          <Select
            style={selectStyle}
            value={selectedLocation}
            onChange={handleChangeLocation}
            options={options2}
            placeholder={"Filter by district..."}
            // isSearchable={true}
          />
        </div>
        <div className="flex flex-wrap md:w-1/1" style={{ marginTop: "10px" }}>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            {/*<Tab eventKey="home" title="Home">*/}
            {/*  <div className="flex flex-1 flex-wrap flex-row">*/}
            {/*    {*/}
            {/*      items.map((item, index) => {*/}
            {/*        return (*/}
            {/*          <ListItem*/}
            {/*            key={index}*/}
            {/*            link={slugify(item.name)}*/}
            {/*            title={item.name}*/}
            {/*            price={item.price}*/}
            {/*            // price={position && Math.sqrt((parseFloat(item.lat) - position.coords.latitude )*(parseFloat(item.lat) - position.coords.latitude ) - (parseFloat(item.lng) - position.coords.longitude )*(parseFloat(item.lng) - position.coords.longitude ))}*/}
            {/*            imageSrc={item.image}*/}
            {/*          />*/}
            {/*        )*/}
            {/*      })*/}
            {/*    }*/}
            {/*  </div>*/}
            {/*</Tab>*/}
            <Tab eventKey="home" title="Keep the pet">
              <div className="flex flex-1 flex-wrap flex-row">
                {
                  items.filter(item => item.categories.includes("keep the pet")).map((item, index) => {
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
            </Tab>
            <Tab eventKey="contact" title="Pet trimming">
              <div className="flex flex-1 flex-wrap flex-row">

                {
                  items.filter(item => item.categories.includes("pet trimming")).map((item, index) => {
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
            </Tab>
            <Tab eventKey="medical" title="Medical examination">
              <div className="flex flex-1 flex-wrap flex-row">

                {
                  items.filter(item => item.categories.includes("medical examination")).map((item, index) => {
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
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default CategoryView