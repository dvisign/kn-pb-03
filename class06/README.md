1. flex-direction : 정렬 방향
- row : 왼쪽정렬(기본값)
- row-reverse : 오른쪽 정렬
- column : y축 순차대로 정렬
- column-reverse : y축 반대로 정렬

2. justify-content
- flex-start : x축 시작점 기준으로 정렬(기본값)
- flex-end : x축 종료점을 기준으로 정렬
- center : x축 중앙정렬
- space-between : 첫번째 자식과 마지막 자식을 제외한 자식들간의 좌우 여백을 똑같이 갖게 해줌
- space-around : 첫번째 자식과 마지막 자식을 포함한 자식들간의 좌우 여백을 똑같이 맞춰줌
- space-evenly : 첫번째 자식과 마지막자식을 포함한 자식들간의 좌우여백의 합을 똑같이 맞춰줌

3. align-items
- stretch : 자식들이 수직정렬로 시작점부터 종료점까지 늘어남(높이가 같아짐, 기본값)
- flex-start : y축을 기준으로 상단에 붙음(높이값은 각자 고유값을 가지게됨)
- flex-end : y축을 기준으로 하단으로 붙음(높이값은 각자 고유값을 가지게됨)
- center : y축을 기준으로 중앙정렬(높이값은 각자 고유값을 가지게됨)
- baseline : y축을 기준으로 텍스트의 베이스 라인을 기준으로 정렬(국문은 상관없고 영문 소문자텍스트들의 영향을 받음)

4. flex-wrap
- wrap : width값에서 벗어나는 자식들을 밑줄로 떨어트림
- nowrap : 밑줄로 떨어트리지 않음(기본값) 