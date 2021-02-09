import React, { Component } from "react";
import "./dashboard.css";
export default class Dashboard extends Component {
  render() {
    return (
      <div className="sectionDashboard">
        <div className="container py-lg-5">
          <h1>Foydalanuvchi sozlamalari</h1>
          <div className="row pt-lg-5">
            <div className="col-lg-2 col-12">
              <div className="rasm">
                <div className="qora">
                  <img src="image/camera.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <form>
                <div className="form-group">
                  <label for="ism">To'liq ismi</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Azizxon Jalilov"
                    id="ism"
                  />
                </div>
                <hr />
                <div className="form-group">
                  <label for="tel">Telefon nomer</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+998901234567"
                    id="tel"
                  />
                </div>
                <hr />
                <div className="form-group">
                  <label for="pwd">Parol</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="*********************"
                    id="pwd"
                  />
                </div>
                <hr />
                <div className="form-group">
                  <label for="pwd2">Parolni tasdiqlash</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="*********************"
                    id="pwd2"
                  />
                </div>
              </form>
              <button className="btn btn-success mt-lg-3">Saqlash</button>
              <button className="btn btn-danger mt-lg-3">O'chirish</button>
            </div>

            <div className="col-lg-4 col-12 offset-lg-1">
              <div className="hisob">
                <p>Sizning xisobingiz:</p>
                <h1>100.000 UZS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
