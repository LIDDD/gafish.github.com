<!---
layout: demo
--->
<html lang="cmn-Hans">
<head>
    <title>D3 Fetch</title>
    <script src="https://cdn.bootcss.com/d3/5.9.7/d3.js"></script>
    <base target="_blank">
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
    <h1>d3-fetch</h1>
    <address>api地址：https://d3js.org.cn/document/d3-fetch/</address>
</header>

<main>

    <article>

        <section>
            <h3>d3.blob(input[, init])</h3>

            <section>
                <h4>用法1</h4>
                <pre>
                <code>
                    d3.blob('./datas/text.txt').then(data => {
                        console.log('blob', data);
                    });
                </code>
                </pre>
                <div>
                    <img src="./screens/Jietu20190705-130441.jpg" alt="">
                    <script>
                        d3.blob('./datas/text.txt').then(data => {
                            console.log('blob', data);
                        });
                    </script>
                </div>
            </section>

            <section>
                <h4>用法2</h4>
                <pre>
                <code>
                    d3.blob('./datas/text.txt', {
                        method: 'POST'
                    }).then(data => {
                        console.log('blob', data);
                    });
                </code>
                </pre>
            </section>

        </section>

        <section>
            <h3>d3.buffer(input[, init])</h3>

            <section>
                <h4>用法1</h4>
                <pre>
                <code>
                    d3.buffer('./datas/text.txt').then(data => {
                        console.log('buffer', data);
                    });
                </code>
                </pre>
                <div>
                    <img src="./screens/Jietu20190705-131212.jpg" alt="">
                    <script>
                        d3.buffer('./datas/text.txt').then(data => {
                            console.log('buffer', data);
                        });
                    </script>
                </div>
            </section>

        </section>
        </section>

        <section>
            <h3>d3.dsv(delimiter, input[, init][, row])</h3>

            <section>
                <h4>用法1</h4>
                <pre>
                <code>
                    d3.dsv(',', './datas/sample.csv').then(data => {
                        console.log('dsv', data);
                    });
                </code>
                </pre>
                <div>
                    <img src="./screens/Jietu20190705-142523.jpg" alt="">
                    <script>
                        d3.dsv(',', './datas/sample.csv').then(data => {
                            console.log('dsv', data);
                        });
                    </script>
                </div>
            </section>

            <section>
                <h4>用法2</h4>
                <pre>
                <code>
                    d3.dsv(',', './datas/sample.csv', d => {
                        return { name: d.name + '_test', age: d.age };
                    }).then(data => {
                        console.log('dsv', data);
                    });
                </code>
                </pre>
                <div>
                    <img src="./screens/Jietu20190705-143019.jpg" alt="">
                    <script>
                        d3.dsv(',', './datas/sample.csv', d => {
                            return { name: d.name + '_test', age: d.age };
                        }).then(data => {
                            console.log('dsv', data);
                        });
                    </script>
                </div>
            </section>

        </section>

        <section>
            <h3>d3.csv(input[, init][, row])</h3>

            <section>
                <h4>用法1</h4>
                <pre>
                <code>
                    d3.csv('./datas/sample.csv', d => {
                        return { name: d.name + '_test', age: d.age };
                    }).then(data => {
                        console.log('csv', data);
                    });
                </code>
                </pre>
                <div>
                    <img src="./screens/Jietu20190705-143207.jpg" alt="">
                    <script>
                        d3.csv('./datas/sample.csv', d => {
                            return { name: d.name + '_csv_test', age: d.age };
                        }).then(data => {
                            console.log('csv', data);
                        });
                    </script>
                </div>
            </section>

        </section>

        <section>
            <h3>d3.tsv(input[, init][, row])</h3>

            <section>
                <h4>用法1</h4>
                <pre>
                <code>
                    d3.tsv('./datas/sample.tsv', d => {
                        return { name: d.name + '_test', age: d.age };
                    }).then(data => {
                        console.log('tsv', data);
                    });
                </code>
                </pre>
                <div>
                    <img src="./screens/Jietu20190705-144224.jpg" alt="">
                    <script>
                        d3.tsv('./datas/sample.tsv', d => {
                            return { name: d.name + '_tsv_test', age: d.age };
                        }).then(data => {
                            console.log('tsv', data);
                        });
                    </script>
                </div>
            </section>

        </section>
        </section>

        <section>
            <h3>d3.html(input[, init])</h3>

            <section>
                <h4>用法1</h4>
                <pre>
                <code>
                    d3.html('./datas/file.html').then(data => {
                        console.log('html', data);
                        console.log('html body', data.body);
                    });
                </code>
                </pre>
                <div>
                    <img src="./screens/Jietu20190705-144527.jpg" alt="">
                    <script>
                        d3.html('./datas/file.html').then(data => {
                            console.log('html', data);
                            console.log('html body', data.body);
                        });
                    </script>
                </div>
            </section>

        </section>

        <section>
            <h3>d3.image(input[, init])</h3>

            <section>
                <h4>用法1</h4>
                <pre>
                <code>
                    d3.image('./screens/Jietu20190705-144527.jpg').then(data => {
                        console.log('image', data);
                        console.log('image src', data.src);
                    });
                </code>
                </pre>
                <div>
                    <img src="./screens/Jietu20190705-144752.jpg" alt="">
                    <script>
                        d3.image('./screens/Jietu20190705-144527.jpg').then(data => {
                            console.log('image', data);
                            console.log('image src', data.src);
                        });
                    </script>
                </div>
            </section>

        </section>

        <section>
            <h3>d3.json(input[, init])</h3>

            <section>
                <h4>用法1</h4>
                <pre>
                <code>
                    d3.json('./datas/sample.json').then(data => {
                        console.log('json', data);
                    });
                </code>
                </pre>
                <div>
                    <img src="./screens/Jietu20190705-144950.jpg" alt="">
                    <script>
                        d3.json('./datas/sample.json').then(data => {
                            console.log('json', data);
                        });
                    </script>
                </div>
            </section>

        </section>

        <section>
            <h3>d3.svg(input[, init])</h3>

            <section>
                <h4>用法1</h4>
                <pre>
                <code>
                    d3.svg('./datas/sample.svg').then(data => {
                        console.log('svg', data);
                    });
                </code>
                </pre>
                <div>
                    <img src="./screens/Jietu20190705-145312.jpg" alt="">
                    <script>
                        d3.svg('./datas/sample.svg').then(data => {
                            console.log('svg', data);
                        });
                    </script>
                </div>
            </section>

        </section>

        <section>
            <h3>d3.text(input[, init])</h3>

            <section>
                <h4>用法1</h4>
                <pre>
                <code>
                    d3.text('./datas/text.txt').then(data => {
                        console.log('text', data);
                        document.getElementById('outText').innerText = data;
                    });
                </code>
                </pre>
                <div>
                    <div id="outText"></div>
                    <script>
                        d3.text('./datas/text.txt').then(data => {
                            console.log('text', data);
                            document.getElementById('outText').innerText = data;
                        });
                    </script>
                </div>
            </section>

        </section>

        <section>
            <h3>d3.xml(input[, init])</h3>

            <section>
                <h4>用法1</h4>
                <pre>
                <code>
                    d3.text('./datas/text.txt').then(data => {
                        console.log('text', data);
                        document.getElementById('outText').innerText = data;
                    });
                </code>
                </pre>
                <div>
                    <img src="./screens/Jietu20190705-145703.jpg" alt="">
                    <script>
                        d3.xml('./datas/sample.xml').then(data => {
                            console.log('xml', data);
                        });
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