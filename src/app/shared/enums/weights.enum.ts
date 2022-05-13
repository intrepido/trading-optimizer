export const enum WeightPattern {
    HeadAndShoulders = 1,
    InverseHeadAndShoulders = 1,
    DoubleTop = 1,
    DoubleBottom = 1,
    AscTrianguleUptrend = 2,
    AscTrianguleDowntrend = 1,
    DescTrianguleDowntrend = 2,
    DescTrianguleUptrend = 1,
}

export type Weight = WeightPattern;