<?Php
// db login
    $dbhost = 'localhost';
    $dbname = 'fitness_trackerdb';
    $dbuser = 'root';
    $dbpass = '';
// connecting tp dn
    try {
        $dbcon = new PDO("mysql:host={$dbhost};dbname={$dbname}", $dbuser,
            $dbpass);
            $dbcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $ex){
        die($ex->getMessage());
    }
// not sure which to use or how to connect
// to the individual that is logged in. right now it only
// displays the data when ran on the php server but no chart. not sure of issue.

//querying the table
$stmt=$dbcon->prepare("SELECT * FROM userinfo");
$stmt->execute();
$json = [];
while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
    extract($row);
    echo $id;
    echo $email;
    // data being pulled from db 
    $json[]= [(int)$id, (int)$weight];
}
echo json_encode($json);


    ?>