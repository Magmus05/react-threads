import React from "react"
import { Header } from "../header"
import { Container } from "../container"
import { NavBar } from "../nav-bar"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="flex-2 p-4">
          {" "}
          <NavBar></NavBar>
        </div>
				<div>
					<Outlet/>
				</div>
      </Container>
    </>
  )
}
