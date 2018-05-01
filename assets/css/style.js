import { StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;

export const colorstatusBarProps = "#8187FF";
export const LinearGradientColor1 = "#8187FF";
export const LinearGradientColor2 = "#4C6DFF";
export const bgColorApp = '#F7F7FA';

const color = "#fff";
const color1 = "#2CC2EA";
const color2 = "#4DE9C9";
const color3 = "#72A4FF";
const color4 = "#8B72FF";
const color5 = "#7882FF";
const color6 = "#8E44AD";
const color7 = "#16A085";
const color8 = "#F39C12";
const color9 = "#1F9F5F";
const color10 = "#E74C3C";
const color11 = "#2ECC71";
const color12 = "#49B824";


const colorbg = "#FAFAFA";
const fontcolor1 = 'rgb(71, 67, 73)';
const fontcolor2 = '#757575';
const fontcolor3 = 'rgb(51, 51, 51)';
const fontcolor4 = '#5170FF';

const headerHight = Platform === 'ios' ? 70 : 70 - 20;
const colormenu = "#f48d8c";
const colorbutton = "#ED1B24";
const colorbgheader = "#E81E2A";


const colorborder = "#F4F4F4";
const thumbnail_xp = 80;
const radius_width = 4;
const padding = 10;


export const styles = StyleSheet.create({
    txt_alignL: {
        textAlign: 'left'
    },
    txt_alignR: {
        textAlign: 'right'
    },
    txt_alignC: {
        textAlign: 'center'
    },
    pdL: {
        paddingLeft: 10,
    },
    pdR: {
        paddingRight: 10,
    },
    pdA: {
        padding: 10
    },
    pdH: {
        paddingHorizontal: 10,
    },
    pdV: {
        paddingVertical: 10
    },
    mgV: {
        marginVertical: 10,
    },
    mgH: {
        marginHorizontal: 10,
    },
    mgL: {
        marginLeft: 10,
    },
    mgR: {
        marginRight: 10,
    },
    mgT: {
        marginTop: 10,
    },
    mgB: {
        marginBottom: 10,
    },
    fl1: {
        flex: 1
    },
    fl2: {
        flex: 2
    },
    fl3: {
        flex: 3
    },
    jccaic: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    csfontF: {
        fontFamily: "SourceSansPro",
    },
    csfontFL: {
        fontFamily: "SourceSansProLight",
    },
    bg_color: {
        backgroundColor: colorbg,
    },
    bg_color6: {
        backgroundColor: color6,
    },
    bg_color7: {
        backgroundColor: color7,
    },
    bg_color8: {
        backgroundColor: color8,
    },
    bg_color9: {
        backgroundColor: color9,
    },
    bg_color10: {
        backgroundColor: color10,
    },
    bg_color11: {
        backgroundColor: color11,
    },
    bg_color12: {
        backgroundColor: color12,
    },
    bg_transparent: {
        backgroundColor: 'transparent'
    },
    wrapper: {
        backgroundColor: bgColorApp,
        // position: 'relative',
    },
    txt_color5: {
        color: color5
    },
    txt_fontcolor2: {
        color: fontcolor2
    },
    txt_fontcolor1: {
        color: fontcolor1
    },
    txt_fontcolor4: {
        color: fontcolor4
    },

    HeaderGradient: {
        zIndex: 1,
        position: 'relative'
    },
    Headerwrapper: {
        justifyContent: 'flex-start',
        marginHorizontal: 10
    },
    HeaderwrapperLeft: {
        flex: 0.3
    },
    HeaderwrapperRight: {
        flex: 0.3,
        alignItems: 'flex-end'
    },
    HeaderwrapperCenter: {},
    HeaderTitle: {
        textAlign: 'center',
        fontSize: 22,
    },
    HeaderIcon: {
        fontSize: 25,
        color: color
    },

    wrapperContent: {
        marginTop: 10,
        position: 'relative'
    },
    wrapperContentHeader: {},
    wrapperContentBox: {
        backgroundColor: 'rgba(255,255,255,.8)',
        position: 'relative',
        left: 0,
        alignItems: 'center',
        borderRadius: 15,
        padding: 15
    },
    ContentBoxH3: {
        fontSize: 27
    },
    ContentBoxHeaderLeft: {
        alignItems: 'center'
    },
    ContentBoxHeaderRight: {},
    ContentBoxHeaderRightText: {
        textAlign: 'right',
        fontSize: 18
    },
    txt_contentBoxContent: {
        fontSize: 18
    },
    H1_contentBoxContentH1: {
        fontWeight: '400',
        fontSize: 36
    },
    wrapperContentContent: {

    },
    wrapperGridContent: {
        flex: 1,
        position: 'relative',
        zIndex: 2
    },

    // home
    HomeFlatListItem_wrapper: {
        borderRadius: 15,
        backgroundColor: '#fff',
        margin: 10,
        paddingVertical: 20
    },
    HomeFlatListItem_Title: {
        fontSize: 20
    },
    HomeFlatListItem_Thumbnail: {
        marginBottom: 10
    },
    HomeFlatList: {
        marginVertical: 10
    },

    //Pregnancy
    PregnancyContenr: {
        position: 'relative',
    },
    PregnancyFlatList: {
        marginVertical: 10
    },
    PregnancyFlatListItem_wrapper: {
        marginHorizontal: 10,
        marginVertical: 5,
        height: 110
    },
    PregnancyFlatListItem_Left: {
        flex: 0.4,
        borderRadius: 15,
        zIndex: 2,
        marginVertical: 10,
        paddingVertical: 10
    },
    PregnancyFlatListItem_Lefttitle: {
        fontSize: 22,
        color: color
    },

    PregnancyFlatListItem_Right: {
        backgroundColor: color,
        borderRadius: 15,
        marginLeft: -50,
        paddingLeft: 60,
        // zIndex: 1,
        paddingVertical: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    PregnancyFlatListItem_RightTitle: {
        fontSize: 18
    },
    PregnancyFlatListItem_RightText: {
        fontSize: 16
    },
    PregnancyDetail_Left: {
        flex: 0.2,
        justifyContent: 'flex-start',
        marginTop: 10
    },
    PregnancyDetail_Text: {
        fontSize: 17,
        lineHeight: 20
    },
    PregnancydetaiHeaderBoxImg: {
        marginTop: 50
    },
    PregnancydetaiboxContent: {
        backgroundColor: color,
        zIndex: 1,
        marginTop: -40,
        borderRadius: 15,
    },
    PregnancyContenrBox: {
        marginHorizontal: 10,
        marginBottom: 20
    },
    PregnancydetailImage: {
        height: deviceWidth * 0.5,
        width: null,
        flex: 1,
        borderRadius: 15
    },
    PregnancyContenrBoxHeader: {
        height: 90
    },
    PregnancyContenrHeaderBoxZi2: {
        zIndex: 2,
        borderRadius: 15
    },
    PregnancyContenrHeaderBoxZi2_Text: {
        color: color,
        fontSize: 26
    },
    // baby
    BabyNameTabActiveTextStyle: {
        fontSize: 20,
        fontWeight: 'normal',
        fontFamily: "SourceSansPro",
    },
    BabyNameTabTextStyle: {
        fontSize: 20,
        fontWeight: 'normal',
        fontFamily: "SourceSansPro",
    },

    wrapperHeader: {
        height: headerHight,
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
    },

    wrapperBabyModal: {
        justifyContent: 'flex-start',
        borderRadius: 15,
        shadowRadius: 10,
        width: deviceWidth - 80,
        height: deviceWidth / 2,
    },
    wrapperUserModal: {
        justifyContent: 'flex-start',
        borderRadius: 15,
        shadowRadius: 10,
        width: deviceWidth - 80,
        height: deviceWidth * 0.6,
    },
    wrapperBabyModal_Grid: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    txtleft_UserModal: {
        fontSize: 17
    },
    txtright_UserModal: {
        fontSize: 17,
        fontWeight: '500'
    },
    Headerleft: {

    },
    wrapper_HomeFlatListItem: {
        flex: 1,
        marginVertical: 10
    },
    Touchable_HomeFlatListItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Agenda_wrapper_boxRow: {
        flex: 0.1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    Agenda_flex_align_center: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    position_relative:  { 
        position: 'relative'
    },
    full_image: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: null,
        flex: 1,
        borderRadius: 15
    },
    cooking_detail_icon_heart : { 
        color: colorbutton, 
        position: 'absolute', 
        top: 10, 
        right: 10, 
        fontSize: 30
    }
});


export const stylesForm = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        flex: 1
    },

    wrapperBackground: {
        flex: 1,
    },
    wrapperForm: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    formHeader: {

    },
    formHeaderTitle: {
        fontSize: 25,
        textAlign: 'center',
        color: fontcolor3

    },
    formHeaderdueDateTitle: {
        fontSize: 17,
        marginTop: 10,
        color: fontcolor3
    },
    formContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    formContentBox: {
        marginVertical: 5
    },
    formContentBoxTitle: {
        fontSize: 18,
        color: fontcolor3,
        fontFamily: 'SourceSansPro'
    },
    formContentBoxContent: {
        width: deviceWidth - 60,
        marginVertical: 10,
        display: 'none'
    },
    DatePickerBox: {
        width: deviceWidth - 60,
    },
    PickerBoxLeft: {
        flex: 1,
        paddingLeft: 5
    },
    PickerBoxRight: {
        flex: 1,
        paddingRight: 5
    },
    formFooter: {
        marginTop: 20,
        justifyContent: 'flex-end'
    },
    formFooterTitle: {
        fontSize: 18,
        textAlign: 'center',
        color: fontcolor3,
        fontFamily: 'SourceSansPro'
    },
    dateInput: {
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: colorstatusBarProps,
        fontFamily: 'SourceSansPro',
    },
    dateText: {
        fontSize: 18,
        fontFamily: 'SourceSansPro',
    }

});
