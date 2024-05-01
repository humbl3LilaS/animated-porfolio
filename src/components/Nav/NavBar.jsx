import NavList from "./NavList";
import SideNav from "./SideNav";
export default function NavBar() {
  return (
    <div className="h-24">
      <SideNav />
      <NavList />
    </div>
  );
}
