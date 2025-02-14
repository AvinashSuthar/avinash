import { JSX } from "react";
import { FloatingNav } from "./ui/flotingnav";
interface navItems {
  name: string;
  link: string;
  icon?: React.JSX.Element;
}

interface props {
  navItems: navItems[];
  themeSwitcher: React.JSX.Element;
}

const Navbar = ({ navItems, themeSwitcher }: props) => {
  return <FloatingNav navItems={navItems} themeSwitcher={themeSwitcher} />;
};
export default Navbar;
