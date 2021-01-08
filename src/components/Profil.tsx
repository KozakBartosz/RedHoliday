import React from 'react';
import styled from 'styled-components';
import ProfilType from '../types/Profil';

interface ProfilProps {
    user: ProfilType;
}

export const Profil = ({ user }: ProfilProps) => {
    return (
        <Container>
            <Picture src={user.picture} alt={user.name[0]} />
            <h1>{user.name}</h1>
        </Container>
    );
};

const Container = styled.div`
    width: 294px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Picture = styled.img`
    overflow: hidden;
    background: #40b3b8;
    color: white;
    text-align: center;
    font-size: 87px;
    line-height: 138px;
    border-radius: 50%;
    letter-spacing: 13px;
    border-radius: 50%;
    width: 141px;
    height: 141px;
    object-fit: cover;
`;
