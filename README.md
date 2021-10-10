# TODO V3 모듈화

TodoList를 만들었고, JS 파일만 line이 200줄 가량이되어 가독성과 유지보수성을 위하여 todo list의 모듈화를 시도해보았습니다. 3번의 시도끝에 문제를 해결했지만 여전히 개선사항이 존재하고 앞으로 개선시켜나가도록 하겠습니다.

## 시도 1의 문제점

- state : 상태 처리

- app : 이벤트와 함수

이렇게 두 부분으로 나누어 모듈화를 시도해보았습니다. 오류는 나지 않았지만, '다른 모듈에 의해 재사용되어야 의미가 있다'라는 모듈의 정의에 맞지 않다고 생각하여 다시 관계도를 그려보았습니다.

## 시도 2의 문제점

- state : 상태 처리 (todos, currentFilter)

- todoList : 사용자 입력을 받는 곳

- data : 데이터 추가/삭제

렌더링된 화면을 기준으로 모듈화를 진행해보았습니다. todoList에는 사용자가 입력한 todo list를 처리하는 곳 ($todoList 변수와 $todoList에 바인딩된 이벤트 핸들러), 기존 todo list 처리하는 함수를 모은 data 파일, 그리고 현재 상태를 렌더링하고 업데이트해주는 state 파일로 나누어 관계도를 만들었습니다. 하지만 dependency error가 발생하였고, 모든 곳에서 todos를 참조하고 있는 문제가 발생했고, 깔끔하게 스코프가 분리되지 않는 문제도 발생하여 다시 관계도를 그려보았습니다. (`data <-> state <-> todoList` )

## 시도 3의 문제점

- state : 렌더링과 Todos와 Filter 세팅 (상태 처리)

- model : 데이터 처리를 담당

- controller : 비지니스 로직, 즉 이벤트를 담당

처음부터 파일의 이름을 지정해 각 파일에 들어가야할 내용을 고민해보았습니다. 수업시간에 배운 MVC 패턴에서 model과 controller의 정의를 활용해 view를 제외한 state(상태처리), model(데이터 처리), controller(비지니스 로직) 이라는 세 파일을 만들었습니다. `controller -> state -> model` 의 관계도를 그리고자 하였지만, dependency cycle detected 오류가 발생했습니다. 이 문제의 원인은 render 내부에 `$todoList` 가 있어, 이를 참조하기위하여 model에서 $todoList를 export하여 state 에 import를 해서 전체적으로 dependency cycle 문제가 발생했습니다.

## 해결책

문제를 해결하기 위하여 `$todoList`, `$clearCompleted` 변수를 states와 model 파일에 각각 정의를 해주며 model에서 export를 해주지않도록하여 dependency cycle을 없애고자 하였습니다.

## 개선해야하는 부분

- dependency cycle을 해결하기위해 변수를 중복 선언했지만, 이 중복은 최대한 줄이는 방안으로 개선해 모듈화를 해야한다고 생각합니다. (스코프 또한 고민하며 모듈화를 해야합니다)

- export를 하기 위해서는 const를 사용하는것을 ESLint에서 권장하지만 todos의 경우는 변화가 존재해 const가 아닌 let을 사용했습니다. 이 부분을 해결하기위해 todos와 관련된 함수와 이벤트들을 한 곳에 모으고자 했지만, 이는 제가 생각했던 철학과는 달라 이 경우는 배제했습니다. 하지만 관계도를 개선한다면 이 부분도 해결할 수 있다고 생각합니다.

## 결론

생각보다 저만의 철학을 담으면서도 스코프와 참조 관계까지 생각하며 모듈화를 하는것이 어려웠습니다. 처음에는 그냥 세분화만 어떻게 할 지 고민했는데, dependency cycle, let, const 키워드에 대한 문제를 많이 직면하며 좀 더 다각적으로 모듈화를 고민해야한다고 생각했습니다. 앞으로는 코드를 작성할 때 부터 모듈화를 염두에두고 관계도를 그리고 코드를 작성해야겠다는 결론을 내렸습니다.
