// generates the next move for vertical twister and updates the page accordingly
function getMove() {
    let colour1 = document.getElementById("colour1").value;
    let colour2 = document.getElementById("colour2").value;
    let colour3 = document.getElementById("colour3").value;
    let colour4 = document.getElementById("colour4").value;
    let colour5 = document.getElementById("colour5").value;

    let colours = [colour1, colour2, colour3, colour4, colour5];
    let limbs = ["Left Hand", "Right Hand", "Left Foot", "Right Foot"];

    let colour = colours[Math.floor(Math.random() * 5)];
    let limb = limbs[Math.floor(Math.random() * 4)];

    if (result) {
        result.textContent = limb + " " + colour;
        result.style.color = colour;
    }

    return (colour, limb);
}
