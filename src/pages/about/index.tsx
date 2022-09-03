import React from 'react';
import * as C from './styles';
import aboutIlustration from '../../images/about-ilustration.svg';
import alexAvatar from '../../images/alex.jpg';
import arthurAvatar from '../../images/arthur.jpg';
import tharsilaAvatar from '../../images/tharsila.jpg';
import kaiqueAvatar from '../../images/kaique.jpg';
import githubIcon from '../../images/icon-github.svg';
import emailIcon from '../../images/icon-envelope.svg';
import linkedinIcon from '../../images/icon-awesome-linkedin.svg';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

export const About = () => {
    const peoples = [
        {
            avatar: alexAvatar,
            name: 'Alex',
            description:
                'Lorem Ipsum is Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ips',
        },
        {
            avatar: arthurAvatar,
            name: 'Arthur',
            description:
                'Lorem Ipsum is Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ips',
        },
        {
            avatar: kaiqueAvatar,
            name: 'Kaique',
            description:
                'Lorem Ipsum is Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ips',
        },
        {
            avatar: tharsilaAvatar,
            name: 'Tharsila',
            description:
                'Lorem Ipsum is Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ipsum, Lorem Ips',
        },
    ];

    return (
        <C.Container>
            <Header>
                <div>
                    <Button
                        icon="icon-info-circle.svg"
                        text="SOBRE"
                        color="#0B1741"
                        backgroundColor="#72EFDB"
                    />
                    <Button
                        icon="icon-user-alt.svg"
                        text="LOGIN"
                        color="#FFFFFF"
                        backgroundColor="#1E3E7B"
                    />
                </div>
            </Header>
            <C.AboutArea>
                <C.AboutProject>
                    <div>
                        <C.Title
                            id="aboutTitle"
                            fontSize={65}
                            fontColor={'#FFF'}
                        >
                            Sobre o projeto
                        </C.Title>
                        <C.Text
                            id="aboutText"
                            fontSize={18}
                            lineHeight={1.8}
                            marginTop={40}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita, qui cum iste velit perspiciatis
                            reprehenderit commodi voluptate accusantium odit
                            dicta assumenda, impedit totam a est nam beatae
                            dolor. Soluta, laudantium. Lorem ipsum, dolor sit
                            amet consectetur adipisicing elit. Quia impedit quod
                            asperiores voluptatem neque iure quibusdam, quas
                            cumque deleniti minima quis repellendus aperiam
                            officiis eaque voluptate, et distinctio officia.
                            Ratione. Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Illum, nisi a. Culpa sequi
                            obcaecati nihil magni sit cupiditate repudiandae
                            doloribus facere? Voluptas sed totam tenetur
                            voluptates magnam aliquam quae eaque! Lorem ipsum
                            dolor sit amet consectetur adipisicing elit.
                            Voluptatem, labore.
                        </C.Text>
                    </div>
                    <img
                        id="aboutIlustration"
                        src={aboutIlustration}
                        alt="About ilustration"
                    />
                </C.AboutProject>
                <C.WhoWeAre>
                    <C.Title
                        id="whoWeAreTitle"
                        fontSize={54}
                        fontColor={'#FFF'}
                    >
                        Quem somos
                    </C.Title>
                    <C.Cards>
                        {peoples.map((people) => (
                            <C.Card key={people.name + people.description}>
                                <C.Avatar
                                    src={people.avatar}
                                    alt="Avatar"
                                />
                                <C.Title
                                    fontSize={25}
                                    fontColor={'#72EFDB'}
                                >
                                    {people.name}
                                </C.Title>
                                <C.Text
                                    fontSize={16}
                                    lineHeight={1.5}
                                    marginTop={20}
                                >
                                    {people.description}
                                </C.Text>
                                <C.Icons>
                                    <a href="">
                                        <img
                                            src={githubIcon}
                                            alt="GitHub icon"
                                        />
                                    </a>
                                    <a href="">
                                        <img
                                            src={emailIcon}
                                            alt="Email icon"
                                        />
                                    </a>
                                    <a href="">
                                        <img
                                            src={linkedinIcon}
                                            alt="LinkedIn icon"
                                        />
                                    </a>
                                </C.Icons>
                            </C.Card>
                        ))}
                    </C.Cards>
                </C.WhoWeAre>
            </C.AboutArea>
        </C.Container>
    );
};
