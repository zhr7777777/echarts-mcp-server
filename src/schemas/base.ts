import LegendSchema from "./legend";
import TitleSchema from "./title";
import ToolboxSchema from "./toolbox";
import TooltipSchema from "./tooltip";
import XAxisSchema from "./xAxis";
import YAxisSchema from "./yAxis";

const BaseSchema = {
  title: TitleSchema,
  legend: LegendSchema,
  xAxis: XAxisSchema,
  yAxis: YAxisSchema,
  tooltip: TooltipSchema,
  toolbox: ToolboxSchema,
};

export default BaseSchema;
