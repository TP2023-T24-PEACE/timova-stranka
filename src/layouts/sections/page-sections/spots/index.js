import React, { useState } from "react";
import "./App.css";

const attributes = {
  Priekopa: ["vodopády", "Pláž", "Koliba", "Partizánsky cintorín"],
  Vrútky: ["Jazierko", "Mexico", "Šanghaj", "Jakuza", "Dunaj"],
  Záturčie: ["Jazierka", "Vedľa jazier", "Kanál", "Fanta", "Strom", "Vzadu"],
  Kolónka: [
    "Praspot",
    "Nový praspot",
    "Safari",
    "Vedľa cintorínu",
    "Hore-dole",
    "Storočnica",
    "Rampa",
    "Nad rampou",
  ],
  Karvaša: ["Hore"],
  Lipovec: [
    "Hojdačka",
    "Kanál",
    "Vodopád",
    "Vagón",
    "Panošina",
    "Pod mostom",
    "Búda",
    "Priehrada",
    "Betónová kocka",
  ],
  Kľačany: ["Konský spot", "Ontárko", "Kanál"],
  Sučany: ["Skala", "Rybárske jazierko", "Hrabiny"],
  Košúty: ["Jazierka", "13tka", "Zákruta", "Pod kopcom"],
  Sever: ["Studnička"],
  Mesto: ["Kuchynka", "Cintorín"],
  Stráne: ["Mosty", "Schodíky", "Pneumatika", "Stará lanovka"],
  Bystrička: ["Lilov spot", "Klasika", "Typkova chata"],
  Tomčany: ["Klasika", "Medzi Tomčanmi Dražkovcami"],
};

function App() {
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [excludedAttributes, setExcludedAttributes] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [resultGroup, setResultGroup] = useState(null);
  const [rotationDegree, setRotationDegree] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGroupChange = (e) => {
    const value = e.target.value;
    setSelectedGroups((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleAttributeChange = (e) => {
    const value = e.target.value;
    setExcludedAttributes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSpin = () => {
    setRotationDegree(0);

    setTimeout(() => {
      const availableAttributes = selectedGroups
        .flatMap((group) => attributes[group])
        .filter((attr) => !excludedAttributes.includes(attr));
      const randomAttribute =
        availableAttributes[
          Math.floor(Math.random() * availableAttributes.length)
        ];

      const selectedGroup = selectedGroups.find((group) =>
        attributes[group].includes(randomAttribute)
      );

      const randomDegree = Math.floor(Math.random() * 360) + 1080; // 3 full rotations + random degree
      setRotationDegree(randomDegree);
      setIsSpinning(true);

      setTimeout(() => {
        setResult(randomAttribute);
        setResultGroup(selectedGroup);
        setIsSpinning(false);
        setIsDropdownOpen(false);
      }, 2000);
    }, 10);
  };

  const closeModal = () => {
    setResult(null);
    setResultGroup(null);
    setRotationDegree(0); // Reset rotation degree to 0 without animation
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === "Mlfinak" && password === "spots") {
      setIsAuthenticated(true);
    } else {
      alert("Nesprávne prihlasovacie meno alebo heslo");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div className="login-container">
          <div className="login-content">
            <h1>Login</h1>
            <div className="input-container">
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Username"
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="login-actions">
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1>Koleso šťastia</h1>
          <div className="controls-container">
            <div className="controls">
              <h2>Vyber skupiny</h2>
              {Object.keys(attributes).map((group) => (
                <label
                  key={group}
                  className={`group-label ${
                    selectedGroups.includes(group) ? "selected" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    value={group}
                    onChange={handleGroupChange}
                    checked={selectedGroups.includes(group)}
                  />
                  {group}
                </label>
              ))}
            </div>
            <div className="controls">
              <h2
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="dropdown-button"
              >
                Vylúčiť spoty {isDropdownOpen ? "▲" : "▼"}
              </h2>
              {isDropdownOpen && (
                <div className="dropdown">
                  {selectedGroups.map((group) => (
                    <div key={group}>
                      <h3>{group}</h3>
                      {attributes[group].map((attr) => (
                        <label key={attr} className="dropdown-label">
                          <input
                            type="checkbox"
                            value={attr}
                            onChange={handleAttributeChange}
                            checked={excludedAttributes.includes(attr)}
                          />
                          {attr}
                        </label>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button
            onClick={handleSpin}
            disabled={isSpinning || selectedGroups.length === 0}
            className="spin-button"
          >
            Toč
          </button>
          <div className="wheel-container">
            <svg
              className="wheel"
              viewBox="0 0 100 100"
              style={{ transform: `rotate(${rotationDegree}deg)` }}
            >
              <circle cx="50" cy="50" r="50" fill="#ffffff" />
              <path d="M50 50 L50 0 A50 50 0 0 1 97 14.645 Z" fill="#000000" />
              <path
                d="M50 50 L97 14.645 A50 50 0 0 1 100 50 Z"
                fill="#ffffff"
              />
              <path
                d="M50 50 L100 50 A50 50 0 0 1 85.355 85.355 Z"
                fill="#000000"
              />
              <path
                d="M50 50 L85.355 85.355 A50 50 0 0 1 50 100 Z"
                fill="#ffffff"
              />
              <path
                d="M50 50 L50 100 A50 50 0 0 1 14.645 85.355 Z"
                fill="#000000"
              />
              <path
                d="M50 50 L14.645 85.355 A50 50 0 0 1 0 50 Z"
                fill="#ffffff"
              />
              <path
                d="M50 50 L0 50 A50 50 0 0 1 14.645 14.645 Z"
                fill="#000000"
              />
              <path
                d="M50 50 L14.645 14.645 A50 50 0 0 1 50 0 Z"
                fill="#ffffff"
              />
            </svg>
            <div className="result-indicator">▼</div>
          </div>
          {isSpinning && <div className="spinning">Točím...</div>}
          {result && (
            <div className="modal">
              <div className="modal-content">
                <p>{resultGroup}</p>
                <p className="result-text">{result}</p>
                <button className="close-button" onClick={closeModal}>
                  CLOSE
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
