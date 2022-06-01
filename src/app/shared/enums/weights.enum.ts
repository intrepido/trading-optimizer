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

export const enum WeightOperation {
    TwentyOneEMA1minChart = 2,
    TwentyOneEMA5minChart = 2,
    TwoHundredMA1minChart = 3,
    TwoHundredMA5minChart = 3,
    VWAPLine1minChart = 3,
    VWAPBandLine1minChart = 1,
    StrongKeyLevel = 3,
    WeakKeyLevel = 2,
    ChannelBorder= 2,
    ChannelMiddleLine = 1,
    FibonacciKeyLevel = 3,
    BrokenTrend = 4,
    VolumenRetracement = 5,
    SessionVolumeProfilePOC = 2,
    LackLiquidityBreakoutArea = 3
}

export type Weight = WeightPattern | WeightMarketSentiment | WeightDivergency | WeightOperation;