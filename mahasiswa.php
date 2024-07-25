<?php
$servername = "localhost";
$username = "root";
$password = ""; // sesuaikan dengan password MySQL Anda
$dbname = "pendidikan";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Mengecek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$nama = $_POST['nama'];
$nim = $_POST['nim'];
$semester = $_POST['semester'];
$alamat = $_POST['alamat'];
$nomor_hp = $_POST['nomor_hp'];

$sql = "INSERT INTO mahasiswa (nama, nim, semester, alamat, nomor_hp) VALUES ('$nama', '$nim', '$semester', '$alamat', '$nomor_hp')";

if ($conn->query($sql) === TRUE) {
    echo "Data mahasiswa berhasil disimpan";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
