package org.example.realtimenotify.config;

import io.lettuce.core.RedisURI;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.redis.connection.RedisPassword;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;

@Configuration
public class RedisConfig {
  private final Logger log = LoggerFactory.getLogger(RedisConfig.class);

  @Value("${spring.redis.url:}")
  private String springRedisUrl;

  @Value("${spring.redis.host:127.0.0.1}")
  private String springRedisHost;

  @Value("${spring.redis.port:6379}")
  private int springRedisPort;

  @Bean
  @Primary
  public LettuceConnectionFactory redisConnectionFactory() {
    RedisStandaloneConfiguration cfg;
    if (springRedisUrl != null && !springRedisUrl.isBlank()) {
      log.info("RedisConfig: creating connection from URL: {}", springRedisUrl);
      // parse full URI (handles optional password)
      RedisURI uri = RedisURI.create(springRedisUrl);
      String host = uri.getHost();
      int port = uri.getPort();
      cfg = new RedisStandaloneConfiguration(host, port);
      if (uri.getPassword() != null && uri.getPassword().length > 0) {
        cfg.setPassword(RedisPassword.of(new String(uri.getPassword())));
      }
    } else {
      log.info(
          "RedisConfig: creating connection from host/port: {}:{}",
          springRedisHost,
          springRedisPort);
      cfg = new RedisStandaloneConfiguration(springRedisHost, springRedisPort);
    }
    LettuceConnectionFactory factory = new LettuceConnectionFactory(cfg);
    // initialize (optional) to validate immediately
    factory.afterPropertiesSet();
    log.info(
        "RedisConfig: LettuceConnectionFactory created for {}:{}",
        cfg.getHostName(),
        cfg.getPort());
    return factory;
  }
}
