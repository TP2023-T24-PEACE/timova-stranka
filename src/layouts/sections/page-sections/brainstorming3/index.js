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
import BrainstormThree from "layouts/sections/page-sections/brainstorming3/components/BrainstormThree";

// PageHeaders page components code
import brainstormTwoCode from "layouts/sections/page-sections/brainstorming3/components/BrainstormThree/code";

function PageHeaders() {
  return (
    <BaseLayout
      title="Brainstorming 3"
      breadcrumb={[
        { label: "Brainstorming 3", route: "/sections/brainstorming/brainstorming2" },
        { label: "Brainstorm" },
      ]}
    >
      <View title="Brainstorming 3" code={brainstormTwoCode}>
        <BrainstormThree />
      </View>
    </BaseLayout>
  );
}

export default PageHeaders;
