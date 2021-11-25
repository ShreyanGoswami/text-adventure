const Story = [
    {
        "id":0,
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel rhoncus nibh, in rutrum turpis. Praesent in lorem dapibus, mollis risus vel, efficitur neque. Duis luctus mattis laoreet. Aenean suscipit pharetra odio non pretium. Duis metus velit, porta nec vulputate sollicitudin, vehicula rutrum leo. Integer congue posuere dolor, nec faucibus nulla laoreet non. Nulla ultrices sit amet eros non hendrerit.Fusce at congue justo, id sodales nulla. Nulla sed arcu a felis maximus auctor ullamcorper nec lacus. Vestibulum eu nunc mollis, dignissim nibh sed, iaculis elit. Nullam lacinia ornare vehicula. In erat nunc, scelerisque in augue at, sollicitudin suscipit risus. Sed ut ornare est, sit amet fringilla elit. Vivamus placerat nunc sit amet urna eleifend, sodales maximus felis gravida. Pellentesque pharetra, ligula id malesuada aliquam, leo augue rutrum velit, vitae consectetur libero nisl eget nulla.Pellentesque mattis nec metus non porttitor. Cras nisi leo, placerat vel nibh eu, vestibulum posuere nunc. Suspendisse consectetur ultricies velit et consectetur. Integer fringilla egestas velit vitae mollis. Vivamus ullamcorper elit iaculis tristique bibendum. Curabitur eget vulputate nunc. Phasellus commodo faucibus auctor.",
        "nextId": 1,
        "buttons":[],
        "slider":{},
        "disableNext": false
    },
    {
        "id":1,
        "text":"Text2",
        "nextId":2,
        "disableNext":false,
        "buttons":[],
        "slider":{}
    },
    {
        "id":2,
        "text":"choose an option to continue",
        "nextId":3,
        "disableNext":true,
        "slider":{},
        "buttons": [{"id":1, "value":"option1", "disp":"option 1"},
        {"id":2, "value":"option2", "disp":"option 2"}]
    },
    {
        "id":3,
        "text":"move the slider and continue",
        "nextId":0,
        "disableNext":true,
        "slider":{"start":10,
        "end":50,
        "step":5},
        "buttons":[]
    }
];

const result = []

export const buttonCallback = e => {
    console.log("Clicked " + e.target.value)
    result.push(e.target.value);
}

export default Story;