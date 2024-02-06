import React from "react";
import "./Categories.css";
import { a } from "react-router-dom";
import b from "../../assets/b-removebg-preview.jpg"
import c from "../../assets/phone-pic/aaaaa-removebg-preview.jpg"
import d from "../../assets/new/MTJV3-removebg-preview_auto_x2.jpg"
import f from "../../assets/new/a_auto_x2.jpg"
const Categories = () => {
  return (
    <div className="categories ">
      <div className="col">
      <div className="row ">
          <img
            src={d}
            alt=""
            className=""
          />
          <button>
            <a to="" className="a">
              AirPod
            </a>
          </button>
        </div>
        <div className="row">
          <img
            src={f}
            alt=""
          />
          <button>
            <a to="" className="a">
            HeadPhones
            </a>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/1194760/pexels-photo-1194760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <a to="" className="a">
              IPHONES
            </a>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src={b}
                alt=""
              />
              <button>
                <a to="" className="a">
                  CABLES
                </a>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src={c}
                alt=""
              />
              <button>
                <a to="" className="a">
                  CHARGES
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <a to="" className="a">
              MAC PRO
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;