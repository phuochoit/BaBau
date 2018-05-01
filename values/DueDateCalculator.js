// format "YYYY-MM-DD"
function getDueDateCalculator(param) {
    let result = '';
    switch (param.option) {
        case 1:
            result = getDueDate(param.date);
            break;
        case 2:
            result = getGestationalDate(param.date.week, param.date.day);
            break;
        case 3:
            result = getPeriodsDate(param.date);
            break;
        case 4:
            result = getPregnantDate(param.date);
            break;
    }

    return result;
}

// - trường hợp 1: (biết ngày mang thai)
//     + lấy số ngày nhập vào + 280 (40 tuần) => ngày kết thúc
//     + ngày bắt đầu (ngày nhập vào)


// var th1_nbdau = new Date('2018-02-20'); // ngày bắt đầu
// var th1_nkthuc = getFormattedDate(plusDays(th1_nbdau, 280)); // ngày kết thúc
// var th1_sndtqua = minusDays(th1_nbdau); // số ngày đã trãi qua
// var th1_stuan = getAgeWeeks(th1_sndtqua); // số tuần
// var th1_sngay = getAgeDays(th1_sndtqua); // số ngày của tuần
// var th1_snclai = getDayRemaining(th1_sndtqua); // số ngày còn lại
// var th1_sptram = getProgress(th1_sndtqua); // số phần trăm đã trãi qua

// console.log('th1_nbdau',th1_nbdau);
// console.log('th1_nkthuc',th1_nkthuc);
// console.log('th1_sndtqua',th1_sndtqua);
// console.log('th1_stuan',th1_stuan);
// console.log('th1_sngay',th1_sngay);
// console.log('th1_snclai',th1_snclai);
// console.log('th1_sptram',th1_sptram);
//
/**
 *  get date by days pregnant
 * lấy ngày mang thai bằng ngày mang thai
 * paramDate => ngày mang thai
 */

function getPregnantDate(paramDate) {
    let pregnantDays = [];
    startDate =  new Date(paramDate);
    pregnantDays['startDate'] = getFormattedDate(startDate);// ngày bắt đầu
    pregnantDays['endDate'] = getFormattedDate(plusDays(startDate, 280)); // ngày kết thúc
    pregnantDays['awayDate'] = minusDays(pregnantDays['startDate']); // số ngày đã trãi qua
    pregnantDays['ageWeeksDate'] = getAgeWeeks(pregnantDays['awayDate']); // số tuần
    pregnantDays['ageDaysDate'] = getAgeDays(pregnantDays['awayDate']); // số ngày của tuần
    pregnantDays['remainingDate'] = getDayRemaining(pregnantDays['awayDate']); // số ngày còn lại
    pregnantDays['progressDate'] = getProgress(pregnantDays['awayDate']); // số phần trăm đã trãi qua
    return pregnantDays;
}

// - trường hợp 2: (biết số tuần)
//     + lấy số ngày hiện tại => số tuần - số ngày => lấy ngày bắt đầu
//     + lấy ngày bắt đầu + 280

// var th2_stuan = 4;
// var th2_sngay = 1;
// var th2_sndtqua = sumDaysofWeeks(th2_stuan, th2_sngay);
// var th2_nbdau = getFormattedDate(pregnancyminusDays(th2_sndtqua)); // ngày bắt đầu
// var th2_nkthuc = getFormattedDate(plusDays(pregnancyminusDays(th2_sndtqua), 280)); // ngày kết thúc
// var th2_snclai = getDayRemaining(th2_sndtqua); // số ngày còn lại
// var th2_sptram = getProgress(th2_sndtqua); // số phần trăm đã trãi qua

// console.log('th2_stuan', th2_stuan);
// console.log('th2_sngay', th2_sngay);
// console.log('th2_sndtqua', th2_sndtqua);
// console.log('th2_nbdau', th2_nbdau);
// console.log('th2_nkthuc', th2_nkthuc);
// console.log('th2_snclai', th2_snclai);
// console.log('th2_sptram', th2_sptram);
// gestational age

/**
 *  get date by gestational age
 * lấy ngày mang thai bằng tuổi thai
 * paramWeek => số tuần của thai
 * paramDay => số ngày trong tuần của thai
 */
function getGestationalDate(paramWeek, paramDay) {
    let gestationalAge = [];

    gestationalAge['awayDate'] = sumDaysofWeeks(paramWeek, paramDay); // số ngày đã trãi qua
    let startDate = pregnancyminusDays(gestationalAge['awayDate']);
    gestationalAge['startDate'] = getFormattedDate(startDate); // ngày bắt đầu
    gestationalAge['endDate'] = getFormattedDate(plusDays(startDate, 280)); // ngày kết thúc
    gestationalAge['remainingDate'] = getDayRemaining(gestationalAge['awayDate']); // số ngày còn lại
    gestationalAge['progressDate'] = getProgress(gestationalAge['awayDate']); // số phần trăm đã trãi qua
    gestationalAge['ageDaysDate'] = paramDay; // số ngày của tuần
    gestationalAge['ageWeeksDate'] = paramWeek; // số tuần

    return gestationalAge;
}


// - trường hơp 3: (ngày kinh nguyện cuối cùng)
//    + lấy số ngày + 266 => ngày kết thúc 
//    + ngày kết thúc - 280 => ngày bắt đâu
// var th3_nbdau = new Date('2018-02-20'); // ngày kinh nguyện cuối cùng
// var th3_nkthuc = getFormattedDate(plusDays(th3_nbdau, 266));
// var th3_sndtqua = minusDays(th3_nbdau); // số ngày đã trãi qua
// var th3_stuan = getAgeWeeks(th3_sndtqua); // số tuần
// var th3_sngay = getAgeDays(th3_sndtqua); // số ngày của tuần
// var th3_snclai = getDayRemaining(th3_sndtqua); // số ngày còn lại
// var th3_sptram = getProgress(th3_sndtqua); // số phần trăm đã trãi qua

