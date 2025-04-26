import { Tabs } from "@chakra-ui/react";
import { LuFolder, LuSquareCheck } from "react-icons/lu";

export function TopMenu() {
  return (
    <Tabs.Root defaultValue="patients">
      <Tabs.List>
        <Tabs.Trigger value="patients">
          <LuFolder />
          Pacjenci
        </Tabs.Trigger>
        <Tabs.Trigger value="appointments">
          <LuFolder />
          Wizyty
        </Tabs.Trigger>
        <Tabs.Trigger value="tasks">
          <LuSquareCheck />
          Zadania
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="patients">Zarządzaj uzytkownikami</Tabs.Content>
      <Tabs.Content value="appointments">Zarządzaj wizytami</Tabs.Content>
      <Tabs.Content value="projects">Zarządzaj zadaniami</Tabs.Content>
      <Tabs.Content value="tasks">
        Manage your tasks for freelancers
      </Tabs.Content>
    </Tabs.Root>
  );
}
