import React from 'react';
import HubLayout from '../components/HubLayout';
import { ScrollText, UserCheck, Star } from 'lucide-react';

const FamiliaHubPage: React.FC = () => {
    const links = [
        {
            title: 'Pergaminos Familiares',
            description: 'El sistema completo para ordenar la convivencia y el entendimiento en el hogar.',
            url: '/pergaminos',
            icon: ScrollText,
            color: '#e1a239',
        },
        {
            title: 'Sesión de Diseño Humano',
            description: 'Tu manual de usuario único para vivir con menos resistencia y más paz.',
            url: '/human-design/sesion',
            icon: UserCheck,
            color: '#4c2b08',
        },
        {
            title: 'Sesión de Astrología',
            description: 'Tu carta astral como brújula para entender tu energía y procesos.',
            url: '/astrologia/sesion',
            icon: Star,
            color: '#802b48',
        },
    ];

    return (
        <HubLayout
            title="Acompañamiento Familiar"
            subtitle="Recursos para transformar la dinámica de tu hogar y entender la naturaleza de cada integrante."
            links={links}
        />
    );
};

export default FamiliaHubPage;
