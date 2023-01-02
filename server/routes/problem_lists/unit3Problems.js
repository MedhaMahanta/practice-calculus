const unit3Problems = [{
    //--------------------------------------------SECTION 3.1 ----------------------------------
        //9
        id: 59,
        question: "For ${\\it x}^3 - {\\it xy} + {\\it y}^2 = 7$, find $\\it dy/dx$ by implicit differentiation. ",
        answer: "y' = (y - 3x^2)/(2y - x)",
        unit: 3,
        topic: "3.1",
        tags: [],
        solution: "sample solution"
    }, {
        //15
        id: 60,
        question: "For ${\\it x}^3 {\\it y}^3 - {\\it y} = \\it x$, find $\\it dy/dx$ by implicit differentiation. ",
        answer: "y' = (cos x)/(4 sin 2y)",
        unit: 3,
        topic: "3.1",
        tags: [],
        solution: "sample solution"
    }, {
        //19
        id: 61,
        question: "For ${\\it y} = \\sin \\it xy$, find $\\it dy/dx$ by implicit differentiation. ",
        answer: "y' = (y cos (xy))/(1 - x cos (xy))",
        unit: 3,
        topic: "3.1",
        tags: [],
        solution: "sample solution"
    }, {
        //25
        id: 62,
        question: "Find the slope of the graph of ${\\it xy} = 6$ at the point $(-6, -1)$. (Hint: find $\\it dx/dy$.)",
        answer: "-1/6",
        unit: 3,
        topic: "3.1",
        tags: [],
        solution: "sample solution"
    }, {
        //31
        id: 63,
        question: "Find the slope of the graph of $\\tan{\\it (x+ y)} = \\it x$ at the point $(0, 0)$. (Hint: find $\\it dx/dy$.)",
        answer: "0",
        unit: 3,
        topic: "3.1",
        tags: [],
        solution: "sample solution"
    }, 
    //--------------------------------------------SECTION 3.2 ----------------------------------
    {
        //7
        id: 64,
        question: "A point is moving along the graph of the function ${\\it y} = 2{\\it x}^2 + 1$ at the rate ${\\it dx/dt} = 2$ centimeters per second. Find $\\it dy/dt$ for ${\\it x} = -1$.",
        answer: "-8",
        unit: 3,
        topic: "3.2",
        tags: [],
        solution: "sample solution"
    }, {
        //13
        id: 65,
        question: "The radius $\\it r$ of a sphere is increasing at a rate of $3$ inches per minute. Find the rate of change of the volume when ${\\it r} = 9$ inches.",
        answer: "972pi",
        unit: 3,
        topic: "3.2",
        tags: [],
        solution: "sample solution"
    }, {
        //17
        id: 66,
        question: "Sand is falling into a conical pile at a rate of $10$ cubic feet per minute. The diamter of the base of the cone is three times the altitude. At what rate is the height of the pile changing when the pile is $15$ feet high? (${\\it V} = \\dfrac{1}{3} \\pi \\it r^2 h $)",
        answer: "8/(405pi)",
        unit: 3,
        topic: "3.2",
        tags: [],
        solution: "sample solution"
    }, {
        //29
        id: 67,
        question: "A man $6$ feet tall walks at a rate of $5$ feet per second away from a light that is $15$ feet above the ground. When he is $10$ feet away from the base of the light, at what rate is the length of his shadow increasing?",
        answer: "10/3",
        unit: 3,
        topic: "3.2",
        tags: [],
        solution: "sample solution"
    },
    //--------------------------------------------SECTION 3.3 ----------------------------------
    {
        //43
        id: 68,
        question: "Find the derivative of the function $\\it f(x)$ = $ \\ln 3{\\it x} $.",
        answer: "f'(x) = 1/x",
        unit: 3,
        topic: "3.3",
        tags: [],
        solution: "sample solution"
    }, {
        //55
        id: 69,
        question: "Find the derivative of the function $\\it g(x)$ = $\\dfrac {\\ln {\\it x}}{{\\it x}^2} $.",
        answer: "g'(x) = (1 - 2 ln t)/(t^3)",
        unit: 3,
        topic: "3.3",
        tags: [],
        solution: "sample solution"
    }, {
        //63
        id: 70,
        question: "Find the derivative of the function $\\it y$ = $\\ln |\\sin \\it x|$.",
        answer: "y' = cot x",
        unit: 3,
        topic: "3.3",
        tags: [],
        solution: "sample solution"
    }, {
        //77
        id: 71,
        question: "Use logarithmic differentiation to find $\\it dx/dy$: ${\\it y} = \\dfrac{{\\it x}^2 \\sqrt {3{\\it x}-2}}{({\\it x}+1)^2}, {\\it x} > \\dfrac {2}{3}$",
        answer: "y' = (3x^3 + 15x^2 - 8x)/(2(x + 1)^3 sqrt (3x-2))",
        unit: 3,
        topic: "3.3",
        tags: [],
        solution: "sample solution"
    }, {
        //33
        id: 72,
        question: "Find the derivative of the function $\\it y$ = ${\\it e} ^ {5 \\it x}$.",
        answer: "y' = 5e^(5x)",
        unit: 3,
        topic: "3.3",
        tags: [],
        solution: "sample solution"
    }, {
        //45
        id: 73,
        question: "Find the derivative of the function $\\it y$ = $\\ln (2 - {\\it e} ^ {5 \\it x})$.",
        answer: "-(5e^(5x))/(2 - e^(5x))",
        unit: 3,
        topic: "3.3",
        tags: [],
        solution: "sample solution"
    }, {
        //57
        id: 74,
        question: "Find the equation of the tangent line to the graph of the function $\\it y$ = ${\\it e} ^ {3 {\\it x} - {\\it x}^2}$ at the point $(3, 1)$.",
        answer: "y = -3x + 10",
        unit: 3,
        topic: "3.3",
        tags: [],
        solution: "sample solution"
    },
    //--------------------------------------------SECTION 3.4 ----------------------------------
    {
        //43
        id: 75,
        question: "Find the inverse function of $\\it f(x)$ = $\\sqrt[3]{{\\it x} - 1}$.",
        answer: "f^-1(x) = x^3 + 1",
        unit: 3,
        topic: "3.4",
        tags: [],
        solution: "sample solution"
    }, {
        //63
        id: 76,
        question: "Find $({\\it f\\>} ^ {-1})' (\\it a) $ for $\\it f(x)$ = $5-2{\\it x}^3$ and ${\\it a} = 7$.",
        answer: "-1/6",
        unit: 3,
        topic: "3.4",
        tags: [],
        solution: "sample solution"
    }, {
        //67
        id: 77,
        question: "Find $({\\it f\\>} ^ {-1})' (\\it a) $ for $\\it f(x)$ = $\\sin {\\it x},\\>\\> -\\dfrac{\\pi}{2} \\leq {\\it x} \\leq \\dfrac{\\pi}{2},$ and ${\\it a} = \\dfrac{1}{2}$.",
        answer: "(2 sqrt 3)/3",
        unit: 3,
        topic: "3.4",
        tags: [],
        solution: "sample solution"
    }, {
        //41
        id: 78,
        question: "Find the derivative of the function $\\it y$ = $5^{-4\\it x}$.",
        answer: "y' = (-4 ln 5)/625^x",
        unit: 3,
        topic: "3.4",
        tags: [],
        solution: "sample solution"
    }, {
        //45
        id: 79,
        question: "Find the derivative of the function $\\it y$ = $\\dfrac{-2{\\it x}^2}{8^{\\it x}}$.",
        answer: "y' = (-4x + 2x^2 ln 8)/8^x",
        unit: 3,
        topic: "3.4",
        tags: [],
        solution: "sample solution"
    }, {
        //65
        id: 80,
        question: "Use logarithmic differentiation to find $\\it dy/dx$ for $\\it y$ = ${\\it x}^{2/\\it x}$.",
        answer: "2x^((2/x) - 2)(1 - ln x)",
        unit: 3,
        topic: "3.4",
        tags: [],
        solution: "sample solution"
    },
    //--------------------------------------------SECTION 3.5 ----------------------------------
    {
        //25
        id: 81,
        question: "Evaluate $\\sin (\\arctan \\dfrac{3}{4})$.",
        answer: "3/5",
        unit: 3,
        topic: "3.5",
        tags: [],
        solution: "sample solution"
    }, {
        //27
        id: 82,
        question: "Evaluate $\\cot (\\arcsin -\\dfrac{1}{2})$.",
        answer: "- sqrt 3",
        unit: 3,
        topic: "3.5",
        tags: [],
        solution: "sample solution"
    }, {
        //29
        id: 83,
        question: "Simplify $\\cos (\\arcsin 2\\it x)$.",
        answer: "sqrt (1 - 4x^2)",
        unit: 3,
        topic: "3.5",
        tags: [],
        solution: "sample solution"
    }, {
        //37
        id: 84,
        question: "Solve for $\\it x$: $\\arcsin (3{\\it x} - \\pi) = \\dfrac{1}{2}$. Round your answer to the nearest thousandth.",
        answer: "1.207",
        unit: 3,
        topic: "3.5",
        tags: [],
        solution: "sample solution"
    }, {
        //43
        id: 85,
        question: "Find the derivative of the function $\\it g(x)$ = $3\\arccos \\dfrac{\\it x}{2}$.",
        answer: "-3/sqrt(4 - x^2)",
        unit: 3,
        topic: "3.5",
        tags: [],
        solution: "sample solution"
    }, {
        //49
        id: 86,
        question: "Find the derivative of the function $\\it g(x)$ = $\\sin (\\arccos \\it x)$.",
        answer: "g'(x) = -x/sqrt (1 - x^2)",
        unit: 3,
        topic: "3.5",
        tags: [],
        solution: "sample solution"
    }
];
    
    export default unit3Problems;