import { WeightDescriptor } from '../models/weight-descriptor.model';
import { WeightPattern } from "../enums/weights.enum";

const descTriangule: WeightDescriptor[] = [
    {
        id: 0,
        name: 'Descending Triangule from Downtrend',
        weight: WeightPattern.DescTrianguleDowntrend
    },
    {
        id: 1,
        name: 'Descending Triangule from Uptrend',
        weight: WeightPattern.DescTrianguleUptrend
    },
]

const ascTriangule: WeightDescriptor[] = [
    {
        id: 0,
        name: 'Ascending Triangule from Uptrend',
        weight: WeightPattern.AscTrianguleUptrend
    },
    {
        id: 1,
        name: 'Ascending Triangule from Downtrend',
        weight: WeightPattern.AscTrianguleDowntrend
    },
]

export const appConstants = {
    weight: {
        pattern: {
            descTriangule,
            ascTriangule
        }
    }
}