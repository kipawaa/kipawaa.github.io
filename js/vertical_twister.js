const root = ReactDOM.createRoot(document.getElementById("colourDiv"));
const colours = ["red", "orange", "yellow", "green", "teal", "blue", "purple", "pink", "white", "grey", "black", "brown"];

function generateColourSelector(props) {
    return <select name={props.name} id={props.id}>
        <option value=colours[0]>colours[0].toString()</option>
    </select>
        
}

// generates the next move for vertical twister and updates the page accordingly
function addColourOptions() {
    var numColours = document.getElementById("numColours").value;


    for (let i = 0; i < numColours; i++) {
        let select = document.createElement("select");
        select.name = "colour" + (i + 1);
        select.id = "colour" + (i + 1);

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

function getMove() {
    // get all colour choice values
    

    // put colours in here
    let colours = [];
    let limbs = ["Left Hand", "Right Hand", "Left Foot", "Right Foot"];

    let colour = colours[Math.floor(Math.random() * 5)];
    let limb = limbs[Math.floor(Math.random() * 4)];

    if (result) {
        result.textContent = limb + " " + colour;
        result.style.color = colour;
    }

    return (colour, limb);
}
