import React, { Component } from 'react';
import { WebView, View } from 'react-native';
import HeaderComponent from "./HeaderComponent";

class DueDateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const html = `<b>Tuổi thai là gì?<br> </b><br>
Tuổi thai là độ dài của thời kỳ mang thai bắt đầu từ sau ngày đầu của kỳ kinh cuối và được thể hiện bằng tuần và ngày. Tuổi thai (GA- gestational age) cũng được biết đến với tên gọi là tuổi thai theo kinh nguyệt. Tuổi thụ thai (CA – conceptual age) là tuổi thực của thai nhi và là thời gian mang thai tính từ thời điểm thụ thai, nhưng trừ những trường hợp thụ thai trong ống nghiệm thì thường rất khó biết được chính xác thời điểm tinh trùng thụ tinh cho trứng.<br><div id="iframe_inpage" style="display:none;"></div> <br>
Hai thuật ngữ này khác nhau nhưng thường bị hiểu chung thành tuổi thai nên dễ gây bối rối trong cách tính toán. Thuật ngữ Tuổi thai được sử dụng trong ứng dụng này tương ứng với GA (gestational age).<br> <b><br>
    Các phương pháp tính tuổi thai<br> </b><b><i><br>
    Tính tuổi thai theo lịch kinh nguyệt<br> </i></b><br>
Tuổi thai được tính theo cách truyền thống từ ngày đầu của kỳ kinh nguyệt cuối cùng trước khi có thai. Cách tính này giả định rằng sự thụ thai sẽ xảy ra vào ngày 14 của chu kỳ kinh nguyệt. Sai sót ở đây là thời gian rụng trứng có thể rất khác nhau do chu kỳ kinh nguyệt rất dễ bị ảnh hưởng và thay đổi theo từng chu kỳ, và mỗi người cũng khác nhau. Tính tuổi thai theo ngày đầu kỳ kinh cuối thường cho kết quả có sai số cao.<br> <br>
Vấn đề trở nên phức tạp hơn khi có từ 10-45% phụ nữ mang thai không thể nhớ và cung cấp thông tin đủ tin cậy về ngày đầu kỳ kinh cuối, và khoảng 18% số phụ nữ có lịch kinh nguyệt thất thường nên kết quả ước tính tuổi thai theo kinh nguyệt và siêu âm khác xa nhau. Tính tuổi theo theo chu kỳ kinh nguyệt cũng không chính xác trong trường hợp phụ nữ bị u nang buồng trứng, sử dụng biện pháp tránh thai bằng hormone kéo dài.<br> <b><i><br>
    Tính tuổi thai theo ngày thử thai<br> </i></b><br>
Dựa vào ngày đầu tiên thử thai cho kết quả dương tính có thể tính được tuổi thai tối thiểu. Cách thử này còn phụ thuộc vào độ nhạy của dụng cụ thử. Ví dụ, nếu bạn thử thai 4 tuần trước và kết quả thử thai cho kết quả dương tính sớm nhất là 1 tuần sau thụ thai, thì tuổi thụ thai tối thiểu là 5 tuần còn tuổi thai là 7 tuần (GA = CA + 2 tuần). Thông tin này có thể hữu ích nếu kết quả thử thai được ghi nhận bởi cơ sở y tế.<br> <br> 
    Mang thai bằng kỹ thuật hỗ trợ sinh sản<br> <br>
Trong các trường hợp thụ tinh nhân tạo, tuổi thai có thể tính chính xác dựa vào thời điểm phôi được chuyển vào tử cung thành công, tuy nhiên tuổi thai thực có thể xác định vào thời điểm tạo phôi trong ống nghiệm.<br> <b><i><br>
    Khám lâm sàng<br> </i></b><br>
Kích thước tử cung có thể được đánh giá bằng cách khám phụ khoa. Tuy nhiên, kích thước tử cung có thể bị đánh giá sai trong trường hợp mang đa thai, u xơ tử cung hoặc đơn giản là nếu bàng quang đang chứa đầy nước. <br> <b><i><br>
    Thấy thai máy<br> </i></b><br>
Thai máy là dấu hiệu xuất hiện khá muộn của thai kỳ, ở khoảng tuần thai thứ 19-21 đối với phụ nữ chưa có con và tuần thai thứ 17-19 đối với phụ nữ đã sinh con. Trước khi có các kỹ thuật khám thai và siêu âm, thai máy được xem là một cách xác định mang thai nhưng ngày nay dấu hiệu này không còn giá trị để xác định tuổi thai nữa.`;
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent
                    title={"Tuổi thai là gì"}
                    heights={0}
                    navigation={this.props.navigation}
                    hasBackButton={true}
                    hasshowSearh={true}
                />
                <WebView
                    source={{ html, baseUrl: '' }}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    bounces={true}
                    renderLoading={this.SpinnerLoadingView}
                />
            </View>
        );
    }
}

export default DueDateComponent;