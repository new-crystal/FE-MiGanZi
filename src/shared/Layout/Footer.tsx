import React, { useEffect, useState } from "react";
import { ReactComponent as Main } from "../../assets/footer_main.svg";
import { ReactComponent as Search } from "../../assets/footer_search.svg";
import { ReactComponent as Upload } from "../../assets/footer_upload.svg";
import { ReactComponent as User } from "../../assets/footer_mypage.svg";

import { ReactComponent as OnMain } from "../../assets/footer_main_on.svg";
import { ReactComponent as OnSearch } from "../../assets/footer_search_on.svg";
import { ReactComponent as OnUpload } from "../../assets/footer_upload_on.svg";
import { ReactComponent as OnUser } from "../../assets/footer_mypage_on.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [onMain, setOnMain] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  const [onUpload, setOnUpload] = useState(false);
  const [onUser, setOnUser] = useState(false);
  const navigate = useNavigate();
  const location = window.location.pathname;

  useEffect(() => {
    if (location === "/") {
      setOnMain(true);
      setOnSearch(false);
      setOnUpload(false);
      setOnUser(false);
    } else if (location === "/search") {
      setOnMain(false);
      setOnSearch(true);
      setOnUpload(false);
      setOnUser(false);
    } else if (location === "/create") {
      setOnMain(false);
      setOnSearch(false);
      setOnUpload(true);
      setOnUser(false);
    } else if (location === "/login" || location === "signup") {
      setOnMain(false);
      setOnSearch(false);
      setOnUpload(false);
      setOnUser(true);
    }
  }, [location]);

  return (
    <div className="h-[6rem] mt-5 bg-st-gray-02  flex fixed w-[390px] bottom-[70px]  rounded-b-3xl">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="w-[98px] flex py-[4px] px-[4px] flex-col justify-center items-center"
      >
        {onMain ? <OnMain /> : <Main />}
        <p className="text-st-gray-05 text-sm">메인</p>
      </div>
      <div
        onClick={() => {
          navigate("/search");
        }}
        className="w-[98px] flex py-[4px] px-[4px] flex-col justify-center items-center"
      >
        {onSearch ? <OnSearch /> : <Search />}
        <p className="text-st-gray-05 text-sm">검색</p>
      </div>
      <div
        onClick={() => {
          navigate("/create");
        }}
        className="w-[98px] flex py-[4px] px-[4px] flex-col justify-center items-center"
      >
        {onUpload ? <OnUpload /> : <Upload />}
        <p className="text-st-gray-05 text-sm">업로드</p>
      </div>
      <div
        onClick={() => {
          navigate("/login");
        }}
        className="w-[98px] flex py-[4px] px-[4px] flex-col justify-center items-center"
      >
        {onUser ? <OnUser /> : <User />}
        <p className="text-st-gray-05 text-sm">마이페이지</p>
      </div>
    </div>
  );
};

export default Footer;
