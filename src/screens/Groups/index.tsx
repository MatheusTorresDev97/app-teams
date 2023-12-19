import { useState } from "react";
import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { Container } from "./styles";
import { Hightlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>(["Galera do NTI", "Amigos do NTI"]);

  return (
    <Container>
      <Header />

      <Hightlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} 

          />
        )}
      />

    </Container>
  );
};
