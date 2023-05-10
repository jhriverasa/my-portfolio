import NavBar from "@/components/base/NavBar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className="bg-slate-900">
      <NavBar />
      <div className="flex flex-col px-[11vw] bg-slate-900">{children}</div>
    </div>
  );
};

export default Layout;
