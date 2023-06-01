## Blog Service Optimization

유동균, '웹 개발 스킬을 한 단계 높여 주는 프론트엔드 성능 최적화 가이드', 제 1장 블로그 서비스 최적화 기반의 실습 및 요약 레포지토리입니다. 크롬 개발자 도구의 `Performace`, `Lighthouse`, `Network` 패널을 이용하여 성능 측정 후 최적화 작업을 진행하였습니다.

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

- [x] Too Big Image Size - Optimizing using CDN (resize)
- [x] Bottleneck code - Code Refactoring
- [x] Bundles larger than necessary - Code Splitting
- [x] Uncompressed text - Text Compression

### `Code Splitting`

코드 스플릿팅은 `webpack`, `rollup`, `browserify`와 같은 모듈 번들러를 이용하여 만들어진 **하나의 번들 파일을 여러 개의 번들 파일로 나누는 것**을 의미합니다. 하나의 번들 파일을 여러 개의 번들 파일로 나누는 이유는 더 빠른 속도로 화면을 로드하기 위해서입니다.

모듈 번들러를 사용하게 된 이유는 브라우저에서 호출하는 파일의 개수를 줄여 부하가 발생되는 것을 방지하기 위함입니다. 하지만 프로젝트의 규모가 커짐과 동시에 번들링 되는 파일의 크기도 점점 커지게 되고 이것은 결국 url을 입력하여 처음 접근을 하게 될 때 크기가 커진 번들 파일을 로드하는 시간이 길어지는 결과를 만듭니다. 곧 사용자가 느끼는 서비스의 만족도에 영향을 미칠 수 있게 됩니다.

코드 스플리팅은 하나의 번들 파일을 여러 개의 번들 파일로 나눈 뒤 실제 로드될 화면에 필요한 번들 파일만 불러오고 나머지 번들 파일은 호출하지 않고 지연시킴으로 써 작업량을 줄여 더 빠른 속도로 화면이 보일 수 있게 도와줍니다.

공식 문서를 참고해보면 코드 스플릿팅을 적용할 최적의 위치로 라우트를 지칭하고 있습니다.

### `Text Compression`

HTML, CSS, JS는 텍스트 기반의 파일이기에 텍스트 압축 기법 적용이 가능합니다. 파일을 압축하여 더 적은 크기로 빠르게 전송한 뒤, 사용하는 시점에 압축을 해제합니다. 파일 사이즈가 작아지며 리소스 전송 시간이 단축됩니다. 압축 여부는 HTTP의 헤더로 파악 가능합니다.

```
// Response Headers
Content-Encoding: gzip
```

#### 압축방식

- `Gzip`: 블록화, 휴리스틱 필터링, 헤더와 체그섬, 내부적으로 Deflate를 사용하는 압축 방식, Deflate 단독 사용보다 효과적
- `Deflate`: LZ77 알고리즘 + 허프먼 코딩

### `Image Size`

화면에 그려지는 이미지의 사이즈 x2가 적정 크기입니다. 레티나 디스플레이는 같은 픽셀에 더 많은 픽셀을 그릴 수 있기 때문입니다.

## Before Optimization

![image](https://github.com/performance-lecture/lecture-1/assets/90181028/80c6f5fa-aa04-4ce3-ac0e-ca3c48d7348f)

## After Optimization

![image](https://github.com/jiheon788/react-query-realworld/assets/90181028/47f18ef8-3def-42ae-bab1-3801f4b97549)
