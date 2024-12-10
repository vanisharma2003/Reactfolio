import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import todo from '../assets/Screenshot 2024-12-02 224020.png';
import news from '../assets/Screenshot 2024-12-03 223104.png';
import gemini from '../assets/Screenshot 2024-12-03 223538.png'
import purement from '../assets/Screenshot 2024-12-03 223843.png'
import weather from '../assets/Screenshot 2024-12-08 222942.png'
import joke from '../assets/Screenshot 2024-12-09 224145.png'

const Main = () => {
  return (
    <>
      <div className='main-div'>
        {/* To-Do List Card */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title oswald-card">TO DO LIST</h5>
          </div>
          <img src={todo} className="card-img-top" alt="To-Do App" />
          <div className="card-body link">
            <a href="https://github.com/vanisharma2003/To-do-application" className="card-link oswald-card">Github link</a>
            <a href="https://to-do-application-delta.vercel.app/" className="card-link oswald-card">Live link</a>
            <a href="https://youtu.be/zQFzFsbRiB8?si=fOKw1Wv3Dloxse2V" className="card-link oswald-card">View more</a>
          </div>
        </div>

        {/* Weather App Card */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title oswald-card">WEATHER APPLICATION</h5>
          </div>
          <img src={weather} className="card-img-top" alt="weather-application" />
          <div className="card-body link">
            <a href="https://github.com/vanisharma2003/weather-app" className="card-link oswald-card">Github link</a>
            <a href="https://weather-app-three-omega-14.vercel.app/" className="card-link oswald-card">Live link</a>
            <a href="https://youtu.be/USQkgCHEAOM?si=Nxoox150ocmHjlk6" className="card-link oswald-card">Live link</a>
          </div>
        </div>

        {/* News App Card */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title oswald-card">FLASH FEED</h5>
          </div>
          <img src={news} className="card-img-top" alt="newsapp" />
          <div className="card-body link">
            <a href="https://github.com/vanisharma2003/News-Application" className="card-link oswald-card">Github link</a>
            <a href="https://news-application-plum.vercel.app/" className="card-link oswald-card">Live link</a>
            <a href="https://youtu.be/waCkrUIlSTo?si=SEicR-AkeS24iD1M" className="card-link oswald-card">View more</a>
          </div>
        </div>

        {/* Gemini Clone Card */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title oswald-card">QUICK BOT</h5>
          </div>
          <img src={gemini} className="card-img-top" alt="gemini clone" />
          <div className="card-body link">
            <a href="https://github.com/vanisharma2003/Gemini_Clone" className="card-link oswald-card">Github link</a>
            <a href="https://gemini-clone-ten-omega.vercel.app/" className="card-link oswald-card">Live link</a>
            <a href="https://youtu.be/0yboGn8errU?si=FFpdKS1_ygeT7bv8" className="card-link oswald-card">Live link</a>
          </div>
        </div>
          {/* purement */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title oswald-card">PUREMENT</h5>
          </div>
          <img src={purement} className="card-img-top" alt="purement" />
          <div className="card-body link">
            <a href="https://github.com/vanisharma2003/PureMent" className="card-link oswald-card">Github link</a>
            <a href="https://pure-ment-aishwaryas-projects-46d4710c.vercel.app/" className="card-link oswald-card">Live link</a>
            <a href="https://youtu.be/o-4up1thdjs?si=XE44BaR3XWC6kGDv" className="card-link oswald-card">Live link</a>
          </div>
        </div>
        {/* some other project */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title oswald-card">Joke Generator</h5>
          </div>
          <img src={joke} className="card-img-top" alt="other project" />
          <div className="card-body link">
            <a href="https://github.com/vanisharma2003/random-joke" className="card-link oswald-card">Github link</a>
            <a href="https://random-joke-generator-ruddy.vercel.app/?vercelToolbarCode=bCtX2_GofgVHyyy" className="card-link oswald-card">Live link</a>
            <a href="https://youtu.be/BfNEg0KzPlY?si=EvQuAQJA5ihbmMhv" className="card-link oswald-card">Live link</a>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Main;
