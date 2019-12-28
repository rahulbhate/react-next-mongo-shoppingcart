import React, { useEffect } from 'react';
import App, { Container, useState } from 'next/app';
import Layout from '../src/Layout';
import UserContext from '../src/components/UserContext';
const MyApp = ({ Component, pageProps }) => {
  return (
    <Container>
        <Layout>
        <UserContext.Provider value={{ user: "Rahul" }}>
            <Component {...pageProps} />
        </UserContext.Provider>
        </Layout>
    </Container>
  );
};

MyApp.getInitialProps = async ({ Component }) => {
  
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps()
    : {};
  return { pageProps };
};

export default MyApp;
