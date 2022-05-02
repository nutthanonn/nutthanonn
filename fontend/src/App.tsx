import React from "react";
import Footer from "./components/footer/Footer";
import FAQ from "./components/faq";
import Nav from "./components/nav/Nav";
import Main from "./pages/main";
import { tabStore } from "./stores/tabStore";
import { searchStore } from "./stores/searchStore";

const App: React.FC = () => {
  return (
    <div>
      <FAQ />
      <Nav mainTabStore={tabStore} mainSearchStore={searchStore} />
      <Main tabStore={tabStore} searchStore={searchStore} />
      <Footer />
    </div>
  );
};

export default App;
