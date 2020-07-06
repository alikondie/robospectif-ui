import React from 'react';
import { PageLayout } from '../../common';
import { useSelector } from 'react-redux';
export default () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <PageLayout>
      <h1>
        Bonjour {user.firstName} {user.lastName}
      </h1>
    </PageLayout>
  );
};
