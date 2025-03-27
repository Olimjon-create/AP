import React from "react";
import Image from "next/image";
import "../../styles/Customer.module.css";

function Customer(props) {
  const arr = [
    {
      id: 1,
      name: "#C-004560",
      titleName: "27 March 2020, 12:42 AM",
      nameSelectName: "Veronica",
      nameSectionName: "Corner Street 5th, London",
      priceTitle: "$78.92",
      ImageTitle: "/border.png",
      buttonPrice: "$35.35",
    },
    {
      id: 2,
      name: "#C-004561",
      titleName: "28 March 2020, 12:42 AM",
      nameSelectName: "Rio Da Luca",
      nameSectionName: "Emerald Tower 6th, London",
      priceTitle: "$8.90",
      ImageTitle: "/border.png",
      buttonPrice: "$16.75",
    },
    {
      id: 3,
      name: "#C-004562",
      titleName: "29 March 2020, 12:42 AM",
      nameSelectName: "Fernando",
      nameSectionName: "Blessing Hills 1st, London",
      priceTitle: "$16.87",
      ImageTitle: "/border.png",
      buttonPrice: "$75.55",
    },
    {
      id: 4,
      name: "#C-004563",
      titleName: "30 March 2020, 12:42 AM",
      nameSelectName: "Yenni Tan",
      nameSectionName: "Greensand 2nd, London",
      priceTitle: "$18.8",
      ImageTitle: "/border.png",
      buttonPrice: "$57.75",
    },
    {
      id: 5,
      name: "#C-004564",
      titleName: "5 April 2020, 12:42 AM",
      nameSelectName: "Denny Chang",
      nameSectionName: "St. Bakerfield 3rd, London",
      priceTitle: "$38.92",
      ImageTitle: "/border.png",
      buttonPrice: "$21.75",
    },
    {
      id: 6,
      name: "#C-004565",
      titleName: "8 April 2020, 12:42 AM",
      nameSelectName: "Andrea Liaw",
      nameSectionName: "Kingsroad 45th, London",
      priceTitle: "$74.92",
      ImageTitle: "/border.png",
      buttonPrice: "$75.55",
    },
    {
      id: 7,
      name: "#C-004566",
      titleName: "9 April 2020, 12:42 AM",
      nameSelectName: "Siangny The",
      nameSectionName: "11 Church Road, London",
      priceTitle: "$78.52",
      ImageTitle: "/border.png",
      buttonPrice: "$21.61",
    },
  ];
  return (
    <div>
      <div className="live"></div>;
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
      {arr.map((item) => (
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

export default Customer;
