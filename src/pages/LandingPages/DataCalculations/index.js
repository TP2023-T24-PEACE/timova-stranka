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
//import MKButton from "components/MKButton";
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
function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar routes={routes} />
      </MKBox>
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
                Výpočetové operácie na základe zozbieraných údajov
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="h2" color="text" mb={1}>
                Názov témy: Personal Emotional Activity Checking Engine
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Poradové číslo</b>: 17 <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Akronym</b>: PEACE <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Vedúci tímu</b>: Ing. Jakub Dubec <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Súvisiace predmety</b>: MTAA, DBS <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Povinné technológie</b>: Kotlin/Swift <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>Odporúčané technológie</b>: PostgreSQL, Python, R<br />
                <br />
                <br />
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1}>
                Pearson correlation coefficient
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <ul style={{ marginLeft: 30 + "px" }}>
                  <li>
                    <b>correlation</b> = covariance(activity,
                    mental_health_score) / (standard_deviation(activity) *
                    standard_deviation(mental_health_score))
                  </li>
                </ul>
                <br />
                This formula calculates the Pearson correlation coefficient,
                which is a measure of the linear correlation between two
                variables. The correlation coefficient can range from -1 to 1,
                with a value of{" "}
                <b>1 indicating a perfect positive correlation</b> , a value of{" "}
                <b>-1 indicating a perfect negative correlation</b> , and a
                value of <b>0 indicating no correlation</b>.
                <br />
                <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                To use this formula, you would first need to calculate the
                covariance and standard deviation of the activity and mental
                health score variables.
                <br />
                <br />
                <MKTypography variant="body" color="text" mb={1}>
                  <ul style={{ marginLeft: 30 + "px" }}>
                    <li>
                      <b>correlation</b> = covariance(activity,
                      mental_health_score) / (standard_deviation(activity) *
                      standard_deviation(mental_health_score))
                      <br />
                    </li>
                  </ul>
                  <ul style={{ marginLeft: 30 + "px" }}>
                    <li>
                      <b>standard_deviation</b> = sqrt(sum((activity -
                      mean(activity))**2) / (len(activity) - 1))
                    </li>
                  </ul>

                  <br />
                </MKTypography>
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1}>
                Authoritative Value - simple version
                <br />
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>authoritative_value</b> = (mood_score + positive_events -
                negative_events) / 3
                <br />
                <ul style={{ marginLeft: 45 + "px" }}>
                  <li>
                    <b>mood_score</b> is a numerical value representing the
                    user's current mood, with higher values indicating a more
                    positive mood.
                  </li>
                  <li>
                    <b>positive_events</b> is a numerical value representing the
                    number of positive events that the user has experienced in a
                    recent period of time.
                  </li>
                  <li>
                    <b>negative_events</b> is a numerical value representing the
                    number of negative events that the user has experienced in a
                    recent period of time.
                  </li>
                </ul>
                <br />
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1}>
                Authoritative Value - complex version
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <b>authoritative_value</b> = (mood_score + positive_events -
                negative_events + user_engagement + social_influence +
                expertise) / 6
                <br />
                <ul style={{ marginLeft: 45 + "px" }}>
                  <li>
                    <b>mood_score</b> is a numerical value representing the
                    user's current mood, with higher values indicating a more
                    positive mood.
                  </li>
                  <li>
                    <b>positive_events</b> is a numerical value representing the
                    number of positive events that the user has experienced in a
                    recent period of time.
                  </li>
                  <li>
                    <b>negative_events</b> is a numerical value representing the
                    number of negative events that the user has experienced in a
                    recent period of time.
                  </li>
                  <li>
                    <b>user_engagement</b> is a numerical value representing the
                    user's level of engagement with a particular platform or
                    service. This could be measured by things like the number of
                    posts they make, the number of comments they leave, and the
                    amount of time they spend on the platform.
                  </li>
                  <li>
                    <b>social_influence</b> is a numerical value representing
                    the user's social influence. This could be measured by
                    things like the number of followers they have on social
                    media, the number of people they are connected to on
                    professional networking sites, and the number of people who
                    have cited their work.
                  </li>
                  <li>
                    <b>expertise</b> is a numerical value representing the
                    user's level of expertise in a particular area. This could
                    be measured by things like the number of degrees they hold,
                    the number of years of experience they have, and the number
                    of publications they have authored.
                  </li>
                </ul>
                <br />
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1}>
                Resources
              </MKTypography>
              <MKTypography>
                <ul style={{ marginLeft: 45 + "px" }}>
                  <li>
                    <Link href="https://www.mastersindatascience.org/resources/how-data-science-can-improve-mental-health-care/</li>">
                      https://www.mastersindatascience.org/resources/how-data-science-can-improve-mental-health-care/
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.hindawi.com/journals/sp/2020/2024160/">
                      https://www.hindawi.com/journals/sp/2020/2024160/
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.analyticsvidhya.com/blog/2022/06/mental-health-prediction-using-machine-learning/">
                      https://www.analyticsvidhya.com/blog/2022/06/mental-health-prediction-using-machine-learning/{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="https://towardsdatascience.com/data-science-in-mental-health-ccd09ba2148a">
                      https://towardsdatascience.com/data-science-in-mental-health-ccd09ba2148a
                    </Link>
                  </li>
                  <li>
                    <Link href="https://pubmed.ncbi.nlm.nih.gov/27918178/">
                      https://pubmed.ncbi.nlm.nih.gov/27918178/
                    </Link>
                  </li>
                </ul>
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
