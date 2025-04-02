import React from "react";
import "../styles/foods.module.css";
import Image from "next/image";
const foods = [
  {
    id: 1,
    name: "",
    category: "Noodle",
  },
  {
    id: 2,
    name: "Pasta Alfredo",
    category: "Pasta",
  },
  {
    id: 3,
    name: "Vegetarian Pizza",
    category: "Pizza",
  },
  {
    id: 4,
    name: "BBQ Chicken Wings",
    category: "Chicken",
  },
];

function Foods() {
  return (
    <div>
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

      <div className="bottom">
        <div className="text_s">
          <h1 className="food_text">Foods</h1>
          <p className="food_text2">
            Here is your menus summary with graph view
          </p>
        </div>

        <div className="searchs">
          <input type="search" placeholder="Search here" />
        </div>

        <div className="buttton_type">
          <button className="dod_button">
            <img src="/dods.png" alt="Dods" />
          </button>
          <button className="dod_button">
            <img src="/thumb.png" alt="Thumb" />
          </button>
          <button className="contact_button">
            <img src="/contact.png" alt="Contact" />
            New Menu
          </button>
        </div>
      </div>

      <div className="food-cards">
        {foods.map((food) => (
          <div key={food.id} className="card_button">
            <div className="radius_button"></div>
            <h1 className="text_5">{food.name}</h1>
            <p className="text_6">
              <span className="text_7">Food</span> / {food.category}
            </p>
            <div className="ddd">
              <div className="food_button"></div>
              <div className="food_button"></div>
              <div className="food_button"></div>
              <div className="food_button"></div>
            </div>
            <img className="food-image" src={food.image} alt={food.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foods;
