"use client";
import { Box, Button, Flex, Heading, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function TopMenu() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const appName = "Dawkometr🧪";

  // Default values for server rendering
  const defaultBgColor = "blue.500";
  const defaultTextColor = "white";

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      router.push("/login");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoaderComponent />;
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={4}
      bg="gray.800"
      color="white"
      boxShadow="md"
    >
      <Heading as="h1" size="lg" letterSpacing="tight">
        <Link href="/" passHref>
          <Box as="span" _hover={{ color: "blue.300", cursor: "pointer" }}>
            {appName}
          </Box>
        </Link>
      </Heading>

      <Box>
        <Button
          onClick={handleLogin}
          bg={defaultBgColor}
          color={defaultTextColor}
          _hover={{ bg: "blue.600" }}
          size="md"
        >
          Login
        </Button>
      </Box>
    </Flex>
  );
}

function LoaderComponent() {
  return (
    <Flex justify="center" align="center" height="16">
      <Spinner size="md" color="white" />
    </Flex>
  );
}
