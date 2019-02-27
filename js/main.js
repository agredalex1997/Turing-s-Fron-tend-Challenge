let inputs = document.querySelectorAll('.form-item:not(:last-child) input');

inputs.forEach(function (input) {
    input.addEventListener('focus', changeClass);
    input.addEventListener('focusout', changeClass);
})

function changeClass(event) {
    let input = event.target;

    if (input.parentNode.firstElementChild.classList.contains('clicked') && input.value === "") {
        input.parentNode.firstElementChild.classList.remove('clicked');
    } else {
        input.parentNode.firstElementChild.classList.add('clicked');
    }

    console.log(input.parentNode.firstElementChild);
    console.log(input.value)
}

let sidebarOptions = document.querySelectorAll('div.sidebar li');

sidebarOptions.forEach(function (option) {
    option.addEventListener('click', changeSection)
})

function changeSection(event) {
    sidebarOptions.forEach(function (option) {
        option.classList.remove('clicked');
    })

    event.target.classList.add('clicked');
}

let sidebarTogglers = document.querySelectorAll("#sidebar-toggler-hide, #sidebar-toggler-show");
let sidebar = document.querySelector("div.sidebar");

sidebarTogglers.forEach(function (sidebarToggler) {
    sidebarToggler.addEventListener('click', function (event) {
        sidebarTogglers.forEach(function (sidebarTogglerIn) {
            sidebarTogglerIn.classList.remove('clicked');
        })

        sidebarToggler.classList.add('clicked');

        if (sidebar.classList.contains('clicked')) {
            sidebar.classList.remove('clicked');
        } else {
            sidebar.classList.add('clicked');
        }
    })
})