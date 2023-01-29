/**
 * BMI Calculator
 */

export const BmiStatus = {
    Underweight: 0,
    HealthyWeight: 1,
    Overweight: 2,
    Obesity: 3
}

export const WeightUnits = {
    KG: 0,     // kilograms
    G: 1,      // grams
    Pound: 2,  // lbs
}

export const HeightUnits = {
    CM: 0,     // centimeter
    M: 1,      // meter
    In: 2,     // inch
    Ft: 3,     // feet
}

export interface BmiInput {
    weight: number;
    weightUnit: number;
    height: number;
    heightUnit: number;
}

export interface BmiOutput {
    bmi: number;
    status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
    let weight = 0;
    if (input.weightUnit === 1)
        weight = input.weight * 100
    if (input.weightUnit === 2)
        weight = input.weight *  0.45359237
    if (input.weightUnit === 0)
        weight = input.weight

    let height=1;
    if (input.heightUnit === 0)
        height = input.height * 100
    if (input.heightUnit === 2)
        weight = input.height /  39.3701
    if (input.heightUnit === 3)
        height = input.height / 3.28084
    if (input.heightUnit === 1)
        height = input.height

    if (weight/(height**2) < 18.5){
        return {status: 0, bmi: Math.round(weight/(height**2))};
    }else if ( (weight/(height**2))>= 18.5 &&  (weight/(height**2))< 25){
        return {status: 1, bmi: Math.round(weight/(height**2))};
    }else if ((weight/(height**2))>= 25 &&  (weight/(height**2))< 30){
        return {status: 2, bmi: Math.round(weight/(height**2))};
    }else if ((weight/(height**2))>=30){
        return {status: 3, bmi: Math.round(weight/(height**2))};
    }
    return {status: 0, bmi: 0};
}
