<!---
layout: demo
--->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.bootcss.com/d3/5.9.7/d3.js"></script>
</head>
<body>
    <div id="root"></div>
    <script>
        const data = [4, 8, 15, 16, 23, 42];

        setInterval(() => {

            data.push(Math.round(Math.random() * 50));
            data.shift();

            const root = d3.select('#root');
            const selectors = root.selectAll('p')
                .data(data);

            selectors
                .text(function(d) { return d; })
                .style('font-size', function(d) { return d + 'px'; });

            selectors.enter()
                .append('p')
                .text(function(d) { return d; })
                .style('font-size', function(d) { return d + 'px'; })
                .style('line-height', 1);

            selectors.exit()
                .style('font-size', 0)
                .remove();

        }, 1000);        
    </script>
</body>
</html>