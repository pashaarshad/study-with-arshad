<?php
include "connection.php";
$conn->select_db('student');

$row=[];
if(isset($_GET['edit'])){
  $uname=$_GET['edit'];
  $sql = "SELECT * FROM login where username='$uname'";
  $res = $conn->query($sql);
  $rows=$res->fetch_assoc();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
</head>
<body>
  <h2> Student Login Form</h2>
  <form method="POST" action="">
    Username: <input type="text" name="uname" value="<?php echo $rows['username'] ?? '';?>"><br>
    Password: <input type="text" name="pass" value="<?php echo $rows['password'] ?? '';?>"><br>
    <input type="submit" name="register" value="Register">
    <input type="submit" name="display" value="Show">
    <input type="submit" name="update" value="Update">
</form>

<?php


if(isset($_POST['register'])){
  $uname=$_POST['uname'];
  $pass=$_POST['pass'];

  $sql = "INSERT INTO login (username,password) values('$uname','$pass')";
  if($conn->query($sql)){
    echo "Record Created";

  }else{
    echo "Failed";
  }
}

if(isset($_POST['display'])){
  $sql = "SELECT * FROM login";
  $res = $conn->query($sql);
  echo "<table border>. 
  <tr>.
  <th>Username</th>.
  <th>Password</th>.
  <th>Update</th>.
  <th>Delete</th> </tr>";

  if($res->num_rows >0){
    while($rows=$res->fetch_assoc()){
      echo "<tr><td>".$rows['username']."</td>";
      echo "<td>".$rows['password']."</td>";
      echo "<td> <a href='?edit=".$rows['username']."'>Edit</a></td>";
      echo "<td> <a href='?delete=".$rows['username']."'>Delete</a></td>";
    }
  }else{
    echo "No records";
  }

  echo "</table>";


}

if(isset($_GET['delete'])){
  $uname = $_GET['delete'];

  $sql = "DELETE FROM login WHERE username='$uname'";

  if($conn->query($sql)){
    echo "Record Deleted";
  }else{
    echo "Deletion Failed";
  }
}

if(isset($_POST['update'])){
  $uname = $_POST['uname'];
  $pass = $_POST['pass'];

  $sql = "UPDATE login set password='$pass' where username='$uname'";
  if($conn->query($sql)){
    echo "Update Successful";
  }else{
    echo "Updation Failed";
  }
}


?>
  
</body>
</html>