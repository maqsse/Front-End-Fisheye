// eslint-disable-next-line no-unused-vars
function handleKeyDown(event) {
    switch (event.key) {
        case "Enter":
            return true;
            // eslint-disable-next-line no-unreachable
            break;
        case " ":
            event.preventDefault();
            return true;
            // eslint-disable-next-line no-unreachable
            break;
        default:
            return false;
            // eslint-disable-next-line no-unreachable
            break;
    }
}

// eslint-disable-next-line no-unused-vars
function openlink(event) {
    if (event.key === " ") {
        event.preventDefault();
        window.open(event.currentTarget.href,'_self');
    }
}