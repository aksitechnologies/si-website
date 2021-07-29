import React from "react"
import { Button } from "../ButtonElement"
import Product from "../Product"
import "./AksiSection.css"
function AksiSection() {
  return (
    <div>
      <div className="aksi-container">
        <h1>Software Development</h1>
        <p>Build your future today</p>
        <div className="aksi-btns">
          <Button href="#our_product">Our Product</Button>
        </div>
      </div>
      <section id={"our_product"} className="product-container">
        <Product />
      </section>
    </div>
  )
}
export default AksiSection
