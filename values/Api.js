//screenName
import { BABYNAME, AGENDA, COOKING, NOTE, PREGNANCY, STORY, FOOD, VACCINATION, BALANCE, DRINK} from "./screenName";

const list = [
    {
        _id: 1,
        name: 'Thai kỳ',
        image: 'ic_pregnancy.png',
        navigation: PREGNANCY,
    },
    {
        _id: 2,
        name: 'Thức Ăn',
        image: 'ic_cook.png',
        navigation: COOKING,
    },
    {
        _id: 3,
        name: 'Thực Phẩm',
        image: 'ic_good_food.png',
        navigation: FOOD,
    },
    {
        _id: 4,
        name: 'Đồ Uống',
        image: 'icon_drink.png',
        navigation: DRINK,
    },
    {
        _id: 5,
        name: 'Tiêm Phòng',
        image: 'ic_vaccination.png',
        navigation: VACCINATION,
    },
    {
        _id: 6,
        name: 'Cân Nặng',
        image: 'icon_balance.png',
        navigation: BALANCE,
    },
    {
        _id: 7,
        name: 'Đặt Tên',
        image: 'ic_babyname.png',
        navigation: BABYNAME,
    },
    {
        _id: 8,
        name: 'Đọc Truyện',
        image: 'ic_story.png',
        navigation: STORY,
    },
    {
        _id: 9,
        name: 'Nhật Ký',
        image: 'ic_agenda.png',
        navigation: AGENDA,
    },
    {
        _id: 10,
        name: 'Ghi Chú',
        image: 'ic_note.png',
        navigation: NOTE,
    },
];

export { list};