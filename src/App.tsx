import { useGetJokeQuery } from "./services/jokeApi";
import {
  Button,
  Heading,
  IconButton,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

import PulseLoader from "react-spinners/PulseLoader";
import ErrorAlert from "./components/ErrorAlert";
import { FaMoon, FaSun } from "react-icons/all";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { data, error, isFetching, refetch } = useGetJokeQuery();
  return (
    <VStack p={10} spacing={10}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        aria-label="toggle-color-mode"
        isRound
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
        p={10}
      >
        Random Programing Joke
      </Heading>
      <Button
        colorScheme="blue"
        isLoading={!!isFetching}
        onClick={() => refetch()}
      >
        Get New Joke
      </Button>
      {isFetching ? (
        <PulseLoader color="#3182CE" size={20} />
      ) : error ? (
        <ErrorAlert />
      ) : (
        <Text
          h={150}
          maxH={150}
          mx="auto"
          fontSize={["lg", "xl", "2xl", "3xl"]}
        >
          {data?.joke}
        </Text>
      )}
    </VStack>
  );
};

export default App;
