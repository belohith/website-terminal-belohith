const output = document.getElementById("output");
const textArea = document.getElementById("text-area");
const commandsTable = document.getElementById("commands-table");

textArea.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // prevent default behavior of text area

    const input = textArea.value.trim();
    textArea.value = "";

    // Display the user's input in the output
    output.innerHTML += `<span class="input">${input}</span><br>`;

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
          '<table id="commands-tech"><tr><th>Project</th><th>Description</th></tr><tr><td>about</td><td>About Me</td></tr><tr><td>tech-projects</td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr><tr><td>creative-projects</td><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr><tr><td>social</td><td>My Social Media Profiles</td></tr><tr><td>clear</td><td>Clears the terminal output</td></tr></table>';

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
        background-color: #4caf50;
        color: white;
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
          '<table id="commands-creative"><tr><th>Project</th><th>Description</th></tr><tr><td>about</td><td>About Me</td></tr><tr><td>tech-projects</td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr><tr><td>creative-projects</td><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr><tr><td>social</td><td>My Social Media Profiles</td></tr><tr><td>clear</td><td>Clears the terminal output</td></tr></table>';

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
        output.innerHTML += `<table id="commands-social"><tr><th>Platform</th><th>Description</th></tr><tr><td>Behance</td><td>About Me</td></tr><tr><td>Dribbble</td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr><tr><td>Facebook</td><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr><tr><td>Instagram</td><td>My Social Media Profiles</td></tr><tr><td>clear</td><td>Clears the terminal output</td></tr>
        <tr><td>Behance</td><td>About Me</td></tr><tr><td>Dribbble</td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr><tr><td>Facebook</td><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr><tr><td>Instagram</td><td>My Social Media Profiles</td></tr><tr><td>clear</td><td>Clears the terminal output</td></tr>
        <tr><td>Behance</td><td>About Me</td></tr><tr><td>Dribbble</td><td>Projects in the Tech Domain like Web Development, Programming, AR/VR etc.</td></tr><tr><td>Facebook</td><td>Projects in the Creative Domain like Design, Filming, Photography, Writing etc.</td></tr><tr><td>Instagram</td><td>My Social Media Profiles</td></tr><tr><td>clear</td><td>Clears the terminal output</td></tr></table>`;

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
      background-color: #4caf50;
      color: white;
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
