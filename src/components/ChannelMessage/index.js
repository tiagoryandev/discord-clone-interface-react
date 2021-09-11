import { Container, Avatar, Message, Header, Content } from "./styles";

export { Mention } from "./styles";

const ChannelMessage = (props) => {
    return (
        <Container className={props.hasMention ? "mention" : ""}>
            <Avatar
                className={props.isBot ? "bot" : ""}
                avatarURL={props.avatarURL ? props.avatarURL : ""}
            />

            <Message>
                <Header>
                    <strong>{props.author}</strong>

                    {props.isBot && <span>Bot</span>}

                    <time>{props.date}</time>
                </Header>
                <Content>{props.content}</Content>
            </Message>
        </Container>
    );
};

export default ChannelMessage;