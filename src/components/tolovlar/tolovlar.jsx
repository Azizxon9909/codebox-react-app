import React, { Component } from 'react'
import './tolovlar.css'
export default class Tolovlar extends Component {
    render() {
        return (
            <div className="section">
    <div className="container pt-lg-5 pt-5">
        <h1>To'lovlarni o'tkazish</h1>
        <div className="row">
            <div className="col-lg-6">
                <form>
                        <div className="form-group">
                            <label for="ism">To'lov miqdori</label>
                            <input type="text" className="form-control" placeholder="500 000" id="ism"/>
                        </div>
                        <hr/>
                        <div className="form-group">
                            <label for="tel">Karta raqami</label>
                            <input type="tel" className="form-control" placeholder="2980184030000044006" id="tel"/>
                        </div>
                        <hr/>
                
                    </form>
                    <button className="btn btn-success mt-lg-3">To'lash</button>
                    <button className="btn btn-danger mt-lg-3">Bekor qilish</button>
            </div>
            <div className="col-lg-6">
                <div className="hisob">
                    <p>Sizning xisobingiz:</p>
                    <h1>100.000 UZS</h1>
                </div>
            </div>
        </div>
        
    </div>
    <div className="container">
        <div className="row pt-lg-5 pt-5">
            <div className="col-lg-3">
                <h1>To'lovlar tarixi</h1>
            </div>
            <div className="col-lg-3">
                <div className="box mt-lg-3 ml-lg-5">
                <div className="yellow"></div>
                <span>Plastik orqali to'lovlar</span>
            </div></div>
            <div className="col-lg-3">
                <div className="box mt-lg-3">
                <div className="blue"></div>
                <span>Naqd pul orqali to'lovlar</span>
            </div></div>
        </div>
        <div className="row mt-lg-5 mt-4">
            <div className="col-lg-6">
                <div className="box1">
                    <div className="row">
                        <div className="col-lg-7 col-7">
                            <p>To'lov miqdori</p>
                            <span className="bew"><b>500.000</b></span> <span className="uzs">UZS</span>
                        </div>
                        <div className="col-lg-3 mt-lg-3">
                            <div className="yellow"></div>
                            <span>To'lov</span>
                        </div>
                        <div className="col-lg-4 mt-lg-4">
                            <p>To'lov sanasi</p>
                            <h4>12.07.2019</h4>
                        </div>
                        <div className="col-lg-3 mt-lg-4">
                            <p>To'lov vaqti</p>
                            <h4>21:30</h4>
                        </div>
                        <div className="col-lg-5 mt-lg-4 pl-3">
                            <p>Tafsilotlar</p>
                            <h6 className="mt-lg-1"> Android darslari uchun to'lov </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="box1 mt-4 mt-lg-0">
                    <div className="row">
                        <div className="col-lg-7">
                            <p>To'lov miqdori</p>
                            <span className="bew"><b>500.000</b></span> <span className="uzs">UZS</span>
                        </div>
                        <div className="col-lg-3 mt-lg-3">
                            <div className="yellow"></div>
                            <span>To'lov</span>
                        </div>
                        <div className="col-lg-4 mt-lg-4">
                            <p>To'lov sanasi</p>
                            <h4>12.07.2019</h4>
                        </div>
                        <div className="col-lg-3 mt-lg-4">
                            <p>To'lov vaqti</p>
                            <h4>21:30</h4>
                        </div>
                        <div className="col-lg-5 mt-lg-4 pl-3">
                            <p>Tafsilotlar</p>
                            <h6 className="mt-lg-1">Android darslari uchun to'lov</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="box1 mt-lg-4 mt-4">
                    <div className="row">
                        <div className="col-lg-7">
                            <p>To'lov miqdori</p>
                            <span className="bew"><b>500.000</b></span> <span className="uzs">UZS</span>
                        </div>
                        <div className="col-lg-3 mt-lg-3">
                            <div className="blue"></div>
                            <span>To'lov</span>
                        </div>
                        <div className="col-lg-4 mt-lg-4">
                            <p>To'lov sanasi</p>
                            <h4>12.07.2019</h4>
                        </div>
                        <div className="col-lg-3 mt-lg-4">
                            <p>To'lov vaqti</p>
                            <h4>21:30</h4>
                        </div>
                        <div className="col-lg-5 mt-lg-4 pl-3">
                            <p>Tafsilotlar</p>
                            <h6 className="mt-lg-1">Android darslari uchun to'lov</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="box1 mt-lg-4 mt-4">
                    <div className="row">
                        <div className="col-lg-7">
                            <p>To'lov miqdori</p>
                            <span className="bew"><b>500.000</b></span> <span className="uzs">UZS</span>
                        </div>
                        <div className="col-lg-3 mt-lg-3">
                            <div className="blue"></div>
                            <span>To'lov</span>
                        </div>
                        <div className="col-lg-4 mt-lg-4">
                            <p>To'lov sanasi</p>
                            <h4>12.07.2019</h4>
                        </div>
                        <div className="col-lg-3 mt-lg-4">
                            <p>To'lov vaqti</p>
                            <h4>21:30</h4>
                        </div>
                        <div className="col-lg-5 mt-lg-4 pl-3">
                            <p>Tafsilotlar</p>
                            <h6 className="mt-lg-1">Android darslari uchun to'lov</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
    </div>
</div>
        )
    }
}
