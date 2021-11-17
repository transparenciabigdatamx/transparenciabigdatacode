const containerDiv7 = document.getElementById("vizContainer7");
const url7 = 'https://public.tableau.com/views/RESUMENgraficas/DashTiempopromedio?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link';
const options7 = {
    hideTabs: true,
}

function initViz7() {
    let viz = new tableau.Viz(containerDiv7, url7, options7)
}

document.addEventListener('DOMContentLoaded', initViz7)