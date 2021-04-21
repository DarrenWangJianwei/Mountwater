function simulateClick(x, y)
{
    var ev = new MouseEvent('mousedown', {
        'view': window,
        'bubbles': true,
        'cancelable': true,
        'screenX': x,
        'screenY': y
    });

    var el = document.elementFromPoint(x, y);
    console.log(el); //print element to console
    el.dispatchEvent(ev);

    var ev2 = new MouseEvent('mouseup', {
        'view': window,
        'bubbles': true,
        'cancelable': true,
        'screenX': x+400,
        'screenY': y+400
    });

    setTimeout(()=>{
        el.dispatchEvent(ev2);
    },2000);
}

export default simulateClick;