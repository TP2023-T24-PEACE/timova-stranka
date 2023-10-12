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
import BrainstormTwo from "layouts/sections/page-sections/brainstorming2/components/BrainstormTwo";

// PageHeaders page components code
import brainstormTwoCode from "layouts/sections/page-sections/brainstorming2/components/BrainstormTwo/code";

function PageHeaders() {
  return (
    <BaseLayout
      title="Brainstorming 2"
      breadcrumb={[
        { label: "Brainstorming 2", route: "/sections/brainstorming/brainstorming2" },
        { label: "Brainstorm" },
      ]}
    >
      <View title="Brainstorming" code={brainstormTwoCode} height="40rem">
        <BrainstormTwo />
      </View>
    </BaseLayout>
  );
}

export default PageHeaders;
