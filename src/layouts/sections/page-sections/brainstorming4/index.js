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

// PageHeaders page components
import Brainstorm4 from "layouts/sections/page-sections/brainstorming4/components/Brainstorm4";

// PageHeaders page components code
import brainstorm4Code from "layouts/sections/page-sections/brainstorming4/components/Brainstorm4/code";

function PageHeaders() {
  return (
    <BaseLayout
      title="Brainstorming 4"
      breadcrumb={[
        {
          label: "Brainstorming 4",
          route: "/sections/brainstorming/brainstorming4",
        },
        { label: "Brainstorm" },
      ]}
    >
      <View title="Brainstorming 4" code={brainstorm4Code}>
        <Brainstorm4 />
      </View>
    </BaseLayout>
  );
}

export default PageHeaders;
