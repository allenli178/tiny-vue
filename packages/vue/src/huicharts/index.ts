import HuiCharts, {
  HuiChartsPie,
  HuiChartsPie as HuichartsPie,
  HuiChartsPie as ChartPie,
  HuiChartsPie as TinyHuichartsPie,
  HuiChartsRing,
  HuiChartsRing as HuichartsRing,
  HuiChartsRing as ChartRing,
  HuiChartsRing as TinyHuichartsRing,
  HuiChartsBar,
  HuiChartsBar as HuichartsBar,
  HuiChartsBar as ChartBar,
  HuiChartsBar as TinyHuichartsBar,
  HuiChartsHistogram,
  HuiChartsHistogram as HuichartsHistogram,
  HuiChartsHistogram as ChartHistogram,
  HuiChartsHistogram as TinyHuichartsHistogram,
  HuiChartsRadar,
  HuiChartsRadar as HuichartsRadar,
  HuiChartsRadar as ChartRadar,
  HuiChartsRadar as TinyHuichartsRadar,
  HuiChartsLine,
  HuiChartsLine as HuichartsLine,
  HuiChartsLine as ChartLine,
  HuiChartsLine as TinyHuichartsLine,
  AutonaviMap,
  AutonaviMap as HuichartsAmap,
  AutonaviMap as ChartAmap,
  AutonaviMap as TinyHuichartsAmap,
  BaiduMap,
  BaiduMap as HuichartsBmap,
  BaiduMap as ChartBmap,
  BaiduMap as TinyHuichartsBmap,
  HuiChartsBoxplot,
  HuiChartsBoxplot as HuichartsBoxplot,
  HuiChartsBoxplot as ChartBoxplot,
  HuiChartsBoxplot as TinyHuichartsBoxplot,
  HuiChartsCandle,
  HuiChartsCandle as HuichartsCandle,
  HuiChartsCandle as ChartCandle,
  HuiChartsCandle as TinyHuichartsCandle,
  HuiChartsFunnel,
  HuiChartsFunnel as HuichartsFunnel,
  HuiChartsFunnel as ChartFunnel,
  HuiChartsFunnel as TinyHuichartsFunnel,
  HuiChartsGauge,
  HuiChartsGauge as HuichartsGauge,
  HuiChartsGauge as ChartGauge,
  HuiChartsGauge as TinyHuichartsGauge,
  HuiChartsGraph,
  HuiChartsGraph as HuichartsGraph,
  HuiChartsGraph as ChartGraph,
  HuiChartsGraph as TinyHuichartsGraph,
  HuiChartsHeatmap,
  HuiChartsHeatmap as HuichartsHeatmap,
  HuiChartsHeatmap as ChartHeatmap,
  HuiChartsHeatmap as TinyHuichartsHeatmap,
  HuiChartsLiquidfill,
  HuiChartsLiquidfill as HuichartsLiquidfill,
  HuiChartsLiquidfill as ChartLiquidfill,
  HuiChartsLiquidfill as TinyHuichartsLiquidfill,
  HuiChartsMap,
  HuiChartsMap as HuichartsMap,
  HuiChartsMap as ChartMap,
  HuiChartsMap as TinyHuichartsMap,
  HuiChartsSankey,
  HuiChartsSankey as HuichartsSankey,
  HuiChartsSankey as ChartSankey,
  HuiChartsSankey as TinyHuichartsSankey,
  HuiChartsScatter,
  HuiChartsScatter as HuichartsScatter,
  HuiChartsScatter as ChartScatter,
  HuiChartsScatter as TinyHuichartsScatter,
  HuiChartsSunburst,
  HuiChartsSunburst as HuichartsSunburst,
  HuiChartsSunburst as ChartSunburst,
  HuiChartsSunburst as TinyHuichartsSunburst,
  HuiChartsTree,
  HuiChartsTree as HuichartsTree,
  HuiChartsTree as ChartTree,
  HuiChartsTree as TinyHuichartsTree,
  HuiChartsWaterfall,
  HuiChartsWaterfall as HuichartsWaterfall,
  HuiChartsWaterfall as ChartWaterfall,
  HuiChartsWaterfall as TinyHuichartsWaterfall,
  HuiChartsWordcloud,
  HuiChartsWordcloud as HuichartsWordcloud,
  HuiChartsWordcloud as ChartWordcloud,
  HuiChartsWordcloud as TinyHuichartsWordcloud,
  HuiChartsProcess as HuichartsProcess,
  HuiChartsProcess as ChartProcess,
  HuiChartsProcess as TinyHuichartsProcess
} from './src/index'
import { version } from './package.json'

HuiCharts.install = function (Vue) {
  Vue.component(HuiCharts.name, HuiCharts)
}

HuiCharts.version = version

if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    HuiCharts.install(window.Vue)
  }
}

export default HuiCharts

export {
  HuiCharts,
  HuiCharts as TinyHuicharts,
  HuiCharts as TinyCharts,
  HuiCharts as Charts,
  HuiChartsPie,
  HuichartsPie,
  ChartPie,
  TinyHuichartsPie,
  HuiChartsRing,
  HuichartsRing,
  ChartRing,
  TinyHuichartsRing,
  HuiChartsBar,
  HuichartsBar,
  ChartBar,
  TinyHuichartsBar,
  HuiChartsHistogram,
  HuichartsHistogram,
  ChartHistogram,
  TinyHuichartsHistogram,
  HuiChartsRadar,
  HuichartsRadar,
  ChartRadar,
  TinyHuichartsRadar,
  HuiChartsLine,
  HuichartsLine,
  ChartLine,
  TinyHuichartsLine,
  AutonaviMap,
  HuichartsAmap,
  ChartAmap,
  TinyHuichartsAmap,
  BaiduMap,
  HuichartsBmap,
  ChartBmap,
  TinyHuichartsBmap,
  HuiChartsBoxplot,
  HuichartsBoxplot,
  ChartBoxplot,
  TinyHuichartsBoxplot,
  HuiChartsCandle,
  HuichartsCandle,
  ChartCandle,
  TinyHuichartsCandle,
  HuiChartsFunnel,
  HuichartsFunnel,
  ChartFunnel,
  TinyHuichartsFunnel,
  HuiChartsGauge,
  HuichartsGauge,
  ChartGauge,
  TinyHuichartsGauge,
  HuiChartsGraph,
  HuichartsGraph,
  ChartGraph,
  TinyHuichartsGraph,
  HuiChartsHeatmap,
  HuichartsHeatmap,
  ChartHeatmap,
  TinyHuichartsHeatmap,
  HuiChartsLiquidfill,
  HuichartsLiquidfill,
  ChartLiquidfill,
  TinyHuichartsLiquidfill,
  HuiChartsMap,
  HuichartsMap,
  ChartMap,
  TinyHuichartsMap,
  HuiChartsSankey,
  HuichartsSankey,
  ChartSankey,
  TinyHuichartsSankey,
  HuiChartsScatter,
  HuichartsScatter,
  ChartScatter,
  TinyHuichartsScatter,
  HuiChartsSunburst,
  HuichartsSunburst,
  ChartSunburst,
  TinyHuichartsSunburst,
  HuiChartsTree,
  HuichartsTree,
  ChartTree,
  TinyHuichartsTree,
  HuiChartsWaterfall,
  HuichartsWaterfall,
  ChartWaterfall,
  TinyHuichartsWaterfall,
  HuiChartsWordcloud,
  HuichartsWordcloud,
  ChartWordcloud,
  TinyHuichartsWordcloud,
  HuichartsProcess,
  ChartProcess,
  TinyHuichartsProcess
}
