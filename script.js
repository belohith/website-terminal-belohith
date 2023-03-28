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
    </style>
  `;
        document.head.insertAdjacentHTML("beforeend", style);

        const commandsTable = document.getElementById("commands-table");
        commandsTable.style.display = "table";
        break;


      case "about":
        output.innerHTML += "About<br>";
        break;


      case "tech-projects":
        output.innerHTML +=
          "Here is a list of the Technical Projects I worked on:<br>";
        output.innerHTML +=
        `<table id="commands-tech"><tr><th>Project</th><th>Link/Demo</th><th>Repo</th><th>Description</th><th>Date started on</th><th>Tools/Tech used</th></tr>
        <tr><td>Shark Tank India React</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>About Me</td></tr>
        <tr><td>Arrow Mark Tracker App</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr>
        <tr><td>Text on Image</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr>
        <tr><td>Shark Tank India Data</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>My Social Media Profiles</td></tr>
        <tr><td>Krakkar CSS Framework</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>Clears the terminal output</td></tr>
        <tr><td>The Best Heads Twitter Bot</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>About Me</td></tr>
        <tr><td>Implementation of ML Algorithms</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr>
        <tr><td>Cybersecurity Methods</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr>
        <tr><td>Spam Classifier</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>My Social Media Profiles</td></tr>
        <tr><td>Boogle: Google Clone</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>Clears the terminal output</td></tr>
        <tr><td>Amazon Scraper API</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>About Me</td></tr>
        <tr><td>Radish: Travel Maps App</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr>
        <tr><td>Ox App Portal</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr>
        <tr><td>Caramel</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>My Social Media Profiles</td></tr>
        <tr><td>Bytes</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>Clears the terminal output</td></tr>
        <tr><td>AR/VR Filters</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link/Demo</a></td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">GitHub</a></td><td>Clears the terminal output</td></tr>`
        const styletech = `
    <style>
      #commands-tech {
        margin-top: 10px;
        border-collapse: collapse;
        width: 50%;
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
        background-color: #f2e536;
        color: #111111;
        font-weight: bold;
      }
      #commands-tech .link {
          color: #4c99af;
          text-decoration: none;
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
        `<table id="commands-creative"><tr><th>Project</th><th>Description</th></tr><tr><td>Behance</td><td>About Me</td></tr><tr><td>Dribbble</td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr><tr><td>Facebook</td><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr><tr><td>Instagram</td><td>My Social Media Profiles</td></tr><tr><td>clear</td><td>Clears the terminal output</td></tr>
        <tr><td>Behance</td><td>About Me</td></tr><tr><td>Dribbble</td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr><tr><td>Facebook</td><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr><tr><td>Instagram</td><td>My Social Media Profiles</td></tr><tr><td>clear</td><td>Clears the terminal output</td></tr>
        <tr><td>Behance</td><td>About Me</td></tr><tr><td>Dribbble</td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr><tr><td>Facebook</td><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr><tr><td>Instagram</td><td>My Social Media Profiles</td></tr><tr><td>clear</td><td>Clears the terminal output</td></tr></table>`
        const stylecreative = `
    <style>
      #commands-creative {
        margin-top: 10px;
        border-collapse: collapse;
        width: 50%;
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
        background-color: #4caf50;
        color: white;
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
        <tr><td>Behance</td><td><a href="https://www.behance.net/belohith" class="link" target= "_blank">Link</a></td><td>About Me</td></tr><tr><td>Dribbble</td><td><a href="https://dribbble.com/lohith36" target= "_blank" class="link">Link</a></td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr><tr><td>Facebook</td><td><a href="https://www.facebook.com/lohith.urfrnd" target= "_blank" class="link">Link</td></a><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr><tr><td>Instagram</td><td><a href="https://www.instagram.com/belohith/" target= "_blank" class="link">Link</a></td><td>My Social Media Profiles</td></tr><tr><td>Medium</td><td><a href="https://medium.com/@belohith" target= "_blank" class="link">Link</a></td><td>Clears the terminal output</td></tr>
        <tr><td>YouTube</td><td><a href="https://www.youtube.com/@belohith" target= "_blank" class="link">Link</a></td><td>About Me</td></tr><tr><td>Spotify</td><td><a href="https://open.spotify.com/show/77tgTTXihCsRqLSlFmyovx?si=fc3add6974564975" target= "_blank" class="link">Link</a></td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr><tr><td>GitHub</td><td><a href="https://github.com/belohith" target= "_blank" class="link">Link</a></td><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr><tr><td>LinkedIn</td><td><a href="https://in.linkedin.com/in/lohith-bollineni-aa095a147" target= "_blank" class="link">Link</a></td><td>My Social Media Profiles</td></tr><tr><td>Pinterest</td><td><a href="https://in.pinterest.com/bollinenilohith/" target= "_blank" class="link">Link</a></td><td>Clears the terminal output</td></tr>
        <tr><td>Twitter</td><td><a href="https://twitter.com/beLohith" target= "_blank" class="link">Link</a></td><td>About Me</td></tr><tr><td>Hashnode</td><td><a href="https://belohith.hashnode.dev/" target= "_blank" class="link">Link</a></td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr><tr><td>Dev.to</td><td><a href="https://dev.to/belohith" target= "_blank" class="link">Link</a></td><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr><tr><td>Leetcode</td><td><a href="https://leetcode.com/belohith/" target= "_blank" class="link">Link</a></td><td>My Social Media Profiles</td></tr><tr><td>Kaggle</td><td><a href="https://www.kaggle.com/lohithbollineni" target= "_blank" class="link">Link</a></td><td>Clears the terminal output</td></tr></table>`;

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
