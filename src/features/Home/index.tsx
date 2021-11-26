import React from "react";
import Header from "../Header/index";
import "./Home.css";
import "../poupSignInUp/popupSignInUp.css";
import { Container } from "@mui/material";
import HomeBanner from "./components/HomeBanner";
import HomeMap from "./components/HomeMap";
import HomeMiniMap from "./components/HomeMiniMap";
import HomeOrder from "./components/HomeOrder";
import HomeCalendar from "./components/HomeCalendar";
import HomeFlatForm from "./components/HomeFlatForm";
import HomeSignIn from "./components/HomeSignIn";
import Footer from "../Footer/index";
import HomeLoggedCalendar from "./components/HomeLoggedCalendar";

const logged: boolean = false;
function Home(props: any) {
  return (
    <div className="home">
      <Header />
      <Container>
        <HomeBanner />
        {logged === false ? (
          <>
            <HomeLoggedCalendar />
          </>
        ) : (
          <>
            <HomeMap />
            <HomeMiniMap />
            <HomeOrder />
            <HomeCalendar />
            <HomeFlatForm />
            <HomeSignIn />
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
