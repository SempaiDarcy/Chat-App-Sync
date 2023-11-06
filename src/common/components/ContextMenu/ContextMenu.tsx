import { FC, MouseEvent, ReactElement, ReactNode } from "react"

import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"

type BasicMenuPropsType = {
  open: boolean
  anchorEl: null | HTMLElement
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void
  handleClose: () => void
  icon: ReactElement
  children?: ReactNode
}
export const ContextMenu: FC<BasicMenuPropsType> = ({ open, anchorEl, handleClick, handleClose, children, icon }) => {
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {icon}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {children}
      </Menu>
    </>
  )
}
