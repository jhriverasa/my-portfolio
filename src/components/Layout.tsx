interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return <div className="layout-container">{children}</div>;
};

export default Layout;
