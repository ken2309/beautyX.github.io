import React, { useContext } from 'react';
import HomeTags from './components/HomeTags';
import HomePromo from './components/HomePromo';
import HomeDeal from './components/HomeDeal';
import HomeCard from './components/HomeCard';
import HomeProvince from './components/HomeProvince';
import HomeServicesRe from './components/HomeServicesRe';
import HomeLoggedCalendar from '../Home/components/HomeLogged/HomeLoggedCalendar';

import { Container } from '@mui/material';
import './home-se.css'
import { AppContext } from '../../context/AppProvider';

function HomeSecond(props: any) {
    const { profile } = useContext(AppContext)
    return (
        <div className="home-se-cnt">
            <Container>
                <HomeTags />
                <HomePromo />
                <HomeDeal />
                <HomeCard />
            </Container>
            <HomeProvince />
            {
                profile ?
                    <HomeLoggedCalendar />
                    :
                    <></>
            }
            <Container>
                <HomeServicesRe />
            </Container>
        </div>
    );
}

export default HomeSecond;