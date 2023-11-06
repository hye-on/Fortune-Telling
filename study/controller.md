# Sub-Domain Routing

```javascript
@Controller({ host: ':account.example.com' })
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}
```

- 서브도메인 기반의 멀티테넌시 (Multi-Tenancy)를 구현하거나 다중 도메인 환경에서 컨트롤러 동작을 조절하는 데 유용

- (예: 'mycompany.example.com' 또는 'yourcompany.example.com')
- 특정 테넌트(예: 회사, 조직, 사용자)에 따라 다른 도메인이나 서브도메인에 대한 처리를 구현

- spring 에서는 인터셉터, filter 사용. Spring Cloud Gateway, Spring Cloud Zuul 과 같은 API 게이트웨이 사용

---

- dto는 인터페이스보다 클래스를 사용하는 것이 좋다.
  - 클래스는 JavaScript ES6 표준의 일부이므로 컴파일된 JavaScript에서 실제 엔터티로 유지
  - TypeScript 인터페이스는 변환 중에 제거되므로 Nest는 런타임에 이를 참조할 수 없음
  - 파이프같은 기능 쓸때 런타임과 관련한여 중요함

---

- Route wildcards 쓰는 예시, 장점
- @Header('Cache-Control', 'none')
- 응답에 Cache-Control 헤더가 추가되어 브라우저 또는 클라이언트에게 캐시를 사용하지 말라고 알려줌
