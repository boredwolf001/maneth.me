import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import ModeToggle from "./ModeToggle";

function Navbar() {
  return (
    <Container maxW="container.xl">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        py="5"
        w="100%"
        mb={8}
        bg="transparent"
        color={{ dark: "white", light: "black" }}
        style={{ position: "sticky", top: 0 }}
      >
        <Box>
          <Link passhref href="/">
            <Image src="/logo.png" w="13%" alt="Logo" />
          </Link>
        </Box>

        <Box
          display={["none", "none", "block", "block"]}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
            spacing={8}
            align="center"
            justify={"center"}
            direction={"row"}
            pt={[4, 4, 0, 0]}
          >
            <Link href="/#about">About</Link>
            <Link href="/#skills">Skills</Link>
            <Link href="/#work">Work</Link>
            <Link href="/#contact">Contact</Link>
            <Link
              href="https://maneth.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog <ExternalLinkIcon />
            </Link>

            <ModeToggle />
          </Stack>
        </Box>

        {/* Ham Menu */}
        <Box display={["block", "block", "none", "none"]}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
            />

            <MenuList>
              <MenuItem>
                <Link href="/#about">About</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/#skills">Skills</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/#work">Work</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/#contact">Contact</Link>
              </MenuItem>
              <MenuItem>
                <Link
                  passhref
                  href="https://maneth.hashnode.dev"
                  rel="noopener noreferrer"
                >
                  Blog <ExternalLinkIcon />
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Container>
  );
}

export default Navbar;
