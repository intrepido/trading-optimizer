export const enum WeightPattern {
    HeadAndShoulders = 1,
    InverseHeadAndShoulders = 1,
    DoubleTop = 1,
    DoubleBottom = 1,
    AscTrianguleUptrend = 2,
    AscTrianguleDowntrend = 1,
    DescTrianguleDowntrend = 2,
    DescTrianguleUptrend = 1,
    SymetricalTrianguleUptrend = 1,
    SymetricalTrianguleDowntrend = 1,
    ParallelChannelUptrend = 1,
    ParallelChannelDowntrend = 1,
}

export const enum WeightMarketSentiment {
    OverallMonthTrend = 1,
    OverallWeekTrend = 1,
    OverallDayTrend = 1,
    PricePositionRelative200MA = 1,
    Slope200MA = 1,
    PricePositionRelative21EMA = 1,
    Slope21EMA = 1,
    PricePositionRelativeVWAP = 1,
    SlopeVWAP = 1,
}

export const enum WeightDivergency {
    StochasticsRSIBuySignal = 2,
    CDVSellAbsortionDivergence = 3,
    CDVLackSellInterestDivergence = 2,
    StochasticsRSISellSignal = 2,
    CDVBuyAbsortionDivergence = 3,
    CDVLackBuyInterestDivergence = 2,
}

export type Weight = WeightPattern | WeightMarketSentiment | WeightDivergency;