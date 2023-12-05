import { Container, TooltipContainer } from "../styles/components/tooltip";

type TooltipProps = {
  content: string;
  children: React.ReactNode;
}; // vamos colocar as propriedades em AvatarImage de uma tag img - podemos fazer isso colocando a tipagem em props

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <Container>
      {children}
      <TooltipContainer>
        <p>{content}</p>
      </TooltipContainer>
    </Container>
  );
}
