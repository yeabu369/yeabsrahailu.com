import { Box, HStack, Link as _Link } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

interface NavLink {
  url: string;
  title: string;
}

const LINKS = [
  {
    url: "/projects",
    title: "Projects",
  },
  {
    url: "/articles",
    title: "Articles",
  },
  {
    url: "/about",
    title: "About",
  },
];

const Navbar: FC = () => {
  const menuNode = () => {
    return (
      <HStack isInline spacing={[0, 4]} alignItems="center">
        {[
          LINKS.map((link: NavLink) => {
            return (
              <Box key={link.url}>
                <Link href={link.url} passHref>
                  <_Link
                    px={4}
                    py={2}
                    href={link.url}
                    rounded="sm"
                    fontSize={["sm", "md"]}
                    borderWidth={1}
                    borderColor="transparent"
                    _hover={{
                      textDecoration: "none",
                      bgColor: "gray.900",
                      borderWidth: 1,
                      borderColor: "gray.700",
                    }}
                    _focus={{ outline: "none" }}
                  >
                    {link.title}
                  </_Link>
                </Link>
              </Box>
            );
          }),
        ]}
      </HStack>
    );
  };

  return (
    <Box as="header" zIndex={1} borderTopWidth={5} borderColor="blue.400">
      <Box mx="auto" px={4}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          py={4}
          flexDir={["column", "column", "row"]}
          gridGap={[4, 4, 0]}
        >
          <Box d="flex" alignItems="center">
            <Link href="/" passHref>
              <_Link
                href="/"
                d="flex"
                _focus={{ outline: "none" }}
                aria-label="Logo"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 1080 1080"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="1080" height="1080" fill="white" />
                  <path
                    d="M201.724 367.658H283.032L361.324 515.523H364.677L442.968 367.658H524.277L399.044 589.623V711H326.956V589.623L201.724 367.658ZM563.925 711V367.658H636.517V509.32H783.879V367.658H856.302V711H783.879V569.17H636.517V711H563.925Z"
                    fill="black"
                  />
                </svg>
              </_Link>
            </Link>
          </Box>
          {menuNode()}
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
