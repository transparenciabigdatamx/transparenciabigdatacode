const containerDiv8 = document.getElementById("vizContainer8");
const url8 = 'https://public.tableau.com/views/RESUMENgraficas/DashHistoricoVF?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link';
const options8 = {
    hideTabs: true,
}

function initViz8() {
    let viz = new tableau.Viz(containerDiv8, url8, options8)
}

document.addEventListener('DOMContentLoaded', initViz8)