<!---
layout: demo
--->
<html lang="cmn-Hans">
<head>
    <title>demo</title>
    <script src="https://cdn.bootcss.com/d3/5.9.7/d3.js"></script>
    <style>
        body {
            position: relation;
            height: 500px;
            background: #eee;
        }

        button {
            position: absolute;
        }

        #root {
            position: relation;
            width: 500px;
            height: 500px;
        }
    </style>
</head>
<body>
    <main id="root">
    </main>
    <script>
        let buttons;
        const data = [{}, {}, {}, {}, {}, {}, {}, {}]
        const root = d3.select('#root')
        let i = 0
        const update = () => {
          
          i++
          console.log(`第${i}次运行`)
          
          const simulation = d3.forceSimulation()
            .nodes(data)
            .force('center', d3.forceCenter().x(250).y(250))
            .on('tick', () => {
                root.selectAll('button').style("transform", d => `translate(${d.x}px, ${d.y}px`)
            })
          
          const drag = d3
            .drag()
            .on("start", function(d) {
              simulation.alphaTarget(0.3).restart()
              d.fx = d.x
              d.fy = d.y
            })
            .on("drag", function(d) {
              const { x, y } = d3.event
              d.fx = x
              d.fy = y
            })
            .on("end", function() {
            })
          
          buttons = root.selectAll('button')
            .data(data)
            .enter()
            .append('button')
            .text((d, i) => `拖我有奖励${i}`)
            .on("click", function(d, i) {
              alert("点我作甚")
            })
            .call(drag)
          
        }
        
        update()
        
        setTimeout(update, 3000)
        
    </script>
</body>
</html>