<!---
layout: demo
--->
<html lang="cmn-Hans">
<head>
    <title>关系图谱</title>
    <script src="https://cdn.bootcss.com/d3/5.9.7/d3.js"></script>
    <style>
        main {
            width: 1200px;
            margin: 0 auto;
        }
        #dataset {
            margin-bottom: 20px;
        }
        #dataset textarea {
            width: 1000px;
            height: 50px;
        }
        #root {
            height: 600px;
        }
        #btns {
            text-align: center;
            margin-top: 20px;
        }

        svg {
            box-shadow: 0 0 3px 3px #eee;
        }
    </style>
</head>
<body>
    <main>
        <div id="dataset">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button id="start">start</button>
        </div>
        <div id="root">
            <svg width="1200" height="600"></svg>
        </div>
        <div id="btns">
            <button id="network1">节点1对1</button>
            <button id="network2">节点1对n</button>
            <button id="network3">节点1对1多线</button>
            <button id="network4">100个节点</button>
            <button id="network5">500个节点</button>
            <button id="network6">1000个节点</button>
            <button id="network7">2000个节点</button>
            <button id="network8">5000个节点</button>
            <button id="network9">10000个节点</button>
            <button id="network10">50000个节点</button>
        </div>
    </main>
    <script>
        const width = 1200;
        const height = 600;
        let dataSorce, svgRoot, svgRootG, simulation,
            graphNode, graphNodeG, graphLink, graphLinkG;
        let nodeDatas = [], linkDatas = [], step = 200;
        const radius = d3.scaleLinear()
            .domain([0, 500])
            .range([5, 30]);

        const clickCircle = (d, i) => {
            d3.event.stopPropagation();
            nodeDatas.forEach(item => {
                item.focus = item.id === d.id;
            });
            updateNetwork();
        };

        const clickSvg = (d, i) => {
            nodeDatas.forEach(item => {
                item.focus = undefined;
            });
            updateNetwork();
        };

        const drag = () => {
            const dragstarted = (d) => {
                if (!d3.event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            };
            const dragged = (d) => {
                d.fx = d3.event.x;
                d.fy = d3.event.y;
            };
            const dragended = (d) => {
                if (!d3.event.active) simulation.alphaTarget(0);
                // d.fx = null;
                // d.fy = null;
            };
            return d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended);
        }

        const updateNetwork = () => {
            simulation
                .nodes(nodeDatas)
                // .alpha(0.5)
                // .alphaMin(0.3)
                // .alphaTarget(0)
                // .alphaDecay(0.3)
                // .velocityDecay(0.4)
                .restart();
            simulation
                .force('link')
                .links(linkDatas);

            // link
            graphLink.data(linkDatas, d => d.id);
            graphLink
                .enter()
                .append('path')
                .merge(graphLink)
                .attr('fill', 'transparent')
                .attr('stroke-width', 1)
                .attr('stroke', d => {
                    return d3.schemePaired[d.source.type] || '#666';
                })
                .attr("marker-end", "url(#resolved)")
                .attr('stroke', (d, i) => {
                    if (d.source.focus === false) return '#eee';
                    return d3.schemePaired[d.source.type] || '#666';
                });
            graphLink
                .exit()
                .remove();

            // node
            graphNode.data(nodeDatas, d => d.id);
            const ndoeG = graphNode
                .enter()
                .append('g')
                .attr('class', 'circle');
            ndoeG
                .append('circle')
                .merge(ndoeG)
                .attr('r', d => radius(d.value))
                .attr('fill', (d, i) => {
                    if (d.focus === false) return '#eee';
                    return d3.schemePaired[d.type] || '#000';
                });
            ndoeG
                .append("text")
                .merge(ndoeG)
                .style("fill","#000")
                .attr("dominant-baseline","middle")
                .attr("text-anchor", "middle")
                .attr("font-size", "12")
                .attr("transform", "translate(0 20)")
                .text(d => d.label);
            graphNode
                .exit()
                .remove();
        };

        const initNetwork = () => {
            const svgRoot = d3.select('#root svg');

            svgRoot.html('');
            
            svgRootG = svgRoot.append('g');
            graphLinkG = svgRootG.append('g');
            graphNodeG = svgRootG.append('g');
            graphLabelG = svgRootG.append('g');

            svgRootG
                .append("marker")
                .attr("id", "resolved")
                .attr("markerUnits","userSpaceOnUse")
                .attr("viewBox", "0 -5 10 10")//坐标系的区域
                .attr("refX", 30)//箭头坐标
                .attr("refY", -1)
                .attr("markerWidth", 6)//标识的大小
                .attr("markerHeight", 6)
                .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
                .attr("stroke-width",1)//箭头宽度
                .append("path")
                .attr("d", "M0,-5L10,0L0,5")//箭头的路径
                .attr('fill', '#666');//箭头颜色

            svgRoot
                .on('mousedown', null)
                .on('mousedown', clickSvg);

            graphNode = graphNodeG.selectAll('g.circle')
                .data(nodeDatas, d => d.id)
                .enter()
                .append('g')
                .attr('class', 'circle')
                .on('mousedown', clickCircle)
                .call(drag());
            graphNode
                .append('circle')
                .attr('r', d => radius(d.value))
                .attr('fill', (d, i) => {
                    if (d.focus === false) return '#eee';
                    return d3.schemePaired[d.type] || '#000';
                });
            graphNode
                .append("text")
                .style("fill","#000")
                .attr("dominant-baseline","middle")
                .attr("text-anchor", "middle")
                .attr("font-size", "12")
                .attr("transform", "translate(0 20)")
                .text(d => d.label);

            graphLink = graphLinkG.selectAll('path')
                .data(linkDatas, d => d.id)
                .enter()
                .append('path')
                .attr('fill', 'transparent')
                .attr('stroke-width', 1)
                .attr('stroke', d => {
                    return d3.schemePaired[d.source.type] || '#666';
                })
                .attr("marker-end", "url(#resolved)");

            const distance = d3.scaleLinear()
                .domain([1, 50, 500])
                .range([200, 80, 50])
                .clamp(true);
            simulation = d3.forceSimulation()
                .force("collision", d3.forceCollide(d => radius(d.value)*2).strength(1).iterations(1))
                // .force("collision", d3.forceCollide(d => radius(d.value)*2))

                .force("charge", d3.forceManyBody().strength(-60).distanceMin(10).distanceMax(width * 4).theta(0.9))
                // .force("charge", d3.forceManyBody())

                .force('link', d3.forceLink().id(d => d.id).distance(distance(nodeDatas.length)).strength(1).iterations(1))
                // .force('link', d3.forceLink().id(d => d.id))

                .force("center", d3.forceCenter(width / 2, height / 2))

                .force("x", d3.forceX(width/2).strength(0.1))
                // .force("x", d3.forceX(width/2))

                .force("y", d3.forceY(height/2).strength(0.1))
                // .force("y", d3.forceY(height/2))

                .on('tick', () => {
                    // const offset = Math.floor(Math.random() * 30);
                    graphLink
                        .attr('d', d => {
                            const path = d3.path();
                            path.moveTo(d.source.x, d.source.y);
                            
                            if (d._tagCount_ > 1) {
                                const offset = d._tagIndex_ * 30 + 30;
                                const y = d.source.y - d.target.y;
                                const x = d.source.x - d.target.x;
                                const angle = 90 - Math.atan2(y, x) * 180 / Math.PI;
                                const cpx = (d.source.x + d.target.x)/2 - Math.cos(angle * Math.PI / 180) * offset;
                                const cpy = (d.source.y + d.target.y)/2 + Math.sin(angle * Math.PI / 180) * offset;
                                path.quadraticCurveTo(cpx, cpy, d.target.x, d.target.y);
                            } else {
                                path.lineTo(d.target.x, d.target.y);
                            }
                            return path;
                        });
                    graphNode
                        .attr('transform', d => `translate(${d.x} ${d.y})`);
                });
                // .force("r", d3.forceRadial(height/2, width/2, height/2).strength(1));
                
            const zoom = d3.zoom()
                .on('zoom', () => {
                    svgRootG.attr("transform", "translate(" + d3.event.transform.x + "," + d3.event.transform.y + ")scale(" + d3.event.transform.k + ")");
                    svgRootG.attr("transform-origin", 'center');
                });

            svgRoot
                .call(zoom)
                .on("dblclick.zoom", null);
        };

        const initData = (data) => {
            dataSorce = data;
            dataSorce.nodes.forEach(d => {
                d.value = Math.random() > 0.995 ? 
                    Math.floor(Math.random() * 200 + 300) : 
                    Math.floor(Math.random() * 100 + 0);
            });
            nodeDatas = [];
            linkDatas = [];
        };

        const generateData = () => {
            const tempNode = {};
            const newDatas = dataSorce.nodes.splice(0, step);
            nodeDatas.forEach(d => {
                d.focus = null;
            });
            newDatas.forEach(d => {
                nodeDatas.push(d);
            });
            nodeDatas.forEach(d => {
                tempNode[d.id] = d;
            });

            const tempLink = {};
            dataSorce.links.forEach(d => {
                if (tempNode[d.source] && tempNode[d.target]) {
                    d._tag_ = `${d.source}_${d.target}`;
                    !tempLink[d._tag_] && (tempLink[d._tag_] = []);
                    d._tagIndex_ = tempLink[d._tag_].length;
                    tempLink[d._tag_].push(d);
                    linkDatas.push(d);
                }
            });
            linkDatas.forEach(d => {
                const tag = `${d.source}_${d.target}`;
                d._tagCount_ = tempLink[tag].length;
            });
        };

        const init = (data) => {
            initData(data);
            generateData();
            initNetwork();
            updateNetwork();
        };

        const load = (name) => {
            d3.json(`./mocks/${name}.json`).then((data) => {
                init(data);
            });
        };
        
        d3.select('#network1').on('click', () => {
            load('network1');
        });
        
        d3.select('#network2').on('click', () => {
            load('network2');
        });
        
        d3.select('#network3').on('click', () => {
            load('network3');
        });

        const generateRandomData = (max) => {
            const nodes = [];
            const links = [];
            for (let index = 0; index < max; index++) {
                const sourceId = Math.floor(d3.randomLogNormal()()*max);
                const targetId = Math.floor(d3.randomLogNormal()()*max/2);
                const linkId = Math.floor(d3.randomLogNormal()()*10000);
                const node = { "type": Math.floor(Math.random()*9), "label": "手机", "id": sourceId };
                nodes.push(node);
                const link = { "source": sourceId, "label": "订单_身份证", "id": linkId, "target": targetId };
                links.push(link);
            }
            init({
                nodes,
                links
            });
        };
        
        d3.select('#network4').on('click', () => {
            step = 100;
            generateRandomData(100);
        });
        
        d3.select('#network5').on('click', () => {
            step = 500;
            generateRandomData(500);
        });
        
        d3.select('#network6').on('click', () => {
            step = 1000;
            generateRandomData(1000);
        });
        
        d3.select('#network7').on('click', () => {
            step = 2000;
            generateRandomData(2000);
        });
        
        d3.select('#network8').on('click', () => {
            step = 5000;
            generateRandomData(5000);
        });
        
        d3.select('#network9').on('click', () => {
            step = 10000;
            generateRandomData(10000);
        });
        
        d3.select('#network10').on('click', () => {
            step = 50000;
            generateRandomData(50000);
        });

        d3.select('#start').on('click', () => {
            step = 2000;
            const data = d3.select('#dataset textarea').node().value;
            init(JSON.parse(data));
        });
    </script>
</body>
</html>