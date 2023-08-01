package com.example.demo.google;

public class GoogleLoginDto {

	private String iss;
	private String azp;
	private String aud;
	private String sub;
	private String email;
	private String emailVerified;
	private String atHash;
	private String name;
	private String picture;
	private String givenName;
	private String familyName;
	private String locale;
	private String iat;
	private String exp;
	private String alg;
	private String kid;
	private String typ;

	public GoogleLoginDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public GoogleLoginDto(String iss, String azp, String aud, String sub, String email, String emailVerified,
			String atHash, String name, String picture, String givenName, String familyName, String locale, String iat,
			String exp, String alg, String kid, String typ) {
		super();
		this.iss = iss;
		this.azp = azp;
		this.aud = aud;
		this.sub = sub;
		this.email = email;
		this.emailVerified = emailVerified;
		this.atHash = atHash;
		this.name = name;
		this.picture = picture;
		this.givenName = givenName;
		this.familyName = familyName;
		this.locale = locale;
		this.iat = iat;
		this.exp = exp;
		this.alg = alg;
		this.kid = kid;
		this.typ = typ;
	}

	public String getIss() {
		return iss;
	}

	public void setIss(String iss) {
		this.iss = iss;
	}

	public String getAzp() {
		return azp;
	}

	public void setAzp(String azp) {
		this.azp = azp;
	}

	public String getAud() {
		return aud;
	}

	public void setAud(String aud) {
		this.aud = aud;
	}

	public String getSub() {
		return sub;
	}

	public void setSub(String sub) {
		this.sub = sub;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEmailVerified() {
		return emailVerified;
	}

	public void setEmailVerified(String emailVerified) {
		this.emailVerified = emailVerified;
	}

	public String getAtHash() {
		return atHash;
	}

	public void setAtHash(String atHash) {
		this.atHash = atHash;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getGivenName() {
		return givenName;
	}

	public void setGivenName(String givenName) {
		this.givenName = givenName;
	}

	public String getFamilyName() {
		return familyName;
	}

	public void setFamilyName(String familyName) {
		this.familyName = familyName;
	}

	public String getLocale() {
		return locale;
	}

	public void setLocale(String locale) {
		this.locale = locale;
	}

	public String getIat() {
		return iat;
	}

	public void setIat(String iat) {
		this.iat = iat;
	}

	public String getExp() {
		return exp;
	}

	public void setExp(String exp) {
		this.exp = exp;
	}

	public String getAlg() {
		return alg;
	}

	public void setAlg(String alg) {
		this.alg = alg;
	}

	public String getKid() {
		return kid;
	}

	public void setKid(String kid) {
		this.kid = kid;
	}

	public String getTyp() {
		return typ;
	}

	public void setTyp(String typ) {
		this.typ = typ;
	}

	@Override
	public String toString() {
		return "GoogleLoginDto [iss=" + iss + ", azp=" + azp + ", aud=" + aud + ", sub=" + sub + ", email=" + email
				+ ", emailVerified=" + emailVerified + ", atHash=" + atHash + ", name=" + name + ", picture=" + picture
				+ ", givenName=" + givenName + ", familyName=" + familyName + ", locale=" + locale + ", iat=" + iat
				+ ", exp=" + exp + ", alg=" + alg + ", kid=" + kid + ", typ=" + typ + "]";
	}

}