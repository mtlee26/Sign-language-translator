import Menu from "components/Menu";
interface Props {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<Props> = ({ children, className }) => {
  return (
    <section
      className={`dashboard2 xl:flex-col xl:items-center xl:gap-y-[30px] bg-[rgb(245,246,250)] flex gap-x-6 overflow-hidden ${
        className || ""
      }`}
    >
      <div className="flex">
        <Menu className="flex-1" children={undefined} />
        <article className="flex flex-col flex-4 items-center gap-y-[117px] min-w-0 mb-[61px] mt-[40px] ml-8 min-h-[1000px]">
          {/* Main content area */}
          {children}
        </article>
      </div>
    </section>
  );
};

export default Layout;
