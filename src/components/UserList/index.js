import { Container, Role, User, Avatar } from "./styles";

const UserRow = (props) => {
    return (
        <User>
            <Avatar className={props.isBot ? "bot" : ""} avatarURL={props.avatarURL ? props.avatarURL : "" } />

            <strong>{props.nickname}</strong>

            {props.isBot && <span>Bot</span>}
        </User>
    );
};

const UserList = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="TiaGoiNsaNy" avatarURL="https://cdn.discordapp.com/avatars/568182075929395210/3672b1542f64e584f2cefaf9ba605863.png?size=1024" />

            <Role>Offline - 1</Role>
            <UserRow nickname="WinG4merBR" avatarURL="https://cdn.discordapp.com/avatars/687867247116812378/e1809fd34bce019476c589afd03fbe00.png?size=1024" isBot />
        </Container>
    );
};

export default UserList;