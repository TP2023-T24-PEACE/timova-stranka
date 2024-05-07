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

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Features page components

import TeamMeet2 from "layouts/sections/page-sections/teamMeet2/components/TeamMeeting2";
// Features page components code

import TeamMeet2Code from "layouts/sections/page-sections/teamMeet2/components/TeamMeeting2/code";
function Features() {
  return (
    <BaseLayout
      title="Team meeting 2.2"
      breadcrumb={[
        {
          label: "Meetings Sections",
          route: "/sections/page-sections/features",
        },
        { label: "Meetings" },
      ]}
    >
      <View title="Meeting" code={TeamMeet2Code}>
        <TeamMeet2 />
      </View>
    </BaseLayout>
  );
}

export default Features;
