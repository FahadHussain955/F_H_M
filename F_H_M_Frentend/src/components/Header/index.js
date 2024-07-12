import React, { useContext } from "react";
import {
  Typography,
  Input,
  Row,
} from "antd";
import { Svgs } from "../Svgs/svg-icons";
import { ToggleContext } from "../../context";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

function Header({ children }) {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const usr = useSelector((state) => state?.user?.user);

  const { toggleSideBar } = useContext(ToggleContext);
  return (
    <div className="fixed z-10 w-full">
      <header className="flex justify-between items-center bg-[#f5f5f5] header__box__shadow py-5 px-4 lg:gap-0 gap-3">
        <Row onClick={toggleSideBar} className="lg:hidden block mr-3 shrink-0">
          {Svgs.bars}
        </Row>
        <div className="bg-white border border-white h-12 rounded-lg flex justify-center items-center px-3 py-1 w-full max-w-[450px]">
          {Svgs.search}
          <Input
            className="text-[#50586c] text-base placeholder:text-[#50586c] !pl-[5px]"
            placeholder="Search..."
            bordered={false}
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
