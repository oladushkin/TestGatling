var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "5",
        "ok": "1",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "52",
        "ok": "52",
        "ko": "126"
    },
    "maxResponseTime": {
        "total": "127",
        "ok": "52",
        "ko": "127"
    },
    "meanResponseTime": {
        "total": "112",
        "ok": "52",
        "ko": "127"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "0",
        "ko": "1"
    },
    "percentiles1": {
        "total": "126",
        "ok": "52",
        "ko": "127"
    },
    "percentiles2": {
        "total": "127",
        "ok": "52",
        "ko": "127"
    },
    "percentiles3": {
        "total": "127",
        "ok": "52",
        "ko": "127"
    },
    "percentiles4": {
        "total": "127",
        "ok": "52",
        "ko": "127"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 20.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 4,
    "percentage": 80.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "1",
        "ko": "4"
    }
},
contents: {
"req_post-game--346609838": {
        type: "REQUEST",
        name: "Post game",
path: "Post game",
pathFormatted: "req_post-game--346609838",
stats: {
    "name": "Post game",
    "numberOfRequests": {
        "total": "5",
        "ok": "1",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "52",
        "ok": "52",
        "ko": "126"
    },
    "maxResponseTime": {
        "total": "127",
        "ok": "52",
        "ko": "127"
    },
    "meanResponseTime": {
        "total": "112",
        "ok": "52",
        "ko": "127"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "0",
        "ko": "1"
    },
    "percentiles1": {
        "total": "126",
        "ok": "52",
        "ko": "127"
    },
    "percentiles2": {
        "total": "127",
        "ok": "52",
        "ko": "127"
    },
    "percentiles3": {
        "total": "127",
        "ok": "52",
        "ko": "127"
    },
    "percentiles4": {
        "total": "127",
        "ok": "52",
        "ko": "127"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 20.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 4,
    "percentage": 80.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "1",
        "ko": "4"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
