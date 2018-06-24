export function renderBeer(params) {
    return '<div class="col-md-12">' +
        '<img style="max-height: 400px;" src=' + params.img + '>' + '<p>' + params.beer + '</p>' + '</div>'
}