<?php
    $userFirstName = $_POST["input-user-first-name"];
    $userLastName  = $_POST["input-user-last-name"];
    $userEmail     = $_POST["input-user-email"];
    $userPassword  = $_POST["input-user-password"];
    if(isset($userFirstName)) {
        $data = array(
                "userFirstName" => $userFirstName,
                "userLastName"  => $userLastName,
                "userEmail"     => $userEmail,
                "userPassword"  => $userPassword
            );
        echo json_encode($data);
    }
?>
