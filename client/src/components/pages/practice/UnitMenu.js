import React from 'react'
import UnitMenuItem from './UnitMenuItem';

const UnitMenu = () => {
  return (
    <div className=''>
    <div className='relative w-full '>
        <UnitMenuItem unit = "1" topics = {[
          {num: "1.1", name: "Evaluating Limits"},
          {num: "1.2", name: "One-Sided Limits and Continuity"}, 
          {num: "1.3", name: "Infinite Limits"}, 
          {num: "1.4", name: "Advanced Limits and Squeeze Theorem"}]}/>
        <UnitMenuItem unit = "2" topics = {[
          {num: "2.1", name: "Rates of Change and Tangent Lines"}, 
          {num: "2.2", name: "Differentiability and Derivatives in Context"}, 
          {num: "2.3", name: "Tangent Lines and Differentials"}, 
          {num: "2.4", name: "Power Rule"}, 
          {num: "2.5", name: "Product and Quotient Rules"}, 
          {num: "2.6", name: "Chain Rule"}]}/>
        <UnitMenuItem unit = "3" topics = {[
          {num: "3.1", name: "Implicit Differentiation"},
          {num: "3.2", name: "Related Rates"},
          {num: "3.3", name: "Exponential & Logarithmic Functions"},
          {num: "3.4", name: "Inverse Functions"},
          {num: "3.5", name: "Inverse Trig Functions"}]}/>
        <UnitMenuItem unit = "4" topics = {[
          {num: "4.1", name: "Increasing and Decreasing Behavior"},
          {num: "4.2", name: "Concavity and Points of Inflection"},
          {num: "4.3", name: "Curve Sketching"},
          {num: "4.4", name: "Using the Derivative Graph"},
          {num: "4.5", name: "Absolute Extrema"}]}/>
        <UnitMenuItem unit = "5" topics = {[
          {num: "5.1", name: "Optimization"},
          {num: "5.2", name: "Particle Motion and Derivatives"},
          {num: "5.3", name: "Mean Value Theorem"},
          {num: "5.4", name: "L'Hôpital's Rule"}]}/>
        <UnitMenuItem unit = "6" topics = {[
          {num: "6.1", name: "Area and Definite Integrals"},
          {num: "6.2", name: "Riemann Sums"},
          {num: "6.3", name: "Antiderivatives and Indefinite Integrals"},
          {num: "6.4", name: "The First Fundamental Theorem"},
          {num: "6.5", name: "The Second Fundamental Theorem"},
          {num: "6.6", name: "Integrals in Context"}]}/>
        <UnitMenuItem unit = "7" topics = {[
          {num: "7.1", name: "Integration by Substitution"},
          {num: "7.2", name: "Exponential & Logarithmic Integrals"},
          {num: "7.3", name: "Trig Substitution"},
          {num: "7.4", name: "Algebraic Methods for Integration"}]}/>
        <UnitMenuItem unit = "8" topics = {[
          {num: "8.1", name: "Differential Equations and Slope Fields"},
          {num: "8.2", name: "Separation of Variables for Differential Equations"},
          {num: "8.3", name: "Exponential Growth and Decay"},
          {num: "8.4", name: "Area Between Two Curves"},
          {num: "8.5", name: "Volume of Solids of Revolution"},
          {num: "8.6", name: "Volume of Solids by Cross-Sections"}]}/>
        </div>
</div>

  )
}

export default UnitMenu;