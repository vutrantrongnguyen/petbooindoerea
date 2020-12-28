import React, { useEffect, useState } from "react"
import { Table, Form, Button, Col, Modal } from "react-bootstrap"
import { toast } from "react-toastify"
import useForceUpdate from 'use-force-update';
const initialState = {
  // "show": false,
  "div1": "",
  "div2": "none",
  "name": "Nguyen",
  "email": "quenmatkhaupart3@gmail.com",
  "phone": "0986074671",
  "password": "123456",
  "pet": [{
    "name": "Duc",
    "type": "Husky",
    "yob": "22",
    "weight": "60",
    "sex": "Male",
  }, {
    "name": "Duc",
    "type": "Husky",
    "yob": "22",
    "weight": "60",
    "sex": "Male",
  }],
}

const Profile = () => {

  const forceUpdate = useForceUpdate();
  useEffect(() => {
      if (typeof window !== "undefined") {
        const storageState = window.localStorage.getItem("PROFILE")
        if (!storageState) {
          window.localStorage.setItem("PROFILE", JSON.stringify(initialState))
        }

      }
    }, [],
  )
  let initState =JSON.parse(window.localStorage.getItem("PROFILE"))
  console.log("state khoi tao", initState)
  const [state, setState] = useState(initState)
  const onChange = (e) => {
    console.log({ [e.target.name]: e.target.value })
    state[e.target.name] = e.target.value
    console.log(state)
    // this.setState({ [e.target.name]: e.target.value })
  }
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleSave = () => {
    let newpet = {
      name: state.petname,
      yob: state.petyob,
      type: state.pettype,
      weight: state.petweight,
      sex: state.petsex,
    }
    state.pet.push(newpet)
    console.log("kiem tra state", state)
    setState(state)
    window.localStorage.setItem("PROFILE", JSON.stringify(state))
    toast("Successfully update profile!", {
      position: toast.POSITION.TOP_LEFT,
    })
    forceUpdate()
    window.location.href = "/profile"
  }

  const saveProfile = (e) => {
    window.localStorage.setItem("PROFILE", JSON.stringify(state))
    toast("Successfully update profile!", {
      position: toast.POSITION.TOP_LEFT,
    })
    forceUpdate()
  }

  const Edit = (e) => {
    this.setState({ div1: "none", div2: "" })
  }
  const Edit2 = (e) => {
    // this.setState({ div1: "", div2: "none" })
    window.localStorage.setItem("PROFILE", JSON.stringify(state))
    toast("Successfully update profile!", {
      position: toast.POSITION.TOP_LEFT,
    })
    this.forceUpdate()
    window.location.href = "/profile"
  }

  const handleDelete = (e) => {
    state.pet.splice(e, 1)
    // setState({
    //   ...state,
    //   pet: state.pet.splice(e, 1),
    // })
    // console.log(e)
    setState(state)
    window.localStorage.setItem("PROFILE", JSON.stringify(state))
    toast("Successfully update profile!", {
      position: toast.POSITION.TOP_LEFT,
    })
    this.forceUpdate()

  }


  // this.state = initialState
  // let check = this.state.show

  // if (typeof window !== "undefined") {
  //   const storageState = window.localStorage.getItem("PROFILE")
  //   if (storageState) {
  //     this.state = JSON.parse(storageState)
  //   }
  // }
  return (
    <div>
      <div className="flex flex-1 justify-center">
        <div className="w-full max-w-144">
          <strong>Profile</strong>
          <hr />
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                onChange={onChange} name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder={state.name} />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                onChange={onChange} name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email" placeholder={state.email} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                onChange={onChange} name="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="text" placeholder={state.phone} />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                onChange={onChange} name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="******************" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Re-enter Password
              </label>
              <input
                onChange={onChange} name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="******************" />
            </div>
            <strong>Your pets</strong>
            <hr />
            {console.log("chao", state.email)}
            <Form>
              {
                state.pet.map((item, index) => {
                    return (<>
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder={item.name} />
                          </Form.Group>

                          <Form.Group as={Col}>
                            <Form.Label>Type</Form.Label>
                            <Form.Control placeholder={item.type} />
                          </Form.Group>

                          <Form.Group as={Col}>
                            <Form.Label>YoB</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                              <option>Choose...</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                            </Form.Control>
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group as={Col}>
                            <Form.Label>Weight</Form.Label>
                            <Form.Control type="email" placeholder={item.weight} />
                          </Form.Group>

                          <Form.Group as={Col}>
                            <Form.Label>Sex</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                              <option>Choose...</option>
                              <option>male</option>
                              <option>female</option>
                            </Form.Control>
                          </Form.Group>
                          <Form.Group as={Col}>
                            <Form.Label></Form.Label>
                            <Button onClick={() => handleDelete(index)}>Delete</Button>
                          </Form.Group>
                        </Form.Row>

                      </>
                    )
                  },
                )}

              <div style={{ justifyContent: "center", display: "flex" }}>

                <Button onClick={handleShow}
                        variant="light">
                  <img src="/images/products/add.png" width="50px" alt="" />
                </Button>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <Button variant="primary" onClick={Edit2}>
                  Save
                </Button>
              </div>
            </Form>
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Add Pet</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="petname" onChange={onChange} />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Type</Form.Label>
                        <Form.Control name="pettype" onChange={onChange} />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>YoB</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..." name="petyob" onChange={onChange}>
                          <option>Choose...</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="email" name="petweight" onChange={onChange} />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Sex</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..." name="petsex" onChange={onChange}>
                          <option>Choose...</option>
                          <option>male</option>
                          <option>female</option>
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
                  </>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>

      </div>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Preslyyyyy. All rights reserved.
      </p>
    </div>
  )

}

export default Profile