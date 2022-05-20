import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        MyArrayList array = new MyArrayList();

        array.add("A1");
        array.add("A2");
        array.add("B1");
        array.add("B2");

        for (int i = 1; i < 50; i++){
            array.add("C" + i);
        }

        for (int i = 0; i < array.getSize(); i++){
            System.out.println(array.get(i));
        }

        System.out.println("");

        array.remove(0);
        array.remove("C1");

        for (int i = 5; i < 25; i++){
            array.remove(i);
        }

        for (int i = 0; i < array.getSize(); i++){
            System.out.println(array.get(i));
        }



    }

}
