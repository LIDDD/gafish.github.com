<!---
layout: demo
--->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Loading</title>
    <style>
        .loading,
        .loading > span {
            position: relative;
            box-sizing: border-box;
        }
        .loading {
            font-size: 0;
            margin: auto;
            position: absolute;
            top: 0; left: 0; bottom: 0; right: 0;
            width: 100px;
            height: 75px;
            line-height: 75px;
        
        }
        
        .loading > span {
            display: inline-block;
            width: 8px;
            height: 8px;
            margin: 0 6px;
            border-radius: 4px;
            vertical-align: middle;
            background-image: linear-gradient(0deg, #00F4AA 0%, #0E85FF 100%);
        }
            
        .loading > span:nth-child(1) { animation: loadingAnim1 1s infinite ease; }
        .loading > span:nth-child(2) { animation: loadingAnim2 1s infinite ease; }
        .loading > span:nth-child(3) { animation: loadingAnim3 1s infinite ease; }
        .loading > span:nth-child(4) { animation: loadingAnim4 1s infinite ease; }
        .loading > span:nth-child(5) { animation: loadingAnim5 1s infinite ease; }
        
        /*
        * Animation
        */
        @keyframes loadingAnim1 {
            0% { height: 8px; }
            10% { height: 20px; }
            50% { height: 8px; }
        }
        @keyframes loadingAnim2 {
            0% { height: 8px; }
            20% { height: 38px; }
            60% { height: 8px; }
        }
        @keyframes loadingAnim3 {
            0% { height: 8px; }
            30% { height: 75px; }
            70% { height: 8px; }
        }
        @keyframes loadingAnim4 {
            0% { height: 8px; }
            40% { height: 38px; }
            80% { height: 8px; }
        }
        @keyframes loadingAnim5 {
            0% { height: 8px; }
            50% { height: 20px; }
            90% { height: 8px; }
        }
    
    </style>
</head>
<body>
    <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</body>
</html>