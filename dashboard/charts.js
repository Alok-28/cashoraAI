// ApexCharts initialization for Analytics Dashboard
function initializeCharts() {
    // Base chart options for dark theme
    const baseOptions = {
        chart: {
            fontFamily: '-apple-system, BlinkMacSystemFont, Inter, Segoe UI, sans-serif',
            foreColor: '#666',
            background: 'transparent',
            toolbar: { show: false },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800
            }
        },
        theme: {
            mode: 'dark'
        },
        grid: {
            borderColor: '#222',
            strokeDashArray: 3
        },
        tooltip: {
            theme: 'dark',
            style: { fontSize: '12px' }
        },
        dataLabels: { enabled: false }
    };

    // Overall Views Chart
    new ApexCharts(document.querySelector("#overall-views-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'area', height: 200 },
        series: [{ name: 'Total Views', data: [18000, 21000, 26500, 24200, 32200, 37400, 47382] }],
        xaxis: { categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] },
        yaxis: { labels: { formatter: (val) => val.toLocaleString() } },
        colors: ['#3344ff'],
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0.1 } },
        stroke: { curve: 'smooth', width: 3 }
    }).render();

    // YOUTUBE
    window.ytViewsChart = new ApexCharts(document.querySelector("#youtube-views-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'bar', height: 140 },
        series: [{ name: 'Views', data: [2400, 2200, 2800, 2600, 3200, 3500, 3800] }],
        plotOptions: { bar: { borderRadius: 6, columnWidth: '60%' } },
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        colors: ['#ff0033'],
        fill: { type: 'gradient', gradient: { shade: 'dark', type: 'vertical', gradientToColors: ['#ff4d6d'] } }
    });
    window.ytViewsChart.render();

    window.ytEngagementChart = new ApexCharts(document.querySelector("#youtube-engagement-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'area', height: 140 },
        series: [{ name: 'Engagement Rate', data: [4.2, 4.4, 4.6, 4.3, 4.8, 4.9, 4.8] }],
        xaxis: { categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'] },
        yaxis: { labels: { formatter: (val) => val.toFixed(1) + '%' } },
        colors: ['#ff0033'],
        stroke: { curve: 'smooth', width: 2 }
    });
    window.ytEngagementChart.render();

    window.ytSubsChart = new ApexCharts(document.querySelector("#youtube-subscribers-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'line', height: 140 },
        series: [{ name: 'New Subscribers', data: [120, 135, 145, 138, 162, 148, 180] }],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        colors: ['#ff0033'],
        stroke: { curve: 'straight', width: 3 },
        markers: { size: 5, colors: ['#ff0033'], strokeWidth: 2 }
    });
    window.ytSubsChart.render();

    window.ytTrafficChart = new ApexCharts(document.querySelector("#youtube-traffic-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'donut', height: 140 },
        series: [42, 31, 15, 12],
        labels: ['Search', 'Suggested', 'Browse', 'External'],
        colors: ['#ff0033', '#ff4d6d', '#ff758f', '#a82c40'],
        legend: { show: true, position: 'bottom', fontSize: '11px' },
        plotOptions: { pie: { donut: { size: '65%' } } }
    });
    window.ytTrafficChart.render();

// Helper to update YouTube charts dynamically with real-time data
window.updateYouTubeCharts = function(chartsData) {
    if (!chartsData) return;

    if (chartsData.viewsByDay && window.ytViewsChart) {
        const categories = chartsData.viewsByDay.map(d => d.day);
        const data = chartsData.viewsByDay.map(d => d.views);
        window.ytViewsChart.updateOptions({
            xaxis: { categories: categories }
        });
        window.ytViewsChart.updateSeries([{ name: 'Views', data: data }]);
    }

    if (chartsData.engagement && window.ytEngagementChart) {
        const categories = chartsData.engagement.map(d => d.day);
        const data = chartsData.engagement.map(d => d.rate);
        window.ytEngagementChart.updateOptions({
            xaxis: { categories: categories }
        });
        window.ytEngagementChart.updateSeries([{ name: 'Engagement Rate', data: data }]);
    }

    if (chartsData.subscriberGrowth && window.ytSubsChart) {
        const categories = chartsData.subscriberGrowth.map(d => d.day);
        const data = chartsData.subscriberGrowth.map(d => d.subs);
        window.ytSubsChart.updateOptions({
            xaxis: { categories: categories }
        });
        window.ytSubsChart.updateSeries([{ name: 'New Subscribers', data: data }]);
    }

    if (chartsData.trafficSources && window.ytTrafficChart) {
        const labels = chartsData.trafficSources.map(s => s.source);
        const series = chartsData.trafficSources.map(s => s.value);
        window.ytTrafficChart.updateOptions({
            labels: labels
        });
        window.ytTrafficChart.updateSeries(series);
    }

    setTimeout(() => window.dispatchEvent(new Event('resize')), 100);
};



    // INSTAGRAM
    window.igReachChart = new ApexCharts(document.querySelector("#instagram-reach-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'bar', height: 140 },
        series: [{ name: 'Reach', data: [1800, 2200, 2400, 2100, 2900, 3100, 3300] }],
        plotOptions: { bar: { borderRadius: 6, columnWidth: '60%' } },
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        colors: ['#9b59b6'],
        fill: { type: 'gradient', gradient: { gradientToColors: ['#b87fc9'] } }
    });
    window.igReachChart.render();

    window.igPostTypesChart = new ApexCharts(document.querySelector("#instagram-post-types-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'bar', height: 140 },
        series: [{ name: 'Engagement', data: [920, 580, 340] }],
        plotOptions: { bar: { horizontal: true, borderRadius: 6, distributed: true } },
        xaxis: { categories: ['Reels', 'Carousel', 'Single Image'] },
        colors: ['#9b59b6', '#8e4fa8', '#7a4291'],
        legend: { show: false }
    });
    window.igPostTypesChart.render();

    window.igEngagementChart = new ApexCharts(document.querySelector("#instagram-engagement-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'line', height: 140 },
        series: [{ name: 'Engagement Rate', data: [11.2, 12.1, 11.8, 13.4, 12.9, 13.8, 13.6] }],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yaxis: { labels: { formatter: (val) => val.toFixed(1) + '%' } },
        colors: ['#9b59b6'],
        stroke: { curve: 'smooth', width: 3 },
        markers: { size: 5 }
    });
    window.igEngagementChart.render();

    window.igStoryFeedChart = new ApexCharts(document.querySelector("#instagram-story-feed-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'bar', height: 140 },
        series: [
            { name: 'Stories', data: [1200, 1400, 1500, 1300, 1800, 1900, 2000] },
            { name: 'Feed', data: [1600, 1800, 1900, 1700, 2100, 2200, 2400] }
        ],
        plotOptions: { bar: { borderRadius: 6 } },
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        colors: ['#7b68a8', '#9b59b6'],
        legend: { show: true, position: 'top' }
    });
    window.igStoryFeedChart.render();

// Helper to update Instagram charts dynamically with real-time data
window.updateInstagramCharts = function(chartsData) {
    if (!chartsData) return;

    if (chartsData.reachByDay && window.igReachChart) {
        const categories = chartsData.reachByDay.map(d => d.day);
        const data = chartsData.reachByDay.map(d => d.reach);
        window.igReachChart.updateOptions({
            xaxis: { categories: categories }
        });
        window.igReachChart.updateSeries([{ name: 'Reach', data: data }]);
    }

    if (chartsData.postTypes && window.igPostTypesChart) {
        const categories = chartsData.postTypes.map(d => d.type);
        const data = chartsData.postTypes.map(d => d.engagement);
        window.igPostTypesChart.updateOptions({
            xaxis: { categories: categories }
        });
        window.igPostTypesChart.updateSeries([{ name: 'Engagement', data: data }]);
    }

    if (chartsData.engagementRate && window.igEngagementChart) {
        const categories = chartsData.engagementRate.map(d => d.day);
        const data = chartsData.engagementRate.map(d => d.rate);
        window.igEngagementChart.updateOptions({
            xaxis: { categories: categories }
        });
        window.igEngagementChart.updateSeries([{ name: 'Engagement Rate', data: data }]);
    }

    if (chartsData.storyVsFeed && window.igStoryFeedChart) {
        const categories = chartsData.storyVsFeed.map(d => d.day);
        const stories = chartsData.storyVsFeed.map(d => d.stories);
        const feed = chartsData.storyVsFeed.map(d => d.feed);
        window.igStoryFeedChart.updateOptions({
            xaxis: { categories: categories }
        });
        window.igStoryFeedChart.updateSeries([
            { name: 'Stories', data: stories },
            { name: 'Feed', data: feed }
        ]);
    }

    setTimeout(() => window.dispatchEvent(new Event('resize')), 100);
};


    // TIKTOK
    new ApexCharts(document.querySelector("#tiktok-views-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'bar', height: 140 },
        series: [{ name: 'Views', data: [950, 1200, 1100, 1450, 1600, 1750, 1950] }],
        plotOptions: { bar: { borderRadius: 6, columnWidth: '60%' } },
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        colors: ['#e94057'],
        fill: { type: 'gradient', gradient: { gradientToColors: ['#ff6b7d'] } }
    }).render();

    new ApexCharts(document.querySelector("#tiktok-engagement-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'area', height: 140 },
        series: [{ name: 'Engagement Rate', data: [13.2, 14.5, 14.1, 15.8, 15.2, 16.4, 15.1] }],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yaxis: { labels: { formatter: (val) => val.toFixed(1) + '%' } },
        colors: ['#e94057'],
        stroke: { curve: 'smooth', width: 2 }
    }).render();

    new ApexCharts(document.querySelector("#tiktok-traffic-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'donut', height: 140 },
        series: [68, 22, 10],
        labels: ['For You Page', 'Following', 'Profile'],
        colors: ['#e94057', '#f55969', '#ff7a89'],
        legend: { show: true, position: 'bottom' },
        plotOptions: { pie: { donut: { size: '65%' } } }
    }).render();

    new ApexCharts(document.querySelector("#tiktok-watchtime-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'line', height: 140 },
        series: [{ name: 'Avg Watch Time (sec)', data: [18, 21, 19, 24, 23, 26, 25] }],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yaxis: { labels: { formatter: (val) => val + 's' } },
        colors: ['#e94057'],
        stroke: { curve: 'smooth', width: 3 },
        markers: { size: 5 }
    }).render();

    // TWITTER
    new ApexCharts(document.querySelector("#twitter-impressions-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'bar', height: 140 },
        series: [{ name: 'Impressions', data: [380, 350, 480, 520, 460, 620, 710] }],
        plotOptions: { bar: { borderRadius: 6, columnWidth: '60%' } },
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        colors: ['#888888'],
        fill: { type: 'gradient', gradient: { gradientToColors: ['#aaaaaa'] } }
    }).render();

    new ApexCharts(document.querySelector("#twitter-engagement-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'area', height: 140 },
        series: [{ name: 'Engagement Rate', data: [5.8, 6.1, 5.9, 6.7, 6.3, 6.9, 6.4] }],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yaxis: { labels: { formatter: (val) => val.toFixed(1) + '%' } },
        colors: ['#888888'],
        stroke: { curve: 'smooth', width: 2 }
    }).render();

    new ApexCharts(document.querySelector("#twitter-tweet-types-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'bar', height: 140 },
        series: [{ name: 'Avg Engagement', data: [45, 38, 32, 24] }],
        plotOptions: { bar: { horizontal: true, borderRadius: 6, distributed: true } },
        xaxis: { categories: ['Threads', 'Media', 'Polls', 'Text'] },
        colors: ['#888888', '#999999', '#aaaaaa', '#bbbbbb'],
        legend: { show: false }
    }).render();

    new ApexCharts(document.querySelector("#twitter-actions-chart"), {
        ...baseOptions,
        chart: { ...baseOptions.chart, type: 'line', height: 140 },
        series: [
            { name: 'Link Clicks', data: [28, 24, 38, 42, 36, 48, 54] },
            { name: 'Likes', data: [52, 48, 64, 68, 58, 78, 84] }
        ],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        colors: ['#5599ff', '#888888'],
        stroke: { curve: 'smooth', width: 3 },
        markers: { size: 4 },
        legend: { show: true, position: 'top' }
    }).render();

    // THREADS
    window.renderThreadsCharts();
}

