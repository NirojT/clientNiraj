package Legit.helper;

import java.io.IOException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;

public class CustomAuthoritiesDeserializer extends JsonDeserializer<Set<GrantedAuthority>> {

    @Override
    public Set<GrantedAuthority> deserialize(JsonParser jp, DeserializationContext ctxt)
            throws IOException, JsonProcessingException {
        Set<GrantedAuthority> authorities = new HashSet<>();
        JsonNode node = jp.getCodec().readTree(jp);
        Iterator<JsonNode> elements = node.elements();
        while (elements.hasNext()) {
            JsonNode element = elements.next();
            String authority = element.get("authority").asText();
            authorities.add(new SimpleGrantedAuthority(authority));
        }
        return authorities;
    }



}
