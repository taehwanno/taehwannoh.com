import React from 'react';
import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

interface LayoutProps {
  children: React.ReactNode;
  preview: boolean;
}

export default function Layout({ children, preview }: LayoutProps) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
