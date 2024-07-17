<?php
session_start();

if (isset($_SESSION['login']) && $_SESSION['login'] == true) {
  header('Location: mainc.php');
  exit();
}
?>
<!DOCTYPE html>
<html lang="pl">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Logowanie</title>
  <nav>
    <link rel="stylesheet" href="css.lo.css" />
  </nav>
</head>

<body>
  <div id="kontener">
    <form action="login.php" method="post">
      <input name="login" type="text" placeholder="Login" onfocus="this.placeholder=''" onblur="this.placeholder='Login'" />
      <input name="password" type="password" placeholder="Hasło" onfocus="this.placeholder=''" onblur="this.placeholder='Hasło'" />
      <?php
      if (isset($_SESSION['error'])) {
        echo $_SESSION['error'];
      }
      ?>
      <input type="submit" value="Zaloguj się" />
    </form>
  </div>
</body>

</html>