import { Weight } from "../enums/weights.enum";
import { Option } from "./option.model";

export interface WeightMultipleOption {
    weight: Weight,
    options: Option[]
}