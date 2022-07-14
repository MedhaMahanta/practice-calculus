import React from 'react'
import UnitMenuItem from './UnitMenuItem';

const UnitMenu = () => {
  return (
    <div className=''>
    <div className='relative w-full '>
        <UnitMenuItem unit = "1" topics = {["1.1 Evaluating Limits", "1.2 One-Sided Limits and Continuity", "1.3 Infinite Limits", "1.4 Advanced Limits and Squeeze Theorem"]}/>
        <UnitMenuItem unit = "2" topics = {["2.1 Rates of Change and Tangent Lines", "2.2 Differentiability and Derivatives in Context", "2.3 Tangent Lines and Differentials", "2.4 Power Rule", "2.5 Product and Quotient Rules", "2.6 Chain Rule"]}/>
        <UnitMenuItem unit = "3" topics = {["Evaluating Limits"]}/>
        <UnitMenuItem unit = "4" topics = {["Evaluating Limits"]}/>
        <UnitMenuItem unit = "5" topics = {["Evaluating Limits"]}/>
        <UnitMenuItem unit = "6" topics = {["Evaluating Limits"]}/>
        <UnitMenuItem unit = "7" topics = {["Evaluating Limits"]}/>
        <UnitMenuItem unit = "8" topics = {["Evaluating Limits"]}/>
        </div>
</div>

  )
}

export default UnitMenu;