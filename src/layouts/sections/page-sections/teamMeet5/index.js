/*
=========================================================
* Material Kit 2 React - v2.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Features page components

import TeamMeet5 from "layouts/sections/page-sections/teamMeet5/components/TeamMeeting5";
// Features page components code

import TeamMeet5Code from "layouts/sections/page-sections/teamMeet5/components/TeamMeeting5/code";
function Features() {
  return (
    <BaseLayout
      title="Team meeting 2.5"
      breadcrumb={[
        {
          label: "Meetings Sections",
          route: "/sections/page-sections/features",
        },
        { label: "Meetings" },
      ]}
    >
      <View title="Meeting" code={TeamMeet5Code}>
        <TeamMeet5 />
      </View>
    </BaseLayout>
  );
}

export default Features;
