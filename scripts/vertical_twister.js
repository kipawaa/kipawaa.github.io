const colours = ["red", "orange", "yellow", "green", "teal", "blue", "purple", "pink", "white", "grey", "black", "brown"];
const limbs = ["Left Hand", "Right Hand", "Left Foot", "Right Foot"];
let prev_limb = 0;

function generateColourSelector(props) {
    return "<select name={props.name} id={props.id}><option value=colours[0]>colours[0].toString()</option></select>"
        
}

// generates the next move for vertical twister and updates the page accordingly
function addColourOptions() {
    var numColours = document.getElementById("numColours").value;


    for (let i = 0; i < numColours; i++) {
        let select = document.createElement("select");
        select.name = "colour" + (i + 1);
        select.id = "colour" + (i + 1);

        // update html with colour options
        for (let colour of colours) {
            let option = document.createElement("option");
            option.value = colour;
            option.text = colour;
            select.appendChild(option);
        }

        let label = document.createElement("label");
        label.innerHTML = "Choose Colour " + (i + 1) + ": ";
        label.htmlFor = "colour" + (i + 1);

        document.getElementById("colourDiv").appendChild(label).appendChild(select);
    }
}

function getCurrentColours() {
    let current_colours = [];
    for (i = 0; i < 6; i++) {
        selector = document.getElementById("colour" + i);
        if (selector) {
            current_colours.push(selector.value);
        }
    }
    return current_colours;
}

function getMove() {
    console.log("getting move");
    // get possible colour choices
    let current_colours = getCurrentColours();

    // randomly select a colour and limb
    let colour = current_colours[Math.floor(Math.random() * current_colours.length)];
    let limb = document.getElementById("randomLimbs").checked ? limbs[Math.floor(Math.random() * 4)] : limbs[(prev_limb + 1) % 4];

    prev_limb = limbs.indexOf(limb);

    console.log(colour, limb);

    if (result) {
        result.textContent = limb + " " + colour;
        result.style.color = colour;
    }

    return (colour, limb);
}
