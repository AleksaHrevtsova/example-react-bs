import React from "react";
import AuthContext from "../../contexts/Auth";

const withAuthContext = (WrappedComponent) => {
  return function WithAuthContext(props) {
    return (
      <AuthContext.Consumer>
        {(x) => <WrappedComponent {...props} auth={x} />}
      </AuthContext.Consumer>
    );
  };
};

export default withAuthContext;
