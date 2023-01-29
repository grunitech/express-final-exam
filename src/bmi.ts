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
    if ( input.weightUnit === 1) input.weight *= 0.001;
    if ( input.weightUnit === 2) input.weight *= 0.45359237;
    if ( input.heightUnit === 0) input.height *= 0.01;
    if ( input.heightUnit === 2) input.height *= 0.0254;
    if ( input.heightUnit === 3) input.height *= 0.3048;

    const inputBmi = Math.round(input.weight / (input.height) ** 2)
    let inputStatus = 0
    if (inputBmi >= 18.5 &&  inputBmi < 25) {
        inputStatus = 1;
    }else if (inputBmi  >= 25 && inputBmi < 30 ) {
        inputStatus = 2;
    }else if (inputBmi > 30) {
        inputStatus = 3;
    }
    return {status: inputStatus, bmi: inputBmi};
}
