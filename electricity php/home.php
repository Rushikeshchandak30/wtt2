<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electricity Bill</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f2f5;
        }

        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            border-radius: 10px;
            animation: fadeIn 1s;
        }

        .container h1 {
            text-align: center;
            margin-bottom: 20px;
        }

        .container label {
            display: block;
            margin-bottom: 5px;
            font-size: 18px;
        }

        .container input[type=text],
        .container input[type=number],
        .container input[type=date],
        .container input[type=submit],
        .container input[type=reset],
        .container textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
            font-size: 16px;
        }

        .container input[type=submit],
        .container input[type=reset] {
            background-color: #3CBC8D;
            color: #fff;
            cursor: pointer;
        }

        .container input[type=submit]:hover,
        .container input[type=reset]:hover {
            background-color: #333;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Electricity Bill</h1>
        <form action="action.php" method="post" id="quiz-form">
            <label>Account No : </label>
            <input name="cons_no" type="number" required><br><br>
            <label>Account Name : </label>
            <input name="cons_name" type="text" required><br><br>
            <label>Address : </label>
            <textarea name="address" required></textarea><br><br>
            <label>Enter number of units : </label>
            <input type="number" name="units" id="units" required /><br><br>
            <label>Enter due date : </label>
            <input type="date" name="date" required /><br><br>
            <input type="submit" name="unit-submit" id="unit-submit" value="Submit" />
            <input type="reset" value="Reset" />
        </form>
    </div>
</body>
</html>