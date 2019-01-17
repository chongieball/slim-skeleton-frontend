let main = {};

main.init = function () {
    main.disableNegativeNumber();
    main.activeTooltip();
}

main.activeTooltip = function () {
    $('body').tooltip({selector: '[data-toggle="tooltip"]'});
}

main.generateDataTime = function () {
    // set local id
    moment.locale('id');

    // generate date and time
    var dateTime = moment().format('dddd, D MMMM YYYY, h : mm : ss');
    $('#dateTime').text(dateTime);
}

main.convertCurrency = function (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

main.resetOption = function (option, value) {
    $(option + ' option').remove();
    $(option).append('<option value="">-' + value + '-</option>');
}

main.datatableInit = function (id, placeHolderName) {
    $(id).DataTable({
        "destroy": true,
        "ordering": false,
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.10.16/i18n/Indonesian.json",
            "searchPlaceholder": placeHolderName
        },
        "initComplete": function (settings, json) {
            $(id).wrap('<div class="table-responsive"></div>');
        },
    });
}

main.disableNegativeNumber = function () {
    var myInput = document.querySelectorAll("input[type=number]");

    function keyAllowed(key) {
        var keys = [8, 9, 13, 16, 17, 18, 19, 20, 27, 46, 48, 49, 50,
            51, 52, 53, 54, 55, 56, 57, 91, 92, 93
        ];
        if (key && keys.indexOf(key) === -1)
            return false;
        else
            return true;
    }

    myInput.forEach(function (element) {
        element.addEventListener('keypress', function (e) {
            var key = !isNaN(e.charCode) ? e.charCode : e.keyCode;
            if (!keyAllowed(key))
                e.preventDefault();
        }, false);

        // Disable pasting of non-numbers
        element.addEventListener('paste', function (e) {
            var pasteData = e.clipboardData.getData('text/plain');
            if (pasteData.match(/[^0-9]/))
                e.preventDefault();
        }, false);
    });
}


main.datatableInit = function (id, placeHolderName) {
    $(id).DataTable({
        "destroy": true,
        "ordering": false,
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.10.16/i18n/Indonesian.json",
            "searchPlaceholder": placeHolderName
        },
        "initComplete": function (settings, json) {
            $(id).wrap('<div class="table-responsive"></div>');
        },
    });
};

main.datatableLanguage = function(searchPlaceholder) {
    return {
        "decimal": "",
        "emptyTable": "Data tidak ada.",
        "info": "Menampilkan _START_ sampai _END_ dari _TOTAL_ data",
        "infoEmpty": "Menampilkan 0 sampai 0 dari 0 data",
        "infoFiltered": "(pencarian dari _MAX_ data)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Tampilkan _MENU_ data",
        "loadingRecords": "Memproses...",
        "processing": "Memproses...",
        "search": "Cari :",
        "searchPlaceholder": searchPlaceholder,
        "zeroRecords": "Data tidak ada.",
        "paginate": {
            "first": "Awal",
            "last": "Akhir",
            "next": "Selanjutnya",
            "previous": "Sebelumnya"
        },
        "aria": {
            "sortAscending": ": Mengurutkan dari data teratas",
            "sortDescending": ": Mengurutkan dari data terbawah"
        }
    }
}

main.showLoading = function (element) {
    $(element).loading({
        stoppable: false,
        theme: 'light',
        message: "Memuat..."
    });
};

main.hideLoading = function (element) {
    $(element).loading('stop');
};

main.showAlert = function (type, content) {
    let title;
    let icon;
    let color;

    if (type === 'success') {
        title = 'Berhasil';
        icon = 'fa fa-check';
        color = 'green';
    } else if (type === 'warning') {
        title = 'Peringatan';
        icon = 'fa fa-warning';
        color = 'orange';
    } else {
        title = 'Kesalahan';
        icon = 'fa fa-times';
        color = 'red';
    }

    $.alert({
        title: title,
        content: content,
        theme: 'modern',
        animation: 'top',
        closeAnimation: 'bottom',
        animateFromElement: false,
        type: color,
        typeAnimated: true,
        icon: icon,
        smoothContent: true,
        draggable: false,
        bgOpacity: 0.7
    });
};

main.showWarningWithChoice = function(content, callback) {
    $.confirm({
        title: 'Warning',
        content: content,
        theme: 'modern',
        animation: 'top',
        closeAnimation: 'bottom',
        animateFromElement: false,
        type: 'orange',
        typeAnimated: true,
        icon: 'fa fa-warning',
        smoothContent: true,
        draggable: false,
        bgOpacity: 0.7,
        buttons : {
            confirm : function() {
                callback()
            },
            cancel : function() {

            }
        }
    });
}

main.showAlertWithCallback = function (type, content, callback) {
    let title;
    let icon;
    let color;

    if (type === 'success') {
        title = 'Berhasil';
        icon = 'fa fa-check';
        color = 'green';
    } else if (type === 'warning') {
        title = 'Peringatan';
        icon = 'fa fa-warning';
        color = 'orange';
    } else {
        title = 'Kesalahan';
        icon = 'fa fa-times';
        color = 'red';
    }

    $.alert({
        title: title,
        content: content,
        theme: 'modern',
        animation: 'top',
        closeAnimation: 'bottom',
        animateFromElement: false,
        type: color,
        typeAnimated: true,
        icon: icon,
        smoothContent: true,
        draggable: false,
        bgOpacity: 0.7,
        buttons: {
            Ok: function () {
                callback();
            }
        }
    });
};

main.convertDate = function (date) {
    return moment(date).format('LLL');
};

main.getUrlApi = function() {
    return 'http://ab-cargo.net/api_new/public'
}

main.appendOptionBulan = function() {
    let option = ''

    option += '<option value="01">Januari</option>'
    option += '<option value="02">Februari</option>'
    option += '<option value="03">Maret</option>'
    option += '<option value="04">April</option>'
    option += '<option value="05">Mei</option>'
    option += '<option value="06">Juni</option>'
    option += '<option value="07">Juli</option>'
    option += '<option value="08">Agustus</option>'
    option += '<option value="09">September</option>'
    option += '<option value="10">Oktober</option>'
    option += '<option value="11">November</option>'
    option += '<option value="12">Desember</option>'

    return option
}

main.appendOptionTahun = function(idSelect) {
    $.ajax({
        type: "GET",
        url: baseUrl+"/get_tahun",
        cache: false,
        timeout: 60000,
        success: function(response) {
            if (response.httpcode == 200) {
                let option = ''

                for(i = 0; i < response.data.length; i++) {
                    option += '<option value="'+response.data[i].tahun+'">'+response.data[i].tahun+'</option>'
                }
                $('#tahun').append(option)
            }
        },
        error: function() {
            main.appendOptionTahun(idSelect)
        }
    })
}

main.getRandomColor = function () {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

main.init();