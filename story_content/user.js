function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ffqL7jhbWX":
        Script1();
        break;
      case "6CNEGpMcOcO":
        Script2();
        break;
      case "6jUJAU9QXA2":
        Script3();
        break;
      case "5seTzWswibd":
        Script4();
        break;
      case "66yITU9TBFg":
        Script5();
        break;
      case "6IkaFFOpMZV":
        Script6();
        break;
      case "6XL88vBO4mZ":
        Script7();
        break;
      case "6m1QxqtaMKQ":
        Script8();
        break;
      case "5fmJhc1Lhy6":
        Script9();
        break;
  }
}

function Script1()
{
  // Get the player object
var player = GetPlayer();

// Define the variable name in Storyline
var recognizedSpeechVar = "SL_transcript";

// Create a new SpeechRecognition object
var recognition = new webkitSpeechRecognition(); // Chrome uses the 'webkit' prefix

// Set the language for speech recognition
recognition.lang = 'en-US'; // Specify the language

// Enable continuous speech recognition
recognition.continuous = true;

// Create a new SpeechSynthesisUtterance object for updating the transcript
var utterance = new SpeechSynthesisUtterance();

// Variable to store the speech-to-text transcript
var transcript = '';

// Event handler for capturing interim results (partial transcriptions)
recognition.onresult = function(event) {
  var interimTranscript = '';
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      transcript += event.results[i][0].transcript + ' ';
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  player.SetVar("recognizedSpeechVar", transcript);
  utterance.text = interimTranscript;
  speechSynthesis.speak(utterance);
};

// Start speech recognition
recognition.start();
}

function Script2()
{
  const player = GetPlayer();

//You should change the following 3 variables. Make sure that the text is enclosed by quotation marks.
const systemRequest = "Based on my response, reply with one of the following question, (note- 1) respond with a question only. 2) do not add any extra text to it. 3) questions are saperated by $ sign) Options- $ Can you elaborate on a situation where you encountered a challenge between maximizing profitability and ensuring homeowner satisfaction? How did you handle it, and what were the outcomes? $ Could you provide an example of a time when you observed complacency within your team or organization? How did you address this issue and encourage a culture of continuous improvement and innovation? $ Can you describe a specific initiative or strategy you've implemented to promote a homeowner-centric approach to innovation? What impact did it have on the organization and its relationship with homeowners? $ Please share a situation where resistance to change and a preference for maintaining existing practices were evident in your team or organization. How did you navigate this resistance and foster a culture of adaptability and growth? Here is my response-"
const userInputVariable = "TextEntry"
const aiOutputVariable = "aiResponse"

const userEntry = player.GetVar(userInputVariable)
const auth = "Bearer " + player.GetVar("token");

function sendRequest() {
    fetch("https://api.openai.com/v1/chat/completions", {
        method: 'POST',
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
              {
                "role": "system",
                "content": systemRequest
              },
              {
                "role": "user",
                "content": userEntry
              }
            ]
        })
    }).then(response => {
        return response.json()
    }).then(data=>{
        console.log(data)
        let aiText = data.choices[0].message.content
        player.SetVar(aiOutputVariable, aiText)
    }).catch(error => {
            console.log("Error: " + error)
        });
}
sendRequest()
}

function Script3()
{
  // Get the player object
var player = GetPlayer();

// Define the variable name in Storyline
var recognizedSpeechVar = "SL_transcript";

// Create a new SpeechRecognition object
var recognition = new webkitSpeechRecognition(); // Chrome uses the 'webkit' prefix

// Set the language for speech recognition
recognition.lang = 'en-US'; // Specify the language

// Enable continuous speech recognition
recognition.continuous = true;

// Create a new SpeechSynthesisUtterance object for updating the transcript
var utterance = new SpeechSynthesisUtterance();

// Variable to store the speech-to-text transcript
var transcript = '';

// Event handler for capturing interim results (partial transcriptions)
recognition.onresult = function(event) {
  var interimTranscript = '';
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      transcript += event.results[i][0].transcript + ' ';
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  player.SetVar("recognizedSpeechVar_1", transcript);
  utterance.text = interimTranscript;
  speechSynthesis.speak(utterance);
};

// Start speech recognition
recognition.start();
}

function Script4()
{
  // Get the player object
var player = GetPlayer();

// Define the variable name in Storyline
var recognizedSpeechVar = "SL_transcript";

// Create a new SpeechRecognition object
var recognition = new webkitSpeechRecognition(); // Chrome uses the 'webkit' prefix

// Set the language for speech recognition
recognition.lang = 'en-US'; // Specify the language

// Enable continuous speech recognition
recognition.continuous = true;

// Create a new SpeechSynthesisUtterance object for updating the transcript
var utterance = new SpeechSynthesisUtterance();

// Variable to store the speech-to-text transcript
var transcript = '';

// Event handler for capturing interim results (partial transcriptions)
recognition.onresult = function(event) {
  var interimTranscript = '';
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      transcript += event.results[i][0].transcript + ' ';
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  player.SetVar("recognizedSpeechVar_1", transcript);
  utterance.text = interimTranscript;
  speechSynthesis.speak(utterance);
};

// Start speech recognition
recognition.start();
}

