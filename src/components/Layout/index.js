import { Grid } from "./styles";

import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChannelList from "../ChannelList";
import ChannelInfo from "../ChannelInfo";
import ChannelData from "../ChannelData";
import UserInfo from "../UserInfo";
import UserList from "../UserList";

const Layout = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
            <UserInfo />
            <ChannelData />
            <UserList />
        </Grid>
    );
};

export default Layout;