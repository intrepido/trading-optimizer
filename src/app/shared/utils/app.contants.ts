import { TableSymmetricColumns, TableAsymmetricColumns } from '../models/table.model';
import { WeightOption } from '../models/weight-option.model';
import { WeightPattern, WeightMarketSentiment, WeightDivergency } from "../enums/weights.enum";
import { ActionType } from '../enums/action-type.enum';
import { Temporality } from '../enums/temporality.enum';
import { ElementType } from '../enums/element-type.enum';
import { Alignment } from '../enums/alignment.enum';
import { Trend } from '../enums/trend.enum';
import { TableType } from '../enums/table-type.enum';

const ascTriangule: WeightOption[] = [
    {
        weight: WeightPattern.AscTrianguleUptrend,
        option: {
            id: 'asc-triangule-uptrend-1',
            name: 'Ascending Triangule from Uptrend',
            type: ActionType.Buy
        }
    },
    {
        weight: WeightPattern.AscTrianguleDowntrend,
        option: {
            id: 'asc-triangule-uptrend-0',
            name: 'Ascending Triangule from Downtrend',
            type: ActionType.Buy
        }
    }
]

const descTriangule: WeightOption[] = [
    {
        weight: WeightPattern.DescTrianguleDowntrend,
        option: {
            id: 'desc-triangule-downtrend-0',
            name: 'Descending Triangule from Downtrend',
            type: ActionType.Sell
        }
    },
    {
        weight: WeightPattern.DescTrianguleUptrend,
        option: {
            id: 'desc-triangule-downtrend-1',
            name: 'Descending Triangule from Uptrend',
            type: ActionType.Sell
        }
    }
]

const headsAndShoulders: WeightOption = {
    weight: WeightPattern.HeadAndShoulders,
    option: {
        id: 'head-and-shoulders',
        name: 'Head and Shoulders',
        type: ActionType.Sell
    }
}

const invHeadsAndShoulders: WeightOption = {
    weight: WeightPattern.InverseHeadAndShoulders,
    option: {
        id: 'inv-head-and-shoulders',
        name: 'Inverse Head and Shoulders',
        type: ActionType.Buy
    }
}

const doubleTop: WeightOption = {
    weight: WeightPattern.DoubleTop,
    option: {
        id: 'double-to',
        name: 'Double Top',
        type: ActionType.Sell
    }
}

const doubleBottom: WeightOption = {
    weight: WeightPattern.DoubleBottom,
    option: {
        id: 'double-bottom',
        name: 'Double Bottom',
        type: ActionType.Buy
    }
}

const symetricalTrianguleUptrend: WeightOption = {
    weight: WeightPattern.SymetricalTrianguleUptrend,
    option: {
        id: 'symetrical-triangule-uptrend',
        name: 'Symetrical Triangule Uptrend',
        type: ActionType.Buy
    }
}

const symetricalTrianguleDowntrend: WeightOption = {
    weight: WeightPattern.SymetricalTrianguleDowntrend,
    option: {
        id: 'symetrical-triangule-downtrend',
        name: 'Symetrical Triangule Downtrend',
        type: ActionType.Sell
    }
}

const parallelChannelUptrend: WeightOption = {
    weight: WeightPattern.ParallelChannelUptrend,
    option: {
        id: 'parallel-channel-uptrend',
        name: 'Parallel Channel Uptrend',
        type: ActionType.Buy
    }
}

const parallelChannelDowntrend: WeightOption = {
    weight: WeightPattern.ParallelChannelDowntrend,
    option: {
        id: 'parallel-channel-downtrend',
        name: 'Parallel Channel Downtrend',
        type: ActionType.Sell
    }
}

const macroTrend: TableAsymmetricColumns = {
    type: TableType.TableAsymmetricColumns,
    headers: [
        Trend.Bullish,
        Trend.Bearish,
        Trend.Unclear
    ],
    columnType: {
        type: ElementType.Radio
    },
    rows: [
        {
            description: 'Overall trend of the month',
            headerWeightOptions: {
                weight: WeightMarketSentiment.OverallMonthTrend,
                options: [
                    {
                        id: 'overall-month-trend-buy',
                        type: ActionType.Buy
                    },
                    {
                        id: 'overall-month-trend-sell',
                        type: ActionType.Sell
                    },
                    {
                        id: 'unclear',
                        default: true
                    }
                ]
            }
        },
        {
            description: 'Overall trend of the week',
            headerWeightOptions: {
                weight: WeightMarketSentiment.OverallWeekTrend,
                options: [
                    {
                        id: 'overall-week-trend-buy',
                        type: ActionType.Buy
                    },
                    {
                        id: 'overall-week-trend-sell',
                        type: ActionType.Sell
                    },
                    {
                        id: 'unclear',
                        default: true
                    }
                ]
            }
        },
        {
            description: "Overall trend of the day",
            headerWeightOptions: {
                weight: WeightMarketSentiment.OverallDayTrend,
                options: [
                    {
                        id: 'overall-day-trend-buy',
                        type: ActionType.Buy
                    },
                    {
                        id: 'overall-day-trend-sell',
                        type: ActionType.Sell
                    },
                    {
                        id: 'unclear',
                        default: true
                    }
                ]
            }
        }
    ]
}

