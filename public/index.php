
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- adding highcharts api -->
<script src="https://code.highcharts.com/highcharts.js"></script>
<!-- connecting jquery -->
<script
			  src="https://code.jquery.com/jquery-3.5.1.js"
			  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
			  crossorigin="anonymous"></script>
</head>
<body>
<div id="container" style="width:100%; height:400px;"></div>
<!-- this is the code making the highcharts chart. -->

<script type="text/javascript">
    $(document).ready(function(){
        var options = {
            chart:{
                renderTo: 'container',
                type: 'line',
            },
            series: [{}]
        };
        // connecting to the data.php file connected to the database
        $.getJSON('data.php', function(data){
            options.series[0].data = data;
            const chart = new Highcharts.Chart(options);
        });
    });    

</script>

</body>
</html>