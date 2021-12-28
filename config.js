// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Omar',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
 // weatherKey: 'InsertYourAPIKeyHere123456',
 // weatherIcons: 'Nord', // 'Nord', 'Dark', 'White'
 // weatherUnit: 'C', // 'F', 'C'
  //language: 'en', // More languages in https://openweathermap.org/current#multi

 // trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
//  defaultLatitude: '37.775',
//  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://outlook.office.com/mail/inbox',
    },
    {
      id: '3',
      name: 'Whatsapp',
      icon: 'message-circle',
      link: 'https://web.whatsapp.com/',
    },
    {
      id: '4',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
    {
      id: '5',
      name: ' Twitch',
      icon: 'twitch',
      link: 'http://twitch.tv',
    },
    {
      id: '6',
      name: ' Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/home',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  //firstListIcon: 'music',
  //secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Discord',
        link: 'https://discord.com/channels/@me',
      },
      {
        name: 'Arch Wiki',
        link: 'https://wiki.archlinux.org/',
      },
      {
        name: 'Canvas',
        link: 'https://canvas.hw.ac.uk/',
      },
      {
        name: 'Spotify',
        link: 'https://open.spotify.com/',
      },
    ],
    secondList: [
      {
        name: 'CNCPTS',
        link: 'https://cncpts.ae/',
      },
      {
        name: 'Foot Locker',
        link: 'https://www.footlocker.ae/en/',
      },
      {
        name: 'Jordan DXB',
        link: 'https://jordandxb.com/',
      },
      {
        name: 'Firefox Config',
        link: 'about:config',
      },
    ],
  },
};
