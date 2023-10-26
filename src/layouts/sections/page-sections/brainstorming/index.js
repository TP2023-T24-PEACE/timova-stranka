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
import BrainstormOne from "layouts/sections/page-sections/brainstorming/components/BrainstormOne";

// PageHeaders page components code
import brainstormOneCode from "layouts/sections/page-sections/brainstorming/components/BrainstormOne/code";

function PageHeaders() {
  return (
    <BaseLayout
      title="Brainstorming 1"
      breadcrumb={[
        { label: "Brainstorming 1", route: "/sections/brainstorming/brainstorming1" },
        { label: "Brainstorm" },
      ]}
    >
      <View title="Brainstorming" code={brainstormOneCode}>
        <BrainstormOne />
      </View>
    </BaseLayout>
  );
}

export default PageHeaders;