const immediateTrend: TableSymmetricColumns = {
    type: TableType.TableSymmetricColumns,
    headers: [
        Temporality.OneMin,
        Temporality.FiveMin,
        Temporality.OneHour
    ],
    columnType: {
        type: ElementType.Toggle,
        behavior: ElementType.RadioCheck,
        alignment: Alignment.Vertical
    },
    rows: [
        {
            description: "Price position relative to the 200 MA",
            headerWeights: [
                WeightMarketSentiment.PricePositionRelative200MA,
                WeightMarketSentiment.PricePositionRelative200MA,
                WeightMarketSentiment.PricePositionRelative200MA
            ],
            options: [
                {
                    id: 'above',
                    name: 'Above',
                    type: ActionType.Buy,
                    style: {
                        type: ElementType.Button,
                        class: 'btn-outline-success',
                        isUnwrapped: true
                    }
                },
                {
                    id: 'below',
                    name: 'Below',
                    type: ActionType.Sell,
                    style: {
                        type: ElementType.Button,
                        class: 'btn-outline-danger',
                        isUnwrapped: true
                    }
                }
            ]
        },
        {
            description: "Slope of the 200 MA",
            headerWeights: [
                WeightMarketSentiment.Slope200MA,
                WeightMarketSentiment.Slope200MA,
                WeightMarketSentiment.Slope200MA
            ],
            options: [
                {
                    id: 'positive',
                    name: 'Positive',
                    type: ActionType.Buy,
                    style: {
                        type: ElementType.Button,
                        class: 'btn-outline-success',
                        isUnwrapped: true
                    }
                },
                {
                    id: 'negative',
                    name: 'Negative',
                    type: ActionType.Sell,
                    style: {
                        type: ElementType.Button,
                        class: 'btn-outline-danger',
                        isUnwrapped: true
                    }
                }
            ]
        },
        {
            description: "Price position relative to the 21 EMA",
            headerWeights: [
                WeightMarketSentiment.PricePositionRelative21EMA,
                WeightMarketSentiment.PricePositionRelative21EMA,
                WeightMarketSentiment.PricePositionRelative21EMA
            ],
            options: [
                {
                    id: 'above',
                    name: 'Above',
                    type: ActionType.Buy,
                    style: {
                        type: ElementType.Button,
                        class: 'btn-outline-success',
                        isUnwrapped: true
                    }
                },
                {
                    id: 'below',
                    name: 'Below',
                    type: ActionType.Sell,
                    style: {
                        type: ElementType.Button,
                        class: 'btn-outline-danger',
                        isUnwrapped: true
                    }
                }
            ]
        },
        {
            description: "Slope of the 21 EMA",
            headerWeights: [
                WeightMarketSentiment.Slope21EMA,
                WeightMarketSentiment.Slope21EMA,
                WeightMarketSentiment.Slope21EMA
            ],
            options: [
                {
                    id: 'positive',
                    name: 'Positive',
                    type: ActionType.Buy,
                    style: {
                        type: ElementType.Button,
                        class: 'btn-outline-success',
                        isUnwrapped: true
                    }
                },
                {
                    id: 'negative',
                    name: 'Negative',
                    type: ActionType.Sell,
                    style: {
                        type: ElementType.Button,
                        class: 'btn-outline-danger',
                        isUnwrapped: true
                    }
                }
            ]
        },
        {
            description: "Price position relative to the VWAP",
            headerWeights: [
                WeightMarketSentiment.PricePositionRelativeVWAP,
                WeightMarketSentiment.PricePositionRelativeVWAP,
                WeightMarketSentiment.PricePositionRelativeVWAP
            ],
            options: [
                {
                    id: 'above',
                    name: 'Above',
                    type: ActionType.Buy,
                    style: {
                        type: ElementType.Button,
                        class: 'btn-outline-success',
                        isUnwrapped: true
                    }
                },
                {
                    id: 'below',
                    name: 'Below',
                    type: ActionType.Sell,
                    style: {
                        type: ElementType.Button,
                        class: 'btn-outline-danger',
                        isUnwrapped: true
                    }
                }
            ]
        },
        {
            description: "Slope of the VWAP",
            headerWeights: [
                WeightMarketSentiment.SlopeVWAP,
                WeightMarketSentiment.SlopeVWAP,
                WeightMarketSentiment.SlopeVWAP
            ],
            options: [
                {
                    id: 'positive',
                    name: 'Positive',
                    type: ActionType.Buy,
                    style: {
                        type: ElementType.Button,
                        class: 'btn-outline-success',
                        isUnwrapped: true
                    }
                },
                {
                    id: 'negative',
                    name: 'Negative',
                    type: ActionType.Sell,
                    style: {
                        type: ElementType.Button,
                        class: 'btn-outline-danger',
                        isUnwrapped: true
                    }
                }
            ]
        }
    ]
}

