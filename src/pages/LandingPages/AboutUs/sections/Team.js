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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import pakan from "assets/images/team-5.jpg";
import jankanic from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";
import valent from "assets/images/valent.jpg";
import maros from "assets/images/maros.jpg";
import andrej from "assets/images/andre_zitnak.jpg";

import "./style.css";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="success"
      position="relative"
      py={6}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Náš tím
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Apes together strong
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6} className="team-card">
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={pakan}
                name="Matej Pakán"
                position={{
                  color: "info",
                  label: "App development, Web development",
                }}
                description="Zaujíma sa o webové stránky od roku 2013 a od 2017 ich tvorí profesionálne."
              />
              <MKTypography variant="body1" color="white" mb={3} ml={2}>
                <ul>
                  <li>
                    <b>2022 - súčasnosť</b> - Web Developer barneystudio.com
                  </li>
                  <li>
                    <b>2020 - 2023</b> - Frontend Developer vibefest.sk &
                    redroom.sk
                  </li>
                  <li>
                    <b>2021 - 2022</b> - Frontend Developer nahodsa.sk
                  </li>
                  <li>
                    <b>Absolvované relevantné predmety</b> - MTAA, WTECH, VPWA,
                    VAVJS, DBS, ICP, IAU, OOP
                  </li>
                  <li>
                    <b>Zapísané inžinierske predmety</b> - KPAIS, IPVIKT, MTS
                  </li>
                </ul>
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6} className="team-card">
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={jankanic}
                name="Adam Jankanič"
                position={{
                  color: "info",
                  label: "App development, Web development",
                }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
              <MKTypography variant="body1" color="white" mb={3} ml={2}>
                <ul>
                  <li>
                    <b>2022 - súčasnosť</b> - ANASOFT softvérový analytik
                  </li>
                  <li>
                    Bakalárska téma zameraná na full stack webovú aplikáciu
                  </li>
                  <li>
                    <b>Absolvované relevantné predmety</b> - VPWA, MTAA, WTECH,
                    DBS, ICP, OOP, IAU
                  </li>
                  <li>
                    <b>Zapísané inžinierske predmety</b> - AS, PDT, MTS, IPVKT
                  </li>
                </ul>
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6} className="team-card">
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Filip Brat"
                position={{ color: "info", label: "Backend & API" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
              <MKTypography variant="body1" color="white" mb={3} ml={2}>
                <ul>
                  <li>
                    <b>2022 - súčasnosť</b> - Backend Developer backbone.sk
                  </li>
                  <li>
                    Bakalárska téma zameraná bakalárska práca na vývoj natívnej
                    mobilnej aplikácie
                  </li>
                  <li>
                    <b>Absolvované relevantné predmety</b> - MTAA, IAU a povinné
                    predmety v rámci bakalárskeho štúdia FIIT
                  </li>
                  <li>
                    <b>Zapísané inžinierske predmety</b> - AS, PDT, MTS
                  </li>
                </ul>
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6} className="team-card">
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Martin Drgoň"
                position={{ color: "info", label: "Backend & API" }}
                description="Zaujíma sa o tvorbu webových aplikácií od roku 2019"
              />
              <MKTypography variant="body1" color="white" mb={3} ml={2}>
                <ul>
                  <li>Bakalárska práca s vývojom webovej aplikácie</li>
                  <li>
                    <b>Absolvované relevantné predmety</b> - MTAA, WTECH, VPWA,
                    DBS, OOP, IAU
                  </li>
                  <li>
                    <b>Zapísané inžinierske predmety</b> - TSOFT, NSIETE
                  </li>
                </ul>
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6} className="team-card">
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={andrej}
                name="Andrej Žitňák"
                position={{ color: "info", label: "Data science" }}
                description="O dátovú vedu sa zaujíma aj v profesionálnom živote"
              />
              <MKTypography variant="body1" color="white" mb={3} ml={2}>
                <ul>
                  <li>Bakalárska téma zameraná na Data science</li>
                  <li>
                    <b>Absolvované relevantné predmety</b> - WTECH, VAVJS, DBS,
                    ICP, IAU, OOP, UI, PAS, VAVA
                  </li>
                  <li>
                    <b>Zapísané inžinierske predmety</b> - VINF, OZNAL, SMVE
                  </li>
                </ul>
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6} className="team-card">
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={valent}
                name="Marcel Valent"
                position={{ color: "info", label: "Data science" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
              <MKTypography variant="body1" color="white" mb={3} ml={2}>
                <ul>
                  <li>
                    <b>2023 - súčasnosť</b> - Slovenské elektrárne - developer
                    (data science, web development)
                  </li>
                  <li>
                    <b>2021-2023</b> - Kyndryl (customer support, developer)
                  </li>
                  <li>BP zameraná na Computer vision a data science</li>
                  <li>
                    <b>Absolvované relevantné predmety</b> - - IAU, ICP, OOP,
                    DBS
                  </li>
                  <li>
                    <b>Zapísané inžinierske predmety</b> - VINF, OZNAL, SMVE
                  </li>
                </ul>
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6} className="team-card">
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={maros}
                name="Maroš Lukáč"
                position={{
                  color: "info",
                  label: "Web-development, Automated test developer",
                }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
              <MKTypography variant="body1" color="white" mb={3} ml={2}>
                <ul>
                  <li>
                    <b>Bakalárska práca</b> - webový portál celoživotného online
                    vzdelávania zameraný na starších a zrakovo znevýhodnených
                    používateľov
                  </li>
                  <li>
                    <b>Absolvované relevantné predmety</b> - IAU, ICP, OOP, DBS,
                    WTECH, MSOFT
                  </li>
                  <li>
                    <b>Zapísané inžinierske predmety</b> - VINF, AS, MTS, DSOZB
                  </li>
                  <li>
                    <b>2022 - súčasnosť</b> - Asseco Central Europe - vývoj
                    automatických testov pre weby
                  </li>
                </ul>
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
