const containerDiv3 = document.getElementById("vizContainer3");
const url3 = 'https://public.tableau.com/views/RESUMENgraficas/DashndicedeExperiencia1?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link';
const options3 = {
    hideTabs: true,
}

function initViz3() {
    let viz = new tableau.Viz(containerDiv3, url3, options3)
}

document.addEventListener('DOMContentLoaded', initViz3)