const bullishDivergencies: TableSymmetricColumns = {
    type: TableType.TableSymmetricColumns,
    headers: [
        Temporality.OneMin,
        Temporality.FiveMin,
        Temporality.OneHour
    ],
    columnType: {
        type: ElementType.Checkbox
    },
    rows: [
        {
            description: "Stochastics and RSI buy signal",
            headerWeights: [
                WeightDivergency.StochasticsRSIBuySignal,
                WeightDivergency.StochasticsRSIBuySignal,
                WeightDivergency.StochasticsRSIBuySignal
            ],
            options: [{
                type: ActionType.Buy
            }]
        },
        {
            description: "CDV sell absorption divergence",
            headerWeights: [
                WeightDivergency.CDVSellAbsortionDivergence,
                WeightDivergency.CDVLackSellInterestDivergence,
                WeightDivergency.CDVLackSellInterestDivergence
            ],
            options: [{
                type: ActionType.Buy
            }]
        },
        {
            description: "CDV lack of selling interest divergence",
            headerWeights: [
                WeightDivergency.CDVLackSellInterestDivergence,
                WeightDivergency.CDVLackSellInterestDivergence,
                WeightDivergency.CDVLackSellInterestDivergence
            ],
            options: [{
                type: ActionType.Buy
            }]
        }
    ]
}

const bearishDivergencies: TableSymmetricColumns = {
    type: TableType.TableSymmetricColumns,
    headers: [
        Temporality.OneMin,
        Temporality.FiveMin,
        Temporality.OneHour
    ],
    columnType: {
        type: ElementType.Checkbox
    },
    rows: [
        {
            description: "Stochastics and RSI sell signal",
            headerWeights: [
                WeightDivergency.StochasticsRSISellSignal,
                WeightDivergency.StochasticsRSISellSignal,
                WeightDivergency.StochasticsRSISellSignal
            ],
            options: [{
                id: 'stochastics-rsi-sell-signal',
                type: ActionType.Sell
            }]
        },
        {
            description: "CDV buy absorption divergence",
            headerWeights: [
                WeightDivergency.CDVBuyAbsortionDivergence,
                WeightDivergency.CDVBuyAbsortionDivergence,
                WeightDivergency.CDVBuyAbsortionDivergence
            ],
            options: [{
                id: 'cdv-buy-absorption-divergence',
                type: ActionType.Sell
            }]
        },
        {
            description: "CDV lack of buying interest divergence",
            headerWeights: [
                WeightDivergency.CDVLackBuyInterestDivergence,
                WeightDivergency.CDVLackBuyInterestDivergence,
                WeightDivergency.CDVLackBuyInterestDivergence
            ],
            options: [{
                id: 'cdv-lack-buying-interest',
                type: ActionType.Sell
            }]
        }
    ]
}

export const appConstants = {
    weight: {
        pattern: {
            ascTriangule,
            descTriangule,
            headsAndShoulders,
            invHeadsAndShoulders,
            doubleTop,
            doubleBottom,
            symetricalTrianguleUptrend,
            symetricalTrianguleDowntrend,
            parallelChannelUptrend,
            parallelChannelDowntrend
        },
        marketSentiment: {
            immediateTrend,
            macroTrend
        },
        divergencies: {
            bullishDivergencies,
            bearishDivergencies
        }
    }
}