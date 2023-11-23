import {
  CommentContainer,
  CommentText,
  Name,
  Photo,
  Profile,
} from "../styles/components/comment";

type Props = {
  text: string;
  userPhoto: string;
  userName: string;
};

export function Comment({ text, userName, userPhoto }: Props) {
  return (
    <CommentContainer>
      <Profile>
        <Photo src={userPhoto} alt="foto do usuário" width={70} height={70} />
        <Name>{userName}</Name>
      </Profile>
      <CommentText>{text}</CommentText>
    </CommentContainer>
  );
}
