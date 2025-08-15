let username="admin";
let password=1234;

try {
    if (username=="admin" && password == 1234) {
        console.log("login berhasil");
    } else {
        console.log("login gagal");
    }
} catch (error) {
    console.log("kesalahan: ", error.message);
}