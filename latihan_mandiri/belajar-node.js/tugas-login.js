function verifikasiLogin(username, password) {
    try {
    if (username ==="admin" && password === "1234") {
        console.log("login berhasil");
    } else if (typeof username == "string" && typeof password == "string") {
        throw new Error("username atau password salah");
    } else {
        throw new Error("username dan password harus berupa teks")
        }
} catch (err) {
    console.error("kesalahan: ", err.message);
}
}

verifikasiLogin("admin", "1234")
verifikasiLogin("admin", "12345")
verifikasiLogin(123, true)