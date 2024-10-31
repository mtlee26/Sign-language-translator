import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Menu: React.FC<Props> = ({ className }) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [currentButton, setCurrentButton] = useState<string>("Dashboard");
  const history = useHistory();
  const location = useLocation();

  // Đồng bộ `currentButton` với URL hiện tại
  useEffect(() => {
    const pathToButtonName: { [key: string]: string } = {
      "/dashboard": "Dashboard",
      "/translate": "Translate",
      "/aboutus": "About us",
      "/dictionary": "Dictionary",
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
    <div className="xl:w-full xl:min-w-[unset] xl:h-full flex flex-col bg-[rgb(30,30,47)] w-[260px] z-[1] min-w-0 max-w-[260px]">
      <nav className="tn:mt-[18px] tn:mx-2 tn:mb-[39px] flex flex-col items-center mt-[18px] mr-[13px] mb-[39px] ml-3.5">
        {/* Navigation buttons */}
        {[
          {
            name: "Dashboard",
            src: "/assets/a4efd272e8aba77ed080901fc7c6cd27.png",
            path: "/dashboard",
          },
          {
            name: "How to use",
            src: "/assets/8c3f7217513125d385724f13944a4ad1.png",
          },
          {
            name: "Dictionary",
            src: "/assets/089652497f6801c04d037b66969c344e.svg",
            path: "/dictionary",
          },
          {
            name: "Translate",
            src: "/assets/1ca5f57b8ec7cf4e2717b702c362affd.svg",
            path: "/translate",
          },
          {
            name: "Game",
            src: "/assets/b45a64961d14a6c73208b5ed43797774.svg",
          },
          {
            name: "Setting",
            src: "/assets/941e141cce9170be6727269019285b6c.svg",
          },
          {
            name: "About us",
            src: "/assets/81c5a91208b05fe119272d0856aecf1b.svg",
            path: "/about-us",
          },
          {
            name: "Log out",
            src: "/assets/941e141cce9170be6727269019285b6c.svg",
            path: "/Landing",
          },
        ].map((button, index) => (
          <a
            key={index}
            onMouseEnter={() => handleMouseEnter(button.name)}
            onMouseLeave={handleMouseLeave}
            className={`${buttonClass(
              button.name
            )} flex flex-col rounded-md w-[191.9875030517578px] z-[3] max-w-[85%] mt-[15px]`}
            onClick={() =>
              button.path && handleButtonClick(button.name, button.path)
            } // Chỉ gọi handleButtonClick khi có đường dẫn
          >
            <div className="xs:gap-x-4 tn:my-[9px] tn:mx-2 tn:gap-x-2 flex gap-x-[22px] my-[9px] mx-4">
              <div
                className="bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat w-[21px] min-h-[21px]"
                style={{ "--src": `url(${button.src})` }}
              />
              <div className="flex justify-center font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-center mt-0.5 cursor-pointer">
                {button.name}
              </div>
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
