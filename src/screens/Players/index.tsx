import { Header } from "@components/Header";
import { Container } from "./styles";
import { Hightlight } from "@components/Highlight";

export const Players = () => {
  return (
    <Container>
      <Header showBackButton />

      <Hightlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
    </Container>
  );
};
