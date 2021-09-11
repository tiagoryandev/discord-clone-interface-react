import ServerButton from "../ServerButton";

import { Container, Separator } from "./styles";

const ServerList = () => {
    return (
        <Container>
            <ServerButton isHome />
            <Separator />

            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton hasNotifications mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
        </Container>
    );
};

export default ServerList;