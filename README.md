# chatbot-lazecrew
카카오톡 자동응답 API를 활용한 챗봇

## Install
``` sh
# node package install
$ npm install
# mecab-ko install
$ node_modules/mecab-ya/bin/install-mecab ko
```

## Mecab-ya
한국어 형태소분석기 `mecab-ko` node-js 래퍼 `mecab-ya` 적용 (by golbin)
- [Github 저장소](https://github.com/golbin/node-mecab-ya)
- [블로그 링크](http://think.golbin.net/post/142517991186/%ED%95%9C%EA%B5%AD%EC%96%B4-%ED%98%95%ED%83%9C%EC%86%8C-%EB%B6%84%EC%84%9D%EA%B8%B0-for-nodejs)

## Mecab-ya 테스트
CLI 환경에서의 `curl` 또는 `postman` 등의 툴로 다음과 같이 수행 (curl 기준으로 작성)
``` sh
$ curl -d "text=아버지가 방에 들어가신다" http://localhost:3000/nlp/pos
# [
#   ["아버지","NNG"],
#   ["가","JKS"],
#   ["방","NNG"],
#   ["에","JKB"],
#   ["들어가","VV"],
#   ["신다","EP+EC"]
# ]

$ curl -d "text=아버지가 방에 들어가신다" http://localhost:3000/nlp/morphs
# [
#   "아버지",
#   "가",
#   "방",
#   "에",
#   "들어가",
#   "신다"
# ]

$ curl -d "text=아버지가 방에 들어가신다" http://localhost:3000/nlp/nouns
# [
#   "아버지",
#   "방"
# ]
```