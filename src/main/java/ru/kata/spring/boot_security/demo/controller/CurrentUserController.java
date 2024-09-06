package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

@RestController
@RequestMapping(value = "/api/current", produces = "application/json;charset=UTF-8")
public class CurrentUserController {

    @GetMapping
    public ResponseEntity<User> getCurrentUser(Authentication auth) {
        User user = (User) auth.getPrincipal();
        return ResponseEntity.ok(user);
    }
}