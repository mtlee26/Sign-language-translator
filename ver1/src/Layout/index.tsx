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
      <Menu children={undefined} />
      <article className="flex flex-col items-center gap-y-[117px] min-w-0 mb-[61px] mt-[40px] ml-8">
        {/* Main content area */}
        {children}
      </article>
    </section>
  );
};

export default Layout;
