<?php
session_start();

if ((!isset($_POST['login'])) || (!isset($_POST['password']))) {
    header('Location: index.php');
    exit();
}

require_once "database.php";

$connect = @new mysqli($db_server, $db_user, $db_pass, $db_name);

if ($connect->connect_errno != 0) {
    echo "Error: " . $connect->connect_errno;
    exit();
} else {
    $login = $_POST['login'];
    $pass = $_POST['password'];

    $login = htmlentities($login, ENT_QUOTES, 'UTF-8');
    $pass = htmlentities($pass, ENT_QUOTES, 'UTF-8');

    if ($score = $connect->query(
        sprintf(
            "SELECT * FROM users WHERE user='%s' AND password='%s'",
            mysqli_real_escape_string($connect, $login),
            mysqli_real_escape_string($connect, $pass)
        )
    )) {
        $how_many_users = $score->num_rows;
        if ($how_many_users > 0) {
            $_SESSION['login'] = true;
            $line = $score->fetch_assoc();
            $_SESSION['id'] = $line['id'];
            $_SESSION['user'] = $line['user'];

            unset($_SESSION['error']);
            $score->free_result();
            header('Location: mainc.php');
        } else {
            $_SESSION['error'] = '<span style="color:red">Nieprawidłowy logon lub hasło!</span>';
            header('Location: index.php');
        }
    }

    $connect->close();
}
