import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { FC } from "react";
import Venture from "types/venture";

const Ventures = dynamic(
  () => import(/* webpackChunkName: "Ventures" */ "components/layouts/ventures")
);

interface Props {
  ventures: Venture[];
}

const Venture: FC<Props> = ({ ventures = [] }) => {
  return (
    <Box as="main" maxW="6xl" mx="auto" p={8}>
      <Ventures ventures={ventures} />
    </Box>
  );
};

export default Venture;
