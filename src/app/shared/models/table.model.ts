import { Option } from './option.model';
import { Weight } from '../enums/weights.enum';
import { ElementType } from '../enums/element-type.enum';
import { Alignment } from '../enums/alignment.enum';
import { TableType } from '../enums/table-type.enum';

export interface Table {
    type: TableType,
    headers: string[],
    columnType: ColumnType
}

/** 
 *  Table where the options will be the same for each column. 
 * 
 *   Ex: The checkbox in columns 1, 2 and 3 must add or subtract the same weight to a SPECIFIC action type (BUY/SELL)
 * 
 *  [Note]: The weight is defined by column headers
 */
export interface TableSymmetricColumns extends Table {
    rows: RowSymmetricColumns[]
}

export interface RowSymmetricColumns {
    description: string,
    headerWeights: Weight[],
    options: Option[]
}

/** 
 *  Table where the option could be customized for each column.
 * 
 *   Ex: The checkbox of columns 1, 2 and 3 must add or subtract the same weight to a NON-SPECIFIC action type (BUY/SELL)
 * 
 *  [Note]: The weight is defined by column headers
 */
export interface TableAsymmetricColumns extends Table {
    rows: RowAsymmetricColumns[]
}

export interface RowAsymmetricColumns {
    description: string,
    headerWeightOptions: HeaderWeightOptions
}

export interface HeaderWeightOptions {
    weight: Weight,
    options: Option[]
}

export interface ColumnType {
    type: ElementType.Radio | ElementType.Toggle | ElementType.Checkbox,
    behavior?: ElementType.Radio | ElementType.RadioCheck | ElementType.Checkbox,
    alignment?: Alignment
}