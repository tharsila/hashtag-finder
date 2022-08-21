import { AboutArea, AboutProject, Text, Title, Container, WhoWeAre, Card, Cards, Avatar } from "./styles";
import aboutIlustration from "../../images/about-ilustration.svg";
import arthurAvatar from "../../images/arthur.jpg";
import tharsilaAvatar from "../../images/tharsila.jpg";
import kaiqueAvatar from "../../images/kaique.jpg";


export const About = () => {

    const peoples = [
        { avatar: arthurAvatar, name: 'Arthur Borges', description: 'Lorem Ipsum is Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ips' },
        { avatar: tharsilaAvatar, name: 'Tharsila Borges', description: 'Lorem Ipsum is Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ips' },
        { avatar: kaiqueAvatar, name: 'Kaique Silva', description: 'Lorem Ipsum is Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ips' },
        { avatar: arthurAvatar, name: 'Alex', description: 'Lorem Ipsum is Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ips' },
    ];

    return (
        <Container>
            <AboutArea>
                <AboutProject>
                    <div>
                        <Title fontSize={65} fontColor={'#FFF'} textIndent={0}>Sobre o projeto</Title>
                        <Text fontSize={18} lineHeight={1.8} marginTop={40}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, qui cum iste velit perspiciatis reprehenderit commodi voluptate accusantium odit dicta assumenda, impedit totam a est nam beatae dolor. Soluta, laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia impedit quod asperiores voluptatem neque iure quibusdam, quas cumque deleniti minima quis repellendus aperiam officiis eaque voluptate, et distinctio officia. Ratione. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, nisi a. Culpa sequi obcaecati nihil magni sit cupiditate repudiandae doloribus facere? Voluptas sed totam tenetur voluptates magnam aliquam quae eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, labore.</Text>
                    </div>
                    <img id="aboutIlustration" src={aboutIlustration} alt="About ilustration" />
                </AboutProject>
                <WhoWeAre>
                    <Title fontSize={54} fontColor={'#FFF'} textIndent={40}>Quem somos</Title>
                    <Cards>
                        {peoples.map(people => (
                            <Card key={people.name + people.description}>
                                <Avatar src={people.avatar} alt="Avatar" />
                                <Title fontSize={25} fontColor={'#72EFDB'} textIndent={0}>{people.name}</Title>
                                <Text fontSize={16} lineHeight={1.5} marginTop={20}>{people.description}</Text>
                            </Card>
                        ))}
                    </Cards>
                </WhoWeAre>
            </AboutArea>
        </Container>
    );
};