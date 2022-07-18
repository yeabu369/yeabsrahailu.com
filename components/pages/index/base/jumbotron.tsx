import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import AvatarImage from "public/images/common/avatar.png";

const Jumbotron: FC = () => {
  return (
    <VStack
      spacing={8}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      pt={24}
      pb={12}
    >
      <Image
        src={AvatarImage}
        alt="Yeabsra Hailu"
        height={300}
        width={300}
        quality={100}
        priority
      />
      <Box>
        <Heading
          as="h1"
          fontFamily="body"
          bgColor="blue.400"
          bgClip="text"
          size="4xl"
          bgGradient="linear(to-l, #79c2ff, #4a5888)"
          className="jumbotron-name-heading"
        >
          Yeabsra Hailu
        </Heading>
      </Box>
      <Box>
        <Heading
          as="h2"
          size="lg"
          lineHeight="tall"
          color="gray.500"
          fontWeight="medium"
        >
          I&apos;m a{" "}
          <Box as="span" color="gray.300">
            Computer Engineer
          </Box>
          , who likes{" "}
          <Box as="span" color="gray.300">
            Designing,{" "}
          </Box>{" "}
          <Box as="span" color="gray.300">
            Building
          </Box>{" "}
          and{" "}
          <Box as="span" color="gray.300">
            Hacking
          </Box>{" "}
          projects.
        </Heading>
      </Box>
    </VStack>
  );
};

export default Jumbotron;
