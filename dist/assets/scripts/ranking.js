const containerDiv1 = document.getElementById("vizContainer1");
const url = 'https://public.tableau.com/views/RESUMENgraficas/Dashboard7?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link';
const options = {
    hideTabs: true,
}

function initViz1() {
    let viz = new tableau.Viz(containerDiv1, url, options)
}

document.addEventListener('DOMContentLoaded', initViz1)