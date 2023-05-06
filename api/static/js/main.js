const getOptionChart = async () => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/get_chart/");
        return await response.json();
    } catch (ex) {
        alert(ex);
    }
};
//
const initChart = async () => {
    const myChart = echarts.init(document.getElementById("chart"));
    
    let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'new', 'new1', 'new2']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [0.0292, 0.0258, 0.0268, 0.0207, 0.0283, 0.0256, 0.0258, 0.0229, 0.0256, 0.0209],
            type: 'line',
            smooth: true
          }
        ]
      };
    myChart.setOption(option);

    myChart.resize();
};

window.addEventListener("load", async () => {
    await initChart();
    setInterval(async () => {
        await initChart();
    }, 2000);
});
