import {
  Box,
  Button,
  Grid,
  Heading,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import Venture from "types/venture";

interface Props {
  ventures: Venture[];
}

const Ventures: FC<Props> = ({ ventures = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const sortedVentures = ventures.filter((venture: Venture) =>
    venture.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const headingNode = () => {
    return (
      <Box>
        <VStack spacing={2} align="left">
          <Heading as="h1" size="lg" color="white">
            Ventures
          </Heading>
          <Text>Ventures in development.</Text>
        </VStack>
      </Box>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" lineHeight="tall" color="blue.400">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text color="gray.400">{description}</Text>;
  };

  const venturesNode = () => {
    if (!sortedVentures.length) {
      return (
        <VStack mx="auto" textAlign="center" w="100%">
          <Text>No ventures found!</Text>
        </VStack>
      );
    }

    return (
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={8}
      >
        {sortedVentures.map((venture: Venture, index: number) => {
          return (
            <Box
              key={index}
              bg="gray.900"
              color="white"
              rounded="sm"
              borderWidth={1}
              borderColor="gray.700"
            >
              <Link
                href={venture.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box p={8}>
                  <VStack
                    spacing={4}
                    minH={24}
                    justifyContent="space-between"
                    align="left"
                  >
                    <VStack spacing={1} align="left">
                      {titleNode(venture.title)}
                      {descriptionNode(venture.description)}
                    </VStack>
                  </VStack>
                </Box>
              </Link>
            </Box>
          );
        })}
      </Grid>
    );
  };

  return (
    <VStack spacing={8} align="left">
      {headingNode()}
      {venturesNode()}
    </VStack>
  );
};

export default Ventures;
