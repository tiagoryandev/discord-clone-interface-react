import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from "./styles";

const UserInfo = () => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>TiaGoiNsaNy</strong>
                    <span>#9903</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    );
};

export default UserInfo;