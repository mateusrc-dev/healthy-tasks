import { Container, TooltipContainer } from "../styles/components/tooltip";

type TooltipProps = {
  content: string;
  children: React.ReactNode;
  clickEvent: () => void;
}; // vamos colocar as propriedades em AvatarImage de uma tag img - podemos fazer isso colocando a tipagem em props

export function Tooltip({ children, content, clickEvent }: TooltipProps) {
  return (
    <Container onClick={clickEvent}>
      {children}
      <TooltipContainer>
        <p>{content}</p>
      </TooltipContainer>
    </Container>
  );
}
