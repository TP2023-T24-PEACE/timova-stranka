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
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
// Image
//import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import intro from "assets/images/Introduction.png";
import dashboard from "assets/images/Dashboard.png";
import mood1 from "assets/images/Mood tracking 1.png";
import mood2 from "assets/images/Mood tracking 2.png";
import mood3 from "assets/images/Mood tracking 3.png";
import tinder from "assets/images/Otázky Tinder v2.png";
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
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                High-fidelity model
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="h2" color="text" mb={1} pb={3}>
                <Grid item xs={12} lg={12} md={12} xl={12}>
                  <MKBox mb={1}>
                    <HorizontalTeamCard
                      image={intro}
                      name="Introduction page"
                      position={{
                        color: "info",
                      }}
                      description="Welcome to PEACE, the app that helps you relax and enjoy life. Whether you need a break from stress, a moment of mindfulness, or a boost of happiness, PEACE has you covered. With PEACE, you can access guided meditations, soothing sounds, inspiring quotes, and more. All you need to do is take a deep breath and continue to the next step. Join PEACE today and discover the benefits of a calm and positive mind."
                    />
                  </MKBox>
                </Grid>
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1} pb={3}>
                <Grid item xs={12} lg={12} md={12} xl={12}>
                  <MKBox mb={1}>
                    <HorizontalTeamCard
                      image={dashboard}
                      name="Dashoboard page"
                      position={{
                        color: "info",
                      }}
                      description="Welcome to our interactive dashboard, a centralized hub designed to provide you with a comprehensive overview of essential information at a glance. This intuitive dashboard is meticulously crafted to enhance your user experience, offering a seamless and insightful journey into your data."
                    />
                  </MKBox>
                </Grid>
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1} pb={3}>
                <Grid item xs={12} lg={12} md={12} xl={12}>
                  <MKBox mb={1}>
                    <HorizontalTeamCard
                      image={mood1}
                      name="Overall mood page"
                      position={{
                        color: "info",
                      }}
                      description="Welcome to our Mood Setting Page — a unique space dedicated to understanding and tracking your emotions effortlessly. This intuitive feature allows you to express and monitor your mood on a scale from your worst to your best, providing valuable insights into your emotional well-being."
                    />
                  </MKBox>
                </Grid>
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1} pb={3}>
                <Grid item xs={12} lg={12} md={12} xl={12}>
                  <MKBox mb={1}>
                    <HorizontalTeamCard
                      image={mood2}
                      name="Pick your emotions page"
                      position={{
                        color: "info",
                      }}
                      description="Welcome to our Emotion Selection Page, where you have the power to articulate and express your feelings with a simple tap. This feature offers a diverse range of emotion buttons, allowing you to effortlessly communicate your current state of mind."
                    />
                  </MKBox>
                </Grid>
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1} pb={3}>
                <Grid item xs={12} lg={12} md={12} xl={12}>
                  <MKBox mb={1}>
                    <HorizontalTeamCard
                      image={mood3}
                      name="Reasons for your mood page"
                      position={{
                        color: "info",
                      }}
                      description="Welcome to the 'Explore Your Emotions' page, where you can delve into the reasons and factors influencing your current emotional state. This feature empowers you to reflect on and understand the intricacies of your feelings by identifying the underlying causes."
                    />
                  </MKBox>
                </Grid>
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1} pb={3}>
                <Grid item xs={12} lg={12} md={12} xl={12}>
                  <MKBox mb={1}>
                    <HorizontalTeamCard
                      image={tinder}
                      name="Additional information page"
                      position={{
                        color: "info",
                      }}
                      description="On the Day Details page, you have the opportunity to delve deeper into the specifics of your day. This page allows you to provide additional information and context surrounding the factors that contributed to your mood. "
                    />
                  </MKBox>
                </Grid>
              </MKTypography>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
