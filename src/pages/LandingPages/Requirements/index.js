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
                Functional and non-functional requirements
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
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
              <MKTypography variant="h2" color="text" mb={1}>
                FUNCTIONAL REQUIREMENTS
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <ul style={{ marginLeft: 30 + "px" }}>
                  <li>
                    <b>User</b>
                    <ul style={{ marginLeft: 30 + "px" }}>
                      <li>User registration</li>
                      <li>User login</li>
                      <li>Persistance of being logged in</li>
                    </ul>
                  </li>
                  <li>
                    <b>Create / customize profile</b>
                  </li>
                  <li>
                    <b>Record current mood</b>
                  </li>
                  <li>
                    <b>Mood History & Visualization</b>
                  </li>
                  <li>
                    <b>Notes Taking</b>
                  </li>
                  <li>
                    <b>Notifications & Reminders</b>
                  </li>
                  <li>
                    <b>Suggestions / Recommendations</b>
                  </li>
                  <li>
                    <b>Motivation system</b>
                  </li>
                </ul>
                <br />
                <br />
              </MKTypography>
              <MKTypography variant="h2" color="text" mb={1}>
                NON-FUNCTIONAL REQUIREMENTS
              </MKTypography>
              <MKTypography variant="body" color="text" mb={1}>
                <ul style={{ marginLeft: 30 + "px" }}>
                  <li>
                    <b>Usability</b>
                    <ul style={{ marginLeft: 30 + "px" }}>
                      <li>
                        des: user friendly interface, UX testing, Usability
                        heuristics
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Performance </b>
                    <ul style={{ marginLeft: 30 + "px" }}>
                      <li>
                        des: app should be fast, minimalization of loading time
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Compatibility </b>
                    <ul style={{ marginLeft: 30 + "px" }}>
                      <li>
                        des: compability with wide range of devices (correctly
                        chosen SDK){" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Scalability</b>
                    <ul style={{ marginLeft: 30 + "px" }}>
                      <li>
                        des: backend/data model optimalization to handle
                        requests from growing number of users
                      </li>
                    </ul>
                  </li>
                </ul>
                <br />
                <br />
              </MKTypography>

              <MKTypography variant="h2" color="text" mb={1}>
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
