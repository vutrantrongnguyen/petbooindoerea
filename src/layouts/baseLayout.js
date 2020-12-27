/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {
  withRouter, BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Select from "react-select"
import { Link } from "gatsby"
import { SiteContext, ContextProviderComponent } from "../context/mainContext"
import { titleIfy, slugify } from "../../utils/helpers"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import { colors } from "../theme"
import Button from "../components/Button"
import { Dropdown } from "react-bootstrap"

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

const navigation = [
  "Keep the pet", "Pet trimming", "Medical examination",
]

class Layout extends React.Component {
  state = { formState: 'signUp', isAdmin: false }
  toggleFormState = (formState) => {
    this.setState(() => ({ formState }))
  }
  async componentDidMount() {
    // check and update signed in state
  }
  signUp = async (form) => {
    const { username, email, password } = form
    // sign up
    this.setState({ formState: 'confirmSignUp' })
    localStorage.setItem("formState", "confirmSignUp")
  }
  confirmSignUp = async (form) => {
    const { username, authcode } = form
    // confirm sign up
    this.setState({ formState: 'signIn' })
    localStorage.setItem("formState","signIn")
  }
  signIn = async (form) => {
    const { username, password } = form
    // signIn
    this.setState({ formState: 'signedIn', isAdmin: true })
    localStorage.setItem("isAdmin","true");
    localStorage.setItem("formState", "signedIn")
  }
  signOut = async() => {
    // sign out
    this.setState({ formState: 'signUp' })
    localStorage.setItem("formState", "signUp");
  }
  state = {

    selectedOption: null,
    selectedLocation: null,
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption })
    window.location.href = "/" + (selectedOption.value)
  }

  handleChangeLocation = selectedLocation => {
    this.setState({ selectedLocation })
    window.location.href = "/" + (selectedLocation.value)
  }

  handleChangeStatus() {
    localStorage.setItem("isAdmin", "false")
    window.location.href = "/signin"
    this.forceUpdate();
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
              console.log("check duong link nao cac con vo", links)
              links = navigation.map(link => ({
                name: titleIfy(link),
                link: slugify(link),
              }))
              // links.unshift({
              //   name: "Home",
              //   link: "/pet",
              // })

              return (
                <div className="min-h-screen">
                  <nav>
                    <div className="flex justify-center mx-auto" style={{margin:'20px'}}>
                      {/*<div>*/}
                        <Link to="/pet">
                          <img alt="Logo" src={logo}
                               style={{ margin: "auto", width: "100px" }} />
                        </Link>
                        <div>
                          <h2 className="text-center">Welcome to PetBoo!</h2>
                          <h3 className="text-center">We take care of your pet in short time</h3>
                        </div>
                      {/*</div>*/}

                    </div>
                  </nav>
                  <div>
                    {/*{window.location.href === "/signin" ?*/}
                    {/*  (*/}
                    {/*    <div className="fixed top-49 right-20 desktop:right-flexiblemargin z-10">*/}
                    {/*      <Dropdown>*/}
                    {/*        <Dropdown.Toggle variant="success" id="dropdown-basic">*/}
                    {/*          Nguyen*/}
                    {/*        </Dropdown.Toggle>*/}
                    {/*        <Dropdown.Menu>*/}
                    {/*          <Dropdown.Item href="/profile">*/}
                    {/*            <button*/}
                    {/*              className="bg-secondary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"*/}
                    {/*              type="button" style={{ margin: "2px" }}>Profile*/}
                    {/*            </button>*/}
                    {/*          </Dropdown.Item>*/}
                    {/*          <Dropdown.Item href="#/action-2"> </Dropdown.Item>*/}
                    {/*          <Dropdown.Item href="#/action-3">*/}
                    {/*            <button*/}
                    {/*              className="bg-secondary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"*/}
                    {/*              type="button" style={{ margin: "2px" }}>Medical history*/}
                    {/*            </button>*/}
                    {/*          </Dropdown.Item>*/}
                    {/*          <Dropdown.Item href="#/action-4"> </Dropdown.Item>*/}
                    {/*          <Dropdown.Item href="#/action-5">*/}
                    {/*            <button onClick={() => this.handleChangeStatus()}*/}
                    {/*                    className="bg-secondary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"*/}
                    {/*                    type="button" style={{ margin: "2px" }}>Logout*/}
                    {/*            </button>*/}
                    {/*          </Dropdown.Item>*/}
                    {/*        </Dropdown.Menu>*/}
                    {/*      </Dropdown>*/}
                    {/*    </div>*/}

                    {/*  ) : (*/}
                    {/*    <div className="fixed top-49 right-20 desktop:right-flexiblemargin z-10">*/}
                    {/*      <Button*/}
                    {/*        full*/}
                    {/*        title="Login"*/}
                    {/*        onClick={() => (window.location.href = "/signin")}*/}
                    {/*      />*/}
                    {/*    </div>*/}


                    {/*  )*/}
                    {/*}*/}

                  </div>
                  <div className="mobile:px-10 px-4 pb-10 flex justify-center">
                    <main className="w-fw">{children}</main>
                  </div>
                  <footer className="flex justify-center">
                    <div className="flex w-fw px-8 desktop:px-0 border-solid border-t border-gray-300 items-center">
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
