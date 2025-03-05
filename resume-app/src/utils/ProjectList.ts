interface Project {
    title: string,
    description: string,
    link: string,
    inProgress: boolean
}

export const ProjectList : Project[] = [
    {
        title: "Legacy Kinetics Site", 
        description: "Ongoing development and maintenance for Legacy Kinetics business site",
        link: "https://legacy-kinetics.com",
        inProgress: true
    },
    {
        title: "Portfolio Site", 
        description: "Simple personal website made using Vite React and deployed with GitHub Pages",
        link: "https://github.com/tlykov/tlykov.github.io",
        inProgress: false
    },
    {
        title: "Notes Site",
        description: "Note storing site made with Angular. Uses Node, MongoDB and Docker",
        link: "https://github.com/tlykov/notes-site",
        inProgress: false
    },
    {
        title: "UI Prototype",
        description: "Prototype UI redesign of Moodle's learning app made using Figma",
        link: "https://www.figma.com/proto/Iu6RrGOvzbeB6Uu95WFIAj/CMPT363-Prototype?type=design&node-id=23-29&t=OYjozij8aZpNhSpO-1&scaling=scale-down&page-id=0:1&starting-point-node-id=3:4&mode=design",
        inProgress: false
    }
];