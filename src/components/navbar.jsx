import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link } from '@nextui-org/react'
import { NavLink } from 'react-router-dom'

const NavbarMenu = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit uppercase">Portafolio personal</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link as={NavLink} to={'/home'} aria-current="page">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NavLink} to={'/projects'} color="foreground">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NavLink} to={'/'} color="foreground">
            Sobre mi
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link as={NavLink} to={'/login'}>
            Iniciar sesión
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Crear cuenta
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavbarMenu
