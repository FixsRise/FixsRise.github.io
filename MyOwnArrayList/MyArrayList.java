public class MyArrayList {

    private String[] array = new String[10];
    private int size = 0;

    public void add(String s) {
        array[size] = s;
        size++;
        if (size == array.length) {
            String[] newArray = new String[array.length * 2];
            for (int i = 0; i < array.length; i++) {
                newArray[i] = array[i];
            }
            array = newArray;
        }
    }

    public void remove(int index) {

        for (int i = index; i < size - 1; i++) {
            array[i] = array[i + 1];
        }
        size--;

    }

    public void remove(String s) {

        for (int i = 0; i < size; i++)
            if (s.equals(array[i])) {
                int index = i;
                remove(index);
            }

    }

    public String get(int i) {
        return array[i];
    }

    public int getSize() {
        return size;
    }

}
