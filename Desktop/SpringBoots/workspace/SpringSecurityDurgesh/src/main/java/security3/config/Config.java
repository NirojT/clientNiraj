package security3.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class Config {
	
//	@Bean //in memory
//	public UserDetailsService userDetailsService() {
//		UserDetails userDetails = User.builder().username("Niroj").password(encoder().encode("tmg")).roles("admin").build();
//		UserDetails userDetails1 = User.builder().username("roshan").password(encoder().encode("maji")).roles("admin").build();
//		
//		return new InMemoryUserDetailsManager(userDetails,userDetails1);
//	}
	
	@Bean
	public PasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}
	 @Bean
	    public AuthenticationManager authenticationManager(AuthenticationConfiguration builder) throws Exception {
	        return builder.getAuthenticationManager();
	    }

}
