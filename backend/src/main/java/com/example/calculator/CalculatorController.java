package com.example.calculator;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class CalculatorController {
    private static final String template = "Result: %s";

    @GetMapping("/add")
    public Calculator add(@RequestParam(value = "num1", defaultValue = "0") String num1, @RequestParam(value = "num2", defaultValue = "0") String num2) {
        return new Calculator(String.format(template, Float.toString(Float.parseFloat(num1) + Float.parseFloat(num2))));
    }

    @GetMapping("/sub")
    public Calculator sub(@RequestParam(value = "num1", defaultValue = "0") String num1, @RequestParam(value = "num2", defaultValue = "0") String num2) {
        return new Calculator(String.format(template, Float.toString(Float.parseFloat(num1) - Float.parseFloat(num2))));
    }
    
}
