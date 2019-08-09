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
            box-sizing: border-box;
        }
        .loading {
            font-size: 0;
            margin: auto;
            position: absolute;
            top: 0; left: 0; bottom: 0; right: 0;
            width: 110px;
            height: 75px;
            line-height: 75px;
            text-align: center;
        }
        
        .loading > span {
            display: inline-block;
            width: 22px;
        }

        .loading > span::after {
            content: '';
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 5px;
            vertical-align: middle;
            background-image: linear-gradient(0deg, #00F4AA 0%, #0E85FF 100%);
        }
            
        .loading > span:nth-child(1)::after { animation: loadingAnim1 1s infinite ease; }
        .loading > span:nth-child(2)::after { animation: loadingAnim2 1s infinite ease; }
        .loading > span:nth-child(3)::after { animation: loadingAnim3 1s infinite ease; }
        .loading > span:nth-child(4)::after { animation: loadingAnim4 1s infinite ease; }
        .loading > span:nth-child(5)::after { animation: loadingAnim5 1s infinite ease; }
        
        /*
        * Animation
        */
        @keyframes loadingAnim1 {
            0% { height: 10px; width: 10px; border-radius: 5px; }
            10% { height: 20px; width: 8px; border-radius: 4px; }
            50% { height: 10px; width: 10px; border-radius: 5px; }
        }
        @keyframes loadingAnim2 {
            0% { height: 10px; width: 10px; border-radius: 5px; }
            20% { height: 38px; width: 8px; border-radius: 4px; }
            60% { height: 10px; width: 10px; border-radius: 5px; }
        }
        @keyframes loadingAnim3 {
            0% { height: 10px; width: 10px; border-radius: 5px; }
            30% { height: 75px; width: 8px; border-radius: 4px; }
            70% { height: 10px; width: 10px; border-radius: 5px; }
        }
        @keyframes loadingAnim4 {
            0% { height: 10px; width: 10px; border-radius: 5px; }
            40% { height: 38px; width: 8px; border-radius: 4px; }
            80% { height: 10px; width: 10px; border-radius: 5px; }
        }
        @keyframes loadingAnim5 {
            0% { height: 10px; width: 10px; border-radius: 5px; }
            50% { height: 20px; width: 8px; border-radius: 4px; }
            90% { height: 10px; width: 10px; border-radius: 5px; }
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