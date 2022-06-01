import { Option } from './option.model';
import { Weight } from '../enums/weights.enum';
import { ElementType } from '../enums/element-type.enum';
import { Alignment } from '../enums/alignment.enum';

export interface Table {
    headers: string[],
    columnType: ColumnType,
    rows: Row[]
}

export interface Row {
    description: string,
    columns: Column[]
}

export interface Column {
    weight: Weight,
    options: Option[]
}

export interface ColumnType {
    type: ElementType.Radio | ElementType.Toggle | ElementType.Checkbox,
    behavior?: ElementType.Radio | ElementType.RadioCheck | ElementType.Checkbox,
    alignment?: Alignment
}