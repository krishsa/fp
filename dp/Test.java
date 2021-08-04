package dp;

import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class Test {
    public static void main(String[] args) {
        String s = "aaabbsbcs";
        Map<Character, Long> result = s.chars().mapToObj(c -> (char) c)
        .collect(
            Collectors.groupingBy(Function.identity(), 
                                Collectors.counting(), 
                                Collectors.mapping(Function.identity(), new LinkedHashMap())) 
        );
        System.out.println("s :"+ result);

        
    }
}