export function renderView(params) {
    return '<div class="col-md-4 text-center beer-item" data-id="' + params.id + '" style="cursor:pointer">' + '<img style="max-height: 400px;" src="' + params.img + '">' +
        '<p>' + params.name + '</p>' + '<p>' + params.tagline + '</p>' + '</div>';
}