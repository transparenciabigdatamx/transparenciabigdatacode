const containerDiv5 = document.getElementById("vizContainer5");
const url5 = 'https://public.tableau.com/views/RESUMENgraficas/DashndiceEspecificidad?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link';
const options5 = {
    hideTabs: true,
}

function initViz5() {
    let viz = new tableau.Viz(containerDiv5, url5, options5)
}

document.addEventListener('DOMContentLoaded', initViz5)