const SOCIAL_LINKS = [
    {
        platform: 'instagram',
        title: 'Instagram',
        link: 'https://www.instagram.com/kobbokmusic/',
    },
    {
        platform: 'youtube',
        title: 'Youtube',
        link: 'https://www.youtube.com/channel/UCvh--KQFZeKsQSB49DA-m_A',
    },
    {
        platform: 'facebook',
        title: 'Facebook',
        link: 'https://www.facebook.com/KoBBoK-106230105046289/',
    },
    {
        platform: 'soundcloud',
        title: 'Soundcloud',
        link: ' https://soundcloud.app.goo.gl/MgpRUtxHCgza3Fej9',
    },
];

const IMG_PATH = 'https://ah-deploy.s3.eu-west-3.amazonaws.com/img/';

const PAGES = {
    home: {
        route: '/',
        title: 'Home',
        seo: {
            title: 'Official Website - KOBBOK',
            description: 'Official Website - KOBBOK',
        },
        priority: 0.8,
    },
};

module.exports = {
    IMG_PATH,
    SOCIAL_LINKS,
    PAGES,
};
