import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

export function Sidebar() {
  return (
    <Box
      as="aside"
      height="100vh"
      width="250px"
      borderRight="1px solid"
      borderColor="gray.200"
      p={4}
    >
      <Flex direction="column" gap={2}>
        <Link href="/examinations" passHref>
          Wizyty 🗓️
        </Link>
        <Link href="/patients" passHref>
          Pacjenci 👳‍♂️
        </Link>
        <Link href="/users" passHref>
          Uzytkownicy 🧑‍⚕️
        </Link>
        <Link href="/settings" passHref>
          Ustawienia ⚙️
        </Link>
      </Flex>
    </Box>
  );
}
