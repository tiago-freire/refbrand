$(function() {
    $('#brands a').click(function() {
        var plus = $(this).html() == '+';
        var minus = $(this).html() == '-';

        var fontArea = $(this).parent().parent().find('[class^=font-]');
        var fontSize = parseInt(fontArea.css('font-size'));
        var newFontSize = fontSize;

        if(plus) {
            newFontSize += 5;
        }

        if(minus) {
            if(newFontSize > 14) {
                newFontSize -= 5;
            }
        }

        fontArea.css('font-size', newFontSize + 'px');
        console.log(fontArea.attr('class') + ' mudou o tamanho para ' + newFontSize);
    });
});