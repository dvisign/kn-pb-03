// 페이지가 준비가 되고나면 함수를 실행
$(document).ready(function() {
    $(".skillGph").hover(function() {
        // 마우스 오버이벤트가 일어났을때 변경할곳
        // 선택된 나 자기자신의 모든 자손들중에서 .skillPerArea
        var thisEl = $('.skillPerArea', $(this));
        // 선택된 나 자기자신의 모든 자손들중에서 .skillPerArea가 저장한 변수의 어트리뷰트 data값
        // <div class="skillPerArea" data="90"></div>
        var thisData = thisEl.attr('data');
        var thisPerNumber = thisEl.children('.skillNum');
        // 애니메이션 함수
        thisEl.animate({
            // thisData + "%" => output => 90%
            "width" : thisData + "%"
        }, 500, function() {
            // 콜백 (위의 애니메이션 이벤트가 종료된 이후에 실행)
            // html을 작성
            thisPerNumber.html(thisData + "%");
        })
    }, function() {
        // 마우스 리브이벤트가 일어났을때 변경할곳
        var thisEl = $('.skillPerArea', $(this));
        var thisPerNumber = thisEl.children('.skillNum');
        thisPerNumber.html('');
        thisEl.stop().animate({
            "width":0
        }, 500);
    });
});