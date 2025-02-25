import clientImage1 from '../assets/client-graph.jpg';
import clientImage2 from '../assets/client-buildings.jpg';

export const awards = [
    {
        title: 'Best Digital Innovation',
        description:
            'Recognized for revolutionary e-commerce platform solution',
        year: 2023,
    },
    {
        title: 'Excellence in Mobile Development',
        description: 'Award for outstanding healthcare application',
        year: 2023,
    },
    {
        title: 'EdTech Company of the Year',
        description: 'Recognized for innovative coding education platform',
        year: 2022,
    },
    {
        title: 'Innovation in Smart City Solutions',
        description: 'Award for IoT infrastructure management system',
        year: 2022,
    },
];

export const caseStudies = [
    {
        title: 'Revolutionary E-commerce Transformation',
        problem:
            "A major retailer was struggling with an outdated e-commerce platform that couldn't handle increasing traffic and had poor mobile performance.",
        solution:
            'Implemented a modern, scalable architecture using microservices and React-based frontend with server-side rendering.',
        results:
            '400% increase in mobile conversion rate, 99.99% uptime during peak shopping seasons.',
    },
    {
        title: 'Educational Platform Innovation',
        problem:
            'Traditional coding bootcamp faced challenges scaling their curriculum delivery and student engagement.',
        solution:
            'Developed an interactive learning platform with real-time collaboration and automated assessment tools.',
        results:
            'Expanded from 100 to 10,000 students while maintaining 95% satisfaction rate.',
    },
    {
        title: 'Healthcare App Transformation',
        problem:
            'Healthcare provider needed a secure, HIPAA-compliant mobile solution for patient engagement.',
        solution:
            'Built a comprehensive mobile health platform with end-to-end encryption and intuitive UX.',
        results:
            '70% increase in patient engagement, 45% reduction in missed appointments.',
    },
];

export const projects = [
    {
        name: 'E-commerce Platform Redesign',
        client: 'Global Retail Co.',
        description:
            'Complete overhaul of legacy e-commerce platform with modern technologies and improved UX',
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
        category: 'web',
        outcome:
            '300% increase in conversion rate, 50% reduction in page load time',
    },
    {
        name: 'Health Tracking Mobile App',
        client: 'HealthTech Solutions',
        description:
            'Comprehensive health and fitness tracking application with social features',
        technologies: ['React Native', 'Firebase', 'GraphQL'],
        category: 'mobile',
        outcome: '1M+ downloads in first 6 months',
    },
    {
        name: 'Coding Bootcamp Platform',
        client: 'TechEd Institute',
        description: 'Interactive learning platform for coding education',
        technologies: ['Vue.js', 'Django', 'PostgreSQL'],
        category: 'education',
        outcome: '10,000+ students trained with 89% job placement rate',
    },
    {
        name: 'Smart City IoT Dashboard',
        client: 'Metropolitan Council',
        description:
            'Real-time monitoring and analytics dashboard for city infrastructure',
        technologies: ['Angular', 'Python', 'TensorFlow', 'IoT'],
        category: 'other',
        outcome: '30% reduction in energy consumption across city facilities',
    },
];

export const stats = [
    {
        value: 20,
        label: 'Projects Completed',
    },
    {
        value: 10,
        label: 'Active Clients',
    },
    {
        value: 1000,
        label: 'Students Taught',
    },
    {
        value: 5,
        label: 'Industry Awards',
    },
];

export const testimonials = [
    {
        quote: "TechCraft Solutions transformed our business with their innovative approach to e-commerce. Their team's expertise and dedication were outstanding.",
        author: 'Sarah Johnson',
        company: 'Global Retail Co.',
        image: clientImage1,
    },
    {
        quote: 'The mobile app they developed exceeded our expectations in every way. User engagement has never been higher.',
        author: 'Michael Chen',
        company: 'HealthTech Solutions',
        image: clientImage2,
    },
    {
        quote: 'Their coding education platform has revolutionized how we teach programming. The results speak for themselves.',
        author: 'Dr. James Wilson',
        company: 'TechEd Institute',
        image: '',
    },
];
