<?php
function calculate($units)
{
    $unit_cost_first = 3.50;
    $unit_cost_second = 4.00;
    $unit_cost_third = 5.20;
    $unit_cost_fourth = 6.50;

    if ($units <= 50) {
        $bill = $units * $unit_cost_first;
    } elseif ($units > 50 && $units <= 100) {
        $temp = 50 * $unit_cost_first;
        $remaining_units = $units - 50;
        $bill = $temp + ($remaining_units * $unit_cost_second);
    } elseif ($units > 100 && $units <= 200) {
        $temp = (50 * 3.5) + (100 * $unit_cost_second);
        $remaining_units = $units - 150;
        $bill = $temp + ($remaining_units * $unit_cost_third);
    } else {
        $temp = (50 * 3.5) + (100 * $unit_cost_second) + (100 * $unit_cost_third);
        $remaining_units = $units - 250;
        $bill = $temp + ($remaining_units * $unit_cost_fourth);
    }
    return number_format((float) $bill, 2, '.', '');
}

$result_str = $result = '';
if (isset($_POST['unit-submit'])) {
    $consumer_no = $_POST['cons_no'];
    $consumer_name = $_POST['cons_name'];
    $add = $_POST['address'];
    $units = $_POST['units'];
    $date = $_POST['date'];
    if (!empty($units)) {
        $result = calculate($units);
        // $result_str = 'Total amount of ' . $units . ' - ' . $result;
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electricity </title>
    <style>
        header{
            box-sizing: border-box;
            /* margin: 0px; */
        }
        header .heading{
            color: black;
            padding: 30px 50px 30px 0px;
            /* padding-right: 50px; */
            text-align: right;
            background-color: #4682A9;
        }
        a{
            text-decoration: none;
            color: black;
        }
        .container{
            background-color: #F6F4EB;
            height: 500px;
            text-align: center;
        }
        .container h1{
           text-align: center;
           margin: 0px;
           padding-top: 30px;
        }

        .container h4{
            font-size: 20px;
            padding-left: 100px;
            text-align: justify;
            color: #1D5D9B;
        }
    </style>
</head>

<body>

    <header>
        <div class="heading">
            <h2 style="font-size: 20px;">Mscb.in</h2>
        <p> 123-456-789
            <br>
            <a href="#">www.electricity.com</a>
            <br>
            Swargate ,Pune
        </p>
        </div>
        <p style= "height:30px; background-color: #749BC2; margin-top: 0px" ></p>
    </header>


    <div class="container">
        <h1>Electricity Bill </h1>
        <div class="detail">
            <h4>Account number :  <?php echo $consumer_no ?> </h4>
            <h4>Account name : <?php echo $consumer_name ?> </h4>
            <h4>Address : <?php echo $add ?> </h4>
            <h4>Units consumed : <?php echo $units ?> units </h4>
            <h4>Total Bill : Rs. <?php echo $result ?></h4>
            <h4>Due Date : <?php echo $date ?></h4>

        </div>
    </div>



</body>

</html>