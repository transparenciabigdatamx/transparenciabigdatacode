const containerDiv2 = document.getElementById("vizContainer2");
const url2 = 'https://public.tableau.com/views/Maps_16347733261440/Dashboard1?:language=es-ES&:retry=yes&:display_count=n&:origin=viz_share_link';
const options2 = {
    hideTabs: true,
}

function initViz2() {
    let viz = new tableau.Viz(containerDiv2, url2, options2)
}

document.addEventListener('DOMContentLoaded', initViz2)