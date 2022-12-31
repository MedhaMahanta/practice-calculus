const calcProblems = [{
    //--------------------------------------------SECTION 1.1 ----------------------------------
        id: 1,
        question: "For ${\\it f(x)}=\\dfrac{sin{\\it x}}{\\it x}$, find ${\\it f}(-0.1)$, ${\\it f}(-0.01)$, ${\\it f}(-0.001)$, ${\\it f}(0.001)$, ${\\it f}(0.01),$ and ${\\it f}(0.1)$, and use the result to approximate $\\lim_{{\\it x} \\to 0} {\\it f}({\\it x})$. ",
        answer: "5x",
        unit: 1,
        topic: "1.1",
        tags: ["Limits", "Graphs"],
        solution: "sample solution"
    }, {
        id: 2,
        question: "True or false: If $\\it f$ is undefined at $\\it x=c$, then the limit of $\\it f(x)$ as $\\it x$ approaches $\\it c$ does not exist.",
        answer: "true",
        unit: 1,
        topic: "1.1",
        tags: ["Limits", "Functions"],
        solution: "sample solution"
    }, {
        id: 3,
        question: "True or False: If ${\\it f(c) = L}$, then $\\lim_{{\\it x} \\to c} {\\it f(x) = L}$.",
        answer: "False",
        unit: 1,
        topic: "1.1",
        tags: ["Limits"],
        solution: "sample solution"
    }, {
        id: 4,
        question: "Find the limit: $\\lim_{{\\it x} \\to -3} {\\it x}^2+3{\\it x}$. ",
        answer: "0",
        unit: 1,
        topic: "1.1",
        tags: ["Limits"],
        solution: "sample solution"
    }, {
        id: 5,
        question: "If ${\\it f(x)} = 4-{\\it x}^2$, and ${\\it g(x)} = \\sqrt{{\\it x}+1}$, find the limit: $\\lim_{{\\it x} \\to 1} {\\it g(f(x))}$. ",
        answer: "2",
        unit: 1,
        topic: "1.1",
        tags: ["Limits"],
        solution: "sample solution"
    }, {
        //51
        id: 6,
        question: "Find the limit: $\\lim_{{\\it x} \\to -3} \\dfrac{{\\it x}^2+{\\it x}-6}{{\\it x}^2-9}$. ",
        answer: "2",
        unit: 1,
        topic: "1.1",
        tags: ["Limits"],
        solution: "sample solution"
    }, {
        //57
        id: 7,
        question: "Find the limit: $\\lim_{{\\it x} \\to 0} \\dfrac{[1/(3+{\\it x})]-1/3}{{\\it x}}$. ",
        answer: "2",
        unit: 1,
        topic: "1.1",
        tags: ["Limits"],
        solution: "sample solution"
    },
    //--------------------------------------------SECTION 1.2 ----------------------------------
    {
        //17
        id: 8,
        question: "$\\lim_{{\\it x} \\to 0^- } \\dfrac{|{\\it x}|}{{\\it x}}$. ",
        answer: "2",
        unit: 1,
        topic: "1.2",
        tags: ["Limits"],
        solution: "sample solution"
    }, {
        //25
        id: 9,
        question: "$ \\lim_{{\\it x} \\to \\pi} cot{\\it x} $. ",
        answer: "2",
        unit: 1,
        topic: "1.2",
        tags: ["Limits"],
        solution: "sample solution"
    }, {
        //41
        id: 10,
        question: "Find the ${\\it x}$-values at which ${\\it f}$ is not continuous: ${\\it f(x)} = \\dfrac{1}{4-{\\it x}^2}$. (Enter as a comma-separated list)",
        answer: "2",
        unit: 1,
        topic: "1.2",
        tags: ["Limits"],
        solution: "sample solution"
    }, {
        //45
        id: 11,
        question: "Find the ${\\it x}$-values at which ${\\it f}$ is not continuous: ${\\it f(x)} = \\dfrac{{\\it x}}{{\\it x}^2-{\\it x}}$. (Enter as a comma-separated list)",
        answer: "2",
        unit: 1,
        topic: "1.2",
        tags: ["Limits"],
        solution: "sample solution"
    }, {
        //47
        id: 12,
        question: "Find the ${\\it x}$-values at which ${\\it f}$ is not continuous: ${\\it f(x)} = \\dfrac{{\\it x}+2}{{\\it x}^2-3{\\it x}-10}$. (Enter as a comma-separated list)",
        answer: "2",
        unit: 1,
        topic: "1.2",
        tags: ["Limits"],
        solution: "sample solution"
    }, {
        //95
        id: 13,
        question: "Verify that the Intermediate Value Theorem applies to the indicated interval, and find the value of ${\\it c}$ guaranteed by the theorem. ${\\it f(x)} = {\\it x}^2+{\\it x}-1, [0, 5], {\\it f(c)} = 11$.",
        answer: "2",
        unit: 1,
        topic: "1.2",
        tags: ["Limits"],
        solution: "sample solution"
    },
    //--------------------------------------------SECTION 1.3 ----------------------------------
    {
        //7
        id: 14,
        question: "Determine whether ${\\it f(x)}$ approaches ${\\infty}$ or ${-\\infty}$ as ${\\it x}$ approaches ${4}$ from the left, for ${{\\it f(x)} = \\dfrac{1} {{\\it x}-4} }$. Enter 'positive infinity' for ${\\infty}$ or 'negative infinity' for ${-\\infty}$. ",
        answer: "2x",
        unit: 1,
        topic: "1.3",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        //17
        id: 15,
        question: "Find the equations of the vertical asymptotes of the graph of ${\\it f(x)} = \\dfrac{1}{ {\\it x}^2 }$. (Enter as a comma separated list of equations. For example: x=0, x=1)",
        answer: "2x",
        unit: 1,
        topic: "1.3",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        //37
        id: 16,
        question: "Find the one-sided limit: $\\lim_{{\\it x} \\to 2^+} {\\dfrac{\\it x}{ {\\it x}-2 }}$. (Enter 'positive infinity' for ${\\infty}$ and 'negative infinity' for ${-\\infty}$.)",
        answer: "2x",
        unit: 1,
        topic: "1.3",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        //21
        id: 17,
        question: "Find the limit: $\\lim_{{\\it x} \\to {\\infty}} {\\dfrac{ {\\it x}^2 + {\\it x} }{ 6{\\it x}^3 + 2{\\it x}^2 + {\\it x} }}$. (Enter 'positive infinity' for ${\\infty}$ and 'negative infinity' for ${-\\infty}$.)",
        answer: "2x",
        unit: 1,
        topic: "1.3",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        //9
        id: 18,
        question: "Determine whether ${\\it f(x)}$ approaches ${\\infty}$ or ${-\\infty}$ as ${\\it x}$ approaches ${4}$ from the left, for ${{\\it f(x)} = \\dfrac{1} {({\\it x}-4)^2} }$. Enter 'positive infinity' for ${\\infty}$ or 'negative infinity' for ${-\\infty}$. ",
        answer: "2x",
        unit: 1,
        topic: "1.3",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        //19
        id: 19,
        question: "Find the equations of the vertical asymptotes of the graph of ${\\it f(x)} = \\dfrac{{\\it x}^2}{ {\\it x}^2-4 }$. (Enter as a comma separated list of equations. For example: x=0, x=1)",
        answer: "2x",
        unit: 1,
        topic: "1.3",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        //43
        id: 20,
        question: "Find the one-sided limit: $\\lim_{{\\it x} \\to -4^-} {{\\it x}^2 + \\dfrac{2}{ {\\it x}+4 }}$. (Enter 'positive infinity' for ${\\infty}$ and 'negative infinity' for ${-\\infty}$.)",
        answer: "2x",
        unit: 1,
        topic: "1.3",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        //45
        id: 21,
        question: "Find the one-sided limit: $\\lim_{{\\it x} \\to 0^+} {sin {\\it x} + \\dfrac{1}{ \\it x }}$. (Enter 'positive infinity' for ${\\infty}$ and 'negative infinity' for ${-\\infty}$.)",
        answer: "2x",
        unit: 1,
        topic: "1.3",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        //25
        id: 22,
        question: "Find the limit: $\\lim_{{\\it x} \\to -{\\infty}} {\\dfrac{\\it x}{ \\sqrt{{\\it x}^2 + {\\it x} }}}$. (Enter 'positive infinity' for ${\\infty}$ and 'negative infinity' for ${-\\infty}$.)",
        answer: "2x",
        unit: 1,
        topic: "1.3",
        tags: ["Derivatives"],
        solution: "sample solution"
    },
    //--------------------------------------------SECTION 1.4 ----------------------------------
    {
        //63
        id: 23,
        question: "Find the limit of the trigonometric function: $\\lim_{{\\it x} \\to 0} {\\dfrac{sin \\it x}{ 5\\it x}}$. (Enter your answer as a common fraction.)",
        answer: "1/5",
        unit: 1,
        topic: "1.4",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        //65
        id: 24,
        question: "Find the limit of the trigonometric function: $\\lim_{{\\it x} \\to 0} {\\dfrac{(sin {\\it x})(1 - cos \\it x)}{ \\it x^2}}$. (Enter your answer as a common fraction.)",
        answer: "1/5",
        unit: 1,
        topic: "1.4",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        //68
        id: 25,
        question: "Find the limit of the trigonometric function: $\\lim_{{\\it x} \\to 0} {\\dfrac{tan^2 \\it x}{ \\it x}}$. (Enter your answer as a common fraction.)",
        answer: "1/5",
        unit: 1,
        topic: "1.4",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        //23
        id: 26,
        question: "Find the limit: $\\lim_{{\\it x} \\to 1} { \\begin{Bmatrix} {\\it x}^3+1, & {\\it x} < 1 \\\\ {\\it x}+1, & {\\it x} \\geq 1 \\end{Bmatrix} }$.",
        answer: "1/5",
        unit: 1,
        topic: "1.4",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        //51
        id: 27,
        question: "Find the x-values (if any) at which f is not continuous: ${{\\it f(x)} = \\begin{Bmatrix} 0.5{\\it x}+1, & {\\it x} \\leq 2 \\\\ 3-{\\it x}, & {\\it x} > 2 \\end{Bmatrix} }$.",
        answer: "1/5",
        unit: 1,
        topic: "1.4",
        tags: ["Derivatives"],
        solution: "sample solution"
    },
    
    //--------------------------------------------SECTION 2.1 ----------------------------------
     {
        id: 8,
        question: "What is $(3\\times 4) \\div (5-3)$?",
        answer: "2x",
        unit: 2,
        topic: "2.1",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        id: 9,
        question: "Another problem from 2.1",
        answer: "2x",
        unit: 2,
        topic: "2.1",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        id: 10,
        question: "Third problem from 2.1",
        answer: "2x",
        unit: 2,
        topic: "2.1",
        tags: ["Integrals"],
        solution: "sample solution"
    }, {
        id: 11,
        question: "Fourth problem from 2.1",
        answer: "2x",
        unit: 2,
        topic: "2.1",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        id: 12,
        question: "Fifth problem from 2.1",
        answer: "2x",
        unit: 2,
        topic: "2.1",
        tags: ["Derivatives"],
        solution: "sample solution"
    }, {
        id: 13,
        question: "Sixth problem from 2.1",
        answer: "2x",
        unit: 2,
        topic: "2.1",
        tags: ["Derivatives"],
        solution: "sample solution"
    }
    ];
    
    export default calcProblems;