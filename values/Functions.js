import { isEmpty } from "lodash";
export function getNowDate() {
    const dateObj = new Date();
    const date = {
        'year': dateObj.getFullYear(),
        'month': dateObj.getMonth() + 1,
        'day': dateObj.getDate(),
        'hour': dateObj.getHours(),
        'min': dateObj.getMinutes(),
        'sec': dateObj.getSeconds(),
    };

    return date;
}

export function toDate(strDate) {
    let dateObj = new Date(strDate * 1000);

    const date = {
        'year': dateObj.getFullYear(),
        'month': dateObj.getMonth() + 1,
        'day': dateObj.getDate(),
        'hour': dateObj.getHours(),
        'min': dateObj.getMinutes(),
        'sec': dateObj.getSeconds(),
    };
    return date;
}
export function toTimestamp(strDate) {
    let datum = Date.parse(strDate);
    return datum / 1000;
}

export function trimStringToLength(strings, lengths) {
    if (isEmpty(strings)) {
        return null;
    }
    let trimmedString = strings.length > lengths ?
        strings.substring(0, lengths - 4) + " ..." :
        strings
    return trimmedString;
}

export function change_alias(alias) {
    let str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/ + /g, " ");
    str = str.trim();
    return str;
}

export function get_imageWeeks(id) {
    let url = null;
    switch (id) {
        case 1:
            url = require('../assets/images/weeks/week_1.jpg');
            return url;
        case 2:
            url = require('../assets/images/weeks/week_2.jpg');
            return url;
        case 3:
            url = require('../assets/images/weeks/week_3.jpg');
            return url;
        case 4:
            url = require('../assets/images/weeks/week_4.jpg');
            return url;
        case 5:
            url = require('../assets/images/weeks/week_5.jpg');
            return url;
        case 6:
            url = require('../assets/images/weeks/week_6.jpg');
            return url;
        case 7:
            url = require('../assets/images/weeks/week_7.jpg');
            return url;
        case 8:
            url = require('../assets/images/weeks/week_8.jpg');
            return url;
        case 9:
            url = require('../assets/images/weeks/week_9.jpg');
            return url;
        case 10:
            url = require('../assets/images/weeks/week_10.jpg');
            return url;
        case 11:
            url = require('../assets/images/weeks/week_11.jpg');
            return url;
        case 12:
            url = require('../assets/images/weeks/week_12.jpg');
            return url;
        case 13:
            url = require('../assets/images/weeks/week_13.jpg');
            return url;
        case 14:
            url = require('../assets/images/weeks/week_14.jpg');
            return url;
        case 15:
            url = require('../assets/images/weeks/week_15.jpg');
            return url;
        case 16:
            url = require('../assets/images/weeks/week_16.jpg');
            return url;
        case 17:
            url = require('../assets/images/weeks/week_17.jpg');
            return url;
        case 18:
            url = require('../assets/images/weeks/week_18.jpg');
            return url;
        case 19:
            url = require('../assets/images/weeks/week_19.jpg');
            return url;
        case 20:
            url = require('../assets/images/weeks/week_20.jpg');
            return url;
        case 21:
            url = require('../assets/images/weeks/week_21.jpg');
            return url;
        case 22:
            url = require('../assets/images/weeks/week_22.jpg');
            return url;
        case 23:
            url = require('../assets/images/weeks/week_23.jpg');
            return url;
        case 24:
            url = require('../assets/images/weeks/week_24.jpg');
            return url;
        case 25:
            url = require('../assets/images/weeks/week_25.jpg');
            return url;
        case 26:
            url = require('../assets/images/weeks/week_26.jpg');
            return url;
        case 27:
            url = require('../assets/images/weeks/week_27.jpg');
            return url;
        case 28:
            url = require('../assets/images/weeks/week_28.jpg');
            return url;
        case 29:
            url = require('../assets/images/weeks/week_29.jpg');
            return url;
        case 30:
            url = require('../assets/images/weeks/week_30.jpg');
            return url;
        case 31:
            url = require('../assets/images/weeks/week_31.jpg');
            return url;
        case 32:
            url = require('../assets/images/weeks/week_32.jpg');
            return url;
        case 33:
            url = require('../assets/images/weeks/week_33.jpg');
            return url;
        case 34:
            url = require('../assets/images/weeks/week_34.jpg');
            return url;
        case 35:
            url = require('../assets/images/weeks/week_35.jpg');
            return url;
        case 36:
            url = require('../assets/images/weeks/week_36.jpg');
            return url;
        case 37:
            url = require('../assets/images/weeks/week_37.jpg');
            return url;
        case 38:
            url = require('../assets/images/weeks/week_38.jpg');
            return url;
        case 39:
            url = require('../assets/images/weeks/week_39.jpg');
            return url;
        case 40:
            url = require('../assets/images/weeks/week_40.jpg');
            return url;
        default:
            url = require('../assets/images/no-image.jpg');
            return url;
    }
}
export function get_image(name) {
    let url = null;
    switch (name) {
        case 'ic_pregnancy.png':
            url = require('../assets/images/ic_pregnancy.png');
            return url;
        case 'ic_cook.png':
            url = require('../assets/images/ic_cook.png');
            return url;
        case 'ic_agenda.png':
            url = require('../assets/images/ic_agenda.png');
            return url;
        case 'ic_note.png':
            url = require('../assets/images/ic_note.png');
            return url;
        case 'ic_babyname.png':
            url = require('../assets/images/ic_babyname.png');
            return url;
        case 'ic_story.png':
            url = require('../assets/images/ic_story.png');
            return url;
        case 'ic_good_food.png':
            url = require('../assets/images/ic_good_food.png');
            return url;
        case 'ic_vaccination.png':
            url = require('../assets/images/ic_vaccination.png');
            return url;
        case 'icon_balance.png':
            url = require('../assets/images/icon_balance.png');
            return url;
        case 'icon_drink.png':
            url = require('../assets/images/icon_drink.png');
            return url;
        default:
            url = require('../assets/images/no-image.jpg');
            return url;
    }


}