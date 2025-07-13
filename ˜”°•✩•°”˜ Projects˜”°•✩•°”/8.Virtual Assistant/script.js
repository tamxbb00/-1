let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)


    if (message.includes("hello") || message.includes("hey") || message.includes("hi Tamx") || message.includes("hey there")) {
        speak("Hello Sir, what can I help you with?");
    } else if (message.includes("who are you") || message.includes("what can you do") || message.includes("who made you") || message.includes("tell me about yourself")) {
        speak("I am your virtual assistant, created by Tamx Sir...");
    } else if (message.includes("tell me about your school") || message.includes("national higher secondary school mannargudi")) {
        speak("National Higher Secondary School, Mannargudi, established in 1899 by Sri Singaravel Udaiyar and Sri Ramadurai Iyer...");
    } else if (message.includes("who founded your school") || message.includes("founders of your school")) {
        speak("National Higher Secondary School, Mannargudi, was founded in 1899 by Sri Singaravel Udaiyar and Sri Ramadurai Iyer.");
    } else if (message.includes("tell about your school correspondent") || message.includes("school correspondent")) {
        speak("Dr. S. Sethuraman is the correspondent of National Higher Secondary School...");
    } else if (message.includes("who visited your school") || message.includes("notable visitors to your school")) {
        speak("National Higher Secondary School, Mannargudi, has been visited by many notable figures...");
    } else if (message.includes("what courses does your school offer") || message.includes("courses offered at your school")) {
        speak("National Higher Secondary School, Mannargudi offers a range of courses including Python, SUITS...");
    } else if (message.includes("tell me about your school's achievements") || message.includes("school achievements")) {
        speak("In 2023, our school proudly won the Chief Minister's Trophy in basketball along with a cash prize of Rs. 5 lakh.");
    } else if (message.includes("open youtube") || message.includes("launch youtube") || message.includes("go to youtube") || message.includes("open youtube website")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    } else if (message.includes("open google") || message.includes("launch google") || message.includes("go to google") || message.includes("open google search")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    } else if (message.includes("open facebook") || message.includes("launch facebook") || message.includes("go to facebook") || message.includes("open facebook site")) {
        speak("Opening Facebook...");
        window.open("https://facebook.com/", "_blank");
    } else if (message.includes("open instagram") || message.includes("launch instagram") || message.includes("go to instagram") || message.includes("open instagram page")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "_blank");
    } else if (message.includes("open calculator") || message.includes("launch calculator app") || message.includes("start calculator")) {
        speak("Opening calculator...");
        window.open("calculator://");
    } else if (message.includes("open whatsapp") || message.includes("launch whatsapp app") || message.includes("start whatsapp")) {
        speak("Opening WhatsApp...");
        window.open("whatsapp://");
    } else if (message.includes("time") || message.includes("what's the current time") || message.includes("tell me the time") || message.includes("what time is it")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(time);
    } else if (message.includes("date") || message.includes("what's today's date") || message.includes("tell me the date") || message.includes("what is the date today")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(date);
    } else if (message.includes("tallest mountain")) {
        speak("The tallest mountain in the world is Mount Everest.");
    } else if (message.includes("chemical formula for water")) {
        speak("The chemical formula for water is H2O.");
    } else if (message.includes("weather")) {
        speak("Today's weather in Thanjavur is sunny with a high of 30°C.");
    } else if (message.includes("remind")) {
        speak("Reminder set for your requested time.");
    } else if (message.includes("math")) {
        speak("Sure, I can help with math. What's the problem you want to solve?");
    } else if (message.includes("square root")) {
        let number = parseInt(message.match(/\d+/)[0]);
        speak(`The square root of ${number} is ${Math.sqrt(number)}`);
    } else if (message.includes("multiply")) {
        let numbers = message.match(/\d+/g);
        speak(`${numbers[0]} times ${numbers[1]} is ${numbers[0] * numbers[1]}`);
    } else if (message.includes("solve")) {
        // Implement solving linear equations or other math problems
        speak("I can help solve that. Let me do the math...");
    } else if (message.includes("currency conversion") || message.includes("convert USD to INR")) {
        speak("100 USD is approximately 8,200 INR.");
    } else if (message.includes("kilometers to miles")) {
        let kilometers = parseInt(message.match(/\d+/)[0]);
        let miles = kilometers * 0.621371;
        speak(`${kilometers} kilometers is approximately ${miles.toFixed(2)} miles.`);
    } else if (message.includes("Fahrenheit to Celsius")) {
        let fahrenheit = parseInt(message.match(/\d+/)[0]);
        let celsius = (fahrenheit - 32) * 5 / 9;
        speak(`${fahrenheit} degrees Fahrenheit is approximately ${celsius.toFixed(2)} degrees Celsius.`);
    } else if (message.includes("6th standard science topics") || message.includes("main topics in 6th standard science")) {
        speak("The main topics covered in 6th standard science are: the water cycle, types of clouds, and basic principles of physics and chemistry.");
    } else if (message.includes("water cycle") || message.includes("explain water cycle")) {
        speak("The water cycle describes how water evaporates from the surface of the Earth, rises into the atmosphere, cools and condenses into rain or snow, and falls again to the surface as precipitation.");
    } else if (message.includes("types of clouds") || message.includes("different types of clouds")) {
        speak("The different types of clouds include cirrus, cumulus, stratus, and nimbus clouds.");
    } else if (message.includes("three states of matter") || message.includes("what are the three states of matter")) {
        speak("The three states of matter are solid, liquid, and gas.");
    } else if (message.includes("classify living organisms") || message.includes("how do we classify living organisms")) {
        speak("Living organisms are classified into five kingdoms: Monera, Protista, Fungi, Plantae, and Animalia.");
    } else if (message.includes("process of condensation") || message.includes("explain condensation")) {
        speak("Condensation is the process by which water vapor in the air is changed into liquid water, often forming clouds or dew.");
    } else if (message.includes("7th standard science topics") || message.includes("main topics in 7th standard science")) {
        speak("The main topics covered in 7th standard science are: the structure of an atom, how plants make their food, and the layers of the Earth's atmosphere.");
    } else if (message.includes("structure of an atom") || message.includes("what is the structure of an atom")) {
        speak("An atom consists of a nucleus made of protons and neutrons, with electrons orbiting around the nucleus.");
    } else if (message.includes("how do plants make their food") || message.includes("process of photosynthesis")) {
        speak("Plants make their food through a process called photosynthesis, where they use sunlight, carbon dioxide, and water to produce glucose and oxygen.");
    } else if (message.includes("layers of the atmosphere") || message.includes("what are the layers of the Earth's atmosphere")) {
        speak("The Earth's atmosphere is divided into five layers: the troposphere, stratosphere, mesosphere, thermosphere, and exosphere.");
    }
}
