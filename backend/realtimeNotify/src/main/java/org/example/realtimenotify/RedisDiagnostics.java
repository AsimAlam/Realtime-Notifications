package org.example.realtimenotify;

import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class RedisDiagnostics {
  private static final Logger log = LoggerFactory.getLogger(RedisDiagnostics.class);

  @Value("${spring.redis.url:#{null}}")
  private String redisUrl;

  @Value("${spring.redis.host:#{null}}")
  private String redisHost;

  @Value("${SPRING_REDIS_URL:#{null}}")
  private String envRedisUrl;

  @PostConstruct
  public void show() {
    log.info(
        "Redis diagnostics: spring.redis.url={} spring.redis.host={} ENV SPRING_REDIS_URL={}",
        redisUrl,
        redisHost,
        envRedisUrl);
  }
}
