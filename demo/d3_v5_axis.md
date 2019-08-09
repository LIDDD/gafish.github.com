<!---
layout: demo
--->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="../d3.v5.min.js"></script>
    <style>
        samp {
            color: green;
        }
        code {
            color: blue;
        }
    </style>
</head>
<body>

    <header>
        <h1>d3-axis</h1>
        <address>api地址：https://d3js.org.cn/document/d3-axis/</address>
    </header>

    <main>

        <article>

            <section>
                <h3>d3.axisTop(scale)</h3>
                <p>使用给定的 scale 构建一个刻度在上的坐标轴生成器 </p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale1 = d3.scaleLinear()
                            .domain([0, 100])
                            .range([0, 800]);
                        const axis1 = d3.axisTop(scale1);

                        d3.select("#axisTop").append("svg")
                            .attr("width", 800)
                            .attr("height", 300)
                            .append("g")
                                .attr("transform", "translate(0,30)")
                                .call(axis1);
                    </code>
                    </pre>
                    <div>
                        <div id="axisTop"></div>
                        <script>
                            const scale1 = d3.scaleLinear()
                                .domain([0, 100])
                                .range([0, 800]);
                            const axis1 = d3.axisTop(scale1);

                            d3.select("#axisTop").append("svg")
                                .attr("width", 800)
                                .attr("height", 300)
                                .append("g")
                                    .attr("transform", "translate(0,30)")
                                    .call(axis1);
                        </script>
                    </div>
                </section>

            </section>

            <section>
                <h3>d3.axisRight(scale)</h3>
                <p>使用给定的 scale 构建一个刻度在右的坐标轴生成器 </p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale2 = d3.scaleLinear()
                            .domain([0, 100])
                            .range([0, 300]);
                        const axis2 = d3.axisRight(scale2);

                        d3.select("#axisRight").append("svg")
                            .attr("width", 800)
                            .attr("height", 300)
                            .append("g")
                                .attr('transform', 'translate(800 - 30, 0)')
                                .call(axis2);
                    </code>
                    </pre>
                    <div>
                        <div id="axisRight"></div>
                        <script>
                            const scale2 = d3.scaleLinear()
                                .domain([0, 100])
                                .range([0, 300]);
                            const axis2 = d3.axisRight(scale2);

                            d3.select("#axisRight").append("svg")
                                .attr("width", 800)
                                .attr("height", 300)
                                .append("g")
                                    .attr('transform', 'translate(770, 0)')
                                    .call(axis2);
                        </script>
                    </div>
                </section>

            </section>

            <section>
                <h3>d3.axisBottom(scale)</h3>
                <p>使用给定的 scale 构建一个刻度在下的坐标轴生成器 </p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale3 = d3.scaleLinear()
                            .domain([0, 100])
                            .range([0, 800]);
                        const axis3 = d3.axisBottom(scale3);

                        d3.select("#axisBottom").append("svg")
                            .attr("width", 800)
                            .attr("height", 300)
                            .append("g")
                                .attr('transform', 'translate(0, 270)')
                                .call(axis3);
                    </code>
                    </pre>
                    <div>
                        <div id="axisBottom"></div>
                        <script>
                            const scale3 = d3.scaleLinear()
                                .domain([0, 100])
                                .range([0, 800]);
                            const axis3 = d3.axisBottom(scale3);

                            d3.select("#axisBottom").append("svg")
                                .attr("width", 800)
                                .attr("height", 300)
                                .append("g")
                                    .attr('transform', 'translate(0, 270)')
                                    .call(axis3);
                        </script>
                    </div>
                </section>

            </section>

            <section>
                <h3>d3.axisLeft(scale)</h3>
                <p>使用给定的 scale 构建一个刻度在下的坐标轴生成器 </p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale4 = d3.scaleLinear()
                            .domain([0, 100])
                            .range([0, 300]);
                        const axis4 = d3.axisLeft(scale4);

                        d3.select("#axisLeft").append("svg")
                            .attr("width", 800)
                            .attr("height", 300)
                            .append("g")
                                .attr('transform', 'translate(30, 0)')
                                .call(axis4);
                    </code>
                    </pre>
                    <div>
                        <div id="axisLeft"></div>
                        <script>
                            const scale4 = d3.scaleLinear()
                                .domain([0, 100])
                                .range([0, 300]);
                            const axis4 = d3.axisLeft(scale4);

                            d3.select("#axisLeft").append("svg")
                                .attr("width", 800)
                                .attr("height", 300)
                                .append("g")
                                    .attr('transform', 'translate(30, 0)')
                                    .call(axis4);
                        </script>
                    </div>
                </section>

            </section>

            <section>
                <h3>axis(context)</h3>
                <p>将坐标轴渲染到指定的 context</p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale5 = d3.scaleLinear()
                            .domain([0, 100])
                            .range([0, 100]);
                        const axis5 = d3.axisLeft(scale5);

                        const g5 = d3.select("#axisLeft1").append("svg")
                            .attr("width", 800)
                            .attr("height", 100)
                            .append("g")
                                .attr('transform', 'translate(30, 0)');
                        axis5(g5);
                    </code>
                    </pre>
                    <div>
                        <div id="axisLeft1"></div>
                        <script>
                            const scale5 = d3.scaleLinear()
                                .domain([0, 100])
                                .range([0, 100]);
                            const axis5 = d3.axisLeft(scale5);

                            const g5 = d3.select("#axisLeft1").append("svg")
                                .attr("width", 800)
                                .attr("height", 100)
                                .append("g")
                                    .attr('transform', 'translate(30, 0)');
                            axis5(g5);
                        </script>
                    </div>
                </section>

            </section>

            <section>
                <h3>axis.scale([scale])</h3>
                <p>如果指定了 scale 则设置坐标轴的 scale，如果没有指定 scale 则返回当前坐标轴所使用的比例尺。</p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale6 = d3.scaleLinear()
                            .domain([0, 100])
                            .range([0, 100]);
                        const axis6 = d3.axisLeft().scale(scale6);

                        const g6 = d3.select("#axisLeft2").append("svg")
                            .attr("width", 800)
                            .attr("height", 100)
                            .append("g")
                                .attr('transform', 'translate(30, 0)');
                        axis6(g6);
                    </code>
                    </pre>
                    <div>
                        <div id="axisLeft2"></div>
                        <script>
                            const scale6 = d3.scaleLinear()
                                .domain([0, 100])
                                .range([0, 100]);
                            const axis6 = d3.axisLeft().scale(scale6);

                            const g6 = d3.select("#axisLeft2").append("svg")
                                .attr("width", 800)
                                .attr("height", 100)
                                .append("g")
                                    .attr('transform', 'translate(30, 0)');
                            axis6(g6);
                        </script>
                    </div>
                </section>

            </section>

            <section>
                <h3>axis.ticks([interval[, specifier]])</h3>
                <p>在 坐标轴 渲染时将传入的 arguments 传递给 scale.ticks 和 scale.tickFormat 并且返回当前坐标轴生成器</p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale7 = d3.scaleTime()
                            .domain([new Date(2019, 6, 1), new Date(2019, 6, 2)])
                            .range([0, 800]);
                        const axis7 = d3.axisBottom()
                            .scale(scale7)
                            .ticks(d3.timeMinute.every(60));

                        const g7 = d3.select("#axisBottom1").append("svg")
                            .attr("width", 800)
                            .attr("height", 100)
                            .append("g")
                                .attr('transform', 'translate(30, 0)');
                        axis7(g7);
                    </code>
                    </pre>
                    <div>
                        <div id="axisBottom1"></div>
                        <script>
                            const scale7 = d3.scaleTime()
                                .domain([new Date(2019, 6, 1), new Date(2019, 6, 2)])
                                .range([0, 800]);
                            const axis7 = d3.axisBottom()
                                .scale(scale7)
                                .ticks(d3.timeMinute.every(60));

                            const g7 = d3.select("#axisBottom1").append("svg")
                                .attr("width", 800)
                                .attr("height", 100)
                                .append("g")
                                    .attr('transform', 'translate(30, 0)');
                            axis7(g7);
                        </script>
                    </div>
                </section>

            </section>

            <section>
                <h3>axis.ticks([count[, specifier]])</h3>
                <p>大多数情况下建议传入一个期望的 ticks 个数: count , 或者是 format specifier 定义刻度的展示格式</p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale8 = d3.scaleLinear()
                            .domain([0, 1])
                            .range([0, 100]);
                        const axis8 = d3.axisLeft()
                            .scale(scale8)
                            .ticks(5, '%');

                        const g8 = d3.select("#axisLeft4").append("svg")
                            .attr("width", 800)
                            .attr("height", 100)
                            .append("g")
                                .attr('transform', 'translate(30, 0)');
                        axis8(g8);
                    </code>
                    </pre>
                    <div>
                        <div id="axisLeft4"></div>
                        <script>
                            const scale8 = d3.scaleLinear()
                                .domain([0, 1])
                                .range([0, 100]);
                            const axis8 = d3.axisLeft()
                                .scale(scale8)
                                .ticks(5, '%');

                            const g8 = d3.select("#axisLeft4").append("svg")
                                .attr("width", 800)
                                .attr("height", 100)
                                .append("g")
                                    .attr('transform', 'translate(30, 0)');
                            axis8(g8);
                        </script>
                    </div>
                </section>

            </section>

            <section>
                <h3>axis.tickArguments([arguments])</h3>
                <p>同 axis.ticks，只是参数格式不同</p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale9 = d3.scaleLinear()
                            .domain([0, 1])
                            .range([0, 100]);
                        const axis9 = d3.axisLeft()
                            .scale(scale9)
                            .tickArguments([5, '%']);

                        const g9 = d3.select("#axisLeft5").append("svg")
                            .attr("width", 900)
                            .attr("height", 100)
                            .append("g")
                                .attr('transform', 'translate(30, 0)');
                        axis9(g9);
                    </code>
                    </pre>
                    <div>
                        <div id="axisLeft5"></div>
                        <script>
                            const scale9 = d3.scaleLinear()
                                .domain([0, 1])
                                .range([0, 100]);
                            const axis9 = d3.axisLeft()
                                .scale(scale9)
                                .tickArguments([5, '%']);

                            const g9 = d3.select("#axisLeft5").append("svg")
                                .attr("width", 900)
                                .attr("height", 100)
                                .append("g")
                                    .attr('transform', 'translate(30, 0)');
                            axis9(g9);
                        </script>
                    </div>
                </section>

            </section>

            <section>
                <h3>axis.tickValues([values])</h3>
                <p>如果指定了 values 数组，则使用指定的数组作为刻度而不是自动计算刻度</p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale10 = d3.scaleLinear()
                            .domain([0, 100])
                            .range([0, 100]);
                        const axis10 = d3.axisLeft()
                            .scale(scale10)
                            .tickValues([10, 20, 60, 80, 100]);

                        const g10 = d3.select("#axisLeft6").append("svg")
                            .attr("width", 1000)
                            .attr("height", 100)
                            .append("g")
                                .attr('transform', 'translate(30, 0)');
                        axis10(g10);
                    </code>
                    </pre>
                    <div>
                        <div id="axisLeft6"></div>
                        <script>
                            const scale10 = d3.scaleLinear()
                                .domain([0, 100])
                                .range([0, 100]);
                            const axis10 = d3.axisLeft()
                                .scale(scale10)
                                .tickValues([10, 20, 60, 80, 100]);

                            const g10 = d3.select("#axisLeft6").append("svg")
                                .attr("width", 1000)
                                .attr("height", 100)
                                .append("g")
                                    .attr('transform', 'translate(30, 0)');
                            axis10(g10);
                        </script>
                    </div>
                </section>

            </section>

            <section>
                <h3>axis.tickFormat([format])</h3>
                <p>如果指定了 format 则设置刻度文字标签格式化方法</p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale11 = d3.scaleLinear()
                            .domain([0, 1])
                            .range([0, 100]);
                        const axis11 = d3.axisLeft()
                            .scale(scale11)
                            .ticks(5)
                            .tickFormat(d3.format(".0%"));

                        const g11 = d3.select("#axisLeft7").append("svg")
                            .attr("width", 1000)
                            .attr("height", 100)
                            .append("g")
                                .attr('transform', 'translate(120, 0)');
                        axis11(g11);
                    </code>
                    </pre>
                    <div>
                        <div id="axisLeft7"></div>
                        <script>
                            const scale11 = d3.scaleLinear()
                                .domain([0, 1])
                                .range([0, 100]);
                            const axis11 = d3.axisLeft()
                                .scale(scale11)
                                .ticks(5)
                                .tickFormat(d3.format(".0%"));

                            const g11 = d3.select("#axisLeft7").append("svg")
                                .attr("width", 1000)
                                .attr("height", 100)
                                .append("g")
                                    .attr('transform', 'translate(120, 0)');
                            axis11(g11);
                        </script>
                    </div>
                </section>

            </section>

            <section>
                <h3>axis.tickSize([size])</h3>
                <p>如果指定了 size 则设置 内侧 和 外侧 刻度的大小</p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale12 = d3.scaleLinear()
                            .domain([0, 100])
                            .range([0, 80]);
                        const axis12 = d3.axisLeft()
                            .scale(scale12)
                            .tickSize(1);

                        const g12 = d3.select("#axisLeft8").append("svg")
                            .attr("width", 1000)
                            .attr("height", 100)
                            .append("g")
                                .attr('transform', 'translate(30, 10)');
                        axis12(g12);
                    </code>
                    </pre>
                    <div>
                        <div id="axisLeft8"></div>
                        <script>
                            const scale12 = d3.scaleLinear()
                                .domain([0, 100])
                                .range([0, 80]);
                            const axis12 = d3.axisLeft()
                                .scale(scale12)
                                .tickSize(1);

                            const g12 = d3.select("#axisLeft8").append("svg")
                                .attr("width", 1000)
                                .attr("height", 100)
                                .append("g")
                                    .attr('transform', 'translate(30, 10)');
                            axis12(g12);
                        </script>
                    </div>
                </section>

            </section>

            <section>
                <h3>axis.tickSizeInner([size])</h3>
                <p>如果指定了 size 则设置内侧刻度大小</p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale12 = d3.scaleLinear()
                            .domain([0, 100])
                            .range([0, 80]);
                        const axis12 = d3.axisLeft()
                            .scale(scale12)
                            .tickSizeInner(1);

                        const g12 = d3.select("#axisLeft8").append("svg")
                            .attr("width", 1000)
                            .attr("height", 100)
                            .append("g")
                                .attr('transform', 'translate(30, 10)');
                        axis12(g12);
                    </code>
                    </pre>
                    <div>
                        <div id="axisLeft9"></div>
                        <script>
                            const scale13 = d3.scaleLinear()
                                .domain([0, 100])
                                .range([0, 80]);
                            const axis13 = d3.axisLeft()
                                .scale(scale13)
                                .tickSizeInner(1);

                            const g13 = d3.select("#axisLeft9").append("svg")
                                .attr("width", 1000)
                                .attr("height", 100)
                                .append("g")
                                    .attr('transform', 'translate(30, 10)');
                            axis13(g13);
                        </script>
                    </div>
                </section>

            </section>

            <section>
                <h3>axis.tickSizeOuter([size])</h3>
                <p>如果指定了 size 则设置外侧刻度大小</p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale14 = d3.scaleLinear()
                            .domain([0, 100])
                            .range([0, 80]);
                        const axis14 = d3.axisLeft()
                            .scale(scale14)
                            .tickSizeInner(0)
                            .tickSizeOuter(1);

                        const g14 = d3.select("#axisLeft10").append("svg")
                            .attr("width", 1000)
                            .attr("height", 100)
                            .append("g")
                                .attr('transform', 'translate(30, 10)');
                        axis14(g14);
                    </code>
                    </pre>
                    <div>
                        <div id="axisLeft10"></div>
                        <script>
                            const scale14 = d3.scaleLinear()
                                .domain([0, 100])
                                .range([0, 80]);
                            const axis14 = d3.axisLeft()
                                .scale(scale14)
                                .tickSizeInner(0)
                                .tickSizeOuter(1);

                            const g14 = d3.select("#axisLeft10").append("svg")
                                .attr("width", 1000)
                                .attr("height", 100)
                                .append("g")
                                    .attr('transform', 'translate(30, 10)');
                            axis14(g14);
                        </script>
                    </div>
                </section>

            </section>

            <section>
                <h3>axis.tickPadding([padding])</h3>
                <p>如果设置了 padding 则设置刻度和刻度文本之间的间距</p>

                <section>
                    <h4>用法1</h4>
                    <pre>
                    <code>
                        const scale14 = d3.scaleLinear()
                            .domain([0, 100])
                            .range([0, 80]);
                        const axis14 = d3.axisLeft()
                            .scale(scale14)
                            .tickSizeInner(0)
                            .tickSizeOuter(1);

                        const g14 = d3.select("#axisLeft10").append("svg")
                            .attr("width", 1000)
                            .attr("height", 100)
                            .append("g")
                                .attr('transform', 'translate(30, 10)');
                        axis14(g14);
                    </code>
                    </pre>
                    <div>
                        <div id="axisLeft11"></div>
                        <script>
                            const scale15 = d3.scaleLinear()
                                .domain([0, 100])
                                .range([0, 80]);
                            const axis15 = d3.axisLeft()
                                .scale(scale15)
                                .tickPadding(20);

                            const g15 = d3.select("#axisLeft11").append("svg")
                                .attr("width", 1000)
                                .attr("height", 100)
                                .append("g")
                                    .attr('transform', 'translate(60, 10)');
                            axis15(g15);
                        </script>
                    </div>
                </section>

            </section>

        </article>

    </main>

    <footer>
        <hr>
        <small>CopyRight By I'm Gafish</small>
    </footer>
</body>
</html>