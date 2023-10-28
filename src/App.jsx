import React from "react";
import logo from "../src/assets/logo.svg";
import ghosts from "../src/assets/spirited-away.png";
import play from "../src/assets/play.svg";
import "./App.css";
import Facebook from "../src/assets/facebook.svg";
import Instagram from "../src/assets/instagram.svg";
import Twitter from "../src/assets/twitter.svg";
import Youtube from "../src/assets/youtube.svg";

function App() {
  return (
    <div
      className="App"
      class="w-full h-screen bg-gradient shadow-custom py-14 px-32"
    >
      <header
        class="w-full flex flex-row justify-between items-center"
        className="App-header"
      >
        <div class="w-6/12">
          <img
            class="w-24 justify-start"
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </div>

        <div class="w-6/12">
          <ul class="flex flex-row gap-4 justify-end">
            <li>
              <a href="#">
                <img class="w-6" src={Facebook} alt="Facebook Logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img class="w-6" src={Instagram} alt="Instagram Logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img class="w-6" src={Twitter} alt="Twitter Logo" />
              </a>
            </li>
            <li>
              <a href="#">
                <img class="w-6" src={Youtube} alt="YouTube Logo" />
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main class="w-full flex flex-row justify-between items-center">
        <div class="w-5/12 mb-12">
          <h2 class="text-xl text-gray-50 mb-4">HAYAO MIYAZAKI</h2>
          <h1 class="text-6xl text-gray-50 font-black mb-8">
            A VIAGEM DE CHIHIRO
          </h1>
          <p class="text-base text-gray-50 mb-12">
            Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que
            a desobedecem são transformados em animais.
          </p>

          <div className="buttons" class="flex">
            <a href="https://www.netflix.com/br/title/60023642?source=35" target="_blank">
              <button class="skew-x-[-24deg] text-base text-gray-50 uppercase font-medium bg-[#658E76] border-4 border-[#658E76] hover:bg-[#1A4855] hover:border-[#1A4855] stroke-2 py-2 px-4 flex items-center mr-8">
                <img class="skew-x-[24deg] mr-2" src={play} alt="Play icon" />
                <p class="skew-x-[24deg]">Assistir agora</p>
              </button>
            </a>

            <a href="https://www.youtube.com/watch?v=eSnuYEXQyUc" target="_blank">
              <button class="skew-x-[-24deg] text-base text-gray-50 uppercase font-medium bg-transparent border-4 border-[#658E76] hover:bg-[#1A4855] hover:border-[#1A4855] stroke-2 py-2 px-6 flex items-center">
                <p class="skew-x-[24deg]">Assista o trailer</p>
              </button>
            </a>
          </div>
        </div>

        <div class="w-6/12">
          <img
            src={ghosts}
            alt="Spirited Away Illustration - A Viagem de Chihiro"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
