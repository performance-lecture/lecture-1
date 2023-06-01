## Blog Service Optimization

> '프론트엔드 개발자를 위한, 실전 웹 성능 최적화(feat. React) - Part. 1' 1번째 강의 소스입니다.

## Getting Started

#### install dependencies

```
$ npm install
or
$ yarn
```

#### start development server

```
$ npm run start
or
$ yarn start
```

#### start json-server

```
$ npm run server
or
$ yarn server
```

#### build + serve

```
$ npm run serve
or
$ yarn serve
```

## Problems - Solutions

- [x] Image Size - Optimizing using CDN
- [x] Bottleneck code - Code Refactoring
- [x] Bundles larger than necessary - Code Splitting
- [x] Text Compression - Text Compression

## As - Is

![image](https://github.com/performance-lecture/lecture-1/assets/90181028/80c6f5fa-aa04-4ce3-ac0e-ca3c48d7348f)

### `Code Splitting`

코드 스플릿팅은 webpack, rollup, browserify와 같은 모듈 번들러를 이용하여 만들어진 하나의 번들 파일을 여러 개의 번들 파일로 나누는 것을 의미합니다. 하나의 번들 파일을 여러 개의 번들 파일로 나누는 이유는 더 빠른 속도로 화면을 로드하기 위해서입니다.

모듈 번들러를 사용하게 된 이유부터 간단히 언급을 해보자면 브라우저에서 호출하는 파일의 개수를 줄여 부하가 발생되는 것을 방지하기 위해 번들러를 사용하고 있습니다.
하지만 프로젝트의 규모가 커짐과 동시에 번들링 되는 파일의 크기도 점점 커지게 되고 이것은 결국 url을 입력하여 처음 접근을 하게 될 때 크기가 커진 번들 파일을 로드하는 시간이 길어지는 결과를 만듭니다.
곧 사용자가 느끼는 서비스의 만족도에 영향을 미칠 수 있게 됩니다
코드 스플릿팅의 역할은 이런 결과를 방지하는 것에 있습니다.
하나의 번들 파일을 여러 개의 번들 파일로 나눈 뒤 실제 로드될 화면에 필요한 번들 파일만 불러오고 나머지 번들 파일은 호출하지 않고 지연시킴으로 써 작업량을 줄여 더 빠른 속도로 화면이 보일 수 있게 도와줍니다.

공식 문서를 참고해보면 코드 스플릿팅을 적용할 최적의 위치로 라우트를 지칭하고 있습니다.
