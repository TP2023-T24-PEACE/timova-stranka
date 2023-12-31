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
import "./style.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// Material Kit 2 React components
import MKBox from "components/MKBox";
//import MKInput from "components/MKInput";
//import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//import DefaultFooter from "examples/Footers/DefaultFooter";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
// Routes
import routes from "routes";
//import autocomplete from "assets/theme/components/form/autocomplete";
//import footerRoutes from "footer.routes";

// Image
//import bgImage from "assets/images/illustrations/illustration-reset.jpg";

// Images
import pakan from "assets/images/team-5.jpg";
import jankanic from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";
import valent from "assets/images/valent.jpg";
import maros from "assets/images/maros.jpg";
import andrej from "assets/images/andre_zitnak.jpg";

function ContactUs() {
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
              mb={{ xs: 7, sm: 5, md: 7 }}
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Work done in sprint n.6
              </MKTypography>
            </MKBox>
            <MKBox
              component="section"
              variant="gradient"
              bgColor="light"
              position="relative"
              borderRadius="20px"
              py={6}
              px={{ xs: 2, lg: 0 }}
              mx={-2}
            >
              <Container>
                <Grid container>
                  <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                    <MKTypography variant="h2" color="dark">
                      Front-end Team
                    </MKTypography>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={6}>
                      <MKBox mb={1} ml={2} className="team-card">
                        <HorizontalTeamCard
                          image={pakan}
                          name="Matej Pakán"
                          position={{
                            color: "info",
                            label: "App development, Web development",
                          }}
                        />
                        <MKTypography
                          variant="body1"
                          color="dark"
                          mb={3}
                          ml={2}
                        >
                          <b> - </b> <br />
                          <b> - </b> <br />
                          <b> - </b> <br />
                          <b> - </b> <br />
                        </MKTypography>
                      </MKBox>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <MKBox mb={1} ml={2} className="team-card">
                        <HorizontalTeamCard
                          image={jankanic}
                          name="Adam Jankanič"
                          position={{
                            color: "info",
                            label: "App development, Web development",
                          }}
                        />
                        <MKTypography
                          variant="body1"
                          color="dark"
                          mb={3}
                          ml={2}
                        >
                          <b>
                            {" "}
                            Reading articles about games (game for mood
                            tracking){" "}
                          </b>{" "}
                          <br />
                        </MKTypography>
                      </MKBox>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <MKBox mb={1} ml={2} className="team-card">
                        <HorizontalTeamCard
                          image={maros}
                          name="Maroš Lukáč"
                          position={{
                            color: "info",
                            label: "Web-development, Automated test developer",
                          }}
                        />
                        <MKTypography
                          variant="body1"
                          color="dark"
                          mb={3}
                          ml={2}
                        >
                          <b> Akceptacne testy </b> <br />
                          <b> Hry na zaznamenavanie nalady </b> <br />
                          <b> Uprava funkcnych a nie funkcnych poziadaviek </b>
                          <br />
                        </MKTypography>
                      </MKBox>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </MKBox>
            <MKBox
              component="section"
              variant="gradient"
              bgColor="light"
              position="relative"
              borderRadius="20px"
              py={6}
              px={{ xs: 2, lg: 0 }}
              mx={-2}
              mt={2}
            >
              <Container>
                <Grid container>
                  <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                    <MKTypography variant="h2" color="dark">
                      Back-end Team
                    </MKTypography>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={6}>
                      <MKBox mb={1} ml={2} className="team-card">
                        <HorizontalTeamCard
                          image={team4}
                          name="Martin Drgoň"
                          position={{ color: "info", label: "Backend & API" }}
                        />
                        <MKTypography
                          variant="body1"
                          color="dark"
                          mb={3}
                          ml={2}
                        >
                          <b> Usecase + Sequence diagram - Register </b> <br />
                        </MKTypography>
                      </MKBox>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <MKBox mb={1} ml={2} className="team-card">
                        <HorizontalTeamCard
                          image={team3}
                          name="Filip Brat"
                          position={{ color: "info", label: "Backend & API" }}
                        />
                        <MKTypography
                          variant="body1"
                          color="dark"
                          mb={3}
                          ml={2}
                        >
                          <b>
                            Usecase + Sequence diagram - Record current mood
                          </b>{" "}
                          <br />
                          <b> Reviews </b> <br />
                          <b> Task management </b> <br />
                        </MKTypography>
                      </MKBox>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </MKBox>
            <MKBox
              component="section"
              variant="gradient"
              bgColor="light"
              position="relative"
              borderRadius="20px"
              py={6}
              px={{ xs: 2, lg: 0 }}
              mx={-2}
              mt={2}
            >
              <Container>
                <Grid container>
                  <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                    <MKTypography variant="h2" color="dark">
                      Data science Team
                    </MKTypography>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={6}>
                      <MKBox mb={1} ml={2} className="team-card">
                        <HorizontalTeamCard
                          image={valent}
                          name="Marcel Valent"
                          position={{ color: "info", label: "Data science" }}
                        />
                        <MKTypography
                          variant="body1"
                          color="dark"
                          mb={3}
                          ml={2}
                        >
                          <b> - </b> <br />
                          <b> - </b> <br />
                          <b> - </b> <br />
                          <b> - </b> <br />
                        </MKTypography>
                      </MKBox>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <MKBox mb={1} ml={2} className="team-card">
                        <HorizontalTeamCard
                          image={andrej}
                          name="Andrej Žitňák"
                          position={{ color: "info", label: "Data science" }}
                        />
                        <MKTypography
                          variant="body1"
                          color="dark"
                          mb={3}
                          ml={2}
                        >
                          <b> Data analysis concept </b> <br />
                          <b>
                            {" "}
                            Create process flow diagram for data collection{" "}
                          </b>{" "}
                          <br />
                          <b>
                            {" "}
                            Create process flow diagram for data analysis{" "}
                          </b>{" "}
                          <br />
                          <b> Make state diagram of data </b> <br />
                        </MKTypography>
                      </MKBox>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
