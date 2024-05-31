export interface Education{
    Institute: string;
    course: string;
    durations:string;
    score: string;
}


export interface WorkExperince{
    role: string;
    company: string;
    duration:string;
    description: any;
}


export interface Skills{
    name: string;
    level: string;
    rating: number;
}


export interface Project{
    title: string;
    technologies: string;
    description: string[];
}