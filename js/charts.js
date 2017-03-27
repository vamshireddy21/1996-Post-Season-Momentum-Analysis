window.onload = function () {
    var a = new CanvasJS.Chart("chartContainer", {
        animationEnabled: !0,
        theme: "theme1",
        title: {
            text: "Winning Momentum Charts for 1996 Playoff's"
        },
        axisX:{title: "Performance Difference"},
        axisY: {title: "WPCT"},
        data: [{
            type: "spline",
            showInLegend: !0,
            legendText: "Last Non-Trivial Month",
            toolTipContent: "{match} <hr/> ({x}, {y})",
            dataPoints: [{
                x: -.22,
                y: .67,
            match: "<b>NYY</b> vs ATL"
            }, {
                x: -.2,
                y: .8,
                match: "<b>NYY</b> vs BAL"
            }, {
                x: -.14,
                y: .75,
                match: "<b>NYY</b> vs TEX"
            }, {
                x: -.14,
                y: 1,
                match: "<b>STL</b> vs SDP"
            }, {
                x: .03,
                y: 1,
                match: "<b>ATL</b> vs LAD"
            }, {
                x: 0.09,
                y: .75,
                match: "<b>BAL</b> vs CLE"
            }, {
                x: .16,
                y: .57,
                match: "<b>ATL</b> vs STL"
            }]
        }, {
            type: "spline",
            axisYIndex: 1,
            showInLegend: !0,
            legendText: "Full Series",
            toolTipContent: "{match} <hr/> ({x}, {y})",
            dataPoints: [{
                x: -.07,
                y: .75,
                match: "<b>BAL</b> vs CLE"
            }, {
                x: -.02,
                y: .67,
                match: "<b>NYY</b> vs ATL"
            }, {
                x: -.02,
                y: 1,
                match: "<b>STL</b> vs SDP"
            }, {
                x: .01,
                y: .75,
                match: "<b>NYY</b> vs TEX"
            }, {
                x: .02,
                y: .8,
                match: "<b>NYY</b> vs BAL"
            }, {
                x: .04,
                y: 1,
                match: "<b>ATL</b> vs LAD"
            }, {
                x: .05,
                y: .57,
                match: "<b>ATL</b> vs STL"
            }]
        }, {
            type: "spline",
            axisYIndex: 1,
            showInLegend: !0,
            legendText: "Half Series",
            toolTipContent: "{match} <hr/> ({x}, {y})",
            dataPoints: [{
                x: -.06,
                y: .75,
                match: "<b>BAL</b> vs CLE"
            }, {
                x: -.01,
                y: .67,
                match: "<b>NYY</b> vs ATL"
            }, {
                x: -.01,
                y: 1,
                match: "<b>STL</b> vs SDP"
            }, {
                x: .03,
                y: .75,
                match: "<b>NYY</b> vs TEX"
            }, {
                x: .07,
                y: .8,
                match: "<b>NYY</b> vs BAL"
            }, {
                x: .09,
                y: .57,
                match: "<b>ATL</b> vs STL"
            }, {
                x: .09,
                y: 1,
                match: "<b>ATL</b> vs LAD"
            }]
        }],
        legend: {
            cursor: "pointer",
            itemclick: function (b) {
                "undefined" == typeof b.dataSeries.visible || b.dataSeries.visible ? b.dataSeries.visible = !1 : b.dataSeries.visible = !0, a.render()
            }
        }
    });
    a.render(), a = new CanvasJS.Chart("NYYGraph", {
        animationEnabled: !0,
        theme: "theme1",
        title: {
            text: "NYY 1996 Playoff"
        },
        axisY: [{
            lineColor: "#4F81BC",
            tickColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            titleFontColor: "#4F81BC",
            lineThickness: 1
        }, {
            lineColor: "#C0504E",
            tickColor: "#C0504E",
            labelFontColor: "#C0504E",
            titleFontColor: "#C0504E",
            lineThickness: 1
        }],
        data: [{
            type: "bar",
            showInLegend: !0,
            legendText: "New York Yankees",
            dataPoints: [{
                label: "TEX",
                y: .75
            }, {
                label: "BAL",
                y: .8
            }, {
                label: "ATL",
                y: .67
            }]
        }],
        legend: {
            cursor: "pointer",
            itemclick: function (b) {
                "undefined" == typeof b.dataSeries.visible || b.dataSeries.visible ? b.dataSeries.visible = !1 : b.dataSeries.visible = !0, a.render()
            }
        }
    }), a.render(), a = new CanvasJS.Chart("ATLGraph", {
        animationEnabled: !0,
        theme: "theme1",
        title: {
            text: "ATL 1996 Playoff"
        },
        axisY: [{
            lineColor: "#4F81BC",
            tickColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            titleFontColor: "#4F81BC",
            lineThickness: 1
        }, {
            lineColor: "#C0504E",
            tickColor: "#C0504E",
            labelFontColor: "#C0504E",
            titleFontColor: "#C0504E",
            lineThickness: 1
        }],
        data: [{
            type: "bar",
            showInLegend: !0,
            legendText: "Atlanta Braves",
            dataPoints: [{
                label: "LAD",
                y: 1
            }, {
                label: "STL",
                y: .57
            }, {
                label: "NYY",
                y: .67
            }]
        }],
        legend: {
            cursor: "pointer",
            itemclick: function (b) {
                "undefined" == typeof b.dataSeries.visible || b.dataSeries.visible ? b.dataSeries.visible = !1 : b.dataSeries.visible = !0, a.render()
            }
        }
    }), a.render(), a = new CanvasJS.Chart("BALGraph", {
        animationEnabled: !0,
        theme: "theme1",
        title: {
            text: "BAL 1996 Playoff"
        },
        axisY: [{
            lineColor: "#4F81BC",
            tickColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            titleFontColor: "#4F81BC",
            lineThickness: 1
        }, {
            lineColor: "#C0504E",
            tickColor: "#C0504E",
            labelFontColor: "#C0504E",
            titleFontColor: "#C0504E",
            lineThickness: 1
        }],
        data: [{
            type: "bar",
            showInLegend: !0,
            legendText: "Baltimore Orioles",
            dataPoints: [{
                label: "CLE",
                y: .75
            }, {
                label: "NYY",
                y: .8
            }]
        }],
        legend: {
            cursor: "pointer",
            itemclick: function (b) {
                "undefined" == typeof b.dataSeries.visible || b.dataSeries.visible ? b.dataSeries.visible = !1 : b.dataSeries.visible = !0, a.render()
            }
        }
    }), a.render(), a = new CanvasJS.Chart("CLEGraph", {
        animationEnabled: !0,
        theme: "theme1",
        title: {
            text: "CLE 1996 Playoff"
        },
        axisY: [{
            lineColor: "#4F81BC",
            tickColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            titleFontColor: "#4F81BC",
            lineThickness: 1
        }, {
            lineColor: "#C0504E",
            tickColor: "#C0504E",
            labelFontColor: "#C0504E",
            titleFontColor: "#C0504E",
            lineThickness: 1
        }],
        data: [{
            type: "bar",
            showInLegend: !0,
            legendText: "Cleaveland Indians",
            dataPoints: [{
                label: "BAL",
                y: .25
            }]
        }],
        legend: {
            cursor: "pointer",
            itemclick: function (b) {
                "undefined" == typeof b.dataSeries.visible || b.dataSeries.visible ? b.dataSeries.visible = !1 : b.dataSeries.visible = !0, a.render()
            }
        }
    }), a.render(), a = new CanvasJS.Chart("TEXGraph", {
        animationEnabled: !0,
        theme: "theme1",
        title: {
            text: "TEX 1996 Playoff"
        },
        axisY: [{
            lineColor: "#4F81BC",
            tickColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            titleFontColor: "#4F81BC",
            lineThickness: 1
        }, {
            lineColor: "#C0504E",
            tickColor: "#C0504E",
            labelFontColor: "#C0504E",
            titleFontColor: "#C0504E",
            lineThickness: 1
        }],
        data: [{
            type: "bar",
            showInLegend: !0,
            legendText: "Texas Rangers",
            dataPoints: [{
                label: "NYY",
                y: .25
            }]
        }],
        legend: {
            cursor: "pointer",
            itemclick: function (b) {
                "undefined" == typeof b.dataSeries.visible || b.dataSeries.visible ? b.dataSeries.visible = !1 : b.dataSeries.visible = !0, a.render()
            }
        }
    }), a.render(), a = new CanvasJS.Chart("LADGraph", {
        animationEnabled: !0,
        theme: "theme1",
        title: {
            text: "LAD 1996 Playoff"
        },
        axisY: [{
            lineColor: "#4F81BC",
            tickColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            titleFontColor: "#4F81BC",
            lineThickness: 1
        }, {
            lineColor: "#C0504E",
            tickColor: "#C0504E",
            labelFontColor: "#C0504E",
            titleFontColor: "#C0504E",
            lineThickness: 1
        }],
        data: [{
            type: "bar",
            showInLegend: !0,
            legendText: "Los Angles Dodlers",
            dataPoints: [{
                label: "ATL",
                y: 0
            }]
        }],
        legend: {
            cursor: "pointer",
            itemclick: function (b) {
                "undefined" == typeof b.dataSeries.visible || b.dataSeries.visible ? b.dataSeries.visible = !1 : b.dataSeries.visible = !0, a.render()
            }
        }
    }), a.render(), a = new CanvasJS.Chart("STLGraph", {
        animationEnabled: !0,
        theme: "theme1",
        title: {
            text: "LAD 1996 Playoff"
        },
        axisY: [{
            lineColor: "#4F81BC",
            tickColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            titleFontColor: "#4F81BC",
            lineThickness: 1
        }, {
            lineColor: "#C0504E",
            tickColor: "#C0504E",
            labelFontColor: "#C0504E",
            titleFontColor: "#C0504E",
            lineThickness: 1
        }],
        data: [{
            type: "bar",
            showInLegend: !0,
            legendText: "St. Louis Cardinals",
            dataPoints: [{
                label: "SDP",
                y: 1
            }, {
                label: "ATL",
                y: .42
            }]
        }],
        legend: {
            cursor: "pointer",
            itemclick: function (b) {
                "undefined" == typeof b.dataSeries.visible || b.dataSeries.visible ? b.dataSeries.visible = !1 : b.dataSeries.visible = !0, a.render()
            }
        }
    }), a.render(), a = new CanvasJS.Chart("SDPGraph", {
        animationEnabled: !0,
        theme: "theme1",
        title: {
            text: "SDP 1996 Playoff"
        },
        axisY: [{
            lineColor: "#4F81BC",
            tickColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            titleFontColor: "#4F81BC",
            lineThickness: 1
        }, {
            lineColor: "#C0504E",
            tickColor: "#C0504E",
            labelFontColor: "#C0504E",
            titleFontColor: "#C0504E",
            lineThickness: 1
        }],
        data: [{
            type: "bar",
            showInLegend: !0,
            legendText: "San Diego Pardes",
            dataPoints: [{
                label: "STL",
                y: 0
            }]
        }],
        legend: {
            cursor: "pointer",
            itemclick: function (b) {
                "undefined" == typeof b.dataSeries.visible || b.dataSeries.visible ? b.dataSeries.visible = !1 : b.dataSeries.visible = !0, a.render()
            }
        }
    }), a.render()
};