// console.log('th3_nbdau', th3_nbdau);
// console.log('th3_nkthuc', th3_nkthuc);
// console.log('th3_sndtqua', th3_sndtqua);
// console.log('th3_stuan', th3_stuan);
// console.log('th3_sngay', th3_sngay);
// console.log('th3_snclai', th3_snclai);
// console.log('th3_sptram', th3_sptram);
// 

/**
 *  get date by periods
 * lấy ngày mang thai bằng ngày kinh nguyện cuối cùng
 * param => ngày kinh nguyện cuối cùng
 */
function getPeriodsDate(param) {
    let periods = [];
    startDate =  new Date(param);
    periods['startDate'] =getFormattedDate(startDate);// ngày bắt đầu
    periods['endDate'] = getFormattedDate(plusDays(startDate, 266)); // ngày kết thúc
    periods['awayDate'] = minusDays(periods['startDate']); // số ngày đã trãi qua
    periods['ageWeeksDate'] = getAgeWeeks(periods['awayDate']); // số tuần
    periods['ageDaysDate'] = getAgeDays(periods['awayDate']); // số ngày của tuần
    periods['remainingDate'] = getDayRemaining(periods['awayDate']); // số ngày còn lại
    periods['progressDate'] = getProgress(periods['awayDate']); // số phần trăm đã trãi qua
    return periods;
}


// - trường hợp 4: (biết ngày dự sinh)
//     + lấy ngày dự sinh - 280 ngày => ngày bắt đâu
//     + ngày bắt đầu là ngày nhập vào
// var th4_nkthuc = new Date('2018-11-27');
// var th4_nbdau = getFormattedDate(bornMinusDays(th4_nkthuc));
// var th4_sndtqua = minusDays(th4_nbdau); // số ngày đã trãi qua
// var th4_stuan = getAgeWeeks(th4_sndtqua); // số tuần
// var th4_sngay = getAgeDays(th4_sndtqua); // số ngày của tuần
// var th4_snclai = getDayRemaining(th4_sndtqua); // số ngày còn lại
// var th4_sptram = getProgress(th4_sndtqua); // số phần trăm đã trãi qua

// console.log('th4_nbdau', th4_nbdau);
// console.log('th4_nkthuc', th4_nkthuc);
// console.log('th4_sndtqua', th4_sndtqua);
// console.log('th4_stuan', th4_stuan);
// console.log('th4_sngay', th4_sngay);
// console.log('th4_snclai', th4_snclai);
// console.log('th4_sptram', th4_sptram);


/**
 *  get date by due date 
 * lấy ngày mang thai bằng ngày dự sinh
 * param => ngày dự sinh
 */
function getDueDate(param) {
    let duedate = [];
    let endDate = new Date(param);
    duedate['startDate'] = getFormattedDate(bornMinusDays(endDate));// ngày bắt đầu
    duedate['endDate'] = getFormattedDate(endDate); // ngày kết thúc
    duedate['awayDate'] = minusDays(duedate['startDate']); // số ngày đã trãi qua
    duedate['ageWeeksDate'] = getAgeWeeks(duedate['awayDate']); // số tuần
    duedate['ageDaysDate'] = getAgeDays(duedate['awayDate']); // số ngày của tuần
    duedate['remainingDate'] = getDayRemaining(duedate['awayDate']); // số ngày còn lại
    duedate['progressDate'] = getProgress(duedate['awayDate']); // số phần trăm đã trãi qua
    return duedate;
}

// - lấy phần trăm quá trinh mang thai
//    + ngày hiện tại - ngay bat dau
//    + 100  * (ngày hiện tại - ngay bat dau) / 280


// lấy ngày hiện tai
function getCurrentDay() {
    let date = new Date();
    return date;
}

function getCurrentDayAndFormat(){
    let date = getCurrentDay();
    return getFormattedDate(date);
}
// lấy số ngày
function getAgeDays(paramDate) {
    let result = paramDate % 7;
    return parseInt(result);
}

// lấy số tuần
function getAgeWeeks(paramDate) {
    let result = paramDate / 7;
    return parseInt(result);
}

// lấy số ngày còn lại
function getDayRemaining(paramDate) {
    let i = 280 - paramDate;
    if (i < 0) {
        i = 0;
    }
    return parseInt(i);
}

// lấy % số ngày mang thai
function getProgress(paramDate) {
    let i;
    i = 100 * paramDate / 280;
    if (i > 100) {
        return 100;
    } else {
        return parseInt(i);
    }
}


// cộng ngày
function plusDays(date, days) {
    let result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}
function pregnancyminusDays(days) {
    let result = getCurrentDay();
    result.setDate(result.getDate() - days);
    return result;
}

// trừ ngày
function minusDays(paramDate) {
    localDate = getCurrentDay().getTime();
    paramDateTime = new Date(paramDate).getTime();
    let result = (localDate - paramDateTime) / 86400000
    return parseInt(result);
}

// tổng ngày 
function sumDaysofWeeks(paramWeek, paramDay) {
    let result = (paramWeek * 7) + paramDay;
    return result;
}

// tính ngày bắt đầu từ ngày dự sinh
function bornMinusDays(date) {
    let result = new Date(date);
    result.setDate(date.getDate() - 280);
    return result;
}



// format ngay
function getFormattedDate(date) {
    let year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return year + '-' + month + '-' + day;
}


export {getFormattedDate,getDueDateCalculator, getCurrentDayAndFormat, pregnancyminusDays};