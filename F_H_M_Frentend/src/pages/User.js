import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Content } from "antd/es/layout/layout";
import { SideBar } from "../components/SideBar";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../store/category/categorySlice";
import { getAllUsers } from "../store/user/userSlice";
import UserCategory from "../components/User/user-category";
import UserDetail from "../components/User/user-detail";

export default function User() {
  const data = useSelector((state) => state?.user?.users);
  const categories = useSelector((state) => state?.category?.category?.data);

  const [detailRecord, setDetailRecord] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
   const temp =  dispatch(getAllUsers());
    dispatch(getAllCategory());
  }, []);
  return (
    <div className="h-full min-h-screen grid grid-columns">
      <SideBar />
      <div className="relative flex flex-col">
        <Header />
        <PerfectScrollbar style={{ height: "100vh" }}>
          <Content className="px-4 pt-28 pb-6">
            {!detailRecord ? (
              <UserCategory
                data={data}
                setDetailRecord={(vendorData) => setDetailRecord(vendorData)}
                categories={categories || []}
              />
            ) : (
              <UserDetail
                data={data?.find((item) => item?.id === detailRecord.id)}
                goBack={() => setDetailRecord(null)}
                categories={categories}
              />
            )}
          </Content>
        </PerfectScrollbar>
      </div>
    </div>
  );
}
