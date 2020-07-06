import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isUploaded = useSelector((state) => state.fileUpload.isUploaded);
  const currentStep = useSelector((state) => state.fileUpload.step);
  //console.log(rest.step);
  return (
    <Route
      {...rest}
      component={(props) =>
        isUploaded && rest.step === currentStep ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

export default PrivateRoute;
