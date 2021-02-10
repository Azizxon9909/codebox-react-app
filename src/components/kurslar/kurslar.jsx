import React, { Component } from "react";
import "./kurslar.css";
export default class Kurslar extends Component {
  render() {
    return (
      <section>
        <div className="section1">
          <div className="container pt-lg-5">
            <table className="my-lg-4">
              <tr>
                <td>
                  <p>Bajarilgan topshiriqlar</p>
                  <h2>
                    <b>125</b>
                  </h2>
                  <h6 className="hh">
                    <img src="image/aaa.png" alt="" /> Bugun: +8 ta
                  </h6>
                </td>
                <td>
                  <p>Bajarilgan bo'limlar</p>
                  <h2>
                    <b>38</b>
                  </h2>
                  <h6 className="hh">
                    <img src="image/aaa.png" alt="" /> Bugun: +1 ta
                  </h6>
                </td>
                <td>
                  <p>Dasturlash tillari</p>
                  <h2>
                    <b>2</b>
                  </h2>
                  <h6>
                    <img src="image/play%20(1).png" alt="" /> Bugun: 0 ta
                  </h6>
                </td>
              </tr>
            </table>
            <br />
            <br />
            <div className="row">
              <div className="col-lg-6">
                <h2>So'ngi bajarilgan topshiriqlar</h2>
                <br />
              </div>
              <div className="col-lg-2 offset-lg-4">
                <button className="btn btn-outline-success ml-lg-5">
                  Barchasi
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="box">
                  <div className="quti">
                    <div className="row">
                      <div className="col-lg-5">
                        <h3>
                          <b>Sleepln</b>
                        </h3>
                      </div>
                      <div className="col-lg-3 offset-lg-4">
                        <div className="badge badge-success">-</div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <p className="agar">
                        Agar hafta ichi ishlamasa, hafta ichidagi parametr
                        haqiqiydir va biz ta'tilda bo'lsak, parametrning ta'til
                        haqiqiydir. Agar u kunlik ishlamasa yoki biz tatilda
                        bo'lsak uxlaymiz. Agar uxlayotgan bo'lsak, rostini
                        qaytaring
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 lg4">
                        <p className="das">Dasturlash tili</p>
                        <h5>JAVA</h5>
                      </div>
                      <div className="col-lg-4 lg4">
                        <p className="das">Bo'lim</p>
                        <h5>STRING</h5>
                      </div>
                      <div className="col-lg-4 lg4">
                        <p className="das">Daraga</p>
                        <h5>O'RTACHA</h5>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                      <button className="btn btn-success">
                        Bajarish <img src="image/arrow-right.png" alt="" />
                      </button>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box">
                  <div className="quti">
                    <div className="row">
                      <div className="col-lg-5">
                        <h3>
                          <b>PosNeg</b>
                        </h3>
                      </div>
                      <div className="col-lg-3 offset-lg-4">
                        <div className="badge badge-warning">-</div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <p className="agar">
                        Agar hafta ichi ishlamasa, hafta ichidagi parametr
                        haqiqiydir va biz ta'tilda bo'lsak, parametrning ta'til
                        haqiqiydir. Agar u kunlik ishlamasa yoki biz tatilda
                        bo'lsak uxlaymiz. Agar uxlayotgan bo'lsak, rostini
                        qaytaring
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 lg4">
                        <p className="das">Dasturlash tili</p>
                        <h5>JAVA</h5>
                      </div>
                      <div className="col-lg-4 lg4">
                        <p className="das">Bo'lim</p>
                        <h5>ARRAY</h5>
                      </div>
                      <div className="col-lg-4 lg4">
                        <p className="das">Daraga</p>
                        <h5>MURAKKAB</h5>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                      <button className="btn btn-success">
                        Bajarish <img src="image/arrow-right.png" alt="" />
                      </button>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box">
                  <div className="quti">
                    <div className="row">
                      <div className="col-lg-5">
                        <h3>
                          <b>FrontBack</b>
                        </h3>
                      </div>
                      <div className="col-lg-3 offset-lg-4">
                        <div className="badge badge-warning">-</div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <p className="agar">
                        Agar hafta ichi ishlamasa, hafta ichidagi parametr
                        haqiqiydir va biz ta'tilda bo'lsak, parametrning ta'til
                        haqiqiydir. Agar u kunlik ishlamasa yoki biz tatilda
                        bo'lsak uxlaymiz. Agar uxlayotgan bo'lsak, rostini
                        qaytaring
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 lg4">
                        <p className="das">Dasturlash tili</p>
                        <h5>PYTHON</h5>
                      </div>
                      <div className="col-lg-4 lg4">
                        <p className="das">Bo'lim</p>
                        <h5>STRING</h5>
                      </div>
                      <div className="col-lg-4 lg4">
                        <p className="das">Daraga</p>
                        <h5>ODDIY</h5>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                      <button className="btn btn-success">
                        Bajarish <img src="image/arrow-right.png" alt="" />
                      </button>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="container mt-lg-5">
            <div className="row">
              <div className="col-lg-6">
                <h2>Hozirgi mavjud kurslarim</h2>
              </div>
              <div className="col-lg-2 offset-lg-4">
                <button className="btn btn-outline-success ml-lg-5">
                  Barchasi
                </button>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h2>
                      <b>JAVA</b>
                    </h2>
                    <span>
                      <b>128 ta</b>
                    </span>
                    <span className="ex">topshiriq</span>
                    <span>
                      <b>| 38 ta</b>
                    </span>
                    <span className="ex">bo'lim</span>
                  </div>
                  <div className="card-body">
                    <p>
                      <b>Natijalar</b>
                    </p>
                    <div className="row">
                      <div className="col-lg-9">
                        <p>Bajarilgan topshiriqlar</p>
                      </div>
                      <div className="col-lg-3">
                        <b>56%</b>
                      </div>
                    </div>
                    <div className="badge r">-</div>
                    <div className="row">
                      <div className="col-lg-9">
                        <p>Bajarilgan bo'limlar</p>
                      </div>
                      <div className="col-lg-3">
                        <b>43%</b>
                      </div>
                    </div>
                    <div className="badge q">-</div>
                    <br />
                    <br />
                    <a
                      className="text-decoration-none"
                      style={{ color: "white" }}
                      href="index4.html"
                    >
                      <button className="btn btn-success">
                        Davom ettirish{" "}
                        <img src="image/arrow-right.png" alt="" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h2>
                      <b>PYTHON</b>
                    </h2>
                    <span>
                      <b>128 ta</b>
                    </span>
                    <span className="ex">topshiriq</span>
                    <span>
                      <b>| 38 ta</b>
                    </span>
                    <span className="ex">bo'lim</span>
                  </div>
                  <div className="card-body">
                    <p>
                      <b>Natijalar</b>
                    </p>
                    <div className="row">
                      <div className="col-lg-9">
                        <p>Bajarilgan topshiriqlar</p>
                      </div>
                      <div className="col-lg-3">
                        <b>96%</b>
                      </div>
                    </div>
                    <div className="badge w">-</div>
                    <div className="row">
                      <div className="col-lg-9">
                        <p>Bajarilgan bo'limlar</p>
                      </div>
                      <div className="col-lg-3">
                        <b>23%</b>
                      </div>
                    </div>
                    <div className="badge e">-</div>
                    <br />
                    <br />
                    <button className="btn btn-success">
                      Davom ettirish{" "}
                      <img src="image/arrow-right.png" alt="rasm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section2">
          <br />
          <div className="container mt-lg-5">
            <div className="row">
              <div className="col-lg-6">
                <h2>Barcha kurslar</h2>
              </div>
              <div className="col-lg-2 offset-lg-4">
                <button className="btn btn-outline-success ml-lg-5">
                  Barchasi
                </button>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h2>
                      <b>JAVA</b>
                    </h2>
                    <span>
                      <b>128 ta</b>
                    </span>
                    <span className="ex">topshiriq</span>
                    <span>
                      <b>| 38 ta</b>
                    </span>
                    <span className="ex">bo'lim</span>
                  </div>
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus ad, alias, delectus eius hic, inventore libero
                    natus necessitatibus nulla perspiciatis quis vel. Molestias,
                    nostrum, repellat. Dignissimos, earum eos et, ex excepturi,
                    explicabo ipsam iure magnam minus pariatur possimus quod
                    saepe suscipit tempora totam vero voluptates?
                  </div>
                  <button className="btn btn-success">
                    Kursni boshlash <img src="image/arrow-right.png" alt="" />
                  </button>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h2>
                      <b>PYTHON</b>
                    </h2>
                    <span>
                      <b>128 ta</b>
                    </span>
                    <span className="ex">topshiriq</span>
                    <span>
                      <b>| 38 ta</b>
                    </span>
                    <span className="ex">bo'lim</span>
                  </div>
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus ad, alias, delectus eius hic, inventore libero
                    natus necessitatibus nulla perspiciatis quis vel. Molestias,
                    nostrum, repellat. Dignissimos, earum eos et, ex excepturi,
                    explicabo ipsam iure magnam minus pariatur possimus quod
                    saepe suscipit tempora totam vero voluptates?
                  </div>
                  <button className="btn btn-success">
                    Kursni boshlash{" "}
                    <img src="image/arrow-right.png" alt="rasm" />
                  </button>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h2>
                      <b>GO</b>
                    </h2>
                    <span>
                      <b>128 ta</b>
                    </span>
                    <span className="ex">topshiriq</span>
                    <span>
                      <b>| 38 ta</b>
                    </span>
                    <span className="ex">bo'lim</span>
                  </div>
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus ad, alias, delectus eius hic, inventore libero
                    natus necessitatibus nulla perspiciatis quis vel. Molestias,
                    nostrum, repellat. Dignissimos, earum eos et, ex excepturi,
                    explicabo ipsam iure magnam minus pariatur possimus quod
                    saepe suscipit tempora totam vero voluptates?
                  </div>
                  <button className="btn btn-success">
                    Kursni boshlash{" "}
                    <img src="image/arrow-right.png" alt="rasm" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
    );
  }
}
