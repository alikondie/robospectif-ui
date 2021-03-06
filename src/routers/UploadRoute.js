import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
export const UploadRoute = ({ component: Component, ...rest }) => {
  const isUploaded = useSelector((state) => state.gameUpload.isUploaded);
  const currentStep = useSelector((state) => state.gameUpload.step);
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

export default UploadRoute;
