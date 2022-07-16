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