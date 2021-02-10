import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Index from "./components/index/index";
import Kurslar from "./components/kurslar/kurslar";
import Xato from "./components/xato/xato.jsx";
import Bolimlar from "./components/bolimlar/bolimlar";
import Topshiriqlar from "./components/topshiriqlar/topshiriqlar";
import Dashboard from "./components/dashboard/dashboard";
import Tolovlar from "./components/tolovlar/tolovlar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min';
ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/kurslar" component={Kurslar} />
      <Route exact path="/bolimlar" component={Bolimlar} />
      <Route exact path="/topshiriqlar" component={Topshiriqlar} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/tolovlar" component={Tolovlar} />
      <Route component={Xato} />
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
