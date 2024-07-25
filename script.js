const dataTypeSelect = document.getElementById('data-type');
const formContainer = document.getElementById('form-container');
const submitBtn = document.getElementById('submit-btn');

function createForm(dataType) {
    let formHtml = '';

    if (dataType === 'mahasiswa') {
        formHtml = `
            <form id="mahasiswa-form">
                <div class="form-group">
                    <input type="text" id="nama" name="nama" placeholder="Nama" required>
                </div>
                <div class="form-group">
                    <input type="text" id="nim" name="nim" placeholder="NIM" required>
                </div>
                <div class="form-group">
                    <input type="text" id="semester" name="semester" placeholder="Semester" required>
                </div>
                <div class="form-group">
                    <input type="text" id="alamat" name="alamat" placeholder="Alamat" required>
                </div>
                <div class="form-group">
                    <input type="text" id="nomor-hp" name="nomor_hp" placeholder="Nomor HP" required>
                </div>
            </form>
        `;
    } else if (dataType === 'dosen') {
        formHtml = `
            <form id="dosen-form">
                <div class="form-group">
                    <input type="text" id="nama" name="nama" placeholder="Nama" required>
                </div>
                <div class="form-group">
                    <input type="text" id="kode-dosen" name="kode_dosen" placeholder="Kode Dosen" required>
                </div>
                <div class="form-group">
                    <input type="text" id="alamat-terakhir" name="alamat_terakhir" placeholder="Alamat Terakhir" required>
                </div>
                <div class="form-group">
                    <input type="text" id="alamat" name="alamat" placeholder="Alamat" required>
                </div>
                <div class="form-group">
                    <input type="text" id="nomor-hp" name="nomor_hp" placeholder="Nomor HP" required>
                </div>
            </form>
        `;
    }

    formContainer.innerHTML = formHtml;
}

dataTypeSelect.addEventListener('change', () => {
    formContainer.style.display = 'block';
    createForm(dataTypeSelect.value);
});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const dataType = dataTypeSelect.value;
    let formData;

    if (dataType === 'mahasiswa') {
        formData = new FormData(document.getElementById('mahasiswa-form'));
        sendFormData('mahasiswa.php', formData);
    } else if (dataType === 'dosen') {
        formData = new FormData(document.getElementById('dosen-form'));
        sendFormData('dosen.php', formData);
    }
});

function sendFormData(url, formData) {
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
