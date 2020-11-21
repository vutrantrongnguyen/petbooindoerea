/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {withRouter, BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom"
import Select from "react-select"
import { Link } from "gatsby"
import { SiteContext, ContextProviderComponent } from "../context/mainContext"
import { titleIfy, slugify } from "../../utils/helpers"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import { colors } from "../theme"

toast.configure({
  progressStyle: {
    background: colors.primary,
  },
})

const logo = require("../images/logo2.png")

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

class Layout extends React.Component {

  state = {
    selectedOption: null,
    selectedLocation: null,
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption })
    window.location.href="/"+ (selectedOption.value);
  }

  handleChangeLocation = selectedLocation => {
    this.setState({selectedLocation})
    window.location.href="/"+ (selectedLocation.value);
  }
  render() {
    const { children } = this.props
    const { selectedOption } = this.state
    const { selectedLocation } = this.state
    return (
      <ContextProviderComponent>
        <SiteContext.Consumer>
          {
            context => {
              let { navItems: { navInfo: { data: links } } } = context

              links = links.map(link => ({
                name: titleIfy(link),
                link: slugify(link),
              }))
              links.unshift({
                name: "Home",
                link: "/pet",
              })

              return (
                <div className="min-h-screen">
                  <nav>
                    <div className="flex justify-center">
                      <div className="
                    w-fw
                    mobile:px-10 desktop:px-0 px-4 pt-10 pb-6
                    flex flex-col
                    sm:flex-row">
                        <Link to="/pet">
                          <img className="mb-4 w-24 mw-24 sm:w-16 sm:mr-16" alt="Logo" src={logo} />
                        </Link>

                        <div className="flex flex-wrap md:w-1/1">
                           <p> Welcome to PetBoo! Enjoy our best service</p>
                          {/*{*/}
                          {/*  links.map((l, i) => (*/}
                          {/*    <Link to={`/${l.link}`} key={i}>*/}
                          {/*      <p key={i}*/}
                          {/*         className="text-left m-0 text-smaller mr-4 sm:mr-8 font-semibold">{l.name}</p>*/}
                          {/*    </Link>*/}
                          {/*  ))*/}
                          {/*}*/}
                        </div>
                        {/*<Link to="/pet">*/}
                        {/*  <a href="/pet"><strong>Home</strong></a>*/}
                        {/*</Link>*/}
                        <div style={{ width: "300px", marginLeft: "400px", fontSize:"15px" }}>
                          <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options1}
                            isSearchable={true}
                            placeholder={"Find shop"}
                          />
                        {/*</div>*/}
                        {/*<div style={{ width: "300px", marginLeft: "20px" }}>*/}
                          <Select
                            value={selectedLocation}
                            onChange={this.handleChangeLocation}
                            options={options2}
                            placeholder={"Filter by district..."}
                            // isSearchable={true}
                          />
                        </div>
                      </div>
                    </div>t
                  </nav>
                  <div className="mobile:px-10 px-4 pb-10 flex justify-center">
                    <main className="w-fw">{children}</main>
                  </div>
                  <footer className="flex justify-center">
                    <div className="flex w-fw px-8 desktop:px-0 border-solid border-t border-gray-300 items-center">
                      <span className="block text-gray-700 pt-4 pb-8 mt-2 text-xs">Copyright © 2020 Preslyyyyy. All rights reserved.</span>
                      <div className="flex flex-1 justify-end">
                        <Link to="/admin">
                          <p className="pt-4 text-xs">Admins</p>
                        </Link>
                      </div>
                    </div>
                  </footer>
                </div>
              )
            }
          }
        </SiteContext.Consumer>
      </ContextProviderComponent>
    )
  }
}

export default Layout
