import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { NavBar } from "@components";
import { withWebId } from "@inrupt/solid-react-components";
import { LanguageDropdown } from "@util-components";

const NotLoggedInLayout = props => {
  const { component: Component, webId, ...rest } = props;
  return !webId ? (
    <Route
      {...rest}
      render={matchProps => (
        <Fragment>
          <NavBar
            {...matchProps}
            toolbar={[
              {
                component: () => <LanguageDropdown {...props} />,
                id: "language"
              }
            ]}
          />
          <Component {...matchProps} />
        </Fragment>
      )}
    />
  ) : (
    <Redirect to="/welcome" />
  );
};

export default withTranslation()(withWebId(NotLoggedInLayout));