window.renderThreadsCharts = function(chartsData) {
    const viewsData = chartsData?.viewsByDay || [
        { day: 'Mon', views: 1 }, { day: 'Tue', views: 1 }, { day: 'Wed', views: 1 },
        { day: 'Thu', views: 2 }, { day: 'Fri', views: 2 }, { day: 'Sat', views: 2 }, { day: 'Sun', views: 2 }
    ];
    const engData = chartsData?.engagementRate || [
        { day: 'Mon', rate: 4.8 }, { day: 'Tue', rate: 5.4 }, { day: 'Wed', rate: 6.1 },
        { day: 'Thu', rate: 5.9 }, { day: 'Fri', rate: 6.8 }, { day: 'Sat', rate: 7.4 }, { day: 'Sun', rate: 7.1 }
    ];
    const postTypesData = chartsData?.postTypes || [
        { type: 'Text', engagement: 25 }, { type: 'Image/Media', engagement: 18 }, { type: 'Quotes/Reposts', engagement: 10 }
    ];
    const interactionsData = chartsData?.interactions || [
        { day: 'Mon', replies: 1, reposts: 1 }, { day: 'Tue', replies: 1, reposts: 1 },
        { day: 'Wed', replies: 1, reposts: 1 }, { day: 'Thu', replies: 1, reposts: 1 },
        { day: 'Fri', replies: 1, reposts: 1 }, { day: 'Sat', replies: 1, reposts: 1 },
        { day: 'Sun', replies: 1, reposts: 1 }
    ];

    const baseOptions = {
        chart: {
            fontFamily: '-apple-system, BlinkMacSystemFont, Inter, Segoe UI, sans-serif',
            foreColor: '#666',
            background: 'transparent',
            toolbar: { show: false },
            animations: { enabled: true, easing: 'easeinout', speed: 800 }
        },
        theme: { mode: 'dark' },
        grid: { borderColor: '#222', strokeDashArray: 3 },
        tooltip: { theme: 'dark', style: { fontSize: '12px' } },
        dataLabels: { enabled: false }
    };

    const viewsEl = document.querySelector("#threads-views-chart");
    if (viewsEl) {
        if (window.thViewsChart) {
            window.thViewsChart.updateOptions({ xaxis: { categories: viewsData.map(d => d.day) } });
            window.thViewsChart.updateSeries([{ name: 'Views', data: viewsData.map(d => d.views) }]);
        } else {
            viewsEl.innerHTML = '';
            window.thViewsChart = new ApexCharts(viewsEl, {
                ...baseOptions,
                chart: { ...baseOptions.chart, type: 'bar', height: 140 },
                series: [{ name: 'Views', data: viewsData.map(d => d.views) }],
                plotOptions: { bar: { borderRadius: 6, columnWidth: '60%' } },
                xaxis: { categories: viewsData.map(d => d.day) },
                colors: ['#7c3aed'],
                fill: { type: 'gradient', gradient: { gradientToColors: ['#a78bfa'] } }
            });
            window.thViewsChart.render();
        }
    }

    const engEl = document.querySelector("#threads-engagement-chart");
    if (engEl) {
        if (window.thEngagementChart) {
            window.thEngagementChart.updateOptions({ xaxis: { categories: engData.map(d => d.day) } });
            window.thEngagementChart.updateSeries([{ name: 'Engagement Rate', data: engData.map(d => d.rate) }]);
        } else {
            engEl.innerHTML = '';
            window.thEngagementChart = new ApexCharts(engEl, {
                ...baseOptions,
                chart: { ...baseOptions.chart, type: 'line', height: 140 },
                series: [{ name: 'Engagement Rate', data: engData.map(d => d.rate) }],
                xaxis: { categories: engData.map(d => d.day) },
                yaxis: { labels: { formatter: (val) => Number(val).toFixed(1) + '%' } },
                colors: ['#7c3aed'],
                stroke: { curve: 'smooth', width: 3 },
                markers: { size: 5 }
            });
            window.thEngagementChart.render();
        }
    }

    const postTypesEl = document.querySelector("#threads-post-types-chart");
    if (postTypesEl) {
        if (window.thPostTypesChart) {
            window.thPostTypesChart.updateOptions({ xaxis: { categories: postTypesData.map(d => d.type) } });
            window.thPostTypesChart.updateSeries([{ name: 'Avg Engagement', data: postTypesData.map(d => d.engagement) }]);
        } else {
            postTypesEl.innerHTML = '';
            window.thPostTypesChart = new ApexCharts(postTypesEl, {
                ...baseOptions,
                chart: { ...baseOptions.chart, type: 'bar', height: 140 },
                series: [{ name: 'Avg Engagement', data: postTypesData.map(d => d.engagement) }],
                plotOptions: { bar: { horizontal: true, borderRadius: 6, distributed: true } },
                xaxis: { categories: postTypesData.map(d => d.type) },
                colors: ['#7c3aed', '#8b5cf6', '#a78bfa'],
                legend: { show: false }
            });
            window.thPostTypesChart.render();
        }
    }

    const reachEl = document.querySelector("#threads-reach-chart");
    if (reachEl) {
        if (window.thReachChart) {
            window.thReachChart.updateOptions({ xaxis: { categories: interactionsData.map(d => d.day) } });
            window.thReachChart.updateSeries([
                { name: 'Replies', data: interactionsData.map(d => d.replies) },
                { name: 'Reposts', data: interactionsData.map(d => d.reposts) }
            ]);
        } else {
            reachEl.innerHTML = '';
            window.thReachChart = new ApexCharts(reachEl, {
                ...baseOptions,
                chart: { ...baseOptions.chart, type: 'bar', height: 140 },
                series: [
                    { name: 'Replies', data: interactionsData.map(d => d.replies) },
                    { name: 'Reposts', data: interactionsData.map(d => d.reposts) }
                ],
                plotOptions: { bar: { borderRadius: 6 } },
                xaxis: { categories: interactionsData.map(d => d.day) },
                colors: ['#a78bfa', '#7c3aed'],
                legend: { show: true, position: 'top' }
            });
            window.thReachChart.render();
        }
    }

    setTimeout(() => window.dispatchEvent(new Event('resize')), 100);
};

