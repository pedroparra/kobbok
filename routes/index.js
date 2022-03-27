const express = require('express');
const router = express.Router();
const { IMG_PATH, SOCIAL_LINKS, PAGES } = require('../data');

const currentPage = 'home';
const pageData = PAGES[currentPage];

const home = (req, res) => {
    res.render('pages/home', {
        currentPage,
        seo_title: pageData.seo.title,
        seo_description: pageData.seo.description,
        img_path: IMG_PATH,
        socialLinks: SOCIAL_LINKS,
    });
};

router.get('/', home);

module.exports = router;
