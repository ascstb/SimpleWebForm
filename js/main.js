

(function ($) {

    $('#reset').on('click', function () {
        $('#register-form').reset();
    });

    $("#btnSubmit").click(function (e) {
        if (!formValid()) {
            e.preventDefault();
        }
    });

})(jQuery);

function ocultar() {
    document.getElementById('mother_name').hide();
}

function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function onCountryChanged(control) {
    document.getElementById('dvSecondLastName').hidden = (control.value == 'us');
}

function formValid() {
    var ddlCountry = $("#ddlCountry");
    if (ddlCountry.val().trim().length == 0) {
        // ddlCountry.parent().addClass("hasError")
        ddlCountry.focus();
        return false;
    }

    var txtName = $("#txtName");
    if(txtName.val().trim().length == 0) {
        txtName.focus();
        return false;
    }

    var txtLastName = $("#txtLastName");
    if(txtLastName.val().trim().length == 0) {
        txtLastName.focus();
        return false;
    }

    var dvSecondLastName = document.getElementById('dvSecondLastName');
    var txtSecondLastName = $("#txtSecondLastName");
    if(!dvSecondLastName.hidden && txtSecondLastName.val().trim().length == 0) {
        txtSecondLastName.focus();
        return false;
    }

    return true;
}