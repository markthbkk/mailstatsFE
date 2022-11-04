import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, IconButton } from "@contentful/f36-components";
import { MenuIcon } from "@contentful/f36-icons";
import "./Menu.css";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Menu.Trigger>
        <IconButton
          variant="secondary"
          icon={<MenuIcon />}
          aria-label="toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        />
      </Menu.Trigger>
      <Menu.List>
        <div className="menuList">
          <Link to="/" component={Menu.Item} as="a">
            Home
          </Link>
          <Menu.Divider />
          <Link to="/queuestats" component={Menu.Item} as="a">
            Mail Queue Statistics
          </Link>
          <Menu.Divider />
          <Link to="/servicestats" component={Menu.Item} as="a">
            Mail Service Statistics
          </Link>
          <Menu.Divider />
          <Link to="/diskstats" component={Menu.Item} as="a">
            Server Disk Statistics
          </Link>
        </div>
      </Menu.List>
    </Menu>
  );
}

export default BurgerMenu;
