import React, { useEffect} from "react";
import Chart from 'chart.js/auto';
import "./rds-chart-stacked.scss"

export interface RdsStackedprops {
  labels:any[],
  options:any,
  dataSets:any[],
  height?:number,
  width?:number,
  id:string
}

const RdsStackedChart = (props:RdsStackedprops) => {
 const CanvasId = props.id;
  let ctx;
 

  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;
    
    const StackedCanvas = new Chart(ctx, {
      type: "line",
      data: {
        labels: props.labels,
        datasets:props.dataSets
      },
      options: props.options,
    });
      StackedCanvas.canvas.style.height = props.height + 'px';
      StackedCanvas.canvas.style.width = props.width + "px";
  });

  return (
    <div>
      <canvas id={CanvasId} ref={ctx} />
    </div>
  );
};

export default RdsStackedChart;
