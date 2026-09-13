// Moses Marvian Arsata / 535250050

let info = document.createElement('div');

info.id = 'info';

info.innerHTML = '<p>Moses Marvian Arsata</p>';

let text = document.createTextNode('NIM: 535250050');
info.appendChild(text);

document.getElementById('show').addEventListener('click', function() {
    document.getElementById('information').appendChild(info);
});

document.getElementById('hide').addEventListener('click', function() {
    document.getElementById('info').remove(); // disini ada function baru, yaitu remove untuk menghapus elemen :)
});

// bisa juga dengan mengosongkan innerHTML, dengan cara membuat inisialisasi innerHTML di dalam function,
// namun ini tidak akan menghapus id info

// Contoh:
/*
    document.getElementById('show').addEventListener('click', function() {
        info.innerHTML = '<p>Moses Marvian Arsata</p>';

        let text = document.createTextNode('NIM: 535250050');
        info.appendChild(text);

        document.getElementById('information').appendChild(info);
    });

    document.getElementById('hide').addEventListener('click', function() {
        info.innerHTML = '';

        document.getElementById('information').appendChild(info);
    });
*/