import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { SideBar } from "../../../components/SideBar";
import { Content } from "antd/es/layout/layout";
import Header from "../../../components/Header";
import DiscountForm from "../../../components/Discount/discount-form";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addCoupon } from "../../../store/coupons/couponSlice";
import { useNavigate } from "react-router-dom";
import { getUserId } from "../../../constants";

const CouponCreate = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = async (values) => {
    message.loading({ content: "Creating coupon..." });

    try {
      const couponData = { ...values };

      const result = await dispatch(
        addCoupon({ ...couponData, isActive: true, userId: getUserId() })
      ).unwrap();

      message.destroy();
      toast.success("Coupon created successfully!");
      navigation(`/coupons`);
      return result;
    } catch (error) {
      message.destroy();
      const errorMessage =
        error.message?.message || "Failed to create the coupon.";
      toast.error(errorMessage);
    }
  };
  return (
    <div className="h-full min-h-screen grid grid-columns">
      <SideBar />
      <div className="relative flex flex-col">
        <Header />
        <PerfectScrollbar style={{ height: "100vh" }}>
          <Content className="px-4 pt-28 pb-6">
            <DiscountForm
              fixedValue={{ FORM_MODE: "create" }}
              handleSubmit={handleSubmit}
            />
          </Content>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default CouponCreate;