function Script5()
{
  // Get the player object
var player = GetPlayer();

// Define the variable name in Storyline
var recognizedSpeechVar = "SL_transcript";

// Create a new SpeechRecognition object
var recognition = new webkitSpeechRecognition(); // Chrome uses the 'webkit' prefix

// Set the language for speech recognition
recognition.lang = 'en-US'; // Specify the language

// Enable continuous speech recognition
recognition.continuous = true;

// Create a new SpeechSynthesisUtterance object for updating the transcript
var utterance = new SpeechSynthesisUtterance();

// Variable to store the speech-to-text transcript
var transcript = '';

// Event handler for capturing interim results (partial transcriptions)
recognition.onresult = function(event) {
  var interimTranscript = '';
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      transcript += event.results[i][0].transcript + ' ';
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  player.SetVar("recognizedSpeechVar_1", transcript);
  utterance.text = interimTranscript;
  speechSynthesis.speak(utterance);
};

// Start speech recognition
recognition.start();
}

function Script6()
{
  // Get the player object
var player = GetPlayer();

// Define the variable name in Storyline
var recognizedSpeechVar = "SL_transcript";

// Create a new SpeechRecognition object
var recognition = new webkitSpeechRecognition(); // Chrome uses the 'webkit' prefix

// Set the language for speech recognition
recognition.lang = 'en-US'; // Specify the language

// Enable continuous speech recognition
recognition.continuous = true;

// Create a new SpeechSynthesisUtterance object for updating the transcript
var utterance = new SpeechSynthesisUtterance();

// Variable to store the speech-to-text transcript
var transcript = '';

// Event handler for capturing interim results (partial transcriptions)
recognition.onresult = function(event) {
  var interimTranscript = '';
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      transcript += event.results[i][0].transcript + ' ';
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  player.SetVar("recognizedSpeechVar_1", transcript);
  utterance.text = interimTranscript;
  speechSynthesis.speak(utterance);
};

// Start speech recognition
recognition.start();
}

function Script7()
{
  const player = GetPlayer();

//You should change the following 3 variables. Make sure that the text is enclosed by quotation marks.
const systemRequest = "Ask any related question for my response. Here is my response-"
const userInputVariable = "TextEntry2"
const aiOutputVariable = "aiResponse_2"

const userEntry = player.GetVar(userInputVariable)
const auth = "Bearer " + player.GetVar("token");

function sendRequest() {
    fetch("https://api.openai.com/v1/chat/completions", {
        method: 'POST',
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
              {
                "role": "system",
                "content": systemRequest
              },
              {
                "role": "user",
                "content": userEntry
              }
            ]
        })
    }).then(response => {
        return response.json()
    }).then(data=>{
        console.log(data)
        let aiText = data.choices[0].message.content
        player.SetVar(aiOutputVariable, aiText)
    }).catch(error => {
            console.log("Error: " + error)
        });
}
sendRequest()
}

function Script8()
{
  // Get the player object
var player = GetPlayer();

// Define the variable name in Storyline
var recognizedSpeechVar = "SL_transcript";

// Create a new SpeechRecognition object
var recognition = new webkitSpeechRecognition(); // Chrome uses the 'webkit' prefix

// Set the language for speech recognition
recognition.lang = 'en-US'; // Specify the language

// Enable continuous speech recognition
recognition.continuous = true;

// Create a new SpeechSynthesisUtterance object for updating the transcript
var utterance = new SpeechSynthesisUtterance();

// Variable to store the speech-to-text transcript
var transcript = '';

// Event handler for capturing interim results (partial transcriptions)
recognition.onresult = function(event) {
  var interimTranscript = '';
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      transcript += event.results[i][0].transcript + ' ';
    } else {
      interimTranscript += event.results[i][0].transcript;
    }
  }
  player.SetVar("recognizedSpeechVar_1", transcript);
  utterance.text = interimTranscript;
  speechSynthesis.speak(utterance);
};

// Start speech recognition
recognition.start();
}

function Script9()
{
  const player = GetPlayer();

//You should change the following 3 variables. Make sure that the text is enclosed by quotation marks.
const systemRequest = "Ask any related question for my response. Here is my response-"
const userInputVariable = "TextEntry1"
const aiOutputVariable = "aiResponse_1"

const userEntry = player.GetVar(userInputVariable)
const auth = "Bearer " + player.GetVar("token");

function sendRequest() {
    fetch("https://api.openai.com/v1/chat/completions", {
        method: 'POST',
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
              {
                "role": "system",
                "content": systemRequest
              },
              {
                "role": "user",
                "content": userEntry
              }
            ]
        })
    }).then(response => {
        return response.json()
    }).then(data=>{
        console.log(data)
        let aiText = data.choices[0].message.content
        player.SetVar(aiOutputVariable, aiText)
    }).catch(error => {
            console.log("Error: " + error)
        });
}
sendRequest()
}

