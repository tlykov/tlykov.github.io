interface Project {
    title: string,
    description: string,
    link: string,
    inProgress: boolean
}

export const ProjectList : Project[] = [
    {
        title: "Portfolio Site", 
        description: "Simple personal website made using Vite React and deployed with GitHub Pages",
        link: "https://github.com/tlykov/tlykov.github.io",
        inProgress: false
    },
    {
        title: "Parallel Algorithms",
        description: "Various parallelized algorithms using C++",
        link: "",
        inProgress: true
    }
];