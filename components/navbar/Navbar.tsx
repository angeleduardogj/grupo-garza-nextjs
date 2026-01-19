import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/servicios",
        label: "Servicios",
    },
    {
        href: "/contacto",
        label: "Contacto",
    },
    {
        href: "/nosotros",
        label: "Nosotros",
    },
]

const Navbar = () => {
  return (
   <nav>
    {navItems.map((item) => (
        <ActiveLink key={item.href} path={item.href} text={item.label} />
    ))}
   </nav>
  )
}

export default Navbar