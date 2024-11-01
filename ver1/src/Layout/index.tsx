import Menu from "components/Menu";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<Props> = ({ children, className }) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [currentButton, setCurrentButton] = useState<string>("Dashboard");
  const history = useHistory();
  const location = useLocation();

  // Đồng bộ `currentButton` với URL hiện tại
  useEffect(() => {
    const pathToButtonName: { [key: string]: string } = {
      "/dashboard": "Dashboard",
      "/translate": "Translate",
      "/about-us": "About us",
      "/dictionary": "Dictionary",
      "/game": "Game",
      "/setting": "Setting",
      "/how-to-use": 'How to use'
      // Thêm các đường dẫn khác vào đây nếu cần
    };
    const buttonName = pathToButtonName[location.pathname];
    if (buttonName) {
      setCurrentButton(buttonName);
    }
  }, [location.pathname]);

  const handleMouseEnter = (buttonName: string) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const handleButtonClick = (buttonName: string, path: string) => {
    if (currentButton !== buttonName) {
      setCurrentButton(buttonName); // Cập nhật button hiện tại
    }
    history.push(path);
  };

  const buttonClass = (buttonName: string) => {
    return currentButton === buttonName || hoveredButton === buttonName
      ? "bg-[rgb(84,169,206)] text-white" // Màu xanh khi button được chọn hoặc hover
      : "bg-[rgb(30,30,47)] text-white"; // Màu mặc định
  };

  return (
    <section
      className={`dashboard2 xl:flex-col xl:items-center xl:gap-y-[30px] bg-[rgb(245,246,250)] flex gap-x-6 overflow-hidden ${
        className || ""
      }`}
    >
      <Menu children={undefined} />
      <article className="flex flex-col items-center gap-y-[117px] min-w-0 mb-[61px] mt-[40px] ml-8">
        {/* Main content area */}
        {children}
      </article>
    </section>
  );
};

export default Layout;
