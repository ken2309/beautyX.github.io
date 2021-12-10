import React, { useContext } from "react";
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
import HomeLoggedLocation from "./components/HomeLoggedLocation";
import HomeLoggedProduct from "./components/HomeLoggedProduct";
import HomeLoggedForYou from "./components/HomeLoggedForYou";
import { AppContext } from "../../context/AppProvider";
import Head from '../Head/index';
import Bottom from '../Bottom'
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllOrg, fetchAsyncOrg } from '../../redux/orgSlice'

// const logged: boolean = true;
function Home(props: any) {
  const { profile } = useContext(AppContext)
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchAsyncOrg())
  // }, [dispatch])

  // const org = useSelector(getAllOrg);
  // console.log(org);

  return (
    <div className="home">
      <Head/>
      <Container>
        <HomeBanner />
      </Container>
      {profile ?
        <>
          <HomeLoggedCalendar />
          <Container>
            <HomeLoggedLocation />
            <HomeLoggedProduct />
            <HomeLoggedForYou />
          </Container>
        </>
        :
        <Container>
          <HomeMap />
          <HomeMiniMap />
          <HomeOrder />
          <HomeCalendar />
          <HomeFlatForm />
          <HomeSignIn />
        </Container>
      }
      <Footer />
      <Bottom/>
    </div>
  );
}

export default Home;
