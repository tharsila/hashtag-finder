import * as C from './styles';
import aboutIlustration from '../../images/about-ilustration.svg';
import githubIcon from '../../images/icon-github.svg';
import emailIcon from '../../images/icon-envelope.svg';
import linkedinIcon from '../../images/icon-awesome-linkedin.svg';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { useApi } from '../../hooks/useApi';
import { useEffect, useState } from 'react';
import { IUser } from '../../types/User';

type ProjectData = {
    projectInfo: string;
    teamUsers: IUser[];
}

export const About = () => {
    const api = useApi();
    const [projectData, setProjectData] = useState<ProjectData>();

    useEffect(() => {
        (async () => {
            let projectInfo: string = await api.getProjectInfo();
            let teamUsers: IUser[] | undefined = await api.getTeamUsers();

            let currentData = teamUsers && { projectInfo, teamUsers };

            setProjectData(currentData);
        })();
    }, []);

    return (
        <C.Container>
            <Header>
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
                            {projectData?.projectInfo}
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
                        {projectData?.teamUsers.map((person, index) => (
                            <C.Card key={index}>
                                <C.Avatar
                                    src={person.img}
                                    alt="Avatar"
                                />
                                <C.Title
                                    fontSize={25}
                                    fontColor={'#72EFDB'}
                                >
                                    {person.name}
                                </C.Title>
                                <C.Text
                                    fontSize={16}
                                    lineHeight={1.5}
                                    marginTop={20}
                                >
                                    {person.description}
                                </C.Text>
                                <C.Icons>
                                    <a href={person.github}>
                                        <img
                                            src={githubIcon}
                                            alt="GitHub icon"
                                        />
                                    </a>
                                    <a href={`mailto:${person.email}`}>
                                        <img
                                            src={emailIcon}
                                            alt="Email icon"
                                        />
                                    </a>
                                    <a href={person.linkedin}>
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
