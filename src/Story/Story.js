import { RESPONSES, ANSWER, TEXT } from "./Constants";
import API from "../API";

const Story = [
    {
        "id": 0,
        "text": "Rick and Morty tumbled out of the portal onto what looks like a hot and deserted beach. As they stand on the coast it's quiet and the wind is dry. Morty turns towards Rick, “Ooo Rick where have you taken us?”. Rick checks his intergalactic map. “Its Earth”, he says, his voice a bit grimmer than usual.",
        "nextId": 0.5,
        "buttons": [],
        "slider": {},
        "disableNext": false
    },
    {
        "id": 0.5,
        "nextId": 1,
        "text": "“But..but Rick this can’t be earth. It’s way too hot!”, Morty exclaims.“Its earth alright” says Rick handing Morty the map. “We were supposed to travel a hundred light years away from earth but it looks like I set the setting to hundred years away”. A rookie mistake. While Morty tries to read the intergalactic map, Rick thinks it's a good time to teach Morty a little bit of science.",
        "buttons": [],
        "slider": {},
        "disableNext": false
    },
    {
        "id": 1,
        "text": "Rick, being a traveller of worlds and dimensions, has already seen this type of scene before. In fact he had caused some of them. “Morty look, this beach is completely deserted. My scanners don’t detect life, not a single living being apart from us in a hundred mile radius. No humans, no fishes, nothing.\"",
        "nextId": 2,
        "disableNext": false,
        "buttons": [],
        "slider": {}
    },
    {
        "id": 2,
        "text": "“But Rick..how..can that be?” Morty asks. Rick gives Morty one of his mischievous smiles and says, “Let me show you”. He takes out a cube, around three inches in each dimension and drops it onto the sandy beach. He presses a button on the cube and it transforms into a hot air balloon. “Let’s get in Morty”. “Oh Rick, I don’t like the looks of this.” Morty says in his usual hesitant demeanor. “We..We..We will be fine Morty, you can control the balloon.” ",
        "nextId": 3,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 3,
        "text": "TODO: slider",
        "nextId": 4,
        "disableNext": false,
        "slider": {
            "start": 1000,
            "end": 8000,
            "step": 1000
        },
        "buttons": [],
        "answer": 5000,
        "responses": [{ "status": "correct", "id": 4 }, { "status": "incorrect", "id": 108 }]
    },
    {
        "id": 4,
        "text": "Both Rick & Morty are huffing and puffing by now. Their sight blackened around the periphery of their vision. “Geez Rick, I think we should go back.” “You think Morty? Why do you think you are feeling like this",
        "nextId": 5,
        "disableNext": false,
        "slider": {},
        "buttons": [{ "id": 1, "value": "1", "disp": "Increased oxygen levels" },
        { "id": 2, "value": "2", "disp": "Decreased oxygen levels" },
        { "id": 3, "value": "3", "disp": "They are having a hard time adjusting to the environment" }],
        "responses": [{ "status": "correct", "id": 100 }, { "status": "incorrect", "id": 101 }],
        "answer": "2"
    },
    {
        "id": 5,
        "text": "They descend their balloon and find themselves back on the beach, from a spot different from where they started. Now Morty can you figure out what might have happened to the fishes?",
        "nextId": 6,
        "disableNext": false,
        "slider": {},
        "buttons": [{ "id": 1, "value": "1", "disp": "They died because the fishes flew too high" },
        { "id": 2, "value": "2", "disp": "They didn’t die, they moved somewhere else" },
        { "id": 3, "value": "3", "disp": "They died because they couldn’t breathe" },
        { "id": 4, "value": "4", "disp": "I don’t know" }],
        "responses": [{ "status": "correct", "id": 102 }, { "status": "incorrect", "id": 103 }],
        "answer": "3"
    },
    {
        "id": 6,
        "text": "“How did that happen Rick?”Rick takes out a small brown packet, not bigger than the size of an envelope. It’s filled with something. “Look morty...these… are InstaFood packets. I carry them around in case we get stuck on a planet with no hope of escape. They are the go to food sources for intergalactic travellers like me. All we need to do is add water and food will be ready.” He tears open the top of the packet and fills it with the ocean water. They wait for a couple of minutes but nothing happens.",
        "nextId": 7,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 7,
        "text": "Rick pulls out his element gun and puts the gun into the food. The display on the gun gives some reading and Rick’s face turns even more dark. “Not good Morty. This water is of no use. To make the food grow we need to fix the water.” Here take this, he hands the gun to Morty. “You already know that there is less oxygen in the water. We need to inject some of it into the water. Don’t put too much oxygen else the packet will catch fire. Luckily we don’t have too many flammable gases around us so no major damage.”",
        "nextId": 8,
        "disableNext": false,
        "slider": {
            "start": 50,
            "end": 300,
            "step": 50
        },
        "buttons": []
    },
    {
        "id": 8,
        "text": "“Alright Morty, we still need to do another thing. Apart from the oxygen, the water..the water is too acidic.” Rock says. “Rick, how did the entire ocean water become like this?” asked Morty. “Can you take a guess, Morty? It has to do with another element that is mixed in the water”",
        "nextId": 9,
        "disableNext": false,
        "slider": {},
        "buttons": [{ "id": 1, "value": "1", "disp": "Hydrogen" },
        { "id": 2, "value": "2", "disp": "Nitrogen" },
        { "id": 3, "value": "3", "disp": "Carbon" },
        { "id": 4, "value": "4", "disp": "I don’t know" }],
        "responses": [{ "status": "correct", "id": 104 }, { "status": "incorrect", "id": 105 }],
        "answer": "1"
    },
    {
        "id": 9,
        "text": "“But Rick, what has acidity got to do with carbon.” ",
        "nextId": 10,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 10,
        "text": "“You see Morty, the ocean is about eight times better at absorbing carbon dioxide than oxygen. We are releasing carbon dioxide into the atmosphere by burning petrol, diesel and coal in our cars and factories. In our timeline, the ocean was absorbing 3 billion tons of carbon into the atmosphere. Before we had all these technologies, before the 1900s the ocean would be releasing carbon dioxide but not anymore. The carbon dioxide decomposes in the ocean water to release hydrogen from water. Do you know what happens when hydrogen is released?",
        "nextId": 11,
        "disableNext": false,
        "slider": {},
        "buttons": [{ "id": 1, "value": "1", "disp": "Makes water acidic" },
        { "id": 2, "value": "2", "disp": "Makes the color of water dark" },
        { "id": 3, "value": "3", "disp": "Makes water sweet" },
        { "id": 4, "value": "4", "disp": "Improves water quality" }],
        "responses": [{ "status": "correct", "id": 106 }, { "status": "incorrect", "id": 107 }],
        "answer": "1"
    },
    {
        "id": 11,
        "text": "Just a few weeks ago we had a large storm Morty where you were stuck in your room. This storm washed away plants and other materials into the ocean depositing a large amount of carbon into the ocean in a short amount of time. The acid in the ocean is carbonic acid, the thing you find in sodas”. On queue Rick lets out a big burp.“So the ocean has become a very big soda can?” Morty asks. “Yes you can think of it in that way. Now adjust the dial to remove the acid” Rick says. “Remember Morty, the higher the value on the scale the less acidic it becomes.”",
        "nextId": 12,
        "disableNext": false,
        "slider": {
            "start": 8,
            "end": 9,
            "step": 0.1
        },
        "responses": [{ "status": "incorrect", "id": 109 }, { "status": "correct", "id": 108 }],
        "answer": 8.2,
        "buttons": []
    },
    {
        "id": 12,
        "text": "“Now Morty, imagine doing this for the entire ocean,” says Rick. “Gee Rick we will need a lot more of your element gun.” Morty says in a bit of wonder. “Yeah we might have to rob an entire planet of their resources to clean our oceans.” Rick takes the packet from Morty and empties its contents.”Rick what was that for?!” “Oh we can’t eat that thing Morty, inedible for most humans, I got used to it. Effectively poison”. “Just like the ocean water?” Morty asks",
        "nextId": 13,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 13,
        "text": "“Yes, just like the ocean..ocean water. I have had enough of this Morty, let’s get back. It’s depressing to look at this” Rick says his shoulders are a bit slumped, more slumped than usual. “But wait Rick,if this is the future, why go back at all?” ",
        "nextId": 14,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 14,
        "text": "“No Morty, the future we see here is one of the possible outcomes. When we time travel we are split into multiple copies, equal to the number of possibilities. We are not experiencing one of them.” Rick explains ",
        "nextId": 15,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 15,
        "text": "“So Rick.. you… mean to say that there is one possibility where the earth hasn’t died off?” asks Morty. Rick just nods. “So how do we get to that kind of Earth Rick?”. Well Morty, “there are many ways but because I want to get out of here quickly, I will tell you in a way you can understand. Stop releasing so much carbon dioxide.” With that Rick sets his portal gun to the correct location and time and both of them head out, closing the door to the desolate planet, as alien as any of the other planets they have visited.",
        "nextId": 16,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 16,
        "text": "Epilogue",
        "nextId": 17,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 17,
        "text": "The oceans are doing a lot of heavy lifting, absorbing the carbon dioxide and reducing keeping global warming in check. Scientists right now are trying to figure out how long as will thins continue. The increased temperatures has the potential to slowly release carbon dioxide back into the atmosphere increasing global temperatures. Scientists estimate that if nothing is done then in another 100 years the temperatures would ruse by four degrees or more globally.",
        "nextId": 18,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 17,
        "text": "Individually we can all reduce the carbon we release by making environmental friendly decisions. But we also need to do it on a larger scale by pushing our communities and leaders to make the right decision for the environment. If ever you are in a position to choose, choose the one that ends up releasing less carbon into the atmosphere. It will be a win for everyone in the long term.",
        "nextId": 18,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 18,
        "text": "Thank you for taking the time in going through this interactive story. I hope it was informative and useful for you.",
        "nextId": -1,
        "disableNext": true,
        "slider": {},
        "buttons": []
    },
    {
        "id": 100,
        "text": "Rick says, “You are..are.. right Morty. Seems school has taught you something.”",
        "nextId": 5,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 101,
        "text": "Rick says, “Wrong Morty. As we go higher up the oxygen reduces which makes it hard for us to breathe.”",
        "nextId": 5,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 102,
        "text": "“Look at you Morty, maybe you are not a lost cause after all.”, Rick says",
        "nextId": 6,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 103,
        "text": "Rick says, “No Morty, they died because they didn't have enough oxygen to breathe.”",
        "nextId": 6,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 104,
        "text": "“Good job! You are right Morty”, Rick exclaims",
        "nextId": 9,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 105,
        "text": "Rick says, “It’s carbon Morty. It’s what makes us and most of the other living things. We are carbon and we can’t live without carbon.”",
        "nextId": 9,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 106,
        "text": "Rick says, “Correct Morty!”",
        "nextId": 11,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 107,
        "text": "Rick says, “No Morty, when hydrogen is released, it makes water acidic. In fact acidicity is defined as the amount of hydrogen.",
        "nextId": 11,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
    {
        "id": 108,
        "text": "You haven't gone high enough. Take the balloon higher.",
        "nextId": 4,
        "disableNext": false,
        "slider": {},
        "buttons": []
    },
];

const result = [];

export const handleDecision = (playerId, storyId, value, nextCallback) => {
    const index = getIndexBasedOnId(storyId);
    const res = Story[index][RESPONSES];
    const answer = Story[index][ANSWER];
    if (answer === value) {
        for (let i = 0; i < res.length; i++) {
            if (res[i]["status"] === "correct") {
                result.push({ "playerId": playerId, "storyId": storyId, "answer": value, "status": true });
                nextCallback(res[i]["id"]);
            }
        }
    } else {
        for (let i = 0; i < res.length; i++) {
            if (res[i]["status"] === "incorrect") {
                result.push({ "playerId": playerId, "storyId": storyId, "answer": value, "status": false });
                nextCallback(res[i]["id"]);
            }
        }
    }

}

export const handleSlider = (id, value) => {
    const index = getIndexBasedOnId(id);
    const res = Story[index][RESPONSES];
    const answer = Story[index][ANSWER];
    if (value === answer) {
        for (let i = 0; i < res.length; i++) {
            if (res[i]["status"] === "correct") {
                return [true, res[i]["id"]];
            }
        }
    } else {
        for (let i = 0; i < res.length; i++) {
            if (res[i]["status"] !== "correct") {
                return [false, Story[getIndexBasedOnId(res[i]["id"])][TEXT]]
            }
        }

    }
}

export const onStoryCompletion =  async () => {
    try {
        API.storeResults(result);
    } catch (error) {
        console.log(error);
    }
}

const getIndexBasedOnId = id => {
    for (let i = 0; i < Story.length; i++) {
        if (Story[i]["id"] === id) {
            return i;
        }
    }
}

export default Story;