import React, { Component } from "react";
import "./index.css";
export default class Index extends Component {
  render() {
    return (
      <sectionIndex>
        <div className="section1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <br />
                <br />
                <br />
                <h1>
                  Agar bajarishdan qo'rqsangiz <br /> buni albatta bajarib
                  koring
                </h1>
                <br />
                <form action="#">
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
                </form>
                <div className="custom-control custom-switch mt-lg-2 ml-lg-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="switch1"
                  />
                  <label className="custom-control-label" for="switch1">
                    Meni eslab qol
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-success mt-lg-2 ml-lg-2"
                >
                  Kirish
                </button>
              </div>
              <div className="col-lg-6">
                <img src="image/Group%2065.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="container" id="loyiha">
            <br />
            <br />
            <h1>
              Dasturlashni amaliy <br /> tezda CodeBox bilan o'rganing.
            </h1>
            <br />
            <div className="row mt-lg-5">
              <div className="col-lg-6">
                <img src="image/Group%2040.png" alt="" />
              </div>
              <div className="col-lg-6">
                <br />
                <br />
                <br />
                <br />
                <h3>01. Dasturlash tilini tanlang</h3>
                <p>
                  Hozirgi kunda eng ommabop dasturlash tillarini <br />{" "}
                  CodeBoxga kiritdik va buni doimiy tarzda <br />
                  yangilab boramiz.
                </p>
              </div>
            </div>
            <div className="row mt-lg-5">
              <div className="col-lg-6">
                <br />
                <br />
                <br />
                <br />
                <h3>
                  02. Topshiriqlarni bajarish <br /> orqali o'rganing.
                </h3>
                <p>
                  Dasturlash algoritmlari, suhbat uchun <br /> topshiriqlari va
                  murakkab topshiriqlarni bajaring
                </p>
              </div>
              <div className="col-lg-6">
                <img src="image/Group%2032.png" alt="" />
              </div>
            </div>
            <div className="row mt-lg-5">
              <div className="col-lg-6">
                <img src="image/Group%2068.png" alt="" />
              </div>
              <div className="col-lg-6">
                <br />
                <br />
                <br />
                <br />
                <h3>
                  03. Yakunlangan dasturlash br tiliga tegishli oid fraymwork{" "}
                  <br /> o'rganing
                </h3>
                <p>
                  Web, Mobile, Desktop va boshqa yo'nalishlarda dasturlash tili
                  imkoniyatlaridan kelib chiqb <br />
                  fraymwork o'rganing
                </p>
              </div>
            </div>
            <div className="row mt-lg-5">
              <div className="col-lg-6">
                <br />
                <br />
                <br />
                <br />
                <h3>
                  04. Ishga ega bo'ling yoki katta <br /> loyihalar yarating.
                </h3>
                <p>
                  Dasturlash jamoa bo'lib ishlash juda muhim. <br /> Shuning
                  uchun biror jamoaga borib qo'shiling
                  <br /> yoki o'z jamoangizni tuzing.
                </p>
              </div>
              <div className="col-lg-6">
                <img src="image/Group%2040.png" alt="" />
              </div>
            </div>
          </div>
        </div>
       
        <div className="section3">
          <div className="container" id="tillar">
            <h1>
              O'zingiz uchun dunyoda mashxur <br /> dasturlash tillaridan birini{" "}
              <br /> tanlang
            </h1>
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
                  <button className="btn btn-success">Kursni boshlash</button>
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
                  <button className="btn btn-success">Kursni boshlash</button>
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
                  <button className="btn btn-success">Kursni boshlash</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="container">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-lg-6">
                <h1>
                  Tizimdan foydalanuvchilar <br /> soni 500+ dan ortiq.
                  <br /> Siz ham ular safiga qo'shiling
                </h1>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi assumenda at blanditiis commodi consectetur consequuntur
                  eos eveniet explicabo facilis fuga fugit illo illum labore
                  laboriosam libero magnam maiores minus molestiae molestias
                  mollitia, nihil nobis nulla obcaecati officia pariatur
                  perspiciatis quam quas qui sit temporibus unde ut voluptate
                  voluptatibus. A ab est et facere fugiat in incidunt itaque
                  iure laudantium magnam modi nam necessitatibus nesciunt odit
                  omnis perferendis perspiciatis praesentium quasi rerum, unde
                  vero voluptas voluptatum! Animi cumque delectus dolore eveniet
                  facere magni minima odio officia quasi, quis rerum suscipit
                  voluptatum! Aliquam exercitationem maiores neque optio, porro
                  provident quisquam vel voluptatem!
                </p>
                <button className="btn btn-success">Qo'shilish</button>
              </div>
              <div className="col-lg-6">
                <img src="image/Group%2032.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="section5">
          <br />
          <br />
          <div className="container" id="narxlar">
            <h1>
              O'z rejangizni <br /> tanlang
            </h1>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <div className="box">
                  <h2>Simple</h2>
                  <h1>99.000 UZS</h1>
                  <p>
                    <b>Har 1 0yda to'lov</b>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    amet aperiam dignissimos dolore dolorem dolorum ducimus
                    excepturi fugit in, ipsam ipsum iste labore minima, nemo
                    odit, omnis quaerat quas sapiente totam vero?{" "}
                  </p>
                  <br />
                  <button className="btn btn-outline-success">
                    Obuna bo'lish
                  </button>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box">
                  <h2>Middle</h2>
                  <h1>269.000 UZS</h1>
                  <p>
                    <b>Har 3 0yda to'lov</b>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    amet aperiam dignissimos dolore dolorem dolorum ducimus
                    excepturi fugit in, ipsam ipsum iste labore minima, nemo
                    odit, omnis quaerat quas sapiente totam vero?{" "}
                  </p>
                  <br />
                  <button className="btn btn-outline-success">
                    Obuna bo'lish
                  </button>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box">
                  <h2>Advanced</h2>
                  <h1>499.000 UZS</h1>
                  <p>
                    <b>Har 6 0yda to'lov</b>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    amet aperiam dignissimos dolore dolorem dolorum ducimus
                    excepturi fugit in, ipsam ipsum iste labore minima, nemo
                    odit, omnis quaerat quas sapiente totam vero?{" "}
                  </p>
                  <br />
                  <button className="btn btn-outline-success">
                    Obuna bo'lish
                  </button>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
        <div className="section6">
          <div className="container" id="biz">
            <br />
            <h1>
              Biz haqimizda <br /> boshqalar fikri
            </h1>
            <br />
            <br />
            <div id="demo" className="carousel slide" data-ride="carousel">
              <ul className="carousel-indicators">
                <li
                  data-target="#demo"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="fikr">
                    <img className="aaa" src="image/“.png" alt="" />
                    <img className="bbb" src="image/Group%2066.png" alt="" />
                    <br />
                    <h6>
                      <b>Muhriddin Jumayev</b>
                    </h6>
                    <p style={{ color: "green" }}>
                      <b>Coder</b>
                    </p>
                    <p className="px-lg-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Architecto laboriosam nobis velit. Ad aut autem beatae
                      commodi consectetur consequuntur cum debitis dignissimos
                      dolores ea eaque eligendi eos excepturi ipsam iste
                      laboriosam molestiae nesciunt nisi nostrum nulla odio
                      officia optio porro quaerat quas quibusdam quidem quos
                      ratione recusandae reiciendis rerum, sapiente suscipit
                      tenetur unde ut veritatis voluptate? A, ad adipisci
                      architecto at autem eligendi eos excepturi, explicabo
                      incidunt labore magni qui repellendus sit soluta ullam.
                      Aperiam commodi dolore ipsa laborum modi obcaecati qui
                      repellendus, saepe vitae voluptates. Ad ea eligendi eum
                      natus suscipit! Alias blanditiis et facilis nisi, qui
                      recusandae repellat?
                    </p>
                    <br />
                    <br />
                    <img className="ccc" src="image/”.png" alt="" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="fikr">
                    <img className="aaa" src="image/“.png" alt="" />
                    <img className="bbb" src="image/Group%2066.png" alt="" />
                    <br />
                    <h6>
                      <b>Abdullayev Asadbek</b>
                    </h6>
                    <p style={{ color: "green" }}>
                      <b>Designer</b>
                    </p>
                    <p className="px-lg-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Architecto laboriosam nobis velit. Ad aut autem beatae
                      commodi consectetur consequuntur cum debitis dignissimos
                      dolores ea eaque eligendi eos excepturi ipsam iste
                      laboriosam molestiae nesciunt nisi nostrum nulla odio
                      officia optio porro quaerat quas quibusdam quidem quos
                      ratione recusandae reiciendis rerum, sapiente suscipit
                      tenetur unde ut veritatis voluptate? A, ad adipisci
                      architecto at autem eligendi eos excepturi, explicabo
                      incidunt labore magni qui repellendus sit soluta ullam.
                      Aperiam commodi dolore ipsa laborum modi obcaecati qui
                      repellendus, saepe vitae voluptates. Ad ea eligendi eum
                      natus suscipit! Alias blanditiis et facilis nisi, qui
                      recusandae repellat?
                    </p>
                    <br />
                    <br />
                    <img className="ccc" src="image/”.png" alt="" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="fikr">
                    <img className="aaa" src="image/“.png" alt="" />
                    <img className="bbb" src="image/Group%2066.png" alt="" />
                    <br />
                    <h6>
                      <b>Kamoliddinov Samandar</b>
                    </h6>
                    <p style={{ color: "green" }}>
                      <b>Project Manager</b>
                    </p>
                    <p className="px-lg-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Architecto laboriosam nobis velit. Ad aut autem beatae
                      commodi consectetur consequuntur cum debitis dignissimos
                      dolores ea eaque eligendi eos excepturi ipsam iste
                      laboriosam molestiae nesciunt nisi nostrum nulla odio
                      officia optio porro quaerat quas quibusdam quidem quos
                      ratione recusandae reiciendis rerum, sapiente suscipit
                      tenetur unde ut veritatis voluptate? A, ad adipisci
                      architecto at autem eligendi eos excepturi, explicabo
                      incidunt labore magni qui repellendus sit soluta ullam.
                      Aperiam commodi dolore ipsa laborum modi obcaecati qui
                      repellendus, saepe vitae voluptates. Ad ea eligendi eum
                      natus suscipit! Alias blanditiis et facilis nisi, qui
                      recusandae repellat?
                    </p>
                    <br />
                    <br />
                    <img className="ccc" src="image/”.png" alt="" />
                  </div>
                </div>
              </div>

              <a
                className="carousel-control-prev"
                href="#demo"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a
                className="carousel-control-next"
                href="#demo"
                data-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </sectionIndex>
    );
  }
}
