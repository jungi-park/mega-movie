package com.example.demo.google;

public class GoogleLoginResponse {
	private String accessToken; // 애플리케이션이 Google API 요청을 승인하기 위해 보내는 토큰
	private String expiresIn; // Access Token의 남은 수명
	private String refreshToken; // 새 액세스 토큰을 얻는 데 사용할 수 있는 토큰
	private String scope;
	private String tokenType; // 반환된 토큰 유형(Bearer 고정)
	private String idToken;

	public GoogleLoginResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	public GoogleLoginResponse(String accessToken, String expiresIn, String refreshToken, String scope,
			String tokenType, String idToken) {
		super();
		this.accessToken = accessToken;
		this.expiresIn = expiresIn;
		this.refreshToken = refreshToken;
		this.scope = scope;
		this.tokenType = tokenType;
		this.idToken = idToken;
	}

	public String getAccessToken() {
		return accessToken;
	}

	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}

	public String getExpiresIn() {
		return expiresIn;
	}

	public void setExpiresIn(String expiresIn) {
		this.expiresIn = expiresIn;
	}

	public String getRefreshToken() {
		return refreshToken;
	}

	public void setRefreshToken(String refreshToken) {
		this.refreshToken = refreshToken;
	}

	public String getScope() {
		return scope;
	}

	public void setScope(String scope) {
		this.scope = scope;
	}

	public String getTokenType() {
		return tokenType;
	}

	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}

	public String getIdToken() {
		return idToken;
	}

	public void setIdToken(String idToken) {
		this.idToken = idToken;
	}

	@Override
	public String toString() {
		return "GoogleLoginResponse [accessToken=" + accessToken + ", expiresIn=" + expiresIn + ", refreshToken="
				+ refreshToken + ", scope=" + scope + ", tokenType=" + tokenType + ", idToken=" + idToken + "]";
	}

}
