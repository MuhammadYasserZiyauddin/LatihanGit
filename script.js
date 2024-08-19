document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("h1").textContent = "Latihan JavaScript Selesai";
});
// Deklarasi variabel
let name = "John";
const age = 30;

// Tampilkan nama dan umur
document.getElementById("output").innerHTML = "Nama: " + name + "<br>Umur: " + age;

// Buat array
let fruits = ["Apple", "Banana", "Mango"];

// Tampilkan semua buah dalam array menggunakan perulangan for
document.getElementById("output").innerHTML += "<br>Buah-buahan:<br>";
for (let i = 0; i < fruits.length; i++) {
    document.getElementById("output").innerHTML += fruits[i] + "<br>";
}

// Buat objek
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Tampilkan properti firstName dan lastName dari objek
document.getElementById("output").innerHTML += "<br>Nama Lengkap: " + person.firstName + " " + person.lastName;
function cekNilai() {
    // Membaca nilai dari input
    let nilai = document.getElementById("userInput").value;

    // Konversi nilai ke integer
    nilai = parseInt(nilai);

    // Mengosongkan elemen output sebelum menampilkan hasil baru
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    // Menggunakan if...else untuk memeriksa nilai
    if (nilai > 10) {
        outputDiv.innerHTML += "Nilai lebih besar dari 10.<br>";
    } else if (nilai === 10) {
        outputDiv.innerHTML += "Nilai sama dengan 10.<br>";
    } else {
        outputDiv.innerHTML += "Nilai kurang dari 10.<br>";
    }

    // Menggunakan perulangan for untuk menampilkan angka 1 hingga nilai yang dimasukkan
    for (let i = 1; i <= nilai; i++) {
        outputDiv.innerHTML += i + "<br>";
    }
}
// Fungsi greet
function greet(name) {
    return "Hello, " + name;
}

// Memanggil fungsi greet dengan argumen berbeda dan menampilkan hasilnya
document.getElementById("output").innerHTML += greet("John") + "<br>";
document.getElementById("output").innerHTML += greet("Alice") + "<br>";
document.getElementById("output").innerHTML += greet("Bob") + "<br>";

// Fungsi calculateSquare
function calculateSquare(number) {
    return number * number;
}

// Memanggil fungsi calculateSquare dengan beberapa angka dan menampilkan hasilnya
document.getElementById("output").innerHTML += "Kuadrat dari 2 adalah: " + calculateSquare(2) + "<br>";
document.getElementById("output").innerHTML += "Kuadrat dari 5 adalah: " + calculateSquare(5) + "<br>";
document.getElementById("output").innerHTML += "Kuadrat dari 7 adalah: " + calculateSquare(7) + "<br>";

// Fungsi untuk menjumlahkan dua angka menggunakan arrow function
const sum = (a, b) => a + b;

// Memanggil fungsi sum dan menampilkan hasilnya
document.getElementById("output").innerHTML += "Hasil penjumlahan 3 dan 4 adalah: " + sum(3, 4) + "<br>";
document.getElementById("output").innerHTML += "Hasil penjumlahan 10 dan 20 adalah: " + sum(10, 20) + "<br>";
// Membuat array students
let students = ["Alice", "Bob", "Charlie"];

// Menggunakan push() untuk menambahkan nama ke array
students.push("David");

// Menggunakan forEach() untuk menampilkan semua nama siswa di div "output"
document.getElementById("output").innerHTML += "<strong>Daftar Siswa:</strong><br>";
students.forEach(function(student) {
    document.getElementById("output").innerHTML += student + "<br>";
});

// Membuat objek car
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

// Menggunakan for...in loop untuk menampilkan semua properti dari objek car
document.getElementById("output").innerHTML += "<br><strong>Informasi Mobil:</strong><br>";
for (let property in car) {
    document.getElementById("output").innerHTML += property + ": " + car[property] + "<br>";
}

// Membuat array objek untuk menyimpan data beberapa mobil
let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2019},
    {brand: "Ford", model: "Focus", year: 2018}
];

// Menggunakan forEach() untuk menampilkan informasi setiap mobil di div "output"
document.getElementById("output").innerHTML += "<br><strong>Daftar Mobil:</strong><br>";
cars.forEach(function(car) {
    document.getElementById("output").innerHTML += car.brand + " " + car.model + " (" + car.year + ")<br>";
});