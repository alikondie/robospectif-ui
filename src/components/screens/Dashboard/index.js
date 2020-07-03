import React from 'react';
import { PageLayout } from '../../common';
import { useSelector } from 'react-redux';
export default () => {
  const userName = useSelector((state) => state.auth.user.name);
  return (
    <PageLayout>
      <h1>Bonjour {userName}</h1>
    </PageLayout>
  );
};
