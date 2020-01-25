import { Link } from "gatsby"
import React, { FC, HTMLAttributes, PropsWithChildren } from "react"
import Scrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"
import Banner from "../../images/tph-banner.svg"
import { ThemeToggler } from "../ThemeToggler"
import * as SC from "./styles"

interface IMenuItemProps {
  to: string
}

const MenuItem: FC<IMenuItemProps> = ({ children, to }) => {
  if (to.match(/^(https?:\/\/)/)) {
    return (
      <SC.MenuItemExternal href={to} target="_blank">
        {children}
      </SC.MenuItemExternal>
    )
  }

  return (
    <SC.MenuItem to={to} activeClassName="active">
      {children}
    </SC.MenuItem>
  )
}

export const Sidebar: FC<PropsWithChildren<
  HTMLAttributes<HTMLDivElement>
>> = props => {
  const { children, ...restProps } = props
  const isBorderVisible = children === undefined ? false : true

  return (
    <SC.SidebarWrapper {...restProps}>
      <Scrollbar>
        <Link to="/">
          <Banner />
        </Link>
        <SC.Inner>
          {children}

          <SC.Menu borderVisibility={isBorderVisible}>
            <MenuItem to="/about">about</MenuItem>
            <MenuItem to="/rules">rules</MenuItem>
            <MenuItem to="/resources">resources</MenuItem>
            <MenuItem to="/archives">tech spotlights</MenuItem>
            <MenuItem to="https://forum.theprogrammershangout.com">
              forum
            </MenuItem>
          </SC.Menu>

          <ThemeToggler />
        </SC.Inner>
      </Scrollbar>
    </SC.SidebarWrapper>
  )
}
