import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Hightlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

export const Players = () => {
  return (
    <Container>
      <Header showBackButton />

      <Hightlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

     <Form>
     <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon 
          icon="add" 
        />
     </Form>
    </Container>
  );
};
