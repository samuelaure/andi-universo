import React from 'react';
import HubLayout from '../components/HubLayout';
import { Heart, ScrollText, UserCheck, Star } from 'lucide-react';

const BioHubPage: React.FC = () => {
    const links = [
        {
            title: 'Compañía y contención',
            description: 'Un espacio sagrado para integrar tu naturaleza y transformar tu maternidad.',
            url: '/',
            icon: Heart,
            color: '#802b48',
        },
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
            title="Andi Universo"
            subtitle="Guía y contención para madres que buscan claridad en sus procesos y en los de su familia."
            links={links}
        />
    );
};

export default BioHubPage;
