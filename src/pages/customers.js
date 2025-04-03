import React from "react";
import Image from "next/image";
import styles from "../styles/customers.module.css";

function Customer() {
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
      titleName: "28 March 20 20, 12:42 AM",
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
      <div>
        <div className={styles.live}>
          <div className={styles.inputCustomerSearch}>
            <div className={styles.search}>
              <input type="search" placeholder="Search here" />
            </div>
            <div className={styles.iconSearch}>
              <Image
                className={styles.imgTag}
                src="/alarm-clock.png"
                alt="Alarm Clock"
                width={28}
                height={28}
              />
            </div>
            <div className={styles.iconSearch}>
              <Image
                className={styles.imgTag}
                src="/message.png"
                alt="Message"
                width={28}
                height={28}
              />
            </div>
            <div className={styles.iconSearch}>
              <Image
                className={styles.imgTag}
                src="/price.png"
                alt="Price"
                width={28}
                height={28}
              />
            </div>
            <div className={styles.iconSearch}>
              <Image
                className={styles.imgTag}
                src="/settings.png"
                alt="Settings"
                width={28}
                height={28}
              />
            </div>

            <div className={styles.writeName}>
              <p className={styles.customerText}>Hello, Samantha</p>
            </div>
            <div className={styles["borders"]}></div>
          </div>
        </div>
      </div>

      <div className={styles["headers"]}>
        <div className={styles["Customer"]}>
          <h1 className={styles["text"]}>General Customer</h1>
          <p className={styles["text1"]}>
            Here is your general customers list data
          </p>
        </div>
        <div className={styles["CustomerSection"]}>
          <button className={styles["btn"]}>
            <Image
              className={styles["photos"]}
              src="/Nest.png"
              alt="Filter"
              width={16}
              height={16}
            />
            Filter
            <Image
              className={styles["photo"]}
              src="/stay.png"
              alt="Stay"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>

      <div className={styles.Section}>
        <div className={styles.Select}>
          <ul>
            <li>Customer ID</li>
            <Image src="/sort.png" alt="Sort" width={16} height={16} />
            <li>Join Date</li>
            <Image src="/sort.png" alt="Sort" width={16} height={16} />
          </ul>
        </div>
        <div className={styles.Select}>
          <ul>
            <li>Customer Name</li>
            <li>Location</li>
            <Image src="/sort.png" alt="Sort" width={16} height={16} />
          </ul>
        </div>
        <div className={styles.Select}>
          <ul>
            <li>Total Spent</li>
            <Image src="/sort.png" alt="Sort" width={16} height={16} />
            <li>Last Order</li>
            <Image src="/sort.png" alt="Sort" width={16} height={16} />
          </ul>
        </div>
      </div>

      {arr.map((item) => (
        <div className={styles["Option"]} key={item["id"]}>
          <div className={styles["Value"]}>
            <ul>
              <li className={styles["text3"]}>{item["name"]}</li>
              <li className={styles["text4"]}>{item["titleName"]}</li>
            </ul>
          </div>
          <div className={styles["Value"]}>
            <ul>
              <li className={styles["text5"]}>{item["nameSelectName"]}</li>
              <li className={styles["text4"]}>{item["nameSectionName"]}</li>
            </ul>
          </div>
          <div className={styles["Value"]}>
            <ul>
              <li className={styles["text2"]}>{item["priceTitle"]}</li>
              <li>
                <button className={styles["btn2"]}>
                  {item["buttonPrice"]}
                </button>
                <Image
                  className={styles["picture"]}
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
