import { Container, Category, AddCategoryIcon } from "./styles";

import ChannelButton from "../ChannelButton";

const ChannelList = () => {
    return (
        <Container>
            <Category>
                <span>Canais de Texto</span>
                <AddCategoryIcon />
            </Category>
            
            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="chat-livre" />
        </Container>
    );
};

export default ChannelList;