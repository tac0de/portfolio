import Section from "../components/Section";

// Header const
export const headerContent = {
  title: "Won Choi.",
  text: "I'm Won, Jr. web & app developer. Lifetime Learner.",
};

export const myInfoContent = {
  title: "Skills & Experience",
  text: [
    "The main area of my expertise is front end development (client side of the web).",
    "HTML, CSS, JS (TypeScript), building small and medium websites with plain or via React.",
    "Recently, I began learning cross-platform (meaning both Android and iOS) app development with Flutter.",
    "I know little about Node.js (server-side).",
  ],
};

export const infos = [0, 1, 2, 3].map((i) => <p>{myInfoContent.text[i]}</p>);

// Section const
export const sectionContent = {
  title: [
    "Good Quotes App",
    "Seoul Owl",
    "The Unicorn List",
    "Freestyle Rap Coach",
  ],
  firstParagraph: [
    // Good Quotes Introduction
    "Good Quotes is a wellness app designed to motivate, inspire, and heal people with quality quotes. Some features are adding quotes to favorite, sharing quotes via Instagram, changing background images, and setting daily quote reminders.",
    // Seoul Owl Introduction
    "Seoul Owl is a website built for finding cafes and restaurants (mostly franchise) that are open 24 hours in Seoul. People can search cafes and restaurants close to their location via the map. They can click markers shown on the map to see detailed information like addresses, contact number, opening days, and menus.",
    // The Unicorn List Introduction
    "The Unicorn List is a website that you can find most of the unicorn companies that are out there sorted by their valuations. People can view information such as company name, valuations, date joined, country, industry, and selected investors. In Desktop these are represented as tables and card-like layouts in the mobile.",
    // Freestyle Rap Coach Introduction
    "Freestyle Rap Coach is a website made for those who like to rap on the fly. It shows you random words to use in freestyle rap. It has features such as language variation (9 to choose from), setting the word appearance speed, dark-mode, fullscreen-mode, as well as playing preset Sound Cloud rap beats.",
  ],
  secondParagraph: [
    // Good Quotes Built With
    "I developed this app with Flutter and serveral public packages.",
    // Seoul OWl Built With
    "I developed this website using plain HTML, CSS, and JS along with Kakao(Daum) map API.",
    // The Unicorn List Built With
    "I developed this website using plain HTML, CSS, JS, and NodeJS scraping library called Cheerio.",
    // Freestyle Rap Coach Built With
    "I developed this website using plain HTML, CSS, JS and embedded Sound Cloud playlists.",
  ],
  thirdParagraph: [
    // Good Quotes Development Story
    "Good Quotes is my first app to deploy to the app store. Styling the overall look of the app was simple. But having to configure both Android and iOS folder and deploying separately was little bit tricky. Saving variables in the local device permanently and local notification functions were difficult for me. Lastly, in-app-purchase was the most frustrating part struggled with it the most time.",
    // Seoul Owl Development Story
    "Seoul Owl is my first website to deploy successfully. The problems I had to go through was how to implement Kakao map API smoothly into the site. I put some time on learning about the API and getting familiar with it. I really worked hard in creating json data for individual cafes and restaurants manually. Since I couldn't find a way to scrape these 24 hours places data in a better way, I looked up on both Kakao and Naver map for opening hours, compared in order to verify the info.",
    // The Unicorn List Development Story
    "The Unicorn List was developed in order to view unicorn companies thoroughly using responsive custom layout. The table HTML were generated using JS through fetching json data that was scraped from other site. It was experimental to implement mobile version of table layout since traditionally, tables used to have horizontal scrollbar when the screen becomes mobile size. I learned intresting, new way of building flexable layout making this website.",
    // Freestyle Rap Coach Development Story
    "Freestyle Rap Coach was built in suggestion of my older brother since he was into rap music. I benchmarked a similar site and tried to design neatly. Functional code was hard because I was not good at web development at that time and dealing with JS timer and if/else statement used to create dropdown selection button came to me as confusion. I grabbed words in multiple languages from Bitcoin related Github repository.",
  ],
  link: ["", "seoulowl", "theunicornlist", "freestylerapcoach"],
};

export const sections = [0, 1, 2, 3].map((i) => (
  <Section
    isRepo={sectionContent.link[i] === "" ? false : true}
    title={sectionContent.title[i]}
    firstParagraph={sectionContent.firstParagraph[i]}
    secondParagraph={sectionContent.secondParagraph[i]}
    thirdParagraph={sectionContent.thirdParagraph[i]}
    linkToRepo={`https://github.com/tac0de/${sectionContent.link[i]}`}
    linkToSite={`https://${sectionContent.link[i]}.com`}
  />
));
