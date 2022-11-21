export const Tools = {
    'telecom': {
        title: 'Telecom',
        script: {
            src: 'https://developers.affiliateprogramma.eu/mobielvergelijker/general.js',
            type: 'application/javascript'
        },
        link: {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://developers.affiliateprogramma.eu/mobielvergelijker/example.min.css'
        },
        filters: null,
        div: '<div class="mobile-comparator-wrapper" data-4g="0" data-actionColor="FF8201" data-basicColor="3498DB" data-button_text="Bekijken" data-condition="" data-duration="0" data-entry="10" data-filter_view="all" data-maxAb="100" data-maxMob="1000" data-mediaid="280414" data-minInt="200" data-minMin="100" data-mobiles="all" data-programs="all" data-provider="all" data-renewal="0" data-subid="IVANHOE" data-v="2"></div>'
    },
    'energie': {
        title: 'Energie',
        script: {
            src: `http://comparators.overstappen.nl/embed.js?cb=${Math.round(new Date().getTime() / 1000)}`,
            type: 'application/javascript'
        },
        link: {
            rel: '',
            type: '',
            href: ''
        },
        filters: null,
        div: '<div id="esos-content" data-funnel="energy"></div>'
    },
    'sim-only': {
        title: 'Sim only',
        script: {
            src: 'https://mobiel.0318media.nl/ext/896b6bb6dd05eeb040095d8123e27fb1ea51143b387b9bbca315b253fadcb704',
            type: 'application/javascript'
        },
        link: {
            rel: '',
            type: '',
            href: '',
        },
        filters: {
            type: 'so'
        },
        div: '<div id="nul318_mobiel_vergelijker"></div>'
    },

    'toestel-abonnement': {
        title: 'Toestel + Abonnement',
        script: {
            src: 'https://mobiel.0318media.nl/ext/896b6bb6dd05eeb040095d8123e27fb1ea51143b387b9bbca315b253fadcb704',
            type: 'application/javascript'
        },
        link: {
            rel: '',
            type: '',
            href: ''
        },
        filters: {
            type: "ta"
        },
        div: '<div id="nul318_mobiel_vergelijker"></div>'
    },

    'toestel': {
        title: 'Toestel',
        script: {
            src: 'https://mobiel.0318media.nl/ext/896b6bb6dd05eeb040095d8123e27fb1ea51143b387b9bbca315b253fadcb704',
            type: 'application/javascript'
        },
        link: {
            rel: '',
            type: '',
            href: ''
        },
        filters: {
            sort: "newest"
        },
        div: '<div id="nul318_mobiel_vergelijker"></div>'
    },

    'zorgverzekering': {
        title: 'Zorgverzekering',
        script: {
            src: `http://comparators.overstappen.nl//embed.js?cb=${Math.round(new Date().getTime() / 1000)}`,
            type: 'application/javascript'
        },
        link: {
            rel: '',
            type: '',
            href: ''
        },
        filters: null,
        div: '<div id="esos-content" data-funnel="health"></div>'
    }
}