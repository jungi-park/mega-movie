package com.example.demo.auth;

public class User {

    private Long id;
    private String name;
    private String nickname;
    private String email;
    private String password;
    private String introduce;
    private String role;
    private String provider;
    private String provider_id;

    public User(String name, String nickname, String email, String password, String role, String provider, String provider_id){
        this.name = name;
        this.nickname = nickname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.provider = provider;
        this.provider_id = provider_id;
    }

    public User(Long id ,String name, String nickname, String email, String password, String role, String provider, String provider_id){
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.provider = provider;
        this.provider_id = provider_id;
    }

	public User(Long id, String name, String nickname, String email, String password, String introduce, String role,
			String provider, String provider_id) {
		super();
		this.id = id;
		this.name = name;
		this.nickname = nickname;
		this.email = email;
		this.password = password;
		this.introduce = introduce;
		this.role = role;
		this.provider = provider;
		this.provider_id = provider_id;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getIntroduce() {
		return introduce;
	}

	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getProvider() {
		return provider;
	}

	public void setProvider(String provider) {
		this.provider = provider;
	}

	public String getProvider_id() {
		return provider_id;
	}

	public void setProvider_id(String provider_id) {
		this.provider_id = provider_id;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", nickname=" + nickname + ", email=" + email + ", password="
				+ password + ", introduce=" + introduce + ", role=" + role + ", provider=" + provider + ", provider_id="
				+ provider_id + "]";
	}
    
    
}
