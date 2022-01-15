import React, { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import auth from "../api/authApi";
import dateNow from '../utils/dateExp';
import tagsApi from '../api/tagApi'
// import axios from 'axios';

export const AppContext = createContext();
export default function AppProvider({ children }) {
  const { t } = useTranslation();
  const lg = localStorage.getItem("i18nextLng");
  const [language, setLanguage] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [tk, setTk] = useState();
  const [userInfo, setUserInfo] = useState();
  const [sign, setSign] = useState();
  const [profile, setProfile] = useState();
  const [acBtn, setAcBtn] = useState(1);
  const [tags, setTags] = useState([])

  // Check if token expires and logout user
  if (localStorage.getItem("_WEB_US")) {
    const tokenDecoded = JSON.parse(`${localStorage.getItem("_WEB_US")}`);
    let exp = tokenDecoded?.token_expired_at;
    let expDate = exp.slice(0, 10).split("-").join("");
    let expTime = exp.slice(11, 19).split(":").join("");
    let dateExp = parseInt(`${expDate}${expTime}`);

    if (dateExp < dateNow) {
      localStorage.removeItem("_WEB_US");
      localStorage.removeItem("_WEB_TK");
    }
  }

  useEffect(() => {
    if (lg === "en-US" || lg === "en") {
      setLanguage("en");
    } else if (lg === "vi-VN" || lg === "vn") {
      setLanguage("vn");
    }
  }, [lg]);

  //const TK = localStorage.getItem('_WEB_TK')
  useEffect(() => {
    function handleGetToken() {
      const res = JSON.parse(`${localStorage.getItem("_WEB_US")}`);
      setUserInfo(res);
    }
    handleGetToken();
    return () => {};
  }, [sign]);

  useEffect(() => {
    async function handleGetProfile() {
      try {
        const res = await auth.getUserProfile();
        setProfile(res.data);
      } catch (err) {
        setProfile(undefined);
      }
    }
    handleGetProfile();
    return () => {};
  }, [sign]);
  //get all tags
  useEffect(() => {
    async function handleGetAllTags() {
      try {
        const res = await tagsApi.getAll()
        setTags(res.data.context.data);
      } catch (error) {
        console.log(error)
      }
    }
    handleGetAllTags()
  }, [])
  const value = {
    t,
    tags,
    acBtn,
    setAcBtn,
    language,
    openModal,
    setOpenModal,
    setLanguage,
    tk,
    userInfo,
    setTk,
    setUserInfo,
    setSign,
    profile,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
