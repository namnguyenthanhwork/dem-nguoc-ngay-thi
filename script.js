// init cursor
var cursors = [{
    cursor_id: "3",
    cursor_type: "0",
    cursor_shape: "15",
    cursor_image: "",
    default_cursor: "auto",
    hover_effect: "plugin",
    body_activation: "1",
    element_activation: "0",
    selector_type: "tag",
    selector_data: "body",
    color: "#cc3a3b",
    width: "30",
    blending_mode: "normal"
}];

var quotes = [
    'Đời sống thì có hạn mà sự học thì vô hạn',
    'Đừng xấu hổ khi không biết, chỉ xấu hổ khi không học',
    'Giáo dục là vũ khí mạnh nhất mà người ta có thể sử dụng để thay đổi cả thế giới',
    'Học càng nhiều, chúng ta càng thấy mình ngu đi',
    'Học khi người khác đang ngủ. Làm khi người khác đang nghỉ ngơi. Sẵn sàng khi người khác đang chơi. Và không ngừng cố gắng',
    'Học tập giúp chúng ta  rèn luyện bản thân hoàn thiện hơn',
    'Nếu bạn bật khóc khi nhìn thấy đề bài, đó là một sự sỉ nhục. Nếu giáo viên chấm thi bật khóc khi nhìn thấy bài làm của bạn, đó là niềm vinh dự',
    'Những gì chúng ta biết ngày hôm nay sẽ lỗi thời vào ngày hôm nay sẽ lỗi thời vào ngày hôm sau. Nếu chúng ta ngừng học thì chúng ta sẽ ngừng phát triển',
    'Tiên học lễ, hậu học thêm, đêm đêm học kèm',
    'Thi cử giống như bị bệnh vậy. Trước khi thi thì bệnh trầm cảm, khi thi là mất trí nhớ tạm thời, thi xong thì bệnh tình có vẻ chuyển biến tốt, lúc nhận lại bài thi bệnh tim liền phát tác',
    'Thực ra thi Đại học nào đâu có đáng sợ, ôn tập một năm, tất cả câu hỏi đều là những gì mình đã biết. Thi cuối kỳ Đại học mới là đáng sợ, chỉ có thời gian một tuần mà đề thi toàn những gì không biết',
    'Cha mày, mẹ mày, ông nội mày, tổ tiên mày đều mong mày thi tốt. Cố lên nhé',
    'Chỉ còn vài ngày nữa thôi là cuộc đời bạn sẽ bước qua trang mới cho nên hãy tập trung cao độ để thi cử thật tốt nhé',
    'Không có gì là khó chỉ sợ bạn không bình tĩnh và có khả năng nhẫn nại để đọc tình huống và giải quyết. Hãy thật bình tĩnh trước mọi câu hỏi của kỳ thi để đưa ra câu trả lời tốt nhất',
    'Đây là những giờ phút vô cùng quan trọng của cuộc đời, hãy tập trung ôn thi và đừng để bất cứ điều gì làm xao nhãng bạn nhé',
    'Kỳ thi đại học sắp đến rồi: Chúc các sĩ tử thượng lộ bình an - công thành danh toại. Thi đâu trúng đó',
    'Hãy tin rằng không có sự thất bại, con người luôn luôn có đủ khả năng để chinh phục những đỉnh cao! Hãy bình tĩnh, cẩn thận, và làm bài một cách thông minh như các bạn vẫn vậy',
    'Thi tốt nhé, 12 năm đèn sách giờ đây là lúc chúng ta gặt hái trái ngọt, chúng ta phải kiêu hãnh đạp tan cánh cổng Đại học nhé bạn của tôi',
    'Thế là 12 năm đèn sách cũng đến lúc cần phải chứng tỏ bản thân rồi, mày và tao cùng cố gắng nhé, đứa bạn thân mà tao yêu quý nhất. Chúc mày tự tin làm bài thi thật tốt nhé! Cố lên… Cố lên…',
    'Bước vào phòng thi tự tin như núi – Làm bài thi như nước chảy mây trôi. Chúc các sĩ tử thi tốt nhé!',
    'Thà để giọt mồ hôi rơi trên trang sách còn hơn để giọt nước mắt rơi trên đề thi',
    'Thi cử luôn luôn song hành trên con đường học vấn. Và anh chỉ còn một kỳ thi cuối cùng này thôi là sẽ xa ghế nhà trường. Hãy cố gắng để không phải hối tiếc gì cả',
    'Bạn của tôi, hãy bình tĩnh, thật tự tin để hoàn thành bài thi tốt nhé. Tất cả mọi người đều tin tưởng ở em đó',
    'Chúc tất cả các em có một kỳ thi thành công! Hãy cố gắng tập trung và bình tĩnh để làm bài thật tốt',
    'Chúc bạn:Đủ sức khỏe - Đủ tự tin - Đủ quyết tâm - Đủ khát khao chiến thắng',
    'Tương lai tươi đẹp đang chờ đón các bạn',
    'Bạn có nghe thấy tiếng cánh cổng trường đại học đang réo gọi tên bạn không? Hãy làm bài thật tốt để có thể đến "âu yếm" nó',
    'Hãy tin rằng không có sự thất bại, con người luôn luôn có đủ khả năng để chinh phục những đỉnh cao! Hãy bình tĩnh, cẩn thận, và làm bài một cách thông minh như các bạn vẫn vậy',
    'Hãy bình tĩnh, tự tin để làm bài thật tốt, tất cả mọi người đều tin tưởng ở bạn',
    'Chúc các bạn trường thi đậu 100% trong kì thi tốt nghiệp',
    'Chúc các bạn thấy đề ngắn không kiêu, đề dài không nản, dễ đừng chủ quan và khó thì khỏi phải bàn',
    'Mùa thi xin chúc bạn có: Giấy báo về nhà, chuẩn bị xôi gà, và sẽ phải xa nhà!',
    'Đừng sợ, kì thi này không làm khó bạn được đâu. Vì còn nhiều kì thi đằng sau nữa. Cố lên nhé!',
    'Thà để giọt mồ hôi rơi trên trang sách còn hơn để nước mắt rơi ướt cả đề thi. Cố lên nhé, mấy con bạn của tao!',
    'Bình tĩnh tự tin thi tốt vào ngày mai nha mày! Mày mà không qua… thì tao tiếp tục chúc mày vào đợt thi lại. Đừng lo!',
    'Nếu có bất cứ thứ gì mình muốn nói ngay lúc này thì nó chỉ có thể là “Cố lên”',
    'Tránh Xa Điểm 1 Dẹp Điểm 2 Bye Điểm 3 Xa Điểm 4 Trốn Điểm 5 Căm Điểm 6 Quý Báu Gì điểm 7 Quyết Nhảy Qua Điểm 8 Bám Chặt Điểm 9 Vịn Chắc Điểm 10',
    'Thi tốt nhé! Không được thấp điểm hơn tớ đâu đó!',
    'Hãy tin rằng không có sự thất bại, con người luôn luôn có đủ khả năng để chinh phục những đỉnh cao! Hãy bình tĩnh, cẩn thận, và làm bài một cách thông minh như các bạn vẫn vậy',
    'Học, học nữa, học mãi = thành công, thành công, đại thành công! Nhưng chúc bạn chỉ phải thi đại học một lần duy nhất',
    'Suốt 12 năm miệt mài đèn sách, kỳ thi này là lúc em thể hiện khả năng của mình, cố lên và giành được số điểm thật cao nhé. Chúc em thi tốt!',
    'Tụi mình đã cùng nhau nỗ lực rất nhiều, giờ chỉ biết chúc cho cậu thật may mắn, bình tĩnh làm bài tốt nha. Điểm phải cao hơn tớ đó',
    'Chúc cậu thi tốt, sớm mang giấy báo về nha. Chaizo!!!',
    'Chúng mình cùng nhau vào Đại học nhé, bạn thân của tôi! Chúc bạn thi tốt, đạt điểm thật cao',
    'Chúc bạn thi tốt, gắng đậu thủ khoa để giành học bổng đi du lịch nha, hứa rồi đó. 5ting!',
    'Đỗ Đại học nhé, bạn của tôi ơi. Chúc cho những ước mơ của bạn thành hiện thực'
]

