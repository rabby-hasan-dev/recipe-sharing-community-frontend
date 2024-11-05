import React from "react";

import FeedNavbar from "@/src/components/modules/RecipeFeed/UI/FeedNavbar";
import SearchProvider from "@/src/context/searchState";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SearchProvider>
        <FeedNavbar />

        <main>{children}</main>
      </SearchProvider>
    </div>
  );
};

export default layout;
