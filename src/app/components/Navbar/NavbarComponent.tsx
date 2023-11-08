/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, Button, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import LensBlurIcon from '@mui/icons-material/LensBlur';

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="w-full">
            <Navbar className="w-full" onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand as={Link} href="/" className="text-2xl cursor-pointer text-white font-semibold">
                        Tyre
                        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Ai</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {/* <NavbarItem>
                        <Link color="foreground" href="#">
                            Hakkında
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Hakkında
                        </Link>
                    </NavbarItem> */}
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" variant="faded" isIconOnly  as={Link}  href="/upload">
                        <LensBlurIcon fontSize="large" className="text-pink-600"/>
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>

                    <NavbarMenuItem key={`item`}>
                        <Link
                            color="foreground"
                            className="w-full"
                            href="/upload"
                            size="lg"
                        >
                            Yükle
                        </Link>
                    </NavbarMenuItem>

                </NavbarMenu>
            </Navbar>
        </div>

    );
}
