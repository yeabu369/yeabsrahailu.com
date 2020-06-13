import React, { FC, useState, FormEvent } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Link as _Link,
  Image,
  useColorMode,
  Input,
} from "@chakra-ui/core";
import Link from "next/link";
import IPublication from "types/publication";
import { IoMdArrowRoundForward } from "react-icons/io";

interface Props {
  publications: IPublication[];
  hideViewAllLinksNode?: boolean;
}

const Publications: FC<Props> = ({
  publications = [],
  hideViewAllLinksNode = false,
}) => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: "white", dark: "gray.900" };
  const cardColor = { light: "gray.900", dark: "white" };
  const [searchQuery, setSearchQuery] = useState("");
  const sortedPublications = publications
    .sort(
      (a: IPublication, b: IPublication) =>
        Number(new Date(b.date)) - Number(new Date(a.date))
    )
    .filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const viewAllLinksNode = () => {
    return (
      <Link href="/publications">
        <_Link p={2} href="/publications" rounded="md">
          <Stack spacing={2} isInline alignItems="center">
            <Box fontWeight="bold">View all publications</Box>
            <Box as={IoMdArrowRoundForward} size="15px" />
          </Stack>
        </_Link>
      </Link>
    );
  };

  const searchNode = () => {
    if (!hideViewAllLinksNode) return false;

    return (
      <Box>
        <Input
          value={searchQuery}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setSearchQuery(e.currentTarget.value)
          }
          placeholder="Search for a publication"
        />
      </Box>
    );
  };

  const headingNode = () => {
    if (hideViewAllLinksNode) {
      return (
        <Stack isInline spacing={4} alignItems="center">
          <Box>
            <Image
              objectFit="cover"
              src="/images/common/publications.svg"
              alt="Publications"
              size={20}
              bg={cardColor[colorMode]}
              color={cardBgColor[colorMode]}
              rounded="full"
              p={2}
            />
          </Box>
          <Box>
            <Stack spacing={2}>
              <Heading as="h2" size="xl">
                Publications
              </Heading>
              <Text>
                publications which have been published on other websites
              </Text>
            </Stack>
          </Box>
        </Stack>
      );
    }

    return (
      <Box d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="xl">
          Publications
        </Heading>
        {viewAllLinksNode()}
      </Box>
    );
  };

  const dateNode = (date: string) => {
    return (
      <Stack spacing={2} isInline alignItems="center">
        <Box>
          <Text fontSize="xs">{date}</Text>
        </Box>
      </Stack>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text fontSize="sm">{description}</Text>;
  };

  const ctaNode = () => {
    return (
      <Button rightIcon="external-link" variant="link" fontSize="sm">
        Read more
      </Button>
    );
  };

  const publicationsNode = () => {
    if (!sortedPublications.length) {
      return (
        <Stack mx="auto" textAlign="center">
          <Image
            src="/images/common/no-items.svg"
            alt="No publications found!"
            size={64}
          />
          <Text>No publications found!</Text>
        </Stack>
      );
    }

    return sortedPublications.map(
      (publication: IPublication, index: number) => {
        return (
          <Box
            key={index}
            bg={cardBgColor[colorMode]}
            color={cardColor[colorMode]}
            p={8}
            rounded="md"
            shadow="md"
          >
            <a href={publication.url} target="_blank" rel="noopener">
              <Box>
                <Stack spacing={4}>
                  {dateNode(publication.date)}
                  {titleNode(publication.title)}
                  {descriptionNode(publication.description)}
                  <Box>{ctaNode()}</Box>
                </Stack>
              </Box>
            </a>
          </Box>
        );
      }
    );
  };

  return (
    <Stack spacing={8}>
      {headingNode()}
      {searchNode()}
      {publicationsNode()}
    </Stack>
  );
};

export default Publications;
