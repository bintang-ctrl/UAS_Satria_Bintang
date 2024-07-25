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
$kode_dosen = $_POST['kode_dosen'];
$alamat_terakhir = $_POST['alamat_terakhir'];
$alamat = $_POST['alamat'];
$nomor_hp = $_POST['nomor_hp'];

$sql = "INSERT INTO dosen (nama, kode_dosen, alamat_terakhir, alamat, nomor_hp) VALUES ('$nama', '$kode_dosen', '$alamat_terakhir', '$alamat', '$nomor_hp')";

if ($conn->query($sql) === TRUE) {
    echo "Data dosen berhasil disimpan";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
