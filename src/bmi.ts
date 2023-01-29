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
    let height:number= input.height
    let weight:number=input.weight
    if(input.heightUnit==0){ //cm  
        height = input.height*0.01
    }else if(input.heightUnit==2){//inch
        height = input.height*0.0254
    }else if(input.heightUnit==3){//feet
        height = input.height*0.3048
    }
    if(input.weightUnit==1){//gram
        weight=input.weight*0.001
    }else if(input.weightUnit==2){//lbs
        weight=input.weight*0.453592
    }
    height = height**2;
    const resultBmi = weight/height;
    let resultStatus:number=1;
    if((resultBmi>=18.5)&&(resultBmi<25)){
        resultStatus=2;
    }else if((resultBmi>=25)&&(resultBmi<30)){
        resultStatus=3;
    }else if(resultBmi>30){
        resultStatus=4;
    }
    
    return {status: resultStatus, bmi: resultBmi};
}
