function showOutput(reponse) {
    console.log(reponse.data.answer);
  
    new Typewriter("#result", {
      strings: reponse.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  function giveAdvise(event) {
    event.preventDefault();
  
    let userInput = document.querySelector("#user-input");
    let apiKey = "4c08634eb8b52t7acf769o96f5812f64";
    let context = `Hi AI assistance. Please advise on a touring plan based on the city or country (location) selected by the user. It should be a very concise a short plan that includes a maximum of the 3 must dos in the selected location. Please make sure that each point that you mention is a bullet point in an independent paragraph. Start your answer by saying "Must-dos in" location selected by the user. Then sumarize the these 3 topics, each in a different paragraph with 1cm space in between. The answer should be HTML style with break sentences within each point. Give just a short summary information about these top 3 things, but not a long context, just mention the things to do. Present these things by relevance of importance. In a different line, finalize your text always with "Enjoy your time in location" and in a last line sign it off with your name in bold letters "Your travel guide".`;
    let prompt = `The user selected location ${userInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios(apiUrl).then(showOutput);
  
    let outputAdvise = document.querySelector(".output");
    outputAdvise.classList.remove("hidden");
    let responseElement = document.querySelector("#result");
    responseElement.innerHTML = `<div class="blink_me"> ⌛Generating the top 3 things to do in ${userInput.value} for you </div>`;
  }
  
  let submitButton = document.querySelector("#travel-advise");
  submitButton.addEventListener("submit", giveAdvise);
  