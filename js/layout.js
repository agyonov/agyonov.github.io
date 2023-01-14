// Resize left pane
const divLeftPane = document.querySelector("#divLeftPane");
const delayCallOnResize = 1; // delay between calls
let timeoutId = false; // holder for timeout id
let timeoutScrollId = false; // holder for timeout id
if (divLeftPane) {
    window.addEventListener("resize", function () {
        // Clear old one
        clearTimeout(timeoutId);

        // Set new one
        timeoutId = setTimeout(() => calcHeight(), delayCallOnResize);
    });

    document.addEventListener("scroll", (event) => {
        // Clear old one
        clearTimeout(timeoutScrollId);

        // Set new one
        timeoutScrollId = setTimeout(() => calcHeight(), delayCallOnResize);
    });

    // Set initial height
    calcHeight();
};

function calcHeight() {

    // Get
    const currY = window.scrollY;

    // Check
    if (currY && currY > 0) {
        // Set height
        divLeftPane.style.height = '' + (this.window.innerHeight + currY - 84) + 'px';
    } else {
        // Set height
        divLeftPane.style.height = '' + (this.window.innerHeight - 84) + 'px';
    }
}

// Sidenav
document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.sidenav');
    if (elems) {
        M.Sidenav.init(elems, {});
    }
});

// Tooltips
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elements, {});
});