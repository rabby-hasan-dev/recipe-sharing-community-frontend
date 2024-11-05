import React, { ReactNode } from "react";

import Footer from "@/src/components/UI/Footer";
import { Navbar } from "@/src/components/UI/navbar";

const WithCommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default WithCommonLayout;