window.updateThreadsCharts = window.renderThreadsCharts;

// ─── Twitter / X Charts ───────────────────────────────────────────────────────
window.renderTwitterCharts = function(charts) {
    charts = charts || {};

    const baseOptions = {
        chart: {
            fontFamily: '-apple-system, BlinkMacSystemFont, Inter, Segoe UI, sans-serif',
            foreColor: '#666',
            background: 'transparent',
            toolbar: { show: false },
            animations: { enabled: true, easing: 'easeinout', speed: 800 }
        },
        theme: { mode: 'dark' },
        grid: { borderColor: '#222', strokeDashArray: 3 },
        tooltip: { theme: 'dark', style: { fontSize: '12px' } },
        dataLabels: { enabled: false }
    };

    // ── 1. Impressions by Day (bar)
    const impData  = (charts.viewsByDay  || [{ day:'Mon', views:2100 },{ day:'Tue', views:2850 },{ day:'Wed', views:3200 },{ day:'Thu', views:2700 },{ day:'Fri', views:3500 },{ day:'Sat', views:2400 },{ day:'Sun', views:1670 }]);
    const impEl = document.querySelector('#twitter-impressions-chart');
    if (impEl) {
        if (window.twImpressionsChart) {
            window.twImpressionsChart.updateOptions({ xaxis: { categories: impData.map(d => d.day) } });
            window.twImpressionsChart.updateSeries([{ name: 'Impressions', data: impData.map(d => d.views) }]);
        } else {
            impEl.innerHTML = '';
            window.twImpressionsChart = new ApexCharts(impEl, {
                ...baseOptions,
                chart: { ...baseOptions.chart, type: 'bar', height: 140 },
                series: [{ name: 'Impressions', data: impData.map(d => d.views) }],
                plotOptions: { bar: { borderRadius: 6, columnWidth: '60%' } },
                xaxis: { categories: impData.map(d => d.day) },
                yaxis: { labels: { formatter: (v) => v >= 1000 ? (v/1000).toFixed(1)+'k' : v } },
                colors: ['#1d9bf0'],
                fill: { type: 'gradient', gradient: { shade: 'dark', type: 'vertical', gradientToColors: ['#0ea5e9'] } }
            });
            window.twImpressionsChart.render();
        }
    }

    // ── 2. Engagement Rate (line)
    const engData = (charts.engagementRate || [{ day:'Mon', rate:3.1 },{ day:'Tue', rate:4.2 },{ day:'Wed', rate:3.8 },{ day:'Thu', rate:3.5 },{ day:'Fri', rate:4.9 },{ day:'Sat', rate:3.2 },{ day:'Sun', rate:2.8 }]);
    const engEl = document.querySelector('#twitter-engagement-chart');
    if (engEl) {
        if (window.twEngagementChart) {
            window.twEngagementChart.updateOptions({ xaxis: { categories: engData.map(d => d.day) } });
            window.twEngagementChart.updateSeries([{ name: 'Engagement %', data: engData.map(d => d.rate) }]);
        } else {
            engEl.innerHTML = '';
            window.twEngagementChart = new ApexCharts(engEl, {
                ...baseOptions,
                chart: { ...baseOptions.chart, type: 'area', height: 140 },
                series: [{ name: 'Engagement %', data: engData.map(d => d.rate) }],
                xaxis: { categories: engData.map(d => d.day) },
                yaxis: { labels: { formatter: (v) => Number(v).toFixed(1) + '%' } },
                colors: ['#1d9bf0'],
                fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.05 } },
                stroke: { curve: 'smooth', width: 3 },
                markers: { size: 4, colors: ['#1d9bf0'], strokeColors: '#0a0a0a', strokeWidth: 2 }
            });
            window.twEngagementChart.render();
        }
    }

    // ── 3. Tweet Types (donut)
    const typesData = (charts.tweetTypes || [{ type: 'Text', count: 22 }, { type: 'Link', count: 14 }, { type: 'Media', count: 6 }]);
    const typesEl = document.querySelector('#twitter-tweet-types-chart');
    if (typesEl) {
        if (window.twTypesChart) {
            window.twTypesChart.updateSeries(typesData.map(d => d.count));
            window.twTypesChart.updateOptions({ labels: typesData.map(d => d.type) });
        } else {
            typesEl.innerHTML = '';
            window.twTypesChart = new ApexCharts(typesEl, {
                ...baseOptions,
                chart: { ...baseOptions.chart, type: 'donut', height: 140 },
                series: typesData.map(d => d.count),
                labels: typesData.map(d => d.type),
                colors: ['#1d9bf0', '#0ea5e9', '#38bdf8'],
                legend: { show: true, position: 'right', fontSize: '11px' },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '65%',
                            labels: {
                                show: true,
                                total: {
                                    show: true,
                                    label: 'Total',
                                    fontSize: '11px',
                                    color: '#888',
                                    formatter: (w) => w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                                }
                            }
                        }
                    }
                }
            });
            window.twTypesChart.render();
        }
    }

    // ── 4. Likes vs Retweets (grouped bar)
    const actData = (charts.actionsData || [{ day:'Mon', likes:80, retweets:18 },{ day:'Tue', likes:110, retweets:28 },{ day:'Wed', likes:95, retweets:22 },{ day:'Thu', likes:88, retweets:19 },{ day:'Fri', likes:135, retweets:34 },{ day:'Sat', likes:72, retweets:15 },{ day:'Sun', likes:32, retweets:12 }]);
    const actEl = document.querySelector('#twitter-actions-chart');
    if (actEl) {
        if (window.twActionsChart) {
            window.twActionsChart.updateOptions({ xaxis: { categories: actData.map(d => d.day) } });
            window.twActionsChart.updateSeries([
                { name: 'Likes',    data: actData.map(d => d.likes) },
                { name: 'Retweets', data: actData.map(d => d.retweets) }
            ]);
        } else {
            actEl.innerHTML = '';
            window.twActionsChart = new ApexCharts(actEl, {
                ...baseOptions,
                chart: { ...baseOptions.chart, type: 'bar', height: 140 },
                series: [
                    { name: 'Likes',    data: actData.map(d => d.likes) },
                    { name: 'Retweets', data: actData.map(d => d.retweets) }
                ],
                plotOptions: { bar: { borderRadius: 4, columnWidth: '55%', grouped: true } },
                xaxis: { categories: actData.map(d => d.day) },
                colors: ['#1d9bf0', '#0ea5e9'],
                legend: { show: true, position: 'top', fontSize: '11px' }
            });
            window.twActionsChart.render();
        }
    }

    setTimeout(() => window.dispatchEvent(new Event('resize')), 100);
};

window.updateTwitterCharts = window.renderTwitterCharts;

// Initialize charts when DOM is ready
window.addEventListener('DOMContentLoaded', initializeCharts);