window.addEventListener('load', () => {
    function randomQuote(quotes) {
        let quote = document.getElementById('quote');
        let rand = Math.floor(Math.random() * quotes.length);
        quote.innerHTML = `<i class="fas fa-quote-left"></i> ${quotes[rand]} <i class="fas fa-quote-right"></i>`;
    }
    randomQuote(quotes);

    const days = document.querySelector('.days')
    const hours = document.querySelector('.hours')
    const minutes = document.querySelector('.minutes')
    const seconds = document.querySelector('.seconds')

    let timeLeft = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
    }

    let totalSeconds;

    function init() {
        totalSeconds = Math.floor((new Date('28/06/2024') - new Date()) / 1000);
        setTimeLeft();
        let interval = setInterval(() => {
            if (totalSeconds < 0) {
                clearInterval(interval);
            }
            countTime();
        }, 1000);
    }

    function countTime() {
        if (totalSeconds > 0) {
            --timeLeft.s;
            if (timeLeft.m >= 0 && timeLeft.s < 0) {
                timeLeft.s = 59;
                --timeLeft.m;
                if (timeLeft.h >= 0 && timeLeft.m < 0) {
                    timeLeft.m = 59;
                    --timeLeft.h;
                    if (timeLeft.d >= 0 && timeLeft.h < 0) {
                        timeLeft.h = 23;
                        --timeLeft.d;
                    }
                }
            }
        }
        --totalSeconds;
        printTime();
    }

    function printTime() {
        animateFlip(days, timeLeft.d);
        animateFlip(hours, timeLeft.h);
        animateFlip(minutes, timeLeft.m);
        animateFlip(seconds, timeLeft.s);
    }

    function animateFlip(element, value) {
        const valueInDom = element.querySelector('.bottom-back').innerText;
        const currentValue = value < 10 ? '0' + value : '' + value;

        if (valueInDom === currentValue) return;

        element.querySelector('.top-back span').innerText = currentValue;
        element.querySelector('.bottom-back span').innerText = currentValue;


        gsap.to(element.querySelector('.top'), 0.7, {
            rotationX: '-180deg',
            transformPerspective: 300,
            ease: Quart.easeOut,
            onComplete: function () {
                element.querySelector('.top').innerText = currentValue;
                element.querySelector('.bottom').innerText = currentValue;
                gsap.set(element.querySelector('.top'), {
                    rotationX: 0
                });
            }
        });

        gsap.to(element.querySelector('.top-back'), 0.7, {
            rotationX: 0,
            transformPerspective: 300,
            ease: Quart.easeOut,
            clearProps: 'all'
        });

    }

    function setTimeLeft() {
        timeLeft.d = Math.floor(totalSeconds / (60 * 60 * 24));
        timeLeft.h = Math.floor(totalSeconds / (60 * 60) % 24);
        timeLeft.m = Math.floor(totalSeconds / (60) % 60);
        timeLeft.s = Math.floor(totalSeconds % 60);
    }

    init();
});
