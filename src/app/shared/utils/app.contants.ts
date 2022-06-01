import { Table } from '../models/table.model';
import { WeightOption } from '../models/weight-option.model';
import { WeightPattern, WeightMarketSentiment, WeightDivergency, WeightOperation } from "../enums/weights.enum";
import { ActionType } from '../enums/action-type.enum';
import { Temporality } from '../enums/temporality.enum';
import { ElementType } from '../enums/element-type.enum';
import { Alignment } from '../enums/alignment.enum';
import { Trend } from '../enums/trend.enum';

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

const macroTrend: Table = {
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
            columns: [{
                weight: WeightMarketSentiment.OverallMonthTrend,
                options: [{
                    id: 'overall-month-trend-buy-' + Trend.Bullish,
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightMarketSentiment.OverallMonthTrend,
                options: [{
                    id: 'overall-month-trend-sell-' + Trend.Bearish,
                    type: ActionType.Sell
                }]
            }, {
                weight: WeightMarketSentiment.OverallMonthTrend,
                options: [{
                    id: 'unclear-' + Trend.Unclear,
                    default: true
                }]
            }]
        },
        {
            description: 'Overall trend of the week',
            columns: [{
                weight: WeightMarketSentiment.OverallWeekTrend,
                options: [{
                    id: 'overall-week-trend-buy-' + Trend.Bullish,
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightMarketSentiment.OverallWeekTrend,
                options: [{
                    id: 'overall-week-trend-sell-' + Trend.Bearish,
                    type: ActionType.Sell
                }]
            }, {
                weight: WeightMarketSentiment.OverallWeekTrend,
                options: [{
                    id: 'unclear-' + Trend.Unclear,
                    default: true
                }]
            }]
        },
        {
            description: "Overall trend of the day",
            columns: [{
                weight: WeightMarketSentiment.OverallDayTrend,
                options: [{
                    id: 'overall-day-trend-buy-' + Trend.Bullish,
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightMarketSentiment.OverallDayTrend,
                options: [{
                    id: 'overall-day-trend-sell-' + Trend.Bearish,
                    type: ActionType.Sell
                }]
            }, {
                weight: WeightMarketSentiment.OverallDayTrend,
                options: [{
                    id: 'unclear-' + Trend.Unclear,
                    default: true
                }]
            }]
        }
    ]
}

const toggleActionType = {
    behavior: ElementType.RadioCheck,
    alignment: Alignment.Horizontal,
    options: [
        {
            id: 'buy',
            name: 'Buy',
            type: ActionType.Buy,
            style: {
                type: ElementType.Button,
                class: 'btn-outline-success',
                isUnwrapped: true
            }
        },
        {
            id: 'sell',
            name: 'Sell',
            type: ActionType.Sell,
            style: {
                type: ElementType.Button,
                class: 'btn-outline-danger',
                isUnwrapped: true
            }
        }
    ]
}

const immediateTrend: Table = {
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
            columns: [{
                weight: WeightMarketSentiment.PricePositionRelative200MA,
                options: [
                    {
                        id: 'above-' + Temporality.OneMin,
                        name: 'Above',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'below-' + Temporality.OneMin,
                        name: 'Below',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }, {
                weight: WeightMarketSentiment.PricePositionRelative200MA,
                options: [
                    {
                        id: 'above-' + Temporality.FiveMin,
                        name: 'Above',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'below-' + Temporality.FiveMin,
                        name: 'Below',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }, {
                weight: WeightMarketSentiment.PricePositionRelative200MA,
                options: [
                    {
                        id: 'above-' + Temporality.OneHour,
                        name: 'Above',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'below-' + Temporality.OneHour,
                        name: 'Below',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }]
        },
        {
            description: "Slope of the 200 MA",
            columns: [{
                weight: WeightMarketSentiment.Slope200MA,
                options: [
                    {
                        id: 'positive-' + Temporality.OneMin,
                        name: 'Positive',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'negative-' + Temporality.OneMin,
                        name: 'Negative',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }, {
                weight: WeightMarketSentiment.Slope200MA,
                options: [
                    {
                        id: 'positive-' + Temporality.FiveMin,
                        name: 'Positive',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'negative-' + Temporality.FiveMin,
                        name: 'Negative',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }, {
                weight: WeightMarketSentiment.Slope200MA,
                options: [
                    {
                        id: 'positive-' + Temporality.OneHour,
                        name: 'Positive',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'negative-' + Temporality.OneHour,
                        name: 'Negative',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }]
        },
        {
            description: "Price position relative to the 21 EMA",
            columns: [{
                weight: WeightMarketSentiment.PricePositionRelative21EMA,
                options: [
                    {
                        id: 'above-' + Temporality.OneMin,
                        name: 'Above',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'below-' + Temporality.OneMin,
                        name: 'Below',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }, {
                weight: WeightMarketSentiment.PricePositionRelative21EMA,
                options: [
                    {
                        id: 'above-' + Temporality.FiveMin,
                        name: 'Above',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'below-' + Temporality.FiveMin,
                        name: 'Below',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }, {
                weight: WeightMarketSentiment.PricePositionRelative21EMA,
                options: [
                    {
                        id: 'above-' + Temporality.OneHour,
                        name: 'Above',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'below-' + Temporality.OneHour,
                        name: 'Below',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }]
        },
        {
            description: "Slope of the 21 EMA",
            columns: [{
                weight: WeightMarketSentiment.Slope21EMA,
                options: [
                    {
                        id: 'positive-' + Temporality.OneMin,
                        name: 'Positive',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'negative-' + Temporality.OneMin,
                        name: 'Negative',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }, {
                weight: WeightMarketSentiment.Slope21EMA,
                options: [
                    {
                        id: 'positive-' + Temporality.FiveMin,
                        name: 'Positive',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'negative-' + Temporality.FiveMin,
                        name: 'Negative',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }, {
                weight: WeightMarketSentiment.Slope21EMA,
                options: [
                    {
                        id: 'positive-' + Temporality.OneHour,
                        name: 'Positive',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'negative-' + Temporality.OneHour,
                        name: 'Negative',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }]
        },
        {
            description: "Price position relative to the VWAP",
            columns: [{
                weight: WeightMarketSentiment.PricePositionRelativeVWAP,
                options: [
                    {
                        id: 'above-' + Temporality.OneMin,
                        name: 'Above',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'below-' + Temporality.OneMin,
                        name: 'Below',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }, {
                weight: WeightMarketSentiment.PricePositionRelativeVWAP,
                options: [
                    {
                        id: 'above-' + Temporality.FiveMin,
                        name: 'Above',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'below-' + Temporality.FiveMin,
                        name: 'Below',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }, {
                weight: WeightMarketSentiment.PricePositionRelativeVWAP,
                options: [
                    {
                        id: 'above-' + Temporality.OneHour,
                        name: 'Above',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'below-' + Temporality.OneHour,
                        name: 'Below',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }]
        },
        {
            description: "Slope of the VWAP",
            columns: [{
                weight: WeightMarketSentiment.SlopeVWAP,
                options: [
                    {
                        id: 'positive-' + Temporality.OneMin,
                        name: 'Positive',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'negative-' + Temporality.OneMin,
                        name: 'Negative',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }, {
                weight: WeightMarketSentiment.SlopeVWAP,
                options: [
                    {
                        id: 'positive-' + Temporality.FiveMin,
                        name: 'Positive',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'negative-' + Temporality.FiveMin,
                        name: 'Negative',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }, {
                weight: WeightMarketSentiment.SlopeVWAP,
                options: [
                    {
                        id: 'positive-' + Temporality.OneHour,
                        name: 'Positive',
                        type: ActionType.Buy,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-success',
                            isUnwrapped: true
                        }
                    },
                    {
                        id: 'negative-' + Temporality.OneHour,
                        name: 'Negative',
                        type: ActionType.Sell,
                        style: {
                            type: ElementType.Button,
                            class: 'btn-outline-danger',
                            isUnwrapped: true
                        }
                    }
                ]
            }]
        }
    ]
}

const bullishDivergencies: Table = {
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
            columns: [{
                weight: WeightDivergency.StochasticsRSIBuySignal,
                options: [{
                    id: 'stochastics-rsi-buy-signal' + Temporality.OneMin,
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightDivergency.StochasticsRSIBuySignal,
                options: [{
                    id: 'stochastics-rsi-buy-signal' + Temporality.FiveMin,
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightDivergency.StochasticsRSIBuySignal,
                options: [{
                    id: 'stochastics-rsi-buy-signal' + Temporality.OneHour,
                    type: ActionType.Buy
                }]
            }]
        },
        {
            description: "CDV sell absorption divergence",
            columns: [{
                weight: WeightDivergency.CDVSellAbsortionDivergence,
                options: [{
                    id: 'cdv-sell-absorption-divergence' + Temporality.OneMin,
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightDivergency.CDVLackSellInterestDivergence,
                options: [{
                    id: 'cdv-sell-absorption-divergence' + Temporality.FiveMin,
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightDivergency.CDVLackSellInterestDivergence,
                options: [{
                    id: 'cdv-sell-absorption-divergence' + Temporality.OneHour,
                    type: ActionType.Buy
                }]
            }]
        },
        {
            description: "CDV lack of selling interest divergence",
            columns: [{
                weight: WeightDivergency.CDVLackSellInterestDivergence,
                options: [{
                    id: 'cdv-lack-selling-interest' + Temporality.OneMin,
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightDivergency.CDVLackSellInterestDivergence,
                options: [{
                    id: 'cdv-lack-selling-interest' + Temporality.FiveMin,
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightDivergency.CDVLackSellInterestDivergence,
                options: [{
                    id: 'cdv-lack-selling-interest' + Temporality.OneHour,
                    type: ActionType.Buy
                }]
            }]
        }
    ]
}

const bearishDivergencies: Table = {
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
            columns: [{
                weight: WeightDivergency.StochasticsRSISellSignal,
                options: [{
                    id: 'stochastics-rsi-sell-signal' + Temporality.OneMin,
                    type: ActionType.Sell
                }]
            }, {
                weight: WeightDivergency.StochasticsRSISellSignal,
                options: [{
                    id: 'stochastics-rsi-sell-signal' + Temporality.FiveMin,
                    type: ActionType.Sell
                }]
            }, {
                weight: WeightDivergency.StochasticsRSISellSignal,
                options: [{
                    id: 'stochastics-rsi-sell-signal' + Temporality.OneHour,
                    type: ActionType.Sell
                }]
            }]
        },
        {
            description: "CDV buy absorption divergence",
            columns: [{
                weight: WeightDivergency.CDVBuyAbsortionDivergence,
                options: [{
                    id: 'cdv-buy-absorption-divergence' + Temporality.OneMin,
                    type: ActionType.Sell
                }]
            }, {
                weight: WeightDivergency.CDVBuyAbsortionDivergence,
                options: [{
                    id: 'cdv-buy-absorption-divergence' + Temporality.FiveMin,
                    type: ActionType.Sell
                }]
            }, {
                weight: WeightDivergency.CDVBuyAbsortionDivergence,
                options: [{
                    id: 'cdv-buy-absorption-divergence' + Temporality.OneHour,
                    type: ActionType.Sell
                }]
            }]
        },
        {
            description: "CDV lack of buying interest divergence",
            columns: [{
                weight: WeightDivergency.CDVLackBuyInterestDivergence,
                options: [{
                    id: 'cdv-lack-buying-interest' + Temporality.OneMin,
                    type: ActionType.Sell
                }]
            }, {
                weight: WeightDivergency.CDVLackBuyInterestDivergence,
                options: [{
                    id: 'cdv-lack-buying-interest' + Temporality.FiveMin,
                    type: ActionType.Sell
                }]
            }, {
                weight: WeightDivergency.CDVLackBuyInterestDivergence,
                options: [{
                    id: 'cdv-lack-buying-interest' + Temporality.OneHour,
                    type: ActionType.Sell
                }]
            }]
        }
    ]
}

const pullback: Table = {
    headers: [
        'Supporting',
        'Blocking',
        'Not Affecting'
    ],
    columnType: {
        type: ElementType.Radio
    },
    rows: [
        {
            description: "Volumen retracement",
            columns: [{
                weight: WeightOperation.VolumenRetracement,
                options: [{
                    id: 'volumen-retracement',
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightOperation.VolumenRetracement,
                options: [{
                    id: 'volumen-retracement',
                    type: ActionType.Sell
                }],

            }, {
                weight: WeightOperation.VolumenRetracement,
                options: [{
                    id: 'volumen-retracement',
                    default: true
                }],

            }]
        }, {
            description: "Fibonacci key levels (38, 50 or 61)",
            columns: [{
                weight: WeightOperation.FibonacciKeyLevel,
                options: [{
                    id: 'fibonacci-key-level',
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightOperation.FibonacciKeyLevel,
                options: [{
                    id: 'fibonacci-key-level',
                    type: ActionType.Sell
                }],

            }, {
                weight: WeightOperation.FibonacciKeyLevel,
                options: [{
                    id: 'fibonacci-key-level',
                    default: true
                }],

            }]
        },
        {
            description: "21 EMA on 1 Min chart",
            columns: [{
                weight: WeightOperation.TwentyOneEMA1minChart,
                options: [{
                    id: '21-ema-1-min-chart',
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightOperation.TwentyOneEMA1minChart,
                options: [{
                    id: '21-ema-1-min-chart',
                    type: ActionType.Sell
                }],

            }, {
                weight: WeightOperation.TwentyOneEMA1minChart,
                options: [{
                    id: '21-ema-1-min-chart',
                    default: true
                }],

            }]
        },
        {
            description: "21 EMA on 5 Min chart",
            columns: [{
                weight: WeightOperation.TwentyOneEMA5minChart,
                options: [{
                    id: '21-ema-5-min-chart',
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightOperation.TwentyOneEMA5minChart,
                options: [{
                    id: '21-ema-5-min-chart',
                    type: ActionType.Sell
                }],

            }, {
                weight: WeightOperation.TwentyOneEMA5minChart,
                options: [{
                    id: '21-ema-5-min-chart',
                    default: true
                }],

            }]
        },
        {
            description: "200 EMA on 1 Min chart",
            columns: [{
                weight: WeightOperation.TwoHundredMA1minChart,
                options: [{
                    id: '200-ema-1-min-chart',
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightOperation.TwoHundredMA1minChart,
                options: [{
                    id: '200-ema-1-min-chart',
                    type: ActionType.Sell
                }],

            }, {
                weight: WeightOperation.TwoHundredMA1minChart,
                options: [{
                    id: '200-ema-1-min-chart',
                    default: true
                }],

            }]
        },
        {
            description: "200 EMA on 5 Min chart",
            columns: [{
                weight: WeightOperation.TwoHundredMA5minChart,
                options: [{
                    id: '200-ema-5-min-chart',
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightOperation.TwoHundredMA5minChart,
                options: [{
                    id: '200-ema-5-min-chart',
                    type: ActionType.Sell
                }],

            }, {
                weight: WeightOperation.TwoHundredMA5minChart,
                options: [{
                    id: '200-ema-5-min-chart',
                    default: true
                }],

            }]
        },
        {
            description: "VWAP line 1 Min chart",
            columns: [{
                weight: WeightOperation.VWAPLine1minChart,
                options: [{
                    id: 'vwap-line-1-min-chart',
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightOperation.VWAPLine1minChart,
                options: [{
                    id: 'vwap-line-1-min-chart',
                    type: ActionType.Sell
                }],

            }, {
                weight: WeightOperation.VWAPLine1minChart,
                options: [{
                    id: 'vwap-line-1-min-chart',
                    default: true
                }],

            }]
        },
        {
            description: "VWAP Band line 1 Min chart",
            columns: [{
                weight: WeightOperation.VWAPBandLine1minChart,
                options: [{
                    id: 'vwap-band-line-1-min-chart',
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightOperation.VWAPBandLine1minChart,
                options: [{
                    id: 'vwap-band-line-1-min-chart',
                    type: ActionType.Sell
                }],

            }, {
                weight: WeightOperation.VWAPBandLine1minChart,
                options: [{
                    id: 'vwap-band-line-1-min-chart',
                    default: true
                }],

            }]
        },
        {
            description: "Weak key level (only one time as sup/res)",
            columns: [{
                weight: WeightOperation.WeakKeyLevel,
                options: [{
                    id: 'weak-key-level',
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightOperation.WeakKeyLevel,
                options: [{
                    id: 'weak-key-level',
                    type: ActionType.Sell
                }],

            }, {
                weight: WeightOperation.WeakKeyLevel,
                options: [{
                    id: 'weak-key-level',
                    default: true
                }],

            }]
        },
        {
            description: "Strong key level (only one time as sup/res)",
            columns: [{
                weight: WeightOperation.StrongKeyLevel,
                options: [{
                    id: 'strong-key-level',
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightOperation.StrongKeyLevel,
                options: [{
                    id: 'strong-key-level',
                    type: ActionType.Sell
                }],

            }, {
                weight: WeightOperation.StrongKeyLevel,
                options: [{
                    id: 'strong-key-level',
                    default: true
                }],

            }]
        },
        {
            description: "Channel border",
            columns: [{
                weight: WeightOperation.ChannelBorder,
                options: [{
                    id: 'channel-border',
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightOperation.ChannelBorder,
                options: [{
                    id: 'channel-border',
                    type: ActionType.Sell
                }],

            }, {
                weight: WeightOperation.ChannelBorder,
                options: [{
                    id: 'channel-border',
                    default: true
                }],

            }]
        },
        {
            description: "Channel middle line",
            columns: [{
                weight: WeightOperation.ChannelMiddleLine,
                options: [{
                    id: 'channel-middle-line',
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightOperation.ChannelMiddleLine,
                options: [{
                    id: 'channel-middle-line',
                    type: ActionType.Sell
                }],

            }, {
                weight: WeightOperation.ChannelMiddleLine,
                options: [{
                    id: 'channel-middle-line',
                    default: true
                }],
            }]
        },
        {
            description: "Session Volume Profile POC",
            columns: [{
                weight: WeightOperation.SessionVolumeProfilePOC,
                options: [{
                    id: 'session-volume-profile-poc',
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightOperation.SessionVolumeProfilePOC,
                options: [{
                    id: 'session-volume-profile-poc',
                    type: ActionType.Sell
                }],

            }, {
                weight: WeightOperation.SessionVolumeProfilePOC,
                options: [{
                    id: 'session-volume-profile-poc',
                    default: true
                }],
            }]
        },
        {
            description: "Lack of liquidity at breakout area",
            columns: [{
                weight: WeightOperation.LackLiquidityBreakoutArea,
                options: [{
                    id: 'lack-liquidity-breakout-area',
                    type: ActionType.Buy
                }]
            }, {
                weight: WeightOperation.LackLiquidityBreakoutArea,
                options: [{
                    id: 'lack-liquidity-breakout-area',
                    type: ActionType.Sell
                }],

            }, {
                weight: WeightOperation.LackLiquidityBreakoutArea,
                options: [{
                    id: 'lack-liquidity-breakout-area',
                    default: true
                }],
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
        },
        operations: {
            pullback,
        }
    },
    toggleActionType
}