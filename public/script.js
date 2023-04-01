const output = document.getElementById("output");
const textArea = document.getElementById("text-area");
const commandsTable = document.getElementById("commands-table");

textArea.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // prevent default behavior of text area

    const input = textArea.value.trim();
    textArea.value = "";

    // Display the user's input in the output
    output.innerHTML += `<span class="input">belohith-website/user says: ${input}</span><br>`;

    switch (input) {
      case "help":
        output.innerHTML +=
          "Here is a list of available commands to get started:<br>";
        output.innerHTML +=
          '<table id="commands-table"><tr><th>Command</th><th>Description</th></tr><tr><td>about</td><td>About Me</td></tr><tr><td>tech-projects</td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr><tr><td>creative-projects</td><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr><tr><td>social</td><td>My Social Media Profiles</td></tr><tr><td>clear</td><td>Clears the terminal output</td></tr></table>';

        const style = `
    <style>
      #commands-table {
        margin-top: 10px;
        border-collapse: collapse;
        width: 50%;
        display: none;
      }
      #commands-table th,
      #commands-table td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }
      #commands-table tr:hover {
        background-color: #222;
      }
      #commands-table th {
        background-color: #4caf50;
        color: white;
      }

      @media screen and (max-width: 768px) {
        #commands-table {
          margin-top: 20px;
          width: 100%;
          display: block;
        }
        #commands-table th,
        #commands-table td {
          padding: 5px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        #commands-table th {
          background-color: #4caf50;
          color: white;
        }
      }
      
    </style>
  `;
        document.head.insertAdjacentHTML("beforeend", style);

        const commandsTable = document.getElementById("commands-table");
        commandsTable.style.display = "table";
        break;


      case "about":
        output.innerHTML += `<p id=commands-about >Hey, Lohith Bollineni here!<br>
        Currently a graduate student studying Computer Science from the State University of New York, New Paltz (USA).<br><br>
        I have a Bachelors Degree in Electronics & Communication from the Vellore Institute of Technology, Chennai (India). <br><br>
        I am looking jobs in the field of Computer Science anywhere in the US. Major Interests: Full Stack Development with preference in Frontend, Data Science, UI UX.<br><br>
        Contact me if you are hiring: bollinel1@newpaltz.edu <br><br>
        Previously I worked with various clients & companies in the fields of Front End Development, Design, UI UX, Video Editing. Ask for my resume or look up my 
        <a target="_blank" href="https://www.belohith.com"> Website </a> / <a target="_blank" href="https://in.linkedin.com/in/lohith-bollineni-aa095a147"> LinkedIn </a> for more details! <br><br>
        <br><span style='font-weight: bold;'>SKILLS</span><br><br>
        Languages: <a>Java · Python · C · C++ · C# · JavaScript · Typescript · Erlang · Elixir · Dart · GoLang</a> <br><br>
        Frameworks/Libraries: <a>Javascript: React · Vue · Angular\n
        Python: Django · Flask \n
        CSS: Bootstrap · Bulma · Tailwind CSS · Material UI · Sass</a> <br><br>
        Web & Mobile Dev: <a> HTML · CSS · JavaScript · TypeScript · XML · NodeJS · Python · Android · Hybrid Mobile · ExpressJS · Flutter · React Native </a><br><br>
        Databases: <a>HTML · CSS · JavaScript · TypeScript · XML · NodeJS · Python · Android · Hybrid Mobile · ExpressJS · Flutter · React Native</a> <br><br>
        DevOps, CI/CD, API: <a>Microsoft Office · GitHub · Docker · Kubernetes · Jenkins ·  Postman</a> <br><br>
        Others: <a>Design · Video Editing · Photography · Author · Typography · Augmented & Virtual Reality · UI & UX · Digital Illustrations</a><br>
        <br>Certifications: <br><br> Google UI UX Design Professional Certificate - <a  target="_blank" href="https://www.coursera.org/account/accomplishments/professional-cert/QLMAEPEF32W5"> View Certificate </a>
        IBM Full Stack Professional Certificate - <a  target="_blank" href="https://www.coursera.org/account/accomplishments/professional-cert/QLMAEPEF32W5"> View Certificate </a> <br>
        IBM Data Science Professional Certificate - <a  target="_blank" href="https://www.coursera.org/account/accomplishments/professional-cert/QLMAEPEF32W5"> View Certificate </a> <br>
        IBM DevOps Professional Certificate - <a  target="_blank" href="https://www.coursera.org/account/accomplishments/professional-cert/QLMAEPEF32W5"> View Certificate </a> <br>
        </p>`;
        const styleabout = `
    <style>
      #commands-about {
        margin-top: 10px;
        border-collapse: collapse;
        width: 50%;
        display: none;
      }
      
      #commands-about a {
          color: #4c99af;
          text-decoration: none;
        }

        @media screen and (max-width: 768px) {
          #commands-about {
            margin-top: 20px;
            width: 100%;
            display: block;
          }
          #commands-about a {
            display: block;
            padding: 10px;
            border-bottom: 1px solid #ddd;
          }
        }
        
      
    </style>
  `;
        document.head.insertAdjacentHTML("beforeend", styleabout);

        const commandsAbout = document.getElementById("commands-about");
        commandsAbout.style.display = "table";
    
        break;


      case "tech-projects":
        output.innerHTML +=
          "Here is a list of the Technical Projects I worked on:<br>";
        output.innerHTML +=
        `<table id="commands-tech"><tr><th>Project</th><th>Link/Demo</th><th>Repo</th><th>Description</th><th>Date started on</th><th>Tools/Tech used</th></tr>
        <tr><td>Shark Tank India React</td><td><a href="https://sharktank-india.web.app/" class="link" target= "_blank">Live</a></td><td><a href="https://github.com/belohith/sharktank-india" class="link" target= "_blank">GitHub</a></td><td>Built using React, this is a website displaying stats from the show Shark Tank India such as shark details, pitch details etc.</td><td>09 Mar 2023</td><td>React · HTML · CSS · Javascript</td></tr>
        <tr><td>Arrow Mark Tracker App</td><td><a href="https://midterm-example.onrender.com/" class="link" target= "_blank">Live</a></td><td><a href="https://github.com/belohith/awsp-home" class="link" target= "_blank">GitHub</a></td><td>A full stack fitness tracker web app that lets you track your daily fitness level details and updates the details with a Login/Signup feature.</td><td>13 Feb 2023</td><td>VueJS · HTML · CSS · Javascript · MongoDB · npm · Bulma</td></tr>
        <tr><td>Text on Image</td><td><a href="https://www.linkedin.com/posts/belohith_python-github-activity-7023663787098415104-Qz0p?utm_source=share&utm_medium=member_desktop" class="link" target= "_blank">Demo</a></td><td><a href="https://github.com/belohith/toiapp" class="link" target= "_blank">GitHub</a></td><td>A simple app, that allows you to add text on to your image and lets you download the image too. (Yet to host publicly)</td><td>24 Jan 2023</td><td>Python · HTML · PIL</td></tr>
        <tr><td>Shark Tank India Data</td><td><a href="https://sharktankindia.streamlit.app/" class="link" target= "_blank">Live</a></td><td><a href="https://github.com/belohith/sharktankindia" class="link" target= "_blank">GitHub</a></td><td>This web app uses Python, Streamlit to create a beautiful and quick website that takes the data (about the show) from an excel sheet.</td><td>08 Jan 2023</td><td>Python · Excel · StreamLit</td></tr>
        <tr><td>Krakkar CSS Framework</td><td><a href="https://krakkar.netlify.app/" class="link" target= "_blank">Docs</a></td><td class="na">N/A</td><td>A CSS framework built to make websites with the following principles in mind: flexible, utility-first, concise and keen-design. (currently beta)</td><td>31 Dec 2022</td><td>Sass · CSS</td></tr>
        <tr><td>The Best Heads Twitter Bot</td><td><a href="https://twitter.com/thebestheads" class="link" target= "_blank">Live</a></td><td class="na">N/A</td><td>A Twitter Bot that scrapes news from various sources and tweets 6 of them in a single image, once in every 8 hours.</td><td>06 Dec 2022</td><td>Python · API · Beautiful Soup</td></tr>
        <tr><td>Implementation of ML Algorithms</td><td class="na">N/A</td><td><a href="https://github.com/belohith/ml-algorithms" class="link" target= "_blank">GitHub</a></td><td>Different machine learning algorithms implemented with Python and demonstrated with the given input dataset.</td><td>13 Nov 2022</td><td>Jupyter Notebook · Python · Machine Learning</td></tr>
        <tr><td>Cybersecurity Methods</td><td class="na">N/A</td><td><a href="https://github.com/belohith/cybersec-methods" class="link" target= "_blank">GitHub</a></td><td>Different cyber security methods demonstrated with the same (almost) input text to show the difference in output.</td><td>10 Nov 2022</td><td>Jupyter Notebook · Python · Cybersecurity</td></tr>
        <tr><td>Spam Classifier</td><td class="na">N/A</td><td><a href="https://github.com/belohith/spam-classifier" class="link" target= "_blank">GitHub</a></td><td>A website that filters spam using an input text from user (generally mail or SMS) using Naive Bayes Classification.</td><td>02 May 2022</td><td>Python · Jupyter Notebook · Excel · StreamLit</td></tr>
        <tr><td>Boogle: Google Clone</td><td><a href="https://boogle-ox.netlify.app/search" class="link" target= "_blank">Live</a></td><td><a href="https://github.com/belohith/boogle-google-clone" class="link" target= "_blank">GitHub</a></td><td>A Google clone built using the Google API to show newsfeed and search results when you search something.</td><td>26 Apr 2022</td><td>React · NodeJS · API · MaterialUI</td></tr>
        <tr><td>Amazon Scraper API</td><td><a href="https://rapidapi.com/bollinenilohith9/api/amazon-scraper-ox" class="link" target= "_blank">Link</a></td><td><a href="https://github.com/belohith/amazon-data-scrapper" class="link" target= "_blank">GitHub</a></td><td>An API to get reviews of products and other details on Amazon Store. The API is published and available on RapidAPI.</td><td> 21 Apr 2022</td><td>API · HTTP · JSON · NodeJS</td></tr>
        <tr><td>Radish: Travel Maps App</td><td><a href="https://radish-ox.netlify.app/" class="link" target= "_blank">Live</a></td><td><a href="https://github.com/belohith/radish-travel-web" class="link" target= "_blank">GitHub</a></td><td>A web app for travel purposes built on an API to view nearby restaurants, hotels and tourist attractions.</td><td>20 Mar 2022</td><td>React · NodeJS · API · MaterialUI</td></tr>
        <tr><td>Ox App Portal</td><td><a href="https://oxappportal.firebaseapp.com/" class="link" target= "_blank">Live</a></td><td class="na">N/A</td><td>A portal for applications on different platforms and devices. (Apps for Web, Mobile, TV, SmartWatch all at one place)</td><td>07 Jan 2022</td><td>React · NodeJS</td></tr>
        <tr><td>AR/VR Filters</td><td><a href="https://www.belohith.com/" class="link" target= "_blank">Link</a></td><td class="na">N/A</td><td>Augmented & Virtual Reality Filters built for the users of Meta and Snap Platforms.</td><td>20 May 2020</td><td>Spark AR · Snap Lens</td></tr>
        <tr><td>Caramel</td><td><a href="https://caramel-ox.netlify.app/" class="link" target= "_blank">Live</a></td><td class="na">N/A</td><td>A social app that lets you connect with people based on thoughts, ideas primarily rather than looks. (Currently beta)</td><td>02 May 2020</td><td>React · NodeJS</td></tr>
        <tr><td>Bytes</td><td><a href="https://play.google.com/store/apps/details?id=com.oxapps.lohithb.bytes" class="link" target= "_blank">Link</a></td><td class="na">N/A</td><td>An Android app which is an adaption of the popular Whack-a-Mole game which is a 3x3 grid button game.</td><td>20 Apr 2019</td><td>Android · Java · XML · Mobile</td></tr>`
        const styletech = `
        <style>
        #commands-tech {
          margin-top: 10px;
          border-collapse: collapse;
          width: 90%;
          display: none;
        }
        #commands-tech th,
        #commands-tech td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        #commands-tech tr:hover {
          background-color: #222;
        }
        #commands-tech th {
          background-color: #e68032;
          color: white;
        }
        #commands-tech .link {
            color: #4c99af;
            text-decoration: none;
          }
          
        #commands-tech .na {
          color: #363535;
          text-decoration: none;
  
        @media only screen and (max-width: 768px) {
          #commands-tech {
            width: 100%;
          }
        }
        </style>
  `;
        document.head.insertAdjacentHTML("beforeend", styletech);

        const commandsTech = document.getElementById("commands-tech");
        commandsTech.style.display = "table";
        break;



      case "creative-projects":
        output.innerHTML +=
          "Here is a list of the Creative Projects I worked on:<br>";
        output.innerHTML +=
        `<table id="commands-creative"><tr><th>Project</th><th>Link</th><th>Type</th><th>Description</th><th>Date published on</th><th>Tools/Skills used</th></tr>
        <tr><td>Waiting in Bangalore: Part 1</td><td><a href="https://www.amazon.com/Waiting-Bangalore-Part-Lohith-Bollineni/dp/B09NRHKHFX/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=" class="link" target= "_blank">Buy</a></td><td>Book</td><td>I was in Bangalore for a few months during a weird phase in my life. I met several people, for different reasons. This book is a short fiction sitcom-kind-of novel trying to explore all the kinds of people I have met then and all the places that I have been to, in Bangalore. I have tried to reflect my experiences by weaving around a fictional tale around a few people in their twenties, living in Bangalore. This is my first book. There could be mistakes but I tried to make it a good read. If you’ve liked it, reach me out and let me know. If you’ve complaints, we must definitely talk.</td><td>06 Jun 2020</td><td>Writing · Editing</td></tr>
        <tr><td>Articles on Medium</td><td><a href="https://medium.com/@belohith" class="link" target= "_blank">Link</a></td><td>Articles</td><td>Articles and Blogs I have written over the years related to various topics.</td><td class="na">N/A</td><td>Writing · Editing</td></tr>
        <tr><td>Incomplete</td><td><a href="https://issuu.com/theteller/docs/april22-final/8" class="link" target= "_blank">Link</a></td><td>Article</td><td>An article that I wrote for the Teller Magazine.</td><td>10 Apr 2022</td><td>Writing · Editing</td></tr>
        <tr><td>Worry</td><td><a href="https://issuu.com/theteller/docs/april22-final/8" class="link" target= "_blank">Link</a></td><td>Article</td><td>An article that I wrote for the Teller Magazine.</td><td>10 Apr 2022</td><td>Writing · Editing</td></tr>
        <tr><td>Late as always</td><td><a href="https://issuu.com/theteller/docs/dec_2021/22" class="link" target= "_blank">Link</a></td><td>Article</td><td>An article that I wrote for the Teller Magazine.</td><td>04 Dec 2021</td><td>Writing · Editing</td></tr>
        <tr><td>Losing a Friend</td><td><a href="https://issuu.com/theteller/docs/may2021_final/44" class="link" target= "_blank">Link</a></td><td>Article</td><td>An article that I wrote for the Teller Magazine.</td><td>01 May 2021</td><td>Writing · Editing</td></tr>
        <tr><td>COVID After Effects</td><td><a href="https://issuu.com/theteller/docs/march_final_2021/9" class="link" target= "_blank">Link</a></td><td>Article</td><td>An article that I wrote for the Teller Magazine.</td><td>28 Feb 2021</td><td>Writing · Editing</td></tr>
        <tr><td>Digital Portraits</td><td><a href="https://www.belohith.com/" class="link" target= "_blank">Link</a></td><td>Design</td><td>Digital Portaits of various people that I have drawn over the years.</td><td class="na">N/A</td><td>Adobe Illustrator</td></tr>
        <tr><td>UI UX</td><td><a href="https://https://www.belohith.com/" class="link" target= "_blank">Link</a></td><td>Design</td><td>UI UX case studies that I have worked on. (web & mobile apps)</td><td class="na">N/A</td><td>Adobe XD · Figma · Sketch · Adobe Photoshop · Adobe Illustrator</td></tr>
        <tr><td>Logos</td><td><a href="https://https://www.belohith.com/" class="link" target= "_blank">Link</a></td><td>Design</td><td>Logos I have created over the years.</td><td class="na">N/A</td><td>Adobe Illustrator · Adobe Photoshop · Canva</td></tr>
        <tr><td>Posters</td><td><a href="https://https://www.belohith.com/" class="link" target= "_blank">Link</a></td><td>Design</td><td>Posters I have created over the years.</td><td class="na">N/A</td><td>Adobe Illustrator · Adobe Photoshop · Canva</td></tr>
        <tr><td>Typography</td><td><a href="https://https://www.belohith.com/" class="link" target= "_blank">Link</a></td><td>Design</td><td>Typography projects and Fonts that I created over the years.</td><td class="na">N/A</td><td>Adobe Illustrator · Adobe Photoshop · Canva</td></tr>
        <tr><td>Photography</td><td><a href="https://https://www.belohith.com/" class="link" target= "_blank">Link</a></td><td>Filming</td><td>Photographs clicked on various occasions over the years: for clients, travel, portaits etc.</td><td class="na">N/A</td><td>Photography · Adobe Lightroom · Adobe Photoshop · Canva </td></tr>
        <tr><td>Video Editing</td><td><a href="https://www.youtube.com/@belohith/playlists" class="link" target= "_blank">Link</a></td><td>Filming</td><td>Videos edited over the years for clients and my personal projects</td><td class="na">N/A</td><td>Adobe Premiere Pro · Adobe Rush · Final Cut Pro</td></tr>
        <tr><td>be with Lohith</td><td><a href="https://open.spotify.com/show/77tgTTXihCsRqLSlFmyovx?si=fc3add6974564975" class="link" target= "_blank">Link</a></td><td>Podcast</td><td>I am surrounded by many inspiring individuals and my thoughts are constantly buzzing in my head, making it difficult to keep them to myself. That's why I've decided to share them with the world through this platform. Here's to all those who choose to join me on this journey. Stay tuned for more exciting episodes!</td><td class="na">N/A</td><td>Anchor FM</td></tr>
        <tr><td>beLohith Youtube</td><td><a href="https://www.youtube.com/@belohith" class="link" target= "_blank">Link</a></td><td>YouTube</td><td>I have a Youtube channel where I share my thoughts, talk with people who I find intersting because of they work they did in the past or about to do in the future. I also like to share my learnings and experstise in all the different fields that I am a part of. Check out the video to understand more. Currently, I am inactive, thanks to my hectic schedule for different reasons. Hopefully, I will get back to doing this soon.</td><td class="na">N/A</td><td>Filming · Editing · Adobe Premiere Pro</td></tr>`
        const stylecreative = `
    <style>
      #commands-creative {
        margin-top: 10px;
        border-collapse: collapse;
        width: 90%;
        display: none;
      }
      #commands-creative th,
      #commands-creative td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }
      #commands-creative tr:hover {
        background-color: #222;
      }
      #commands-creative th {
        background-color: #e68032;
        color: white;
      }
      #commands-creative .link {
          color: #4c99af;
          text-decoration: none;
        }
        
      #commands-creative .na {
        color: #363535;
        text-decoration: none;

        @media screen and (max-width: 768px) {
          #commands-creative {
            width: 100%;
          }
        }
    </style>
  `;
        document.head.insertAdjacentHTML("beforeend", stylecreative);

        const commandsCreative = document.getElementById("commands-creative");
        commandsCreative.style.display = "table";
        break;



      case "social":
        output.innerHTML += "Here is a list of my Social Media Profiles:<br>";
        output.innerHTML += `<table id="commands-social"><tr><th>Platform</th><th>Link</th><th>Description</th></tr>
        <tr><td>Behance</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link</a></td><td>A collection of my design & photography related work</td></tr><tr><td>Dribbble</td><td><a href="https://dribbble.com/lohith36" target= "_blank" class="link">Link</a></td><td>A collection of my design related work</td></tr><tr><td>Facebook</td><td><a href="https://www.facebook.com/lohith.urfrnd" target= "_blank" class="link">Link</td></a><td>My Facebook Page (very inactive)</td></tr><tr><td>Instagram</td><td><a href="https://www.instagram.com/belohith/" target= "_blank" class="link">Link</a></td><td>My Instagram Page (highly active)</td></tr><tr><td>Medium</td><td><a href="https://medium.com/@belohith" target= "_blank" class="link">Link</a></td><td>A collection of my blogs & articles</td></tr>
        <tr><td>YouTube</td><td><a href="https://www.youtube.com/@belohith" target= "_blank" class="link">Link</a></td><td>I have a Youtube channel where I share my thoughts, talk with people who I find intersting because of they work they did in the past or about to do in the future. I also like to share my learnings and experstise in all the different fields that I am a part of. Check out the video to understand more. Currently, I am inactive, thanks to my hectic schedule for different reasons. Hopefully, I will get back to doing this soon.</td></tr><tr><td>Spotify</td><td><a href="https://open.spotify.com/show/77tgTTXihCsRqLSlFmyovx?si=fc3add6974564975" target= "_blank" class="link">Link</a></td><td>I am surrounded by many inspiring individuals and my thoughts are constantly buzzing in my head, making it difficult to keep them to myself. That's why I've decided to share them with the world through this platform. Here's to all those who choose to join me on this journey. Stay tuned for more exciting episodes!</td></tr><tr><td>GitHub</td><td><a href="https://github.com/belohith" target= "_blank" class="link">Link</a></td><td>A collection of repositories of my projects.</td></tr><tr><td>LinkedIn</td><td><a href="https://in.linkedin.com/in/lohith-bollineni-aa095a147" target= "_blank" class="link">Link</a></td><td>Professional Social Media</td></tr><tr><td>Pinterest</td><td><a href="https://in.pinterest.com/bollinenilohith/" target= "_blank" class="link">Link</a></td><td>A collection of aesthetic photos that I found across the Internet (very inactive)</td></tr>
        <tr><td>Twitter</td><td><a href="https://twitter.com/beLohith" target= "_blank" class="link">Link</a></td><td>Twitter Page</td></tr><tr><td>Hashnode</td><td><a href="https://belohith.hashnode.dev/" target= "_blank" class="link">Link</a></td><td>Blogs & Articles related to Technology (Computer Science, Software Development mostly)</td></tr><tr><td>Dev.to</td><td><a href="https://dev.to/belohith" target= "_blank" class="link">Link</a></td><td>Facebook for Developers</td></tr><tr><td>Leetcode</td><td><a href="https://leetcode.com/belohith/" target= "_blank" class="link">Link</a></td><td>Practicing programming/coding.</td></tr><tr><td>Kaggle</td><td><a href="https://www.kaggle.com/lohithbollineni" target= "_blank" class="link">Link</a></td><td>Facebook for Data Science Enthusiasts.</td></tr></table>`;

        const stylesocial = `
  <style>
    #commands-social {
      margin-top: 10px;
      border-collapse: collapse;
      width: 50%;
      display: none;
    }
    #commands-social th,
    #commands-social td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    #commands-social tr:hover {
      background-color: #222;
    }
    #commands-social th {
      background-color: #4c99af;
      color: white;
    }
    #commands-social .link {
        color: #4c99af;
        text-decoration: none;
      }

      @media screen and (max-width: 768px) {
        #commands-social {
          width: 100%;
          padding-right: 20px;
        }
      }
  </style>
`;
        document.head.insertAdjacentHTML("beforeend", stylesocial);

        const commandsSocial = document.getElementById("commands-social");
        commandsSocial.style.display = "table";
        break;


      case "clear":
        output.innerHTML = "";
        break;
      default:
        output.innerHTML += `"${input}" is an invalid command. Enter 'help' to see all available commands.<br>`;
        break;
    }

    // Scroll to the bottom of the output
    output.scrollTop = output.scrollHeight;
  }
});
