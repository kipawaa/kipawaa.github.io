const NODE_RADIUS = 30;
const WIDTH = 1600;
const HEIGHT = 900

var main = d3.select(".main");
var svg = main
    .append("svg")
        .attr("width", WIDTH)
        .attr("height", HEIGHT);
var group = svg
    .append("g");

svg.call(d3.zoom().on("zoom", (event) => {
    group.attr("transform", event.transform);
}));

function get_school_node_color(school) {
    if (school === "UTSC") return "#002A5C";
    if (school === "UO") return "#8F001A";
    if (school === "Carleton") return "#E91C24";
    return "#000000";
}

function get_school_label_color(school) {
    if (school === "UTSC") return "#FFFFFF";
    if (school === "UO") return "#FFFFFF";
    if (school === "Carleton") return "#000000";
    return "#000000";
}

d3.json("../data/classes.json").then((data) => {
    main.innerHTML = "";
    console.log(data);

    var link = group
        .selectAll(".link")
        .data(data.links)
        .join("line")
        .attr("class", "link");

    var node = group
        .selectAll(".node")
        .data(data.nodes)
        .join("circle")
        .attr("class", "node")
        .attr("r", NODE_RADIUS)
        .attr("fill", d => get_school_node_color(d.school));

    var label = group
        .selectAll("text")
        .data(data.nodes)
        .join("text")
        .text(d => d.id)
        .attr("class", "nodelabel")
        .attr("fill", d => get_school_label_color(d.school));
    
    var simulation = d3.forceSimulation(data.nodes)
        .force("charge", d3.forceManyBody()
            .strength(-100))
        .force("center", d3.forceCenter(WIDTH / 2, HEIGHT / 2)
            .strength(1))
        .force("link", d3.forceLink(data.links)
            .id((d) => d.id)
            .links(data.links)
            .distance(NODE_RADIUS * 2)
            .strength(0.07))
        .alphaDecay(0.005)
        .alphaTarget(0.3)
        .on("tick", ticked);
    
    // add drag for nodes
    node.call(d3.drag()
        .on("start", dragStart)
        .on("drag", dragged)
        .on("end", dragEnd));

    label.call(d3.drag()
        .on("start", dragStart)
        .on("drag", dragged)
        .on("end", dragEnd));

    function dragStart(event) {
        simulation.alphaTarget(0.5).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

    function dragEnd(event) {
        simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
    }

    function ticked() {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        label
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    }
});
