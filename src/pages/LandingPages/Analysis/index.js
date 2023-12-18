/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
//import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
//import autocomplete from "assets/theme/components/form/autocomplete";
//import footerRoutes from "footer.routes";

// Image
//import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import bgImage from "assets/images/priloha-A.jpg";
import React, { useRef } from "react";
function ContactUs() {
  const targetTests = useRef(null);
  const targetrequirements = useRef(null);
  const targetPriciny = useRef(null);
  const targetPorovnavanie = useRef(null);
  const targetTok = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // create a handler function for the button click
  const handleClickTests = () => {
    // scroll the target element into view
    targetTests.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickRequirements = () => {
    // scroll the target element into view
    targetrequirements.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickPriciny = () => {
    // scroll the target element into view
    targetPriciny.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickPorovnavanie = () => {
    // scroll the target element into view
    targetPorovnavanie.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickTok = () => {
    // scroll the target element into view
    targetTok.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        position="fixed"
        top="0.5rem"
        width="100%"
      />
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item xs={12} sm={10} md={7} lg={6} xl={4}>
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            ml={{ xs: "auto", lg: "auto", xl: -30 }}
            mr={{ xs: "auto", lg: "auto", xl: -30 }}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Analysis of the project
              </MKTypography>
            </MKBox>

            <MKBox p={3}>
              <MKTypography variant="h2" color="text" mb={1}>
                Jump to buttons
              </MKTypography>
              <MKBox>
                <MKButton
                  onClick={handleClickTests}
                  color={"info"}
                  style={{
                    marginRight: 10 + "px",
                    marginLeft: 10 + "px",
                    marginBottom: 10 + "px",
                  }}
                >
                  Akceptačné testy
                </MKButton>
              </MKBox>
              <MKBox>
                <MKButton
                  onClick={handleClickRequirements}
                  color={"info"}
                  style={{
                    marginRight: 10 + "px",
                    marginLeft: 10 + "px",
                    marginBottom: 10 + "px",
                  }}
                >
                  Požiadávky
                </MKButton>
              </MKBox>
              <MKBox>
                <MKButton
                  onClick={handleClickPriciny}
                  color={"info"}
                  style={{
                    marginRight: 10 + "px",
                    marginLeft: 10 + "px",
                    marginBottom: 10 + "px",
                  }}
                >
                  Údaje na spracovanie
                </MKButton>
              </MKBox>
              <MKBox>
                <MKButton
                  onClick={handleClickPorovnavanie}
                  color={"info"}
                  style={{
                    marginRight: 10 + "px",
                    marginLeft: 10 + "px",
                    marginBottom: 10 + "px",
                  }}
                >
                  Údaje a výsledky
                </MKButton>
              </MKBox>
              <MKBox>
                <MKButton
                  onClick={handleClickTok}
                  color={"info"}
                  style={{
                    marginRight: 10 + "px",
                    marginLeft: 10 + "px",
                    marginBottom: 10 + "px",
                  }}
                >
                  Tok údajov
                </MKButton>
              </MKBox>
              <MKTypography variant="h2" color="text" mb={1}>
                <br />
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1}>
                Theme name: Personal Emotional Activity Checking Engine
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Serial number</b>: 17 <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Acronym</b>: PEACE <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Team leader</b>: Ing. Jakub Dubec <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Related subjects</b>: MTAA, DBS <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Mandatory technologies</b>: Kotlin/Swift <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Recommended technologies</b>: PostgreSQL, Python, R<br />
                <br />
                <br />
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1} ref={targetTests}>
                Akceptačné testy
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <ul style={{ marginLeft: 30 + "px" }}>
                  <li>
                    <b>Prihlásenie a registrácia</b>
                  </li>
                  <li>
                    <b>Zaznamenanie aktuálnej nálady</b>{" "}
                    <ul style={{ marginLeft: 30 + "px" }}>
                      <li>rôzne formy</li>
                    </ul>
                  </li>
                  <li>
                    <b>Vygenerovanie vizualizácie</b>
                    <ul style={{ marginLeft: 30 + "px" }}>
                      <li>
                        Zobrazenie poznámky z denníka alebo zobrazenie moodu z
                        určitého dňa v minulosti
                      </li>
                    </ul>
                  </li>
                </ul>
                <br />
              </MKTypography>
              <MKTypography
                variant="h3"
                color="text"
                mb={1}
                style={{ marginLeft: 30 + "px" }}
              >
                Test 1: Prihlásenie
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <div style={{ marginLeft: 30 + "px" }}>
                  <p>
                    <b>Vstupné podmienky : </b>Používateľ je registrovaný v
                    aplikácii a je pripojený na internet.
                  </p>
                  <p>
                    <b>Výstupné podmienky : </b>Zobrazí sa dashboard s profilom
                    používateľa
                  </p>
                  <p>
                    <b>Postup :</b>
                    <ol style={{ marginLeft: 30 + "px" }}>
                      <li>
                        Používateľ klikne v spodnej časti aplikácie na “Log in”
                      </li>
                      <li>Používateľ zadá prihlasovacie údaje</li>
                      <li>Používateľ stlačí “Log in”</li>
                      <li>Používateľ je prihlásený a zobrazí sa dashboard</li>
                    </ol>
                  </p>
                </div>
                <br />
              </MKTypography>
              <MKTypography
                variant="h3"
                color="text"
                mb={1}
                style={{ marginLeft: 30 + "px" }}
              >
                Test 2: Registrácia
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <div style={{ marginLeft: 30 + "px" }}>
                  <p>
                    <b>Vstupné podmienky : </b>Používateľ nie je registrovaný v
                    aplikácii a je pripojený na internet.
                  </p>
                  <p>
                    <b>Výstupné podmienky : </b>Zobrazí sa obrazovka s
                    vytvorením profilu
                  </p>
                  <p>
                    <b>Postup :</b>
                    <ol style={{ marginLeft: 30 + "px" }}>
                      <li>Používateľ klikne na “Register”</li>
                      <li>Používateľ zadá registračné údaje</li>
                      <li>Používateľ stlačí “Register”</li>
                      <li>Používateľ vyplní overovací kód z mailu</li>
                      <li>Používateľ je zaregistrovaný</li>
                    </ol>
                  </p>
                </div>
                <br />
              </MKTypography>
              <MKTypography
                variant="h3"
                color="text"
                mb={1}
                style={{ marginLeft: 30 + "px" }}
              >
                Test 3: Zaznamenanie aktuálnej nálady{" "}
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <div style={{ marginLeft: 30 + "px" }}>
                  <p>
                    <b>Vstupné podmienky : </b>Používateľ je prihlásený v
                    aplikácii
                  </p>
                  <p>
                    <b>Výstupné podmienky : </b>Bola zobrazená vizualizácia s
                    najnovším záznamom
                  </p>
                  <p>
                    <b>Postup :</b>
                    <ol style={{ marginLeft: 30 + "px" }}>
                      <li>Používateľ klikne na ikonu “+”</li>
                      <li>Používateľ zvolí hodnotu zo slideru</li>
                      <li>Používateľ vykliká presnejšie názvy jeho nálady</li>
                      <li>Používateľ vykliká prečo sa takto cíti</li>
                      <li>(OPTIONAL) Používateľ vyplní textové pole “Note”</li>
                      <li>Používateľ potvdí a uloží náladu</li>
                    </ol>
                  </p>
                </div>
                <br />
              </MKTypography>
              <MKTypography
                variant="h3"
                color="text"
                mb={1}
                style={{ marginLeft: 30 + "px" }}
              >
                Test 4: Vygenerovanie vizualizácie{" "}
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <div style={{ marginLeft: 30 + "px" }}>
                  <p>
                    <b>Vstupné podmienky : </b>Existuje aspoň 5 záznamov nálad v
                    danom období
                  </p>
                  <p>
                    <b>Výstupné podmienky : </b>Zobrazenie grafov
                  </p>
                  <p>
                    <b>Postup :</b>
                    <ol style={{ marginLeft: 30 + "px" }}>
                      <li>Používateľ klikne na ikonu “Analysis”</li>
                      <li>
                        Používateľ vyberá časové obdobie začiatku a konca meraní
                      </li>
                      <li>Používateľ filtruje možné nálady</li>
                      <li>
                        Zobrazia sa grafy (napr. cikcak pre všeobecnú náladu,
                        koláčový pre počet jednotlivých nálad za obdobie atď.,
                        čo najviac zlepšilo/zhoršilo náladu)
                      </li>
                    </ol>
                  </p>
                </div>
                <br />
              </MKTypography>

              <MKTypography
                variant="h3"
                color="text"
                mb={1}
                style={{ marginLeft: 30 + "px" }}
              >
                Test 5: Dodatočný zápis poznámky do denníka
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <div style={{ marginLeft: 30 + "px" }}>
                  <p>
                    <b>Vstupné podmienky : </b>Vyplnená nálada
                  </p>
                  <p>
                    <b>Výstupné podmienky : </b>Pridaná poznámka do denníka
                  </p>
                  <p>
                    <b>Postup :</b>
                    <ol style={{ marginLeft: 30 + "px" }}>
                      <li>
                        Používateľ zvolí záznam nálady, do ktorého chce
                        pridať/zmeniť poznámku
                      </li>
                      <li>Používateľ vyplní textové pole “Note”</li>
                      <li>Používateľ uloží zmeny</li>
                    </ol>
                  </p>
                </div>
                <MKButton onClick={scrollToTop} color={"info"}>
                  {" "}
                  Scroll to TOP{" "}
                </MKButton>
              </MKTypography>
              <br />
              <br />
              <MKTypography
                variant="h2"
                color="text"
                mb={1}
                ref={targetrequirements}
              >
                Difference between functional and non-functional requirements
                <br />
              </MKTypography>

              <MKTypography variant="body" color="text" mb={1}>
                <b>Functional requirements</b>
                <br />
                <p style={{ marginLeft: 30 + "px" }}>
                  Functional requirements define what specific functions,
                  operations, or tasks a system, application, or product must
                  perform. These requirements focus on what the system does and
                  what tasks it performs. Functional requirements can include
                  details about input and output data, processes, user
                  interactions, and other specific functions. Examples of
                  functional requirements include "The system must be capable of
                  user login" or "The application must allow the creation of a
                  new user account."
                </p>

                <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Non - Functional requirements</b>
                <br />
                <p style={{ marginLeft: 30 + "px" }}>
                  Non-functional requirements define the quality and performance
                  characteristics of a system or product. These requirements
                  focus on how well the system performs its functions or the
                  limitations it has. Non-functional requirements can cover
                  things like performance, security, availability, reliability,
                  scalability, usability, compatibility, and more. Examples of
                  non-functional requirements include "System response must be
                  fast, with a maximum response time of 2 seconds" or "The
                  application must be able to support 100 concurrent users."
                </p>
                <MKButton onClick={scrollToTop} color={"info"}>
                  {" "}
                  Scroll to TOP{" "}
                </MKButton>
              </MKTypography>
              <br />
              <br />

              <MKTypography
                variant="h2"
                color="text"
                mb={1}
                ref={targetPriciny}
              >
                Typy údajov potrebných na spracovanie
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <ul style={{ marginLeft: 60 + "px" }}>
                  <li>
                    <b>Základné Údaje Užívateľa: </b>Vek, pohlavie, meno
                  </li>
                  <li>
                    <b>Údaje o Nálade :</b>Úroveň nálady na škále od 1 do 10.
                  </li>
                  <li>
                    <b>Emócie: </b>Zoznam až štyroch konkrétnych emócií.
                  </li>
                  <li>
                    <b>Príčiny Nálady: </b>Vybrané z preddefinovanej sady alebo
                    zadávané užívateľom.
                  </li>
                  <li>
                    <b>Textové Poznámky: </b>Akékoľvek doplňujúce poznámky od
                    užívateľa.
                  </li>
                  <li>
                    <b>Informácie o pravidelných návykoch: </b>Áno/Nie odpovede
                  </li>
                </ul>
                <br />
              </MKTypography>
              <MKTypography variant="h4" color="text" mb={1}>
                Používateľ
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <ul style={{ marginLeft: 60 + "px" }}>
                  <li>
                    <b>UserID</b>: 001
                  </li>
                  <li>
                    <b>Meno</b>: Eva
                  </li>
                  <li>
                    <b>Priezvisko</b>: Nová
                  </li>
                  <li>
                    <b>Dátum Narodenia</b>: 1990-04-15
                  </li>
                  <li>
                    <b>Pohlavie</b>: Žena
                  </li>
                  <li>
                    <b>Dôvod Inštalácie Aplikácie</b>: Zlepšenie nálady
                  </li>
                  <li>
                    <b>Súhlas so Zdieľaním Dát</b>: Áno
                  </li>
                  <li>
                    <b>Pravidelné návyky</b>: Fajčenie, Pitie alkoholu
                  </li>
                </ul>
                <br />
              </MKTypography>
              <MKTypography variant="h4" color="text" mb={1}>
                Záznam nálad
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <ul style={{ marginLeft: 60 + "px" }}>
                  <li>
                    <b>ZáznamID</b>: 1001
                  </li>
                  <li>
                    <b>UserID</b>: 001
                  </li>
                  <li>
                    <b>Časová Pečiatka</b>: 2023-07-15 10:30
                  </li>
                  <li>
                    <b>Úroveň Nálady</b>: 7 (z rozsahu 1-10)
                  </li>
                  <li>
                    <b>Emócie</b>:
                    <ul>
                      <li>Radosť</li>
                      <li>Nadšenie</li>
                    </ul>
                  </li>
                  <li>
                    <b>Príčina Nálady</b>: Príjemné stretnutie s priateľmi
                  </li>
                  <li>
                    <b>Poznámka</b>: "Cítila som sa skvele po dlhom čase s
                    priateľmi."
                  </li>
                  <li>
                    <b>Odpoveď na otázky o pravidelných návykoch</b>: Áno,Nie
                  </li>
                </ul>
                <br />
              </MKTypography>
              <MKTypography variant="h4" color="text" mb={1}>
                Emócie
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <ul style={{ marginLeft: 60 + "px" }}>
                  <li>
                    <b>EmóciaID</b>: 01
                  </li>
                  <li>
                    <b>Názov</b>: Radosť
                  </li>
                  <li>
                    <b>EmóciaID</b>: 02
                  </li>
                  <li>
                    <b>Názov</b>: Nadšenie
                  </li>
                </ul>
                <br />
              </MKTypography>
              <MKTypography variant="h4" color="text" mb={1}>
                Príčiny nálady
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <ul style={{ marginLeft: 60 + "px" }}>
                  <li>
                    <b>PríčinaID</b>: 01
                  </li>
                  <li>
                    <b>Názov</b>: Príjemné stretnutie s priateľmi
                  </li>
                </ul>
                <br />
                <p>
                  V tomto príklade "Eva" zaznamenala svoju náladu ako 7/10, čo
                  je relatívne vysoké skóre. Vybrala emócie "Radosť" a
                  "Nadšenie" a ako hlavnú príčinu svojej nálady uviedla
                  "Príjemné stretnutie s priateľmi", s dodatočnou poznámkou o
                  tom, ako sa cítila. Odpovedala Áno na otázku či dnes fajčila a
                  odpovedala Nie na otázku či dnes pila alkohol.
                </p>
                <br />
              </MKTypography>
              <MKTypography variant="h4" color="text" mb={1}>
                Výstup spracovania
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <ul style={{ marginLeft: 60 + "px" }}>
                  <li>
                    <b>Zhrnutie Údajov</b>: Kompletný prehľad o náladách
                    užívateľa, identifikovaných vzoroch a možných príčinách
                    zmeny nálady.
                  </li>
                  <li>
                    <b>Vizualizácie</b>: Grafy a dashboardy, ktoré užívateľovi
                    umožňujú lepšie pochopiť svoje nálady a ich vývoj.
                  </li>
                  <li>
                    <b>Personalizované Odporúčania</b>: Konkrétne tipy alebo
                    návrhy založené na analýze údajov.
                  </li>
                </ul>
                <br />
              </MKTypography>
              <MKButton onClick={scrollToTop} color={"info"}>
                {" "}
                Scroll to TOP
              </MKButton>
              <MKTypography
                variant="h2"
                color="text"
                mb={1}
                ref={targetPorovnavanie}
              >
                {" "}
                <br />
                Porovnávanie Údajov a Výsledkov
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <ul style={{ marginLeft: 60 + "px" }}>
                  <li>
                    Údaje môžu byť porovnávané v čase (napr. ako sa menia nálady
                    užívateľa z dňa na deň).
                  </li>
                  <li>
                    Porovnanie medzi rôznymi užívateľmi alebo užívateľskými
                    skupinami pre identifikáciu širších trendov alebo vzorov.
                  </li>
                  <li>
                    Využitie analytických nástrojov na identifikáciu korelácií
                    medzi rôznymi typmi údajov (napríklad ako konkrétne emócie
                    súvisia s určitými príčinami nálady).
                  </li>
                </ul>
                <MKButton onClick={scrollToTop} color={"info"}>
                  {" "}
                  Scroll to TOP
                </MKButton>
                <br />
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1} ref={targetTok}>
                <br />
                Tok Údajov
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <ul style={{ marginLeft: 60 + "px" }}>
                  <li>
                    <b>Užívateľ -> Aplikácia</b>: Užívateľ zadáva údaje do
                    aplikácie.
                  </li>
                  <li>
                    <b>Aplikácia -> Server</b>: Aplikácia posiela údaje na
                    server.
                  </li>
                  <li>
                    <b>Server -> Databáza</b>: Údaje sú uložené v databáze.
                  </li>
                  <li>
                    <b>Databáza -> Procesný Engine</b>: Údaje sú načítané na
                    spracovanie a analýzu.
                  </li>
                  <li>
                    <b>Analýza -> Výstupné Údaje</b>: Výsledky analýzy sú
                    spracované na výstup
                  </li>
                  <li>
                    <b>Výstup</b> je uložený v databáze ako čisté a spracované
                    dáta.
                  </li>
                  <li>
                    <b>Výstup -> Aplikácia / Užívateľ</b>: Výstup je zobrazený
                    užívateľovi cez aplikáciu.
                  </li>
                </ul>
                <MKButton onClick={scrollToTop} color={"info"}>
                  {" "}
                  Scroll to TOP
                </MKButton>
                <br />
              </MKTypography>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
