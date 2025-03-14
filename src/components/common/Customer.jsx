import React, { Component, useState } from "react";
import Image from "next/image";
import "../../styles/Customer.css";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="live"></div>
        <div className="input-customer-search">
          <div className="search">
            <input type="search" placeholder="Search here" />
          </div>
          <div className="icon_search">
            <Image
              className="img_tag"
              src="/alarm-clock.png"
              alt="Alarm Clock"
              width={28}
              height={28}
            />
          </div>
          <div className="icon_search">
            <Image
              className="img_tag"
              src="/message.png"
              alt="Message"
              width={28}
              height={28}
            />
          </div>
          <div className="icon_search">
            <Image
              className="img_tag"
              src="/price.png"
              alt="Price"
              width={28}
              height={28}
            />
          </div>
          <div className="icon_search">
            <Image
              className="img_tag"
              src="/settings.png"
              alt="Settings"
              width={28}
              height={28}
            />
          </div>
          <hr />
          <div className="write_name">
            <p className="customer_text">Hello, Samantha</p>
          </div>
          <div className="borders"></div>
        </div>

        <div className="headers">
          <div className="Customer">
            <h1 className="text">General Customer</h1>
            <p className="text1">Here is your general customers list data</p>
          </div>
          <div className="Customer-section">
            <button className="btn">
              <Image
                className="photos"
                src="/Nest.png"
                alt="Filter"
                width={16}
                height={16}
              />
              Filter
              <Image
                className="photo"
                src="/stay.png"
                alt="Stay"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>

        <div className="Section">
          <div className="Select">
            <ul>
              <li>Customer ID</li>
              <Image src="/sort.png" alt="Sort" width={16} height={16} />
              <li>Join Date</li>
              <Image src="/sort.png" alt="Sort" width={16} height={16} />
            </ul>
          </div>
          <div className="Select">
            <ul>
              <li>Customer Name</li>
              <li>Location</li>
              <Image src="/sort.png" alt="Sort" width={16} height={16} />
            </ul>
          </div>
          <div className="Select">
            <ul>
              <li>Total Spent</li>
              <Image src="/sort.png" alt="Sort" width={16} height={16} />
              <li>Last Order</li>
              <Image src="/sort.png" alt="Sort" width={16} height={16} />
            </ul>
          </div>
        </div>

        {this.state.customers.map((item) => (
          <div className="Option" key={item.id}>
            <div className="Value">
              <ul>
                <li className="text3">{item.name}</li>
                <li className="text4">{item.titleName}</li>
              </ul>
            </div>
            <div className="Value">
              <ul>
                <li className="text5">{item.nameSelectName}</li>
                <li className="text4">{item.nameSectionName}</li>
              </ul>
            </div>
            <div className="Value">
              <ul>
                <li className="text4">{item.priceTitle}</li>
                <li>
                  <button className="btn2">{item.buttonPrice}</button>
                  <Image
                    className="picture"
                    src={item.ImageTitle}
                    alt="Border Image"
                    width={16}
                    height={16}
                  />
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Customer;
