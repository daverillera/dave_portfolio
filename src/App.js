import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navigation from './Components/Navigation.js'
import { Header } from './Components/Header.js';
import { CTA } from './Components/CTA.js';
import { About } from './Components/About.js';
import { Footer } from './Components/Footer.js';

export class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Header />
        <CTA />
        <About />
        <Footer />
      </div>
      );
  }
}



