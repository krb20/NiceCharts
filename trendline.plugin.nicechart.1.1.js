!function(){this.NC_TYPE_RENDERER.push(["TrendLine","renderTrendLine"])}(),NiceChart.prototype.renderTrendLine=function(){var b,c,d,e,f,g,h,a=this;a.barOrLine=a.inputData.type,a.trendline=a.inputData.trendline,a.inputData=a.inputData.data,a.renderLineBar();for(var j=function(b,c,d,e,f,g,h){var i=document.createElementNS("http://www.w3.org/2000/svg","line");i.setAttribute("x1",b),i.setAttribute("y1",c),i.setAttribute("x2",d),i.setAttribute("y2",e),i.style.stroke=f,h&&(i.style["stroke-dasharray"]="2,2"),i.style.strokeWidth=g,a.svgContainer.appendChild(i)},k=0;k<a.trendline.length;k++)b=a.trendline[k].value,c=b*a.svgChartHeight/a.maxDataValue,d=a.svgChartMarginSpace,e=a.svgChartMarginHeight-c-1,f=a.svgChartWidth+a.svgChartMarginSpace+a.svgChartMargin,h=a.chartTextObj(f+3,e+3,a.trendline[k].color),g=document.createTextNode(a.trendline[k].label),h.appendChild(g),a.svgContainer.appendChild(h),j(d,e,f,e,a.trendline[k].color,1,!1)};