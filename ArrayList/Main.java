import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<Integer> numbers = new ArrayList<>();
        for (int i = 1; i < 11; i++) {
            numbers.add(i);
        }

        ArrayList<String> names = new ArrayList<>();
        for (int i = 1; i < 11; i++){
            names.add("Worker" + i);
        }


        ArrayList<String> journal = new ArrayList<>();
        for(int i = 0; i < 10; i++){
            
            journal.add(numbers.get(i) + " - " + names.get(i));

        }

        for (String test : journal){
            System.out.println(test);
        }


    }

}
