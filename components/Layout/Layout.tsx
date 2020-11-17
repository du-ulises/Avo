import React, { PropsWithChildren } from 'react'
import Head from 'next/head'
import { Container } from 'semantic-ui-react'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>Avo</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <Container as="main" text>
      {children}
    </Container>
    <Footer />
  </>
)

export default Layout
