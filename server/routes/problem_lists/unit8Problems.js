const unit8Problems = [{
    //--------------------------------------------SECTION 8.1 ----------------------------------
        //45
        id: 183,
        question: "Use integration to find a general solution of the differential equation $\\dfrac {\\it dx}{\\it dy} = \\dfrac {\\it x}{1+{\\it x}^2}$.",
        answer: "y = 1/2 ln(1 + x^2) + C",
        unit: 8,
        topic: "8.1",
        tags: ["Integrals"],
        solution: "sample solution"
    }, {
        //47
        id: 184,
        question: "Use integration to find a general solution of the differential equation $\\dfrac {\\it dx}{\\it dy} = \\sin {2 \\it x}$.",
        answer: "y = -1/2 cos 2x + C",
        unit: 8,
        topic: "8.1",
        tags: ["Integrals"],
        solution: "sample solution"
    }, {
        //51
        id: 185,
        question: "Use integration to find a general solution of the differential equation $\\dfrac {\\it dx}{\\it dy} = {\\it xe}^{{\\it x}^2}$.",
        answer: "y = 1/2 e^x^2 + C",
        unit: 8,
        topic: "8.1",
        tags: ["Integrals"],
        solution: "sample solution"
    }, {
        //61
        id: 186,
        question: "Sketch a slope field for the differential equation ${\\it y}' = 3 - \\it x$. Use the slope field to sketch the solution that passes through $(4, 2)$. Find $\\lim_{{\\it x} \\to -\\infty}$ and $\\lim_{{\\it x} \\to \\infty}$ of the solution. Enter your answer in a comma separated list.",
        answer: "-infinity, -infinity",
        unit: 8,
        topic: "8.1",
        tags: ["Integrals", "Graphs"],
        solution: "sample solution"
    }, {
        //63
        id: 187,
        question: "Sketch a slope field for the differential equation ${\\it y}' = {\\it y} - 4\\it x$. Use the slope field to sketch the solution that passes through $(2, 2)$. Find $\\lim_{{\\it x} \\to -\\infty}$ and $\\lim_{{\\it x} \\to \\infty}$ of the solution. Enter your answer as a comma separated list.",
        answer: "-infinity, -infinity",
        unit: 8,
        topic: "8.1",
        tags: ["Integrals", "Graphs"],
        solution: "sample solution"
    }, 
    //--------------------------------------------SECTION 8.2 ----------------------------------
    {
        //5
        id: 188,
        question: "Find the general solution of the differential equation $\\dfrac {\\it dx}{\\it dy} = \\dfrac {\\it x}{\\it y}$.",
        answer: "y = sqrt(x^2 + C)",
        unit: 8,
        topic: "8.2",
        tags: ["Integrals"],
        solution: "sample solution"
    }, {
        //7
        id: 189,
        question: "Find the general solution of the differential equation $\\dfrac {\\it dx}{\\it dy} = \\dfrac {{\\it x}-1}{{\\it y}^3}$.",
        answer: "y = (2x^2 - 4x + C)^(1/4)",
        unit: 8,
        topic: "8.2",
        tags: ["Integrals"],
        solution: "sample solution"
    }, {
        //13
        id: 190,
        question: "Find the general solution of the differential equation ${\\it y}^2 {\\it y'} = \\sin {9 \\it x}$.",
        answer: "y = (-1/3 cos 9x + C)^(1/3)",
        unit: 8,
        topic: "8.2",
        tags: ["Integrals"],
        solution: "sample solution"
    }, {
        //19
        id: 191,
        question: "Find the particular solution of the differential equation ${\\it yy'}-2{\\it e^x} = 0$ that satisfies the initial condition ${\\it y}(0) = 6$.",
        answer: "y = sqrt(4e^x + 5)",
        unit: 8,
        topic: "8.2",
        tags: ["Integrals"],
        solution: "sample solution"
    }, {
        //25
        id: 192,
        question: "Find the particular solution of the differential equation $\\dfrac {\\it dy}{\\it dx} = {\\it xy} \\sin {{\\it x}^2}$ that satisfies the initial condition ${\\it y}(0) = {\\it e}^2$.",
        answer: "y = e^((5-cos x^2)/2)",
        unit: 8,
        topic: "8.2",
        tags: ["Integrals"],
        solution: "sample solution"
    }, {
        //29
        id: 193,
        question: "Find the particular solution of the differential equation ${\\it y'} = -\\dfrac {\\it y} {5\\it x}$ that passes through $(3, 1)$.",
        answer: "y = sqrt(1/4 x^2 + 4)",
        unit: 8,
        topic: "8.2",
        tags: ["Integrals"],
        solution: "sample solution"
    }, 
    //--------------------------------------------SECTION 8.3 ----------------------------------
    {
        //25
        id: 194,
        question: "Find the exponential function ${\\it y} = \\it Ce^{kt}$ that passes through $(1, 5)$ and $(5, 2)$.",
        answer: "6.287e^(-0.229x)",
        unit: 8,
        topic: "8.3",
        tags: [],
        solution: "sample solution"
    }, {
        //37
        id: 195,
        question: "A particular radioactive element has a half-life of $1599$ years. What percent of a given amount remains after $100$ years? Round your answer to the nearest 2 decimal places.",
        answer: "95.76%",
        unit: 8,
        topic: "8.3",
        tags: ["Word Problems"],
        solution: "sample solution"
    }, {
        //56a
        id: 196,
        question: "The number of bacteria in a culture is increasing exponentialy. There are $125$ bacteria in the culture after $2$ hours and $350$ bacteria after $4$ hours. Find the initial population. Round your answer to the nearest whole number.",
        answer: "45",
        unit: 8,
        topic: "8.3",
        tags: ["Word Problems"],
        solution: "sample solution"
    }, {
        //56c
        id: 197,
        question: "The number of bacteria in a culture is increasing exponentialy. There are $125$ bacteria in the culture after $2$ hours and $350$ bacteria after $4$ hours. Write an exponential growth model for the bacteria population, and use the model to determine the number of bacteria after $8$ hours.",
        answer: "2744",
        unit: 8,
        topic: "8.3",
        tags: ["Word Problems"],
        solution: "sample solution"
    }, {
        //53d
        id: 198,
        question: "The following logistic equation models the growth of a population: ${\\it P}({\\it t}) = \\dfrac {2100}{1+29{\\it e}^{-0.75{\\it t}}}$. Find the value of $\\it t$ when the population will reach $50\\%$ of its carrying capacity. Round your answer to the nearest 3 decimal places.",
        answer: "4.490",
        unit: 8,
        topic: "8.3",
        tags: ["Word Problems"],
        solution: "sample solution"
    }, 
    //--------------------------------------------SECTION 8.4 ----------------------------------
    {
        //17
        id: 199,
        question: "Find the area of the region bounded by the graphs of ${\\it f(x)} = {\\it x}^2 + 2{\\it x}$ and ${\\it g(x)} = {\\it x} + 2$.",
        answer: "9/2",
        unit: 8,
        topic: "8.4",
        tags: [],
        solution: "sample solution"
    }, {
        //25
        id: 200,
        question: "Find the area of the region bounded by the graphs of ${\\it f(x)} = {\\it x}^2 + 1$, ${\\it g(x)} = 0$, ${\\it x} = -1$, and ${\\it x} = 2$.",
        answer: "6",
        unit: 8,
        topic: "8.4",
        tags: [],
        solution: "sample solution"
    }, {
        //33
        id: 201,
        question: "Find the area of the region bounded by the graphs of ${\\it f(x)} = {\\it x}^4 - 4{\\it x}^2$ and ${\\it g(x)} = {\\it x}^2 - 4$.",
        answer: "8",
        unit: 8,
        topic: "8.4",
        tags: [],
        solution: "sample solution"
    }, {
        //37
        id: 202,
        question: "Find the area of the region bounded by the graphs of ${\\it f(x)} = \\cos \\it x$ and ${\\it g(x)} = 2 - \\cos \\it x$, for $0 \\leq {\\it x} \\leq 2\\pi$.",
        answer: "4pi",
        unit: 8,
        topic: "8.4",
        tags: [],
        solution: "sample solution"
    }, 
    //--------------------------------------------SECTION 8.5 ----------------------------------
    {
        //5
        id: 203,
        question: "Find the volume of the solid formed by revolving the region bounded by ${\\it y} = \\sqrt {\\it x}$, ${\\it x} = 1$, and ${\\it x} = 4$ about the $\\it x$-axis.",
        answer: "15pi/2",
        unit: 8,
        topic: "8.5",
        tags: ["Integrals"],
        solution: "sample solution"
    }, {
        //9
        id: 204,
        question: "Find the volume of the solid formed by revolving the region bounded by ${\\it y} = {\\it x}^2$, ${\\it y} = 4$, and ${\\it x} = 0$ about the $\\it y$-axis.",
        answer: "8pi",
        unit: 8,
        topic: "8.5",
        tags: ["Integrals"],
        solution: "sample solution"
    }, {
        //13d
        id: 205,
        question: "Find the volume of the solid formed by revolving the region bounded by ${\\it y} = \\sqrt {\\it x}$, ${\\it y} = 0$, and ${\\it x} = 3$ about the line ${\\it x} = 6$.",
        answer: "84pi/5 sqrt 3",
        unit: 8,
        topic: "8.5",
        tags: ["Integrals"],
        solution: "sample solution"
    }, {
        //37
        id: 206,
        question: "Find the volume of the solid formed by revolving the region bounded by ${\\it y} = \\sin {\\it x}$, ${\\it y} = 0$, ${\\it x} = 0$ and ${\\it x} = \\pi$ about the ${\\it x}$-axis.",
        answer: "pi^2/2",
        unit: 8,
        topic: "8.5",
        tags: ["Integrals"],
        solution: "sample solution"
    }, 
    //--------------------------------------------SECTION 8.6 ----------------------------------
    {
        //1a
        id: 207,
        question: "Let $\\it R$ be the region in the first quadrant bounded by the graph of ${\\it y} = 2 \\sqrt{\\it x}$, the line ${\\it y}=6$, and the $\\it y$-axis. This region is the base of a solid whose cross sections perpendicular to the $\\it x$-axis are squres. What is the volume of the solid?",
        answer: "54",
        unit: 8,
        topic: "8.6",
        tags: ["Integrals"],
        solution: "sample solution"
    }, {
        //2a
        id: 208,
        question: "Let $\\it R$ be the region in the first quadrant bounded by the graph of ${\\it y} = \\sqrt[3]{\\it x}+4$, the line ${\\it y}=4$, and the line ${\\it x}=8$. This region is the base of a solid whose cross sections perpendicular to the $\\it x$-axis are equilateral triangles. What is the volume of the solid?",
        answer: "24/5 sqrt 3",
        unit: 8,
        topic: "8.6",
        tags: ["Integrals"],
        solution: "sample solution"
    }, {
        //2b
        id: 209,
        question: "Let $\\it R$ be the region in the first quadrant bounded by the graph of ${\\it y} = \\sqrt[3]{\\it x}+4$, the line ${\\it y}=4$, and the line ${\\it x}=8$. This region is the base of a solid whose cross sections perpendicular to the $\\it y$-axis are rectangles with height $3$ times the length of the base. What is the volume of the solid?",
        answer: "1728/7",
        unit: 8,
        topic: "8.6",
        tags: ["Integrals"],
        solution: "sample solution"
    }, 
];
    
    export default unit8Problems;