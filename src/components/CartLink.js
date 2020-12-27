import React from 'react'
import { SiteContext } from '../context/mainContext'
import { FaShoppingCart, FaCircle } from 'react-icons/fa';
import { Link } from "gatsby"
import { colors } from '../theme'
import Button from "./Button"
const { secondary } = colors

class CartLink extends React.Component {


  state = {
    selected: null,
  }

  handleChange() {
    window.location.href="/signin";
  }

  render() {
    let { context: { numberOfItemsInCart } = { numberOfItemsInCart: 0 } } = this.props
    return (
      <div>
        <div className="fixed top-49 right-20 desktop:right-flexiblemargin z-10">
          <div className="flex flex-1 justify-end pr-4 relative">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
            {
              numberOfItemsInCart > Number(0) && (
                <div>
                  <FaCircle color={secondary} size={12} />
                </div>
              )
            }
          </div>
          {/*<Button*/}
          {/*  full*/}
          {/*  title="Login"*/}
          {/*  onClick={() => this.handleChange()}*/}
          {/*/>*/}
        </div>
      </div>
    )
  }
}


function CartLinkWithContext(props) {
  return (
    <SiteContext.Consumer>
      {
        context => <CartLink {...props} context={context} />
      }
    </SiteContext.Consumer>
  )
}


export default CartLinkWithContext