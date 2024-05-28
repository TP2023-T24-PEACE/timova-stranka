/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons

// Pages
import Projectinfo from "layouts/pages/landing-pages/project-info";
import DataCalculation from "layouts/pages/landing-pages/resourcesDataCalculation";
import Requirements from "layouts/pages/landing-pages/requirements";
import Analysis from "layouts/pages/landing-pages/analysis";
import HF from "layouts/pages/landing-pages/hf";
// import Diagrams from "layouts/pages/landing-pages/diagrams";
// Sections
import BrainHeader from "layouts/sections/page-sections/brainstorming";
import BrainHeader2 from "layouts/sections/page-sections/brainstorming2";
import BrainHeader3 from "layouts/sections/page-sections/brainstorming3";
import BrainHeader4 from "layouts/sections/page-sections/brainstorming4";
import Features from "layouts/sections/page-sections/featuers";
import Features2 from "layouts/sections/page-sections/features2";
import Features3 from "layouts/sections/page-sections/features3";
import Features4 from "layouts/sections/page-sections/features4";
import Features5 from "layouts/sections/page-sections/features5";
import Features6 from "layouts/sections/page-sections/features6";
import Features7 from "layouts/sections/page-sections/features7";
import Features8 from "layouts/sections/page-sections/features8";

import TeamMeet1 from "layouts/sections/page-sections/teamMeet1";
import TeamMeet2 from "layouts/sections/page-sections/teamMeet2";
import TeamMeet3 from "layouts/sections/page-sections/teamMeet3";
import TeamMeet4 from "layouts/sections/page-sections/teamMeet4";
import TeamMeet5 from "layouts/sections/page-sections/teamMeet5";
import TeamMeet6 from "layouts/sections/page-sections/teamMeet6";
import TeamMeet7 from "layouts/sections/page-sections/spots";

import Sprint3 from "layouts/pages/landing-pages/sprint3";
import Sprint4 from "layouts/pages/landing-pages/sprint4";
import Sprint5 from "layouts/pages/landing-pages/sprint5";
import Sprint6 from "layouts/pages/landing-pages/sprint6";
import Sprint7 from "layouts/pages/landing-pages/sprint7";
import Sprint8 from "layouts/pages/landing-pages/sprint8";
const routes = [
  {
    name: "Links",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Sections",
        collapse: [
          {
            name: "Github organization",
            href: "https://github.com/TP2023-T24-PEACE",
          },
        ],
      },
    ],
  },
  {
    name: "Analysis of the project",

    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Project assignment",
        description: " ",
        route: "/project-info",
        component: <Projectinfo />,
      },
      {
        name: "Data analysis",
        description: " ",
        route: "/data-analysis",
        component: <DataCalculation />,
      },
      {
        name: "Functional and non-functional requirements",
        description: " ",
        route: "/requirements",
        component: <Requirements />,
      },
      {
        name: "Analysis of the project",
        description: " ",
        route: "/project-analysis",
        component: <Analysis />,
      },
      {
        name: "High-fidelity model",
        description: " ",
        route: "/high-fidelity",
        component: <HF />,
      },
      // aa
    ],
  },
  {
    name: "Meetings",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Weekly standup",
        description: "1. Semester",
        dropdown: true,
        collapse: [
          {
            name: "Meeting 1",
            route: "/meetings/meeting1",

            component: <Features />,
          },
          {
            name: "Meeting 2",
            route: "/meetings/meeting2",
            component: <Features2 />,
          },
          {
            name: "Meeting 3",
            route: "/meetings/meeting3",
            component: <Features3 />,
          },
          {
            name: "Meeting 4",
            route: "/meetings/meeting4",
            component: <Features4 />,
          },
          {
            name: "Meeting 5",
            route: "/meetings/meeting5",
            component: <Features5 />,
          },
          {
            name: "Meeting 6",
            route: "/meetings/meeting6",
            component: <Features6 />,
          },
          {
            name: "Meeting 7",
            route: "/meetings/meeting7",
            component: <Features7 />,
          },
          {
            name: "Meeting 8",
            route: "/meetings/meeting8",
            component: <Features8 />,
          },
        ],
      },
      {
        name: "Team Meetings",
        description: "2. Semester",
        dropdown: true,
        collapse: [
          {
            name: "TEAM - Meeting 1",
            route: "/meetings/teamMeeting1",

            component: <TeamMeet1 />,
          },
          {
            name: "TEAM - Meeting 2",
            route: "/meetings/teamMeeting2",
            component: <TeamMeet2 />,
          },
          {
            name: "TEAM - Meeting 3",
            route: "/meetings/teamMeeting3",
            component: <TeamMeet3 />,
          },
          {
            name: "TEAM - Meeting 4",
            route: "/meetings/teamMeeting4",
            component: <TeamMeet4 />,
          },
          {
            name: "TEAM - Meeting 5",
            route: "/meetings/teamMeeting5",
            component: <TeamMeet5 />,
          },
          {
            name: "TEAM - Meeting 6",
            route: "/meetings/teamMeeting6",
            component: <TeamMeet6 />,
          },
          {
            name: "TEAM - Meeting 7",
            route: "/meetings/teamMeeting7",
            component: <TeamMeet7 />,
          },
        ],
      },
      {
        name: "Brainstorming",
        description: "1. Semester",
        dropdown: true,
        collapse: [
          {
            name: "Brainstorming 1",
            route: "/brainstormings/brainstorming1",
            component: <BrainHeader />,
          },
          {
            name: "Brainstorming 2",
            route: "/brainstormings/brainstorming2",
            component: <BrainHeader2 />,
          },
          {
            name: "Brainstorming 3",
            route: "/brainstormings/brainstorming3",
            component: <BrainHeader3 />,
          },
          {
            name: "Brainstorming 4",
            route: "/brainstormings/brainstorming4",
            component: <BrainHeader4 />,
          },
        ],
      },
      {
        name: "Work in sprints",
        description: "1. Semester",
        dropdown: true,

        collapse: [
          {
            name: "Sprint 3",
            route: "/sprints/sprint3",
            component: <Sprint3 />,
          },
          {
            name: "Sprint 4",
            route: "/sprints/sprint4",
            component: <Sprint4 />,
          },
          {
            name: "Sprint 5",
            route: "/sprints/sprint5",
            component: <Sprint5 />,
          },
          {
            name: "Sprint 6",
            route: "/sprints/sprint6",
            component: <Sprint6 />,
          },
          {
            name: "Sprint 7",
            route: "/sprints/sprint7",
            component: <Sprint7 />,
          },
          {
            name: "Sprint 8",
            route: "/sprints/sprint8",
            component: <Sprint8 />,
          },
        ],
      },
    ],
  },
];

export default routes;
