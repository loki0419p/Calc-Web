import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Download } from 'lucide-react';

const IntegrationGuide = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const downloadFile = () => {
    const content = generateFileContent();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'calculus_reference_guide.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const generateFileContent = () => {
    let content = `COMPLETE CALCULUS REFERENCE GUIDE
=====================================
Generated: ${new Date().toLocaleString()}

TABLE OF CONTENTS
=================
1. Derivative Formulas
2. Integration Methods (15 Techniques)

=====================================
SECTION 1: DERIVATIVE FORMULAS
=====================================

BASIC RULES
-----------
Power Rule: d/dx[x^n] = n·x^(n-1)
Constant Rule: d/dx[c] = 0
Constant Multiple: d/dx[c·f(x)] = c·f'(x)
Sum Rule: d/dx[f(x) + g(x)] = f'(x) + g'(x)
Difference Rule: d/dx[f(x) - g(x)] = f'(x) - g'(x)

PRODUCT AND QUOTIENT RULES
---------------------------
Product Rule: d/dx[f(x)·g(x)] = f'(x)·g(x) + f(x)·g'(x)
Quotient Rule: d/dx[f(x)/g(x)] = [f'(x)·g(x) - f(x)·g'(x)] / [g(x)]^2

CHAIN RULE
----------
d/dx[f(g(x))] = f'(g(x))·g'(x)

EXPONENTIAL AND LOGARITHMIC
----------------------------
d/dx[e^x] = e^x
d/dx[a^x] = a^x·ln(a)
d/dx[ln(x)] = 1/x
d/dx[log_a(x)] = 1/(x·ln(a))

TRIGONOMETRIC DERIVATIVES
--------------------------
d/dx[sin(x)] = cos(x)
d/dx[cos(x)] = -sin(x)
d/dx[tan(x)] = sec^2(x)
d/dx[cot(x)] = -csc^2(x)
d/dx[sec(x)] = sec(x)·tan(x)
d/dx[csc(x)] = -csc(x)·cot(x)

INVERSE TRIGONOMETRIC DERIVATIVES
----------------------------------
d/dx[arcsin(x)] = 1/√(1-x^2)
d/dx[arccos(x)] = -1/√(1-x^2)
d/dx[arctan(x)] = 1/(1+x^2)
d/dx[arccot(x)] = -1/(1+x^2)
d/dx[arcsec(x)] = 1/(|x|·√(x^2-1))
d/dx[arccsc(x)] = -1/(|x|·√(x^2-1))

HYPERBOLIC DERIVATIVES
-----------------------
d/dx[sinh(x)] = cosh(x)
d/dx[cosh(x)] = sinh(x)
d/dx[tanh(x)] = sech^2(x)
d/dx[coth(x)] = -csch^2(x)
d/dx[sech(x)] = -sech(x)·tanh(x)
d/dx[csch(x)] = -csch(x)·coth(x)

INVERSE HYPERBOLIC DERIVATIVES
-------------------------------
d/dx[arcsinh(x)] = 1/√(x^2+1)
d/dx[arccosh(x)] = 1/√(x^2-1)
d/dx[arctanh(x)] = 1/(1-x^2)

=====================================
SECTION 2: INTEGRATION METHODS
=====================================

`;

    methods.forEach((method, idx) => {
      content += `\n${method.title}\n`;
      content += '='.repeat(method.title.length) + '\n';
      content += `Formula: ${method.formula}\n\n`;
      
      method.examples.forEach((example, exIdx) => {
        content += `Example ${exIdx + 1}: ${example.problem}\n`;
        content += '-'.repeat(50) + '\n';
        example.steps.forEach(step => {
          content += `${step}\n`;
        });
        content += `Final Answer: ${example.solution}\n\n`;
      });
      
      content += '\n';
    });

    content += `\n=====================================
END OF REFERENCE GUIDE
=====================================

Remember:
• Always add +C for indefinite integrals
• Check your answer by differentiating
• Try simplification before choosing a method
• Use LIATE for integration by parts
• Practice pattern recognition

Good luck with your calculus studies!`;

    return content;
  };

  const methods = [
    {
      id: 1,
      title: "1. Basic Power Rule",
      formula: "∫xⁿ dx = (xⁿ⁺¹)/(n+1) + C, where n ≠ -1",
      examples: [
        { 
          problem: "∫x³ dx", 
          steps: [
            "Step 1: Identify n = 3",
            "Step 2: Apply power rule: xⁿ⁺¹/(n+1)",
            "Step 3: x³⁺¹/(3+1) = x⁴/4",
            "Step 4: Add constant of integration"
          ],
          solution: "= x⁴/4 + C" 
        },
        { 
          problem: "∫5x² dx", 
          steps: [
            "Step 1: Factor out constant: 5∫x² dx",
            "Step 2: Apply power rule to x²: x³/3",
            "Step 3: Multiply by 5: 5(x³/3)",
            "Step 4: Simplify and add C"
          ],
          solution: "= 5(x³/3) + C = (5x³)/3 + C" 
        },
        { 
          problem: "∫(1/x²) dx = ∫x⁻² dx", 
          steps: [
            "Step 1: Rewrite 1/x² as x⁻²",
            "Step 2: Identify n = -2",
            "Step 3: Apply power rule: x⁻²⁺¹/(-2+1) = x⁻¹/(-1)",
            "Step 4: Simplify: -x⁻¹ = -1/x",
            "Step 5: Add C"
          ],
          solution: "= x⁻¹/(-1) + C = -1/x + C" 
        }
      ]
    },
    {
      id: 2,
      title: "2. Sum and Difference Rule",
      formula: "∫[f(x) ± g(x)] dx = ∫f(x) dx ± ∫g(x) dx",
      examples: [
        { 
          problem: "∫(x² + 3x - 5) dx", 
          steps: [
            "Step 1: Split into separate integrals: ∫x² dx + ∫3x dx - ∫5 dx",
            "Step 2: Integrate x²: x³/3",
            "Step 3: Integrate 3x: 3(x²/2) = 3x²/2",
            "Step 4: Integrate 5: 5x",
            "Step 5: Combine all terms with C"
          ],
          solution: "= x³/3 + 3x²/2 - 5x + C" 
        },
        { 
          problem: "∫(4x³ - 2x + 7) dx", 
          steps: [
            "Step 1: Split: ∫4x³ dx - ∫2x dx + ∫7 dx",
            "Step 2: Integrate 4x³: 4(x⁴/4) = x⁴",
            "Step 3: Integrate 2x: 2(x²/2) = x²",
            "Step 4: Integrate 7: 7x",
            "Step 5: Combine: x⁴ - x² + 7x + C"
          ],
          solution: "= x⁴ - x² + 7x + C" 
        }
      ]
    },
    {
      id: 3,
      title: "3. Constant Multiple Rule",
      formula: "∫k·f(x) dx = k·∫f(x) dx",
      examples: [
        { 
          problem: "∫6x² dx", 
          steps: [
            "Step 1: Factor out constant 6: 6∫x² dx",
            "Step 2: Integrate x² using power rule: x³/3",
            "Step 3: Multiply by 6: 6·(x³/3) = 6x³/3",
            "Step 4: Simplify: 2x³ + C"
          ],
          solution: "= 6·(x³/3) + C = 2x³ + C" 
        },
        { 
          problem: "∫(-3sin(x)) dx", 
          steps: [
            "Step 1: Factor out -3: -3∫sin(x) dx",
            "Step 2: Integrate sin(x): -cos(x)",
            "Step 3: Multiply by -3: -3·(-cos(x)) = 3cos(x)",
            "Step 4: Add C"
          ],
          solution: "= -3·(-cos(x)) + C = 3cos(x) + C" 
        }
      ]
    },
    {
      id: 4,
      title: "4. Exponential and Logarithmic",
      formula: "∫eˣ dx = eˣ + C, ∫aˣ dx = aˣ/ln(a) + C, ∫(1/x) dx = ln|x| + C",
      examples: [
        { 
          problem: "∫e²ˣ dx", 
          steps: [
            "Step 1: Use substitution: let u = 2x",
            "Step 2: Find du: du = 2dx, so dx = du/2",
            "Step 3: Rewrite integral: ∫eᵘ · (du/2) = (1/2)∫eᵘ du",
            "Step 4: Integrate: (1/2)eᵘ",
            "Step 5: Substitute back: (1/2)e²ˣ + C"
          ],
          solution: "= (1/2)e²ˣ + C" 
        },
        { 
          problem: "∫(3/x) dx", 
          steps: [
            "Step 1: Factor out constant: 3∫(1/x) dx",
            "Step 2: Recall that ∫(1/x) dx = ln|x|",
            "Step 3: Multiply by 3: 3ln|x|",
            "Step 4: Add C"
          ],
          solution: "= 3ln|x| + C" 
        },
        { 
          problem: "∫2ˣ dx", 
          steps: [
            "Step 1: Use formula for aˣ where a = 2",
            "Step 2: Apply ∫aˣ dx = aˣ/ln(a)",
            "Step 3: Substitute: 2ˣ/ln(2)",
            "Step 4: Add C"
          ],
          solution: "= 2ˣ/ln(2) + C" 
        }
      ]
    },
    {
      id: 5,
      title: "5. Trigonometric Integrals",
      formula: "∫sin(x) dx = -cos(x) + C, ∫cos(x) dx = sin(x) + C, ∫sec²(x) dx = tan(x) + C",
      examples: [
        { 
          problem: "∫sin(x) dx", 
          steps: [
            "Step 1: Recall standard integral of sin(x)",
            "Step 2: Apply formula: -cos(x)",
            "Step 3: Add C"
          ],
          solution: "= -cos(x) + C" 
        },
        { 
          problem: "∫cos(3x) dx", 
          steps: [
            "Step 1: Use substitution: u = 3x",
            "Step 2: Find du: du = 3dx, so dx = du/3",
            "Step 3: Rewrite: ∫cos(u) · (du/3) = (1/3)∫cos(u) du",
            "Step 4: Integrate: (1/3)sin(u)",
            "Step 5: Substitute back: (1/3)sin(3x) + C"
          ],
          solution: "= (1/3)sin(3x) + C" 
        },
        { 
          problem: "∫tan²(x) dx", 
          steps: [
            "Step 1: Use identity: tan²(x) = sec²(x) - 1",
            "Step 2: Rewrite: ∫(sec²(x) - 1) dx",
            "Step 3: Split integral: ∫sec²(x) dx - ∫1 dx",
            "Step 4: Integrate: tan(x) - x",
            "Step 5: Add C"
          ],
          solution: "= tan(x) - x + C" 
        }
      ]
    },
    {
      id: 6,
      title: "6. U-Substitution",
      formula: "If u = g(x), then ∫f(g(x))·g'(x) dx = ∫f(u) du",
      examples: [
        { 
          problem: "∫2x·e^(x²) dx", 
          steps: [
            "Step 1: Identify inner function: u = x²",
            "Step 2: Find derivative: du/dx = 2x, so du = 2x dx",
            "Step 3: Notice that 2x dx is already in the integral",
            "Step 4: Substitute: ∫eᵘ du",
            "Step 5: Integrate: eᵘ",
            "Step 6: Substitute back: e^(x²) + C"
          ],
          solution: "= e^(x²) + C" 
        },
        { 
          problem: "∫sin(x)·cos(x) dx", 
          steps: [
            "Step 1: Let u = sin(x)",
            "Step 2: Find du: du = cos(x) dx",
            "Step 3: Substitute: ∫u du",
            "Step 4: Integrate using power rule: u²/2",
            "Step 5: Substitute back: sin²(x)/2",
            "Step 6: Add C"
          ],
          solution: "= sin²(x)/2 + C" 
        },
        { 
          problem: "∫x/√(x²+1) dx", 
          steps: [
            "Step 1: Let u = x² + 1",
            "Step 2: Find du: du = 2x dx, so x dx = du/2",
            "Step 3: Substitute: ∫(1/√u)·(du/2) = (1/2)∫u⁻¹/² du",
            "Step 4: Integrate: (1/2)·(u¹/²)/(1/2) = u¹/²",
            "Step 5: Substitute back: √(x²+1)",
            "Step 6: Add C"
          ],
          solution: "= √(x²+1) + C" 
        }
      ]
    },
    {
      id: 7,
      title: "7. Integration by Parts",
      formula: "∫u dv = uv - ∫v du (Choose u using LIATE: Logarithmic, Inverse trig, Algebraic, Trig, Exponential)",
      examples: [
        { 
          problem: "∫x·eˣ dx", 
          steps: [
            "Step 1: Choose u and dv using LIATE (Algebraic before Exponential)",
            "Step 2: Let u = x, then du = dx",
            "Step 3: Let dv = eˣ dx, then v = eˣ",
            "Step 4: Apply formula: uv - ∫v du",
            "Step 5: Substitute: x·eˣ - ∫eˣ dx",
            "Step 6: Integrate: x·eˣ - eˣ",
            "Step 7: Factor: eˣ(x - 1) + C"
          ],
          solution: "= eˣ(x-1) + C" 
        },
        { 
          problem: "∫x·sin(x) dx", 
          steps: [
            "Step 1: Let u = x (Algebraic), dv = sin(x) dx (Trig)",
            "Step 2: Then du = dx",
            "Step 3: Integrate dv: v = -cos(x)",
            "Step 4: Apply formula: x·(-cos(x)) - ∫(-cos(x)) dx",
            "Step 5: Simplify: -x·cos(x) + ∫cos(x) dx",
            "Step 6: Integrate: -x·cos(x) + sin(x)",
            "Step 7: Add C"
          ],
          solution: "= -x·cos(x) + sin(x) + C" 
        },
        { 
          problem: "∫ln(x) dx", 
          steps: [
            "Step 1: Rewrite as ∫ln(x)·1 dx",
            "Step 2: Let u = ln(x) (Logarithmic), dv = dx",
            "Step 3: Then du = (1/x) dx, v = x",
            "Step 4: Apply formula: x·ln(x) - ∫x·(1/x) dx",
            "Step 5: Simplify: x·ln(x) - ∫1 dx",
            "Step 6: Integrate: x·ln(x) - x",
            "Step 7: Add C"
          ],
          solution: "= x·ln(x) - x + C" 
        }
      ]
    },
    {
      id: 8,
      title: "8. Trigonometric Substitution",
      formula: "For √(a²-x²) use x=a·sin(θ), for √(a²+x²) use x=a·tan(θ), for √(x²-a²) use x=a·sec(θ)",
      examples: [
        { 
          problem: "∫√(1-x²) dx", 
          steps: [
            "Step 1: Recognize form √(a²-x²) where a = 1",
            "Step 2: Use substitution x = sin(θ)",
            "Step 3: Find dx: dx = cos(θ) dθ",
            "Step 4: Substitute √(1-x²) = √(1-sin²(θ)) = √(cos²(θ)) = cos(θ)",
            "Step 5: Integral becomes: ∫cos(θ)·cos(θ) dθ = ∫cos²(θ) dθ",
            "Step 6: Use identity: cos²(θ) = (1 + cos(2θ))/2",
            "Step 7: Integrate: (θ + sin(2θ)/2)/2 = (θ + sin(θ)cos(θ))/2",
            "Step 8: Back-substitute: θ = arcsin(x), sin(θ) = x, cos(θ) = √(1-x²)",
            "Step 9: Result: (arcsin(x) + x√(1-x²))/2 + C"
          ],
          solution: "= (arcsin(x) + x√(1-x²))/2 + C" 
        },
        { 
          problem: "∫1/√(x²+1) dx", 
          steps: [
            "Step 1: Recognize form √(a²+x²) where a = 1",
            "Step 2: Use substitution x = tan(θ)",
            "Step 3: Find dx: dx = sec²(θ) dθ",
            "Step 4: Substitute √(x²+1) = √(tan²(θ)+1) = √(sec²(θ)) = sec(θ)",
            "Step 5: Integral becomes: ∫(1/sec(θ))·sec²(θ) dθ = ∫sec(θ) dθ",
            "Step 6: Integrate: ln|sec(θ) + tan(θ)|",
            "Step 7: Back-substitute: tan(θ) = x, sec(θ) = √(x²+1)",
            "Step 8: Result: ln|x + √(x²+1)| + C"
          ],
          solution: "= ln|x + √(x²+1)| + C" 
        }
      ]
    },
    {
      id: 9,
      title: "9. Partial Fractions",
      formula: "Decompose rational functions into simpler fractions",
      examples: [
        { 
          problem: "∫1/(x²-1) dx", 
          steps: [
            "Step 1: Factor denominator: x² - 1 = (x-1)(x+1)",
            "Step 2: Set up partial fractions: 1/((x-1)(x+1)) = A/(x-1) + B/(x+1)",
            "Step 3: Multiply both sides by (x-1)(x+1): 1 = A(x+1) + B(x-1)",
            "Step 4: Let x = 1: 1 = A(2) + 0, so A = 1/2",
            "Step 5: Let x = -1: 1 = 0 + B(-2), so B = -1/2",
            "Step 6: Rewrite: ∫[(1/2)/(x-1) - (1/2)/(x+1)] dx",
            "Step 7: Integrate: (1/2)ln|x-1| - (1/2)ln|x+1|",
            "Step 8: Combine logs: (1/2)ln|(x-1)/(x+1)| + C"
          ],
          solution: "= (1/2)ln|(x-1)/(x+1)| + C" 
        },
        { 
          problem: "∫(3x+5)/(x²+5x+6) dx", 
          steps: [
            "Step 1: Factor denominator: x² + 5x + 6 = (x+2)(x+3)",
            "Step 2: Set up: (3x+5)/((x+2)(x+3)) = A/(x+2) + B/(x+3)",
            "Step 3: Multiply: 3x + 5 = A(x+3) + B(x+2)",
            "Step 4: Let x = -2: 3(-2) + 5 = A(1), so -1 = A, A = -1",
            "Step 5: Let x = -3: 3(-3) + 5 = B(-1), so -4 = -B, B = 4",
            "Step 6: Rewrite: ∫[-1/(x+2) + 4/(x+3)] dx",
            "Step 7: Integrate: -ln|x+2| + 4ln|x+3| + C"
          ],
          solution: "= -ln|x+2| + 4ln|x+3| + C" 
        }
      ]
    },
    {
      id: 10,
      title: "10. Trigonometric Identities",
      formula: "Use identities to simplify before integrating",
      examples: [
        { 
          problem: "∫sin²(x) dx", 
          steps: [
            "Step 1: Use power-reducing identity: sin²(x) = (1 - cos(2x))/2",
            "Step 2: Substitute: ∫(1 - cos(2x))/2 dx",
            "Step 3: Split: (1/2)∫1 dx - (1/2)∫cos(2x) dx",
            "Step 4: Integrate first term: (1/2)x",
            "Step 5: Integrate second term using u-sub: -(1/2)·(sin(2x)/2) = -sin(2x)/4",
            "Step 6: Combine: x/2 - sin(2x)/4 + C"
          ],
          solution: "= x/2 - sin(2x)/4 + C" 
        },
        { 
          problem: "∫cos²(x) dx", 
          steps: [
            "Step 1: Use power-reducing identity: cos²(x) = (1 + cos(2x))/2",
            "Step 2: Substitute: ∫(1 + cos(2x))/2 dx",
            "Step 3: Split: (1/2)∫1 dx + (1/2)∫cos(2x) dx",
            "Step 4: Integrate: (1/2)x + (1/2)·(sin(2x)/2)",
            "Step 5: Simplify: x/2 + sin(2x)/4 + C"
          ],
          solution: "= x/2 + sin(2x)/4 + C" 
        },
        { 
          problem: "∫sin(x)cos(x) dx", 
          steps: [
            "Step 1: Use double angle identity: sin(2x) = 2sin(x)cos(x)",
            "Step 2: So sin(x)cos(x) = sin(2x)/2",
            "Step 3: Substitute: ∫sin(2x)/2 dx = (1/2)∫sin(2x) dx",
            "Step 4: Use u-substitution: u = 2x, du = 2dx",
            "Step 5: Integrate: (1/2)·(-cos(2x)/2) = -cos(2x)/4",
            "Step 6: Add C"
          ],
          solution: "= -cos(2x)/4 + C" 
        }
      ]
    },
    {
      id: 11,
      title: "11. Inverse Trigonometric Forms",
      formula: "∫1/√(a²-x²) dx = arcsin(x/a) + C, ∫1/(a²+x²) dx = (1/a)arctan(x/a) + C",
      examples: [
        { 
          problem: "∫1/√(1-x²) dx", 
          steps: [
            "Step 1: Recognize standard form with a = 1",
            "Step 2: Apply formula: ∫1/√(a²-x²) dx = arcsin(x/a)",
            "Step 3: Substitute a = 1: arcsin(x/1) = arcsin(x)",
            "Step 4: Add C"
          ],
          solution: "= arcsin(x) + C" 
        },
        { 
          problem: "∫1/(1+x²) dx", 
          steps: [
            "Step 1: Recognize standard form with a = 1",
            "Step 2: Apply formula: ∫1/(a²+x²) dx = (1/a)arctan(x/a)",
            "Step 3: Substitute a = 1: (1/1)arctan(x/1) = arctan(x)",
            "Step 4: Add C"
          ],
          solution: "= arctan(x) + C" 
        },
        { 
          problem: "∫1/(4+x²) dx", 
          steps: [
            "Step 1: Rewrite as 1/(2² + x²), so a = 2",
            "Step 2: Apply formula: (1/a)arctan(x/a)",
            "Step 3: Substitute a = 2: (1/2)arctan(x/2)",
            "Step 4: Add C"
          ],
          solution: "= (1/2)arctan(x/2) + C" 
        }
      ]
    },
    {
      id: 12,
      title: "12. Improper Integrals",
      formula: "∫[a,∞) f(x) dx = lim(b→∞) ∫[a,b] f(x) dx",
      examples: [
        { 
          problem: "∫[1,∞) 1/x² dx", 
          steps: [
            "Step 1: Rewrite as limit: lim(b→∞) ∫[1,b] x⁻² dx",
            "Step 2: Integrate: lim(b→∞) [-x⁻¹] evaluated from 1 to b",
            "Step 3: Evaluate at bounds: lim(b→∞) [-1/b - (-1/1)]",
            "Step 4: Simplify: lim(b→∞) [-1/b + 1]",
            "Step 5: Take limit as b→∞: -0 + 1 = 1",
            "Step 6: The integral converges to 1"
          ],
          solution: "= 1" 
        },
        { 
          problem: "∫[0,∞) e⁻ˣ dx", 
          steps: [
            "Step 1: Rewrite as limit: lim(b→∞) ∫[0,b] e⁻ˣ dx",
            "Step 2: Integrate: lim(b→∞) [-e⁻ˣ] from 0 to b",
            "Step 3: Evaluate at bounds: lim(b→∞) [-e⁻ᵇ - (-e⁰)]",
            "Step 4: Simplify: lim(b→∞) [-e⁻ᵇ + 1]",
            "Step 5: Take limit: -0 + 1 = 1",
            "Step 6: The integral converges to 1"
          ],
          solution: "= 1" 
        }
      ]
    },
    {
      id: 13,
      title: "13. Numerical Integration",
      formula: "Trapezoidal Rule: ∫[a,b] f(x) dx ≈ (h/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]",
      examples: [
        { 
          problem: "Approximate ∫[0,2] x² dx using n=4", 
          steps: [
            "Step 1: Calculate step size: h = (b-a)/n = (2-0)/4 = 0.5",
            "Step 2: Identify points: x₀=0, x₁=0.5, x₂=1, x₃=1.5, x₄=2",
            "Step 3: Calculate function values:",
            "  f(0) = 0² = 0",
            "  f(0.5) = (0.5)² = 0.25",
            "  f(1) = 1² = 1",
            "  f(1.5) = (1.5)² = 2.25",
            "  f(2) = 2² = 4",
            "Step 4: Apply formula: (0.5/2)[0 + 2(0.25) + 2(1) + 2(2.25) + 4]",
            "Step 5: Simplify: 0.25[0 + 0.5 + 2 + 4.5 + 4] = 0.25(11) = 2.75",
            "Step 6: Compare to exact: ∫x² dx = x³/3, so [x³/3]₀² = 8/3 ≈ 2.67"
          ],
          solution: "≈ 2.75 (exact: 8/3 ≈ 2.67)" 
        }
      ]
    },
    {
      id: 14,
      title: "14. Reduction Formulas",
      formula: "Use recursive formulas for repeated patterns",
      examples: [
        { 
          problem: "∫sin³(x) dx using reduction formula", 
          steps: [
            "Step 1: Reduction formula: ∫sinⁿ(x) dx = -(1/n)sinⁿ⁻¹(x)cos(x) + ((n-1)/n)∫sinⁿ⁻²(x) dx",
            "Step 2: For n=3: -(1/3)sin²(x)cos(x) + (2/3)∫sin(x) dx",
            "Step 3: Integrate ∫sin(x) dx = -cos(x)",
            "Step 4: Substitute back: -(1/3)sin²(x)cos(x) + (2/3)(-cos(x))",
            "Step 5: Simplify: -(1/3)sin²(x)cos(x) - (2/3)cos(x)",
            "Step 6: Factor: -(1/3)cos(x)[sin²(x) + 2]",
            "Step 7: Add C"
          ],
          solution: "= -(1/3)sin²(x)cos(x) - (2/3)cos(x) + C" 
        },
        { 
          problem: "∫x²eˣ dx using repeated integration by parts", 
          steps: [
            "Step 1: First application: u = x², dv = eˣ dx",
            "Step 2: Then du = 2x dx, v = eˣ",
            "Step 3: Result: x²eˣ - ∫2xeˣ dx = x²eˣ - 2∫xeˣ dx",
            "Step 4: Second application on ∫xeˣ dx: u = x, dv = eˣ dx",
            "Step 5: Then du = dx, v = eˣ",
            "Step 6: Result: xeˣ - ∫eˣ dx = xeˣ - eˣ",
            "Step 7: Substitute back: x²eˣ - 2(xeˣ - eˣ)",
            "Step 8: Simplify: x²eˣ - 2xeˣ + 2eˣ = eˣ(x² - 2x + 2)",
            "Step 9: Add C"
          ],
          solution: "= eˣ(x² - 2x + 2) + C" 
        }
      ]
    },
    {
      id: 15,
      title: "15. Special Functions",
      formula: "Hyperbolic and other special cases",
      examples: [
        { 
          problem: "∫sinh(x) dx", 
          steps: [
            "Step 1: Recall that sinh(x) = (eˣ - e⁻ˣ)/2",
            "Step 2: Or use direct formula: d/dx[cosh(x)] = sinh(x)",
            "Step 3: Therefore ∫sinh(x) dx = cosh(x)",
            "Step 4: Add C"
          ],
          solution: "= cosh(x) + C" 
        },
        { 
          problem: "∫cosh(x) dx", 
          steps: [
            "Step 1: Recall that cosh(x) = (eˣ + e⁻ˣ)/2",
            "Step 2: Or use direct formula: d/dx[sinh(x)] = cosh(x)",
            "Step 3: Therefore ∫cosh(x) dx = sinh(x)",
            "Step 4: Add C"
          ],
          solution: "= sinh(x) + C" 
        },
        { 
          problem: "∫sech²(x) dx", 
          steps: [
            "Step 1: Recall that sech(x) = 1/cosh(x)",
            "Step 2: Use formula: d/dx[tanh(x)] = sech²(x)",
            "Step 3: Therefore ∫sech²(x) dx = tanh(x)",
            "Step 4: Add C"
          ],
          solution: "= tanh(x) + C" 
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <h1 className="text-4xl font-bold text-indigo-900 mb-2">Complete Calculus Reference Guide</h1>
        <p className="text-gray-600 mb-4">Derivatives and Integration Methods with Examples</p>
        <button
          onClick={downloadFile}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Download size={20} />
          Download Complete Guide
        </button>
      </div>

      {/* Derivative Formulas Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <h2 className="text-3xl font-bold text-indigo-900 mb-6">Derivative Formulas Reference</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Basic Rules</h3>
            <div className="bg-blue-50 rounded-lg p-4 space-y-2">
              <p className="font-mono text-sm">d/dx[x^n] = n·x^(n-1) <span className="text-gray-600">(Power Rule)</span></p>
              <p className="font-mono text-sm">d/dx[c] = 0 <span className="text-gray-600">(Constant Rule)</span></p>
              <p className="font-mono text-sm">d/dx[c·f(x)] = c·f'(x) <span className="text-gray-600">(Constant Multiple)</span></p>
              <p className="font-mono text-sm">d/dx[f(x) ± g(x)] = f'(x) ± g'(x) <span className="text-gray-600">(Sum/Difference)</span></p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Product and Quotient Rules</h3>
            <div className="bg-blue-50 rounded-lg p-4 space-y-2">
              <p className="font-mono text-sm">d/dx[f(x)·g(x)] = f'(x)·g(x) + f(x)·g'(x) <span className="text-gray-600">(Product Rule)</span></p>
              <p className="font-mono text-sm">d/dx[f(x)/g(x)] = [f'(x)·g(x) - f(x)·g'(x)] / [g(x)]² <span className="text-gray-600">(Quotient Rule)</span></p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Chain Rule</h3>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="font-mono text-sm">d/dx[f(g(x))] = f'(g(x))·g'(x)</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Exponential and Logarithmic</h3>
            <div className="bg-blue-50 rounded-lg p-4 space-y-2">
              <p className="font-mono text-sm">d/dx[e^x] = e^x</p>
              <p className="font-mono text-sm">d/dx[a^x] = a^x·ln(a)</p>
              <p className="font-mono text-sm">d/dx[ln(x)] = 1/x</p>
              <p className="font-mono text-sm">d/dx[log_a(x)] = 1/(x·ln(a))</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Trigonometric Derivatives</h3>
            <div className="bg-blue-50 rounded-lg p-4 grid grid-cols-2 gap-2">
              <p className="font-mono text-sm">d/dx[sin(x)] = cos(x)</p>
              <p className="font-mono text-sm">d/dx[cos(x)] = -sin(x)</p>
              <p className="font-mono text-sm">d/dx[tan(x)] = sec²(x)</p>
              <p className="font-mono text-sm">d/dx[cot(x)] = -csc²(x)</p>
              <p className="font-mono text-sm">d/dx[sec(x)] = sec(x)·tan(x)</p>
              <p className="font-mono text-sm">d/dx[csc(x)] = -csc(x)·cot(x)</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Inverse Trigonometric Derivatives</h3>
            <div className="bg-blue-50 rounded-lg p-4 grid grid-cols-2 gap-2">
              <p className="font-mono text-sm">d/dx[arcsin(x)] = 1/√(1-x²)</p>
              <p className="font-mono text-sm">d/dx[arccos(x)] = -1/√(1-x²)</p>
              <p className="font-mono text-sm">d/dx[arctan(x)] = 1/(1+x²)</p>
              <p className="font-mono text-sm">d/dx[arccot(x)] = -1/(1+x²)</p>
              <p className="font-mono text-sm">d/dx[arcsec(x)] = 1/(|x|√(x²-1))</p>
              <p className="font-mono text-sm">d/dx[arccsc(x)] = -1/(|x|√(x²-1))</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Hyperbolic Functions</h3>
            <div className="bg-blue-50 rounded-lg p-4 grid grid-cols-2 gap-2">
              <p className="font-mono text-sm">d/dx[sinh(x)] = cosh(x)</p>
              <p className="font-mono text-sm">d/dx[cosh(x)] = sinh(x)</p>
              <p className="font-mono text-sm">d/dx[tanh(x)] = sech²(x)</p>
              <p className="font-mono text-sm">d/dx[coth(x)] = -csch²(x)</p>
              <p className="font-mono text-sm">d/dx[sech(x)] = -sech(x)·tanh(x)</p>
              <p className="font-mono text-sm">d/dx[csch(x)] = -csch(x)·coth(x)</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Inverse Hyperbolic Derivatives</h3>
            <div className="bg-blue-50 rounded-lg p-4 space-y-2">
              <p className="font-mono text-sm">d/dx[arcsinh(x)] = 1/√(x²+1)</p>
              <p className="font-mono text-sm">d/dx[arccosh(x)] = 1/√(x²-1)</p>
              <p className="font-mono text-sm">d/dx[arctanh(x)] = 1/(1-x²)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Methods Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <h2 className="text-3xl font-bold text-indigo-900 mb-4">Integration Methods</h2>
        <p className="text-gray-600 mb-6">15 comprehensive techniques with step-by-step examples</p>
      </div>

      <div className="space-y-4">
        {methods.map((method) => (
          <div key={method.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleSection(method.id)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-xl font-semibold text-gray-800">{method.title}</h2>
              {expandedSections[method.id] ? (
                <ChevronDown className="text-indigo-600" />
              ) : (
                <ChevronRight className="text-indigo-600" />
              )}
            </button>
            
            {expandedSections[method.id] && (
              <div className="px-6 pb-6 border-t border-gray-200">
                <div className="bg-indigo-50 rounded-lg p-4 mt-4 mb-4">
                  <p className="font-mono text-sm text-indigo-900">{method.formula}</p>
                </div>
                
                <h3 className="font-semibold text-gray-700 mb-3">Examples:</h3>
                <div className="space-y-3">
                  {method.examples.map((example, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4">
                      <p className="font-mono text-sm text-gray-800 mb-3 font-semibold">
                        Problem: {example.problem}
                      </p>
                      <div className="ml-4 space-y-1 mb-3">
                        {example.steps.map((step, stepIdx) => (
                          <p key={stepIdx} className="text-sm text-gray-700">
                            {step}
                          </p>
                        ))}
                      </div>
                      <p className="font-mono text-sm text-green-700 font-semibold">
                        Final Answer: {example.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">General Tips:</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Always add the constant of integration (+C) for indefinite integrals</li>
          <li>• Check your answer by differentiating it</li>
          <li>• Try simplifying the integrand before choosing a method</li>
          <li>• For products, consider u-substitution first, then integration by parts</li>
          <li>• Use LIATE for choosing u in integration by parts</li>
          <li>• Practice recognizing patterns to quickly identify the best method</li>
        </ul>
      </div>
    </div>
  );
};

export default IntegrationGuide;