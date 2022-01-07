import React, { useContext } from "react";
import "./home.css";
import "../poupSignInUp/popupSignInUp.css";
import { Container } from "@mui/material";
import HomeBanner from "./components/HomeBanner";
import HomeMap from "./components/HomeMap";
import HomeMiniMap from "./components/HomeMiniMap";
import HomeOrder from "./components/HomeOrder";
import HomeCalendar from "./components/HomeCalendar";
import HomeFlatForm from "./components/HomeFlatForm";
import HomeSignIn from "./components/HomeSignIn";
import HomeSlider from "./components/HomeSlider";
import Footer from "../Footer/index";
import HomeLoggedCalendar from "./components/HomeLogged/HomeLoggedCalendar";
import HomeLoggedLocation from "../Home/components/HomeLogged/HomeLoggedLocation";
import HomeLoggedProduct from "../Home/components/HomeLogged/HomeLoggedProduct";
import HomeLoggedForYou from "../Home/components/HomeLogged/HomeLoggedForYou";
import { AppContext } from "../../context/AppProvider";
import Head from "../Head/index";
import HeadTitle from "../HeadTitle";
import Bottom from "../../featuresMobile/Bottom";
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllOrg, fetchAsyncOrg } from '../../redux/orgSlice'

// const logged: boolean = true;
function Home(props: any) {
  const { profile, t } = useContext(AppContext);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchAsyncOrg())
  // }, [dispatch])

  // const org = useSelector(getAllOrg);

  return (
    <div className="home">
      <HeadTitle title={t("Home.home")} />
      <Head />
      <Container>
        <HomeBanner />
      </Container>
      {profile ? (
        <>
          <div className="h-par-calendar">
            <HomeLoggedCalendar />
          </div>
          <Container>
            <HomeLoggedLocation />
            <HomeLoggedProduct />
            <HomeLoggedForYou />
          </Container>
        </>
      ) : (
        <Container>
          <HomeMap />
          <HomeMiniMap />
          <HomeOrder />
          <HomeCalendar />
          <HomeFlatForm />
          <HomeSignIn />
          <HomeSlider />
        </Container>
      )}
      <Footer />
      <Bottom />
    </div>
  );
}

export default Home;
