interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return <div className="px-[11vw] py-[5vw]">{children}</div>;
};

export default Layout;
