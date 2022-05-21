import { ActionType } from '../enums/action-type.enum';
import { ElementType } from '../enums/element-type.enum';

export interface Option {
    id?: number | string,
    name?: string,
    type?: ActionType,
    style?: OptionStyle,
    default?: boolean
}

export interface OptionStyle {
    type: ElementType,
    class?: string,
    isUnwrapped?: boolean
}