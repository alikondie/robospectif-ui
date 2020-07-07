import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
export const CreateRoute = ({ component: Component, ...rest }) => {
  const currentStep = useSelector((state) => state.gameUpload.step);
  //console.log(rest.step);
  return (
    <Route
      {...rest}
      component={(props) =>
        rest.step === currentStep ? (
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

export default CreateRoute;
