$( document ).ready(function() {

            // 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
        var polygonPath = [
            new daum.maps.LatLng(37.62924868674019, 127.07702541517594),
            new daum.maps.LatLng(37.629313895287424, 127.07719824247177),
            new daum.maps.LatLng( 37.6292057232599, 127.07728026226962),
            new daum.maps.LatLng(37.62914501975914, 127.07710743980712),
        ];
        
        // 지도에 표시할 다각형을 생성합니다
        var polygon = new daum.maps.Polygon({
            path:polygonPath, // 그려질 다각형의 좌표 배열입니다
            strokeWeight: 3, // 선의 두께입니다
            strokeColor: '#CA271F', // 선의 색깔입니다
            strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'longdash', // 선의 스타일입니다
            fillColor: '#CA271F', // 채우기 색깔입니다
            fillOpacity: 0.7 // 채우기 불투명도 입니다
        });
        
        // 지도에 다각형을 표시합니다
        polygon.setMap(map);
            
            
                    var iwContent = '<div style="padding:5px;"><a href= "#no3">컴공 주점</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwPosition = new daum.maps.LatLng(37.629208055422346, 127.07715848321835 ), //인포윈도우 표시 위치입니다
                iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
            
            // 인포윈도우를 생성하고 지도에 표시합니다
            var infowindow = new daum.maps.InfoWindow({
                map: map, // 인포윈도우가 표시될 지도
                position : iwPosition, 
                content : iwContent,
                removable : iwRemoveable
            }); 
});



$( document ).ready(function() {
        // 지도에 표시할 원을 생성합니다
        var circle = new daum.maps.Circle({
            center : new daum.maps.LatLng( 37.63373777513911, 127.0771376758766 ),
            
            // 원의 중심좌표 입니다 
            radius: 8, // 미터 단위의 원의 반지름입니다 
            strokeWeight: 5, // 선의 두께입니다 
            strokeColor: '#E23033', // 선의 색깔입니다
            strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'dashed', // 선의 스타일 입니다
            fillColor: '#E23033', // 채우기 색깔입니다
            fillOpacity: 0.7  // 채우기 불투명도 입니다   
        }); 
        
        // 지도에 원을 표시합니다 
        circle.setMap(map); 
        
                // 지도에 원을 표시합니다 
        circle.setMap(map); 
        
                var content = '<div class ="label" ><span class="left"></span><span class="center"><a href = "#mo5">⑤12-14,16-18시</a></span><span class="right"></span></div>';

        // 커스텀 오버레이가 표시될 위치입니다 
        var position = new daum.maps.LatLng(37.634158652993506, 127.07764509532242);  
        
        // 커스텀 오버레이를 생성합니다
        var customOverlay = new daum.maps.CustomOverlay({
            position: position,
            content: content   
        });
        
        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(map);
});