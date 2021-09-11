import { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData = () => {
    const messagesRef = useRef();

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        };
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Usuário Aleatório"
                        date="10/11/2021"
                        content="Spam desnecessário"
                    />
                ))}

                <ChannelMessage
                    author="TiaGoiNsaNy"
                    avatarURL="https://cdn.discordapp.com/avatars/568182075929395210/3672b1542f64e584f2cefaf9ba605863.png?size=1024"
                    date="10/11/2021"
                    content="Estou estudando React!"
                />

                <ChannelMessage
                    author="WinG4merBR"
                    date="10/11/2021"
                    avatarURL="https://cdn.discordapp.com/avatars/687867247116812378/e1809fd34bce019476c589afd03fbe00.png?size=1024"
                    content={
                        <>
                            <Mention>@TiaGoiNsaNy</Mention> que legal!